/* ============================================
   SAPROS — Game Engine (with error handling)
   ============================================ */

(function() {
  'use strict';

  // ----- State -----
  let story = null;
  let endings = null;
  let glossary = null;
  let state = null;

  const SAVE_KEY = 'sapros_save_v1';
  const ENGINE_VERSION = '1.1.0';

  // ============================================
  // ERROR SYSTEM
  // ============================================

  const Errors = {
    log: [],            // all errors/warnings/notices encountered this session
    suppressed: {},     // dedupe key -> last shown timestamp

    /** Fatal error — game cannot proceed. Shows a modal. */
    fatal(title, message, details) {
      this._record('fatal', title, message, details);
      this._renderFatal(title, message, details);
    },

    /** Recoverable error — something broke but game continues. Shows a banner. */
    warn(title, message, details, dedupeKey) {
      if (this._isDuped(dedupeKey)) return;
      this._record('warning', title, message, details);
      this._renderBanner('warning', title, message, details, 10000);
    },

    /** Minor notice — for QA visibility. Shows a short banner. */
    notice(title, message, dedupeKey) {
      if (this._isDuped(dedupeKey)) return;
      this._record('notice', title, message, null);
      this._renderBanner('notice', title, message, null, 5000);
    },

    /** Safe call wrapper — runs a function, catches errors, returns fallback. */
    safe(label, fn, fallback) {
      try {
        return fn();
      } catch (e) {
        this.warn(
          'Internal error',
          `An unexpected problem occurred during "${label}". The game will try to continue.`,
          (e && e.stack) || String(e),
          'safe_' + label
        );
        return fallback;
      }
    },

    _isDuped(key) {
      if (!key) return false;
      const now = Date.now();
      const last = this.suppressed[key];
      if (last && now - last < 3000) return true;
      this.suppressed[key] = now;
      return false;
    },

    _record(level, title, message, details) {
      this.log.push({
        level: level,
        title: title,
        message: message,
        details: details,
        currentNode: state && state.currentNode,
        time: new Date().toISOString()
      });
      // Bound the log so memory doesn't grow
      if (this.log.length > 500) this.log.shift();
      try {
        console[level === 'fatal' ? 'error' : (level === 'warning' ? 'warn' : 'info')](
          '[Sapros]', title + ':', message, details || ''
        );
      } catch (_) {}
    },

    _renderFatal(title, message, details) {
      let overlay = document.getElementById('error-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'error-overlay';
        document.body.appendChild(overlay);
      }
      const detailsHtml = details
        ? `<details><summary>Technical details</summary><pre>${escapeHtml(typeof details === 'string' ? details : JSON.stringify(details, null, 2))}</pre></details>`
        : '';
      overlay.innerHTML = `
        <div class="error-modal">
          <div class="error-modal-icon">⚠</div>
          <h2>Something went wrong</h2>
          <p class="error-modal-title">${escapeHtml(title)}</p>
          <p class="error-modal-message">${escapeHtml(message)}</p>
          ${detailsHtml}
          <div class="error-modal-actions">
            <button data-act="reload">Reload Page</button>
            <button data-act="reset">Reset Save &amp; Reload</button>
            <button data-act="copy">Copy Report</button>
          </div>
        </div>
      `;
      overlay.style.display = 'flex';
      overlay.querySelector('[data-act="reload"]').addEventListener('click', () => location.reload());
      overlay.querySelector('[data-act="reset"]').addEventListener('click', () => {
        try { localStorage.removeItem(SAVE_KEY); } catch (_) {}
        location.reload();
      });
      overlay.querySelector('[data-act="copy"]').addEventListener('click', () => this.copyReport());
    },

    _renderBanner(kind, title, message, details, autoDismissMs) {
      let banner = document.getElementById('error-banner');
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'error-banner';
        document.body.appendChild(banner);
      }
      const notice = document.createElement('div');
      notice.className = 'error-notice ' + kind;
      const detailsBtn = details
        ? '<button class="notice-details" aria-label="Show details">i</button>'
        : '';
      notice.innerHTML = `
        <div class="notice-row">
          <span class="notice-title">${escapeHtml(title)}</span>
          ${detailsBtn}
          <button class="notice-dismiss" aria-label="Dismiss">×</button>
        </div>
        <div class="notice-message">${escapeHtml(message)}</div>
        ${details ? `<div class="notice-details-body hidden"><pre>${escapeHtml(typeof details === 'string' ? details : JSON.stringify(details, null, 2))}</pre></div>` : ''}
      `;
      banner.appendChild(notice);

      const detailsBody = notice.querySelector('.notice-details-body');
      if (detailsBody) {
        notice.querySelector('.notice-details').addEventListener('click', () => {
          detailsBody.classList.toggle('hidden');
        });
      }
      notice.querySelector('.notice-dismiss').addEventListener('click', () => notice.remove());

      if (autoDismissMs > 0) {
        setTimeout(() => {
          notice.classList.add('fading');
          setTimeout(() => notice.remove(), 500);
        }, autoDismissMs);
      }
    },

    copyReport() {
      const report = {
        engineVersion: ENGINE_VERSION,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: location.href,
        state: state ? {
          currentNode: state.currentNode,
          corruption: state.corruption,
          madness: state.madness,
          vesperaInterest: state.vesperaInterest,
          mikaSelfAware: state.mikaSelfAware,
          relationships: state.relationships,
          survived: state.survived,
          flagCount: Object.keys(state.flags || {}).length
        } : null,
        log: this.log
      };
      const text = JSON.stringify(report, null, 2);
      const tryClipboard = navigator.clipboard && navigator.clipboard.writeText
        ? navigator.clipboard.writeText(text)
        : Promise.reject();
      tryClipboard
        .then(() => this.notice('Copied', 'Report copied to clipboard.', 'copy_ok'))
        .catch(() => {
          // Fallback: show prompt for manual copy
          window.prompt('Copy this error report:', text);
        });
    },

    showQALog() {
      let overlay = document.getElementById('qa-log-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'qa-log-overlay';
        document.body.appendChild(overlay);
      }
      const rows = this.log.length === 0
        ? '<p class="qa-empty">No errors or warnings recorded this session. 🎉</p>'
        : this.log.slice().reverse().map(entry => {
            const time = entry.time.split('T')[1].split('.')[0];
            return `<div class="qa-row qa-${entry.level}">
              <div class="qa-row-head">
                <span class="qa-level">${entry.level}</span>
                <span class="qa-time">${time}</span>
                ${entry.currentNode ? `<span class="qa-node">${escapeHtml(entry.currentNode)}</span>` : ''}
              </div>
              <div class="qa-title">${escapeHtml(entry.title)}</div>
              <div class="qa-message">${escapeHtml(entry.message)}</div>
              ${entry.details ? `<pre class="qa-details">${escapeHtml(typeof entry.details === 'string' ? entry.details : JSON.stringify(entry.details, null, 2))}</pre>` : ''}
            </div>`;
          }).join('');
      overlay.innerHTML = `
        <div class="qa-modal">
          <div class="qa-header">
            <h3>QA Log <span class="qa-count">${this.log.length}</span></h3>
            <div class="qa-header-actions">
              <button data-act="copy">Copy All</button>
              <button data-act="clear">Clear</button>
              <button data-act="close">Close</button>
            </div>
          </div>
          <div class="qa-body">${rows}</div>
        </div>
      `;
      overlay.style.display = 'flex';
      overlay.querySelector('[data-act="close"]').addEventListener('click', () => overlay.style.display = 'none');
      overlay.querySelector('[data-act="copy"]').addEventListener('click', () => this.copyReport());
      overlay.querySelector('[data-act="clear"]').addEventListener('click', () => { this.log = []; this.showQALog(); });
    }
  };

  // Expose for console debugging
  window.SaprosErrors = Errors;

  // ============================================
  // GLOBAL ERROR HANDLERS
  // ============================================

  window.addEventListener('error', (e) => {
    Errors.warn(
      'Uncaught error',
      e.message || 'An uncaught script error occurred.',
      (e.error && e.error.stack) || (e.filename + ':' + e.lineno + ':' + e.colno),
      'window_error'
    );
  });

  window.addEventListener('unhandledrejection', (e) => {
    Errors.warn(
      'Unhandled promise rejection',
      String(e.reason && e.reason.message || e.reason || 'Unknown'),
      (e.reason && e.reason.stack) || null,
      'unhandled_rejection'
    );
  });

  // ============================================
  // STATE
  // ============================================

  function createDefaultState() {
    return {
      version: ENGINE_VERSION,
      currentNode: null,
      corruption: 0,
      madness: 0,
      vesperaInterest: 0,
      mikaSelfAware: 0,
      relationships: {
        bran: 5, quinn: 7, niko: 6,
        jason: 0, sophie: 0, kaden: 0
      },
      survived: {
        bran: true, quinn: true, niko: true,
        jason: true, sophie: true, kaden: true, vespera: true
      },
      flags: {},
      hubVisited: {},
      audioMuted: false,
      thresholdsHit: { t25: false, t50: false, t75: false }
    };
  }

  function isValidState(s) {
    return s
      && typeof s === 'object'
      && typeof s.corruption === 'number'
      && typeof s.madness === 'number'
      && s.relationships && typeof s.relationships === 'object'
      && s.survived && typeof s.survived === 'object'
      && s.flags && typeof s.flags === 'object';
  }

  function migrateState(s) {
    // Fill in any missing fields from default state without overwriting existing values
    const defaults = createDefaultState();
    Object.keys(defaults).forEach(k => {
      if (s[k] === undefined) s[k] = defaults[k];
    });
    Object.keys(defaults.relationships).forEach(k => {
      if (s.relationships[k] === undefined) s.relationships[k] = defaults.relationships[k];
    });
    Object.keys(defaults.survived).forEach(k => {
      if (s.survived[k] === undefined) s.survived[k] = defaults.survived[k];
    });
    if (!s.thresholdsHit) s.thresholdsHit = defaults.thresholdsHit;
    if (!s.hubVisited) s.hubVisited = {};
    s.version = ENGINE_VERSION;
    return s;
  }

  const CANONICAL_DEFAULTS = {
    15: createDefaultState,
    16: function() {
      const s = createDefaultState();
      s.corruption = 10;
      s.relationships.bran = 6;
      s.relationships.quinn = 7;
      s.relationships.niko = 6;
      s.flags.mika_visited_bran_15 = true;
      s.flags.mika_searched_quinn_15 = true;
      s.flags.mika_signed_morale_report = true;
      s.flags.act_1_focus = 'double';
      return s;
    },
    17: function() {
      const s = CANONICAL_DEFAULTS[16]();
      s.corruption = 30;
      s.madness = 5;
      s.relationships.sophie = 5;
      s.flags.mika_close_to_sophie = true;
      s.flags.mika_investigated_quinn_16 = true;
      s.flags.mika_fired_on_dissenter = true;
      s.flags.act_2_focus = 'double';
      return s;
    },
    18: function() {
      const s = CANONICAL_DEFAULTS[17]();
      s.corruption = 55;
      s.madness = 15;
      s.relationships.jason = 6;
      s.relationships.kaden = 4;
      s.flags.mika_understands_jason = true;
      s.flags.mika_first_assassination_clean = true;
      s.flags.killed_jason_clean = true;
      s.survived.jason = false;
      s.flags.act_3_focus = 'double';
      return s;
    },
    19: function() {
      const s = CANONICAL_DEFAULTS[18]();
      s.corruption = 75;
      s.madness = 25;
      s.vesperaInterest = 5;
      s.flags.mika_courted_vespera = true;
      s.flags.mika_final_visit_neighborhood = true;
      s.flags.betrayed_sophie_back = true;
      s.survived.sophie = false;
      s.flags.act_4_focus = 'double';
      return s;
    }
  };

  const STARTING_NODES = {
    15: 't1.1', 16: 't2.1', 17: 't3.1', 18: 't4.1', 19: 't5.1'
  };

  // ============================================
  // PERSISTENCE
  // ============================================

  function saveState() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
      Errors.notice(
        'Save unavailable',
        'Could not save progress. If you close the tab, your place may be lost.',
        'save_failed'
      );
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!isValidState(parsed)) {
        Errors.warn(
          'Save file was unreadable',
          'Your saved progress could not be loaded (the data was incomplete or corrupted). Starting fresh.',
          parsed,
          'save_invalid'
        );
        try { localStorage.removeItem(SAVE_KEY); } catch (_) {}
        return null;
      }
      return migrateState(parsed);
    } catch (e) {
      Errors.warn(
        'Save file was unreadable',
        'Your saved progress could not be parsed. Starting fresh.',
        String(e),
        'save_parse_failed'
      );
      try { localStorage.removeItem(SAVE_KEY); } catch (_) {}
      return null;
    }
  }

  function clearSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch (_) {}
  }

  // ============================================
  // EFFECTS
  // ============================================

  function applyEffects(effects) {
    if (!effects) return;
    Errors.safe('applyEffects', () => {
      if (typeof effects.corruption === 'number') {
        state.corruption = clamp(state.corruption + effects.corruption, 0, 100);
        checkThresholds();
      }
      if (typeof effects.madness === 'number') {
        state.madness = clamp(state.madness + effects.madness, 0, 100);
      }
      if (typeof effects.vesperaInterest === 'number') {
        state.vesperaInterest = clamp(state.vesperaInterest + effects.vesperaInterest, 0, 10);
      }
      if (typeof effects.mikaSelfAware === 'number') {
        state.mikaSelfAware += effects.mikaSelfAware;
      }
      if (effects.relationships) {
        Object.entries(effects.relationships).forEach(([who, delta]) => {
          if (!(who in state.relationships)) {
            Errors.notice('Unknown character in effects', `Effect referenced unknown character "${who}".`, 'unknown_char_' + who);
          }
          state.relationships[who] = clamp((state.relationships[who] || 0) + delta, 0, 10);
        });
      }
      if (effects.survived) {
        Object.entries(effects.survived).forEach(([who, val]) => {
          state.survived[who] = val;
        });
      }
      if (effects.flags) {
        Object.entries(effects.flags).forEach(([flag, val]) => {
          state.flags[flag] = val;
        });
      }
    });
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function checkThresholds() {
    const c = state.corruption;
    [{ t: 25, k: 't25' }, { t: 50, k: 't50' }, { t: 75, k: 't75' }].forEach(({ t, k }) => {
      if (c >= t && !state.thresholdsHit[k]) {
        state.thresholdsHit[k] = true;
        triggerThresholdFlash();
      }
    });
  }

  function triggerThresholdFlash() {
    const hud = document.getElementById('hud');
    if (!hud) return;
    hud.classList.remove('threshold-flash');
    void hud.offsetWidth;
    hud.classList.add('threshold-flash');
  }

  // ============================================
  // CONDITION EVALUATOR
  // ============================================

  function evalCondition(cond) {
    if (!cond) return true;
    return Errors.safe('evalCondition', () => {
      if (Array.isArray(cond.all)) return cond.all.every(evalCondition);
      if (Array.isArray(cond.any)) return cond.any.some(evalCondition);
      if (cond.not) return !evalCondition(cond.not);

      if (cond.flag !== undefined) {
        const val = state.flags[cond.flag];
        if (cond.equals !== undefined) return val === cond.equals;
        return Boolean(val);
      }
      if (cond.relationship) {
        const val = state.relationships[cond.relationship] || 0;
        if (cond.gte !== undefined) return val >= cond.gte;
        if (cond.lte !== undefined) return val <= cond.lte;
        if (cond.equals !== undefined) return val === cond.equals;
      }
      if (cond.survived) {
        const v = state.survived[cond.survived];
        return cond.equals !== undefined ? v === cond.equals : Boolean(v);
      }
      if (cond.corruption) {
        if (cond.corruption.gte !== undefined) return state.corruption >= cond.corruption.gte;
        if (cond.corruption.lte !== undefined) return state.corruption <= cond.corruption.lte;
      }
      if (cond.madness) {
        if (cond.madness.gte !== undefined) return state.madness >= cond.madness.gte;
        if (cond.madness.lte !== undefined) return state.madness <= cond.madness.lte;
      }
      if (cond.mikaSelfAware) {
        if (cond.mikaSelfAware.gte !== undefined) return state.mikaSelfAware >= cond.mikaSelfAware.gte;
      }
      if (cond.vesperaInterest) {
        if (cond.vesperaInterest.gte !== undefined) return state.vesperaInterest >= cond.vesperaInterest.gte;
      }
      if (cond.hubVisited) {
        const list = state.hubVisited[cond.hubVisited.node] || [];
        if (cond.hubVisited.minCount !== undefined) return list.length >= cond.hubVisited.minCount;
        if (cond.hubVisited.includes) return list.includes(cond.hubVisited.includes);
        if (cond.hubVisited.excludes) return !list.includes(cond.hubVisited.excludes);
      }
      return true;
    }, false);
  }

  // ============================================
  // RENDER
  // ============================================

  function renderNode(nodeId) {
    try {
      if (!nodeId) {
        Errors.warn(
          'No destination',
          'A choice did not have a destination node. Returning to the title screen.',
          { from: state && state.currentNode },
          'no_destination'
        );
        showTitleScreen();
        return;
      }

      state.currentNode = nodeId;

      if (nodeId.startsWith('e')) {
        renderEnding(nodeId);
        return;
      }

      const node = story.nodes[nodeId];
      if (!node) {
        Errors.warn(
          'Missing scene',
          `The scene "${nodeId}" does not exist in this build. The story may not be fully wired in yet.`,
          { nodeId: nodeId, from: state.currentNode },
          'missing_node_' + nodeId
        );
        renderMissingNodeFallback(nodeId);
        return;
      }

      // Conditional routing — node that picks one of several target nodes based on flag state.
      if (Array.isArray(node.redirectIf)) {
        for (const rule of node.redirectIf) {
          if (evalCondition(rule.condition)) {
            renderNode(rule.next);
            return;
          }
        }
        if (node.redirectDefault) {
          renderNode(node.redirectDefault);
          return;
        }
      }

      if (node.hub && !state.hubVisited[nodeId]) {
        state.hubVisited[nodeId] = [];
      }

      if (node.onEnter && !state.flags['__entered_' + nodeId]) {
        applyEffects(node.onEnter);
        state.flags['__entered_' + nodeId] = true;
      }

      showGameScreen();
      setImage(node.image, node.memory);
      setText(node, node.memory);
      setChoices(node);
      updateCorruptionDisplay();
      applyNodeAudio(node);
      saveState();
    } catch (e) {
      Errors.fatal(
        'Could not render this scene',
        'An unexpected error broke this scene. You can reload the page or reset your save.',
        (e && e.stack) || String(e)
      );
    }
  }

  function renderMissingNodeFallback(nodeId) {
    showGameScreen();
    setImage(null, false);
    const textEl = document.getElementById('node-text');
    const containerEl = document.getElementById('node-text-container');
    containerEl.classList.remove('memory');
    containerEl.classList.add('ending');
    textEl.innerHTML = `
      <h2>Scene Not Yet Available</h2>
      <p>The scene <code>${escapeHtml(nodeId)}</code> hasn't been wired into this build yet.</p>
      <p>This usually means the story is still being added piece by piece. The prose exists in the project files — it just hasn't reached the playable build.</p>
    `;
    const choicesEl = document.getElementById('node-choices');
    choicesEl.innerHTML = '';
    const backBtn = document.createElement('button');
    backBtn.className = 'choice-btn continue';
    backBtn.textContent = 'Back to Title';
    backBtn.addEventListener('click', () => {
      clearSave();
      showTitleScreen();
    });
    choicesEl.appendChild(backBtn);
    updateCorruptionDisplay();
  }

  function setImage(filename, isMemory) {
    const imgEl = document.getElementById('node-image');
    if (!imgEl) return;
    imgEl.classList.toggle('memory', !!isMemory);
    if (filename) {
      // Probe first; if it errors, show placeholder
      const probe = new Image();
      probe.onload = () => {
        imgEl.style.backgroundImage = `url('images/${encodeURIComponent(filename)}')`;
        imgEl.classList.remove('placeholder');
        imgEl.textContent = '';
      };
      probe.onerror = () => {
        imgEl.style.backgroundImage = 'none';
        imgEl.classList.add('placeholder');
        imgEl.textContent = filename;
        Errors.notice(
          'Image missing',
          `${filename} hasn't been generated yet — placeholder shown.`,
          'img_' + filename
        );
      };
      probe.src = `images/${encodeURIComponent(filename)}`;
    } else {
      imgEl.style.backgroundImage = 'none';
      imgEl.classList.add('placeholder');
      imgEl.textContent = 'NO IMAGE';
    }
  }

  function setText(node, isMemory) {
    const textEl = document.getElementById('node-text');
    const containerEl = document.getElementById('node-text-container');
    if (!textEl || !containerEl) return;

    containerEl.classList.toggle('memory', !!isMemory);
    containerEl.classList.toggle('ending', !!node.isEnding);

    let html = '';
    if (node.endingTitle) {
      html += `<h2>${escapeHtml(node.endingTitle)}</h2>`;
    }

    let bodyText = node.text || '';

    if (Array.isArray(node.conditionalText)) {
      node.conditionalText.forEach(rule => {
        if (evalCondition(rule.condition)) {
          if (rule.append) bodyText += '\n\n' + rule.append;
          if (rule.replace) bodyText = rule.replace;
        }
      });
    }

    const paragraphs = bodyText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    paragraphs.forEach(p => {
      html += `<p>${formatProse(p)}</p>`;
    });

    textEl.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function formatProse(text) {
    let s = escapeHtml(text);
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    s = wrapGlossaryTerms(s);
    s = s.replace(/\n/g, '<br>');
    return s;
  }

  function escapeRegex(str) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  function wrapGlossaryTerms(html) {
    if (!glossary || !glossary.terms) return html;
    const terms = Object.keys(glossary.terms);
    if (terms.length === 0) return html;
    // Sort longest-first so a term like "Hetairoi" matches before any shorter
    // overlapping pattern. Also avoids partial matches inside longer terms.
    const sorted = terms.slice().sort((a, b) => b.length - a.length);

    // We walk through the HTML and only wrap terms inside text content,
    // not inside existing tags. Simple state machine.
    let out = '';
    let i = 0;
    while (i < html.length) {
      if (html[i] === '<') {
        // Skip past the tag
        const end = html.indexOf('>', i);
        if (end === -1) { out += html.substr(i); break; }
        out += html.substring(i, end + 1);
        i = end + 1;
      } else {
        // Find end of next text run (until next '<')
        const nextTag = html.indexOf('<', i);
        const segEnd = nextTag === -1 ? html.length : nextTag;
        let seg = html.substring(i, segEnd);
        // Apply glossary replacement to this text segment
        sorted.forEach(term => {
          const re = new RegExp('\\b' + escapeRegex(term) + '\\b', 'g');
          seg = seg.replace(re, function(match) {
            return '<span class="glossary-term" data-term="' + escapeHtml(term) + '">' + match + '</span>';
          });
        });
        out += seg;
        i = segEnd;
      }
    }
    return out;
  }

  function escapeHtml(s) {
    if (s === null || s === undefined) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function setChoices(node) {
    const choicesEl = document.getElementById('node-choices');
    if (!choicesEl) return;
    choicesEl.innerHTML = '';

    if (node.isEnding) {
      const btn = document.createElement('button');
      btn.className = 'choice-btn continue';
      btn.textContent = 'Start Again';
      btn.addEventListener('click', () => {
        clearSave();
        showTitleScreen();
      });
      choicesEl.appendChild(btn);
      return;
    }

    let choices = (node.choices || []).filter(c => evalCondition(c.condition));

    if (choices.length === 0) {
      Errors.warn(
        'Dead end',
        `The scene "${node.id}" has no available choices. You may be stuck. Returning to the title is one option.`,
        { nodeId: node.id, allChoices: node.choices },
        'dead_end_' + node.id
      );
      const btn = document.createElement('button');
      btn.className = 'choice-btn continue';
      btn.textContent = 'Back to Title';
      btn.addEventListener('click', () => { clearSave(); showTitleScreen(); });
      choicesEl.appendChild(btn);
      return;
    }

    if (node.hub) {
      const visited = state.hubVisited[node.id] || [];
      const hubLabel = document.createElement('div');
      hubLabel.className = 'hub-prompt';
      hubLabel.textContent = 'Choose any. You can do more than one.';
      choicesEl.appendChild(hubLabel);

      choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice.label;

        if (choice.isContinue) {
          btn.classList.add('continue');
          if (visited.length < 1) btn.classList.add('disabled');
          btn.addEventListener('click', () => handleContinueFromHub(node, choice, visited));
        } else if (visited.includes(choice.hubItemId || choice.next)) {
          btn.classList.add('completed');
          btn.disabled = true;
        } else {
          btn.addEventListener('click', () => handleHubChoice(node, choice));
        }
        choicesEl.appendChild(btn);
      });
    } else {
      choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        if (choice.isContinue) btn.classList.add('continue');
        btn.textContent = choice.label;
        btn.addEventListener('click', () => handleChoice(choice));
        choicesEl.appendChild(btn);
      });
    }
  }

  // ============================================
  // CHOICE HANDLERS
  // ============================================

  function handleChoice(choice) {
    try {
      applyEffects(choice.effects);
      if (choice.ending) {
        transitionTo(() => renderEnding(choice.ending));
        return;
      }
      if (choice.returnToHub) {
        transitionTo(() => returnToHub(choice.returnToHub.node, choice.returnToHub.activity));
        return;
      }
      if (choice.routeFromEndingSwitch) {
        const endingId = routeFromEndingSwitch(choice.routeFromEndingSwitch);
        if (!endingId) {
          Errors.warn(
            'Ending route failed',
            'The final-choice route could not be resolved. Falling back to a default ending.',
            { finalChoice: choice.routeFromEndingSwitch }
          );
          transitionTo(() => renderEnding('e2'));
          return;
        }
        transitionTo(() => renderEnding(endingId));
        return;
      }
      if (choice.next) {
        transitionTo(() => renderNode(choice.next));
      } else {
        Errors.warn(
          'Choice has no destination',
          'The selected choice has no next scene defined. Returning to the title.',
          { label: choice.label }
        );
        showTitleScreen();
      }
    } catch (e) {
      Errors.warn(
        'Choice handler error',
        'Something went wrong handling that choice. The game will try to continue.',
        (e && e.stack) || String(e)
      );
    }
  }

  function handleHubChoice(hubNode, choice) {
    try {
      applyEffects(choice.effects);
      transitionTo(() => renderNode(choice.next));
    } catch (e) {
      Errors.warn('Hub choice error', String(e && e.message || e), (e && e.stack) || null);
    }
  }

  function handleContinueFromHub(hubNode, choice, visited) {
    if (visited.length < 1) return;
    try {
      const focusFlag = `act_${hubNode.act}_focus`;
      state.flags[focusFlag] = visited.length <= 1 ? 'single' : (visited.length === 2 ? 'double' : 'triple');
      if (visited.length === 2) state.corruption = clamp(state.corruption + (hubNode.act >= 4 ? 5 : 1), 0, 100);
      if (visited.length === 3) state.corruption = clamp(state.corruption + (hubNode.act >= 4 ? 10 : 5), 0, 100);
      checkThresholds();
      applyEffects(choice.effects);
      transitionTo(() => renderNode(choice.next));
    } catch (e) {
      Errors.warn('Hub continue error', String(e && e.message || e), (e && e.stack) || null);
    }
  }

  function returnToHub(hubId, completedActivityId) {
    if (!state.hubVisited[hubId]) state.hubVisited[hubId] = [];
    if (!state.hubVisited[hubId].includes(completedActivityId)) {
      state.hubVisited[hubId].push(completedActivityId);
    }
    transitionTo(() => renderNode(hubId));
  }

  // ============================================
  // ENDINGS
  // ============================================

  function renderEnding(endingId) {
    try {
      state.currentNode = endingId;
      if (!endings || !endings.endings) {
        Errors.warn(
          'Endings file unavailable',
          'The endings file could not be read. Falling back to a generic ending message.',
          { endingId: endingId },
          'no_endings_file'
        );
        return renderGenericEndingFallback(endingId);
      }
      const ending = endings.endings[endingId];
      if (!ending) {
        Errors.warn(
          'Ending missing',
          `The ending "${endingId}" hasn't been wired in yet. Showing a generic ending instead.`,
          { endingId: endingId },
          'missing_ending_' + endingId
        );
        return renderGenericEndingFallback(endingId);
      }

      showGameScreen();
      setImage(ending.image, false);

      const textEl = document.getElementById('node-text');
      const containerEl = document.getElementById('node-text-container');
      containerEl.classList.add('ending');
      containerEl.classList.remove('memory');

      let html = `<h2>${escapeHtml(ending.title)}</h2>`;
      let bodyText = ending.text || '';

      if (ending.variations) {
        Object.entries(ending.variations).forEach(([slotName, variants]) => {
          const slotKey = `[${slotName}]`;
          let chosen = '';
          for (const variant of variants) {
            if (evalCondition(variant.condition)) {
              chosen = variant.text;
              break;
            }
          }
          bodyText = bodyText.split(slotKey).join(chosen);
        });
      }

      const paragraphs = bodyText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
      paragraphs.forEach(p => {
        html += `<p>${formatProse(p)}</p>`;
      });

      textEl.innerHTML = html;

      const choicesEl = document.getElementById('node-choices');
      choicesEl.innerHTML = '';
      const btn = document.createElement('button');
      btn.className = 'choice-btn continue';
      btn.textContent = 'Start Again';
      btn.addEventListener('click', () => {
        clearSave();
        showTitleScreen();
      });
      choicesEl.appendChild(btn);

      updateCorruptionDisplay();
      window.scrollTo(0, 0);
      saveState();
    } catch (e) {
      Errors.fatal(
        'Could not show this ending',
        'Rendering the ending failed unexpectedly.',
        (e && e.stack) || String(e)
      );
    }
  }

  function renderGenericEndingFallback(endingId) {
    showGameScreen();
    setImage(null, false);
    const textEl = document.getElementById('node-text');
    const containerEl = document.getElementById('node-text-container');
    containerEl.classList.add('ending');
    containerEl.classList.remove('memory');
    textEl.innerHTML = `
      <h2>End of Path</h2>
      <p>You reached the ending <code>${escapeHtml(endingId)}</code>, but its full text isn't in this build yet.</p>
      <p>The prose for all 15 endings lives in <code>ENDINGS_TEXT.md</code>. It will be wired in as the game is completed.</p>
    `;
    const choicesEl = document.getElementById('node-choices');
    choicesEl.innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'choice-btn continue';
    btn.textContent = 'Start Again';
    btn.addEventListener('click', () => { clearSave(); showTitleScreen(); });
    choicesEl.appendChild(btn);
    updateCorruptionDisplay();
  }

  function routeFromEndingSwitch(finalChoice) {
    return Errors.safe('routeFromEndingSwitch', () => {
      state.flags.final_choice = finalChoice;
      if (finalChoice === 'coup') {
        if (state.madness >= 70) return 'e13';
        if (state.corruption >= 80 && (state.flags.killed_jason_clean || state.flags.killed_jason_messy)) {
          if (state.survived.sophie === false || state.flags.betrayed_sophie_first) return 'e1';
        }
        if (state.corruption >= 60 && (state.flags.killed_jason_clean || state.flags.killed_jason_messy)) return 'e2';
        if (state.corruption < 60 && state.flags.won_without_retaliating && state.survived.quinn) return 'e4';
        if (state.flags.vespera_targets_mika) return 'e10';
        return 'e2';
      }
      if (finalChoice === 'heir') {
        if (state.mikaSelfAware >= 5) return 'e5';
        if (state.madness >= 70) return state.relationships.bran >= 3 ? 'e14' : 'e15';
        return 'e3';
      }
      if (finalChoice === 'reform') {
        if (state.corruption >= 75) return 'e1';
        if (state.corruption >= 50) return 'e4';
        if (state.corruption < 50 && state.flags.won_without_retaliating) return 'e4';
        return 'e7';
      }
      if (finalChoice === 'resist') return 'e7';
      if (finalChoice === 'break') {
        if (state.madness >= 70 && state.survived.kaden === false) return 'e11';
        if (state.madness >= 70 && state.survived.kaden) return 'e12';
        if (state.corruption >= 75) return 'e11';
        if (state.madness >= 50) return 'e14';
        return 'e12';
      }
      return 'e2';
    }, 'e2');
  }

  window.SaprosRoute = { fromEndingSwitch: routeFromEndingSwitch };

  // ============================================
  // DISPLAY
  // ============================================

  function updateCorruptionDisplay() {
    const fill = document.getElementById('corruption-fill');
    const label = document.getElementById('corruption-label');
    if (!fill || !label) return;
    fill.style.width = state.corruption + '%';
    label.textContent = 'CORRUPTION ' + Math.round(state.corruption);
    let color;
    if (state.corruption < 20) color = '#ffffff';
    else if (state.corruption < 50) color = '#e8c87a';
    else if (state.corruption < 75) color = '#d4a043';
    else color = '#c64c3a';
    fill.style.background = color;
  }

  function transitionTo(fn) {
    const game = document.getElementById('game-screen');
    if (!game) { fn(); return; }
    game.classList.add('fading-out');
    setTimeout(() => {
      game.classList.remove('fading-out');
      game.classList.add('fading-in');
      try { fn(); } catch (e) {
        Errors.fatal('Transition error', 'An unexpected error broke the scene transition.', (e && e.stack) || String(e));
      }
      setTimeout(() => game.classList.remove('fading-in'), 350);
    }, 220);
  }

  // ============================================
  // SCREEN MANAGEMENT
  // ============================================

  function showTitleScreen() {
    const ids = ['title-screen', 'chapter-select-screen', 'game-screen', 'hud', 'menu-overlay'];
    const showHide = { 'title-screen': true, 'chapter-select-screen': false, 'game-screen': false, 'hud': false, 'menu-overlay': false };
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('hidden', !showHide[id]);
    });
    const savedState = loadState();
    const cont = document.getElementById('btn-continue');
    if (cont) cont.classList.toggle('hidden', !savedState);
    // Play the title-screen ambient loop
    syncMuteButtons();
    playAudio('ambient.mp3');
  }

  function showChapterSelectScreen() {
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('chapter-select-screen').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('hud').classList.add('hidden');
  }

  function showGameScreen() {
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('chapter-select-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('hud').classList.remove('hidden');
  }

  // ============================================
  // AUDIO MANAGER
  // ============================================
  //
  // Architecture:
  //   - Mute preference is stored in its own localStorage key so it
  //     applies before any save state is loaded.
  //   - playAudio(filename) starts/swaps to a track.
  //   - stopAudio() halts whatever's playing.
  //   - On render, a node's `audio` field controls the track:
  //       • a filename → swap to that file (only if different)
  //       • null       → explicitly stop audio
  //       • undefined  → leave whatever is currently playing alone

  const MUTE_KEY = 'sapros_muted_v1';
  let currentAudioFile = null;
  let audioRetryHandler = null;

  function getMutePreference() {
    try { return localStorage.getItem(MUTE_KEY) === 'true'; }
    catch (_) { return false; }
  }

  function setMutePreference(muted) {
    try { localStorage.setItem(MUTE_KEY, muted ? 'true' : 'false'); }
    catch (_) {}
  }

  function syncMuteButtons() {
    const muted = getMutePreference();
    document.querySelectorAll('#mute-toggle, #title-mute-toggle').forEach(b => {
      b.classList.toggle('muted', muted);
    });
  }

  function playAudio(filename) {
    const audio = document.getElementById('ambient-audio');
    if (!audio || !filename) return;
    const wantedSrc = 'audio/' + filename;

    // Swap source only if different
    let source = audio.querySelector('source');
    const currentSrc = source ? source.getAttribute('src') : null;
    if (currentSrc !== wantedSrc) {
      audio.pause();
      if (!source) {
        source = document.createElement('source');
        source.type = 'audio/mpeg';
        audio.appendChild(source);
      }
      source.setAttribute('src', wantedSrc);
      audio.load();
    }

    audio.volume = 0.6;
    audio.muted = getMutePreference();
    audio.loop = true;

    const p = audio.play();
    if (p && p.catch) {
      p.catch(() => {
        // Browser blocked autoplay — wait for any user click then retry.
        if (audioRetryHandler) return;
        audioRetryHandler = () => {
          document.removeEventListener('click', audioRetryHandler);
          document.removeEventListener('keydown', audioRetryHandler);
          audioRetryHandler = null;
          if (currentAudioFile) {
            const p2 = audio.play();
            if (p2 && p2.catch) p2.catch(() => {});
          }
        };
        document.addEventListener('click', audioRetryHandler, { once: true });
        document.addEventListener('keydown', audioRetryHandler, { once: true });
      });
    }

    currentAudioFile = filename;
  }

  function stopAudio() {
    const audio = document.getElementById('ambient-audio');
    if (audio) {
      audio.pause();
      try { audio.currentTime = 0; } catch (_) {}
    }
    currentAudioFile = null;
  }

  function applyNodeAudio(node) {
    if (node.audio === null) {
      stopAudio();
    } else if (node.audio && node.audio !== currentAudioFile) {
      playAudio(node.audio);
    }
    // If node.audio is undefined, leave the current track alone.
  }

  function toggleMute() {
    const newMuted = !getMutePreference();
    setMutePreference(newMuted);
    const audio = document.getElementById('ambient-audio');
    if (audio) audio.muted = newMuted;
    syncMuteButtons();
    // Keep the play-state state object in sync if it exists
    if (state) state.audioMuted = newMuted;
  }

  // ============================================
  // ENTRY POINTS
  // ============================================

  function newGame() {
    state = createDefaultState();
    state.audioMuted = getMutePreference();
    saveState();
    // Title-screen track stops when gameplay begins. Each node can
    // declare its own `audio` field to play scene-specific tracks
    // once you add per-scene audio later.
    stopAudio();
    transitionTo(() => renderNode(story.startNode));
  }

  function continueGame() {
    const saved = loadState();
    if (!saved) { newGame(); return; }
    state = saved;
    state.audioMuted = getMutePreference();
    stopAudio();
    if (state.currentNode) {
      transitionTo(() => renderNode(state.currentNode));
    } else {
      newGame();
    }
  }

  function startFromAge(age) {
    if (!CANONICAL_DEFAULTS[age] || !STARTING_NODES[age]) {
      Errors.warn(
        'Unknown chapter',
        `Cannot start from age ${age}. Starting from the beginning instead.`,
        { age: age }
      );
      newGame();
      return;
    }
    state = CANONICAL_DEFAULTS[age]();
    state.audioMuted = getMutePreference();
    saveState();
    stopAudio();
    transitionTo(() => renderNode(STARTING_NODES[age]));
  }

  // ============================================
  // STORY VALIDATION (runs after data loads)
  // ============================================

  function validateStory() {
    if (!story || !story.nodes) return;
    const nodeIds = new Set(Object.keys(story.nodes));
    const issues = [];

    Object.entries(story.nodes).forEach(([id, node]) => {
      if (id !== node.id) {
        issues.push({ node: id, kind: 'id_mismatch', detail: `Node key "${id}" disagrees with node.id "${node.id}"` });
      }
      const choices = node.choices || [];
      choices.forEach((c, i) => {
        if (c.next && !c.next.startsWith('e') && !nodeIds.has(c.next)) {
          issues.push({ node: id, kind: 'broken_next', detail: `Choice ${i} ("${(c.label||'').slice(0,40)}") points to missing node "${c.next}"` });
        }
        if (c.returnToHub && c.returnToHub.node && !nodeIds.has(c.returnToHub.node)) {
          issues.push({ node: id, kind: 'broken_hub_return', detail: `Choice ${i} returns to missing hub "${c.returnToHub.node}"` });
        }
      });
      // Empty-text is only a problem if the node is actually meant to render.
      // Routing nodes (redirectIf/redirectDefault) and endings don't need text.
      const isRouter = Array.isArray(node.redirectIf) || node.redirectDefault;
      if (!node.text && !node.isEnding && !isRouter) {
        issues.push({ node: id, kind: 'empty_text', detail: 'Node has no text.' });
      }
      if (node.hub && choices.filter(c => c.isContinue).length === 0) {
        issues.push({ node: id, kind: 'hub_no_continue', detail: 'Hub node has no Continue choice.' });
      }
    });

    if (story.startNode && !nodeIds.has(story.startNode)) {
      issues.push({ node: '(root)', kind: 'broken_start', detail: `startNode "${story.startNode}" does not exist.` });
    }

    if (issues.length > 0) {
      Errors.warn(
        `${issues.length} story issue${issues.length === 1 ? '' : 's'} found`,
        'The game will still try to play, but some scenes may not work as expected. Open the QA Log for details.',
        issues,
        'validate_story'
      );
    }
  }

  // ============================================
  // BOOTSTRAPPING
  // ============================================

  async function loadData() {
    const errors = [];
    // Cache-bust on every load so prose edits show without a hard reload
    const bust = '?v=' + Date.now();
    try {
      const storyResp = await fetch('story.json' + bust, { cache: 'no-store' });
      if (!storyResp.ok) throw new Error('HTTP ' + storyResp.status + ' loading story.json');
      story = await storyResp.json();
    } catch (e) {
      errors.push({ what: 'story.json', error: e });
    }
    try {
      const endingsResp = await fetch('endings.json' + bust, { cache: 'no-store' });
      if (!endingsResp.ok) throw new Error('HTTP ' + endingsResp.status + ' loading endings.json');
      endings = await endingsResp.json();
    } catch (e) {
      errors.push({ what: 'endings.json', error: e });
    }
    try {
      const glossaryResp = await fetch('glossary.json' + bust, { cache: 'no-store' });
      if (glossaryResp.ok) {
        glossary = await glossaryResp.json();
      }
    } catch (e) {
      // Glossary missing is non-fatal — just no underlined terms
      glossary = { terms: {} };
    }
    if (!glossary) glossary = { terms: {} };

    if (errors.find(e => e.what === 'story.json')) {
      const storyError = errors.find(e => e.what === 'story.json');
      const e = storyError.error;
      const looksLikeFileProto = location.protocol === 'file:';
      Errors.fatal(
        'Could not load the story',
        looksLikeFileProto
          ? 'It looks like you opened this file directly (file://). Browsers block local file loading. Run a small web server in the site folder: python3 -m http.server 8000, then open http://localhost:8000.'
          : 'The story.json file could not be loaded. Check that the file exists and that you have not modified it into invalid JSON.',
        (e && e.message) || String(e)
      );
      return false;
    }

    if (errors.find(e => e.what === 'endings.json')) {
      // Endings missing is non-fatal — only matters once you reach an ending node
      Errors.notice(
        'Endings file not loaded',
        'endings.json failed to load. Endings will show fallback text until it is fixed.',
        'endings_load_failed'
      );
      endings = { endings: {} };
    }

    validateStory();
    return true;
  }

  // ============================================
  // GLOSSARY POPUP
  // ============================================

  function bindGlossaryClicks() {
    document.addEventListener('click', (e) => {
      try {
        const term = e.target.closest && e.target.closest('.glossary-term');
        if (term) {
          e.preventDefault();
          e.stopPropagation();
          showGlossaryPopup(term);
          return;
        }
        // If click is inside an open popup, leave it alone
        if (e.target.closest && e.target.closest('#glossary-popup')) return;
        hideGlossaryPopup();
      } catch (_) { /* never let click handler crash the game */ }
    }, true); // capture phase so we run before choice button clicks
  }

  function showGlossaryPopup(termEl) {
    hideGlossaryPopup();
    const termName = termEl.getAttribute('data-term');
    if (!termName || !glossary || !glossary.terms || !glossary.terms[termName]) return;
    const entry = glossary.terms[termName];

    const popup = document.createElement('div');
    popup.id = 'glossary-popup';
    popup.innerHTML =
      '<div class="glossary-popup-name">' + escapeHtml(termName) + '</div>' +
      '<div class="glossary-popup-def">' + escapeHtml(entry.definition) + '</div>' +
      '<button class="glossary-popup-close" aria-label="Close">×</button>';
    document.body.appendChild(popup);

    popup.querySelector('.glossary-popup-close').addEventListener('click', (e) => {
      e.stopPropagation();
      hideGlossaryPopup();
    });

    // Position
    const rect = termEl.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Prefer below; flip above if not enough room
    let top = rect.bottom + 10;
    if (top + popupRect.height > vh - 16) {
      top = rect.top - popupRect.height - 10;
    }
    top = Math.max(16, top);

    // Center horizontally on the term, clamp to viewport
    let left = rect.left + (rect.width / 2) - (popupRect.width / 2);
    left = Math.max(16, Math.min(left, vw - popupRect.width - 16));

    popup.style.top = top + 'px';
    popup.style.left = left + 'px';
    popup.classList.add('visible');
  }

  function hideGlossaryPopup() {
    const existing = document.getElementById('glossary-popup');
    if (existing) existing.remove();
  }

  function bindUI() {
    const bind = (id, evt, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(evt, (e) => {
        try { fn(e); } catch (err) {
          Errors.warn('UI handler error', String(err && err.message || err), err && err.stack);
        }
      });
    };

    bind('btn-new-game', 'click', () => { clearSave(); newGame(); });
    bind('btn-continue', 'click', continueGame);
    bind('btn-chapter-select', 'click', showChapterSelectScreen);
    bind('btn-back-from-chapter', 'click', showTitleScreen);

    document.querySelectorAll('.chapter-card').forEach(btn => {
      btn.addEventListener('click', () => {
        try {
          const age = parseInt(btn.getAttribute('data-age'), 10);
          startFromAge(age);
        } catch (e) {
          Errors.warn('Chapter select error', String(e && e.message || e));
        }
      });
    });

    bind('mute-toggle', 'click', toggleMute);
    bind('title-mute-toggle', 'click', toggleMute);
    bind('menu-toggle', 'click', () => {
      const overlay = document.getElementById('menu-overlay');
      if (overlay) overlay.classList.remove('hidden');
    });
    bind('menu-resume', 'click', () => {
      const overlay = document.getElementById('menu-overlay');
      if (overlay) overlay.classList.add('hidden');
    });
    bind('menu-restart', 'click', () => {
      clearSave();
      const overlay = document.getElementById('menu-overlay');
      if (overlay) overlay.classList.add('hidden');
      showTitleScreen();
    });
    bind('menu-chapter', 'click', () => {
      const overlay = document.getElementById('menu-overlay');
      if (overlay) overlay.classList.add('hidden');
      showChapterSelectScreen();
    });

    // QA Log button — inject into menu
    const menuContent = document.querySelector('#menu-overlay .menu-content');
    if (menuContent && !document.getElementById('menu-qa-log')) {
      const qaBtn = document.createElement('button');
      qaBtn.id = 'menu-qa-log';
      qaBtn.className = 'secondary-btn';
      qaBtn.textContent = 'QA Log';
      qaBtn.addEventListener('click', () => {
        const overlay = document.getElementById('menu-overlay');
        if (overlay) overlay.classList.add('hidden');
        Errors.showQALog();
      });
      // Insert before the warning text
      const warn = menuContent.querySelector('.menu-warn');
      if (warn) menuContent.insertBefore(qaBtn, warn);
      else menuContent.appendChild(qaBtn);
    }
  }

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      bindUI();
      bindGlossaryClicks();
      const ok = await loadData();
      if (ok) showTitleScreen();
    } catch (e) {
      Errors.fatal(
        'Could not start',
        'The game could not initialize.',
        (e && e.stack) || String(e)
      );
    }
  });

})();
