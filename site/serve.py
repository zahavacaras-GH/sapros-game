"""
Local dev server for Sapros that explicitly disables all caching.
Run from inside the site/ folder:
    python3 serve.py
Then open http://localhost:8888 (or whatever port is printed).
"""
import http.server
import socketserver
import sys
import os

PORT = int(os.environ.get('PORT', 8888))

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Strongest possible no-cache headers
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, fmt, *args):
        # Quieter log
        sys.stderr.write("[%s] %s\n" % (self.address_string(), fmt % args))

with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"\nSapros dev server with cache disabled.")
    print(f"Open: http://localhost:{PORT}\n")
    httpd.serve_forever()
