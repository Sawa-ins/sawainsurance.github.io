#!/usr/bin/env python3
"""
Simple HTTP Server for local testing
Run: python3 server.py
Then visit: http://localhost:8000
"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

def run_server():
    # Change to the directory where the script is located
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"✅ Server running at http://localhost:{PORT}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print(f"🌐 Open your browser and visit: http://localhost:{PORT}")
        print(f"\n⏹️  Press Ctrl+C to stop the server\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Server stopped.")
            exit(0)

if __name__ == "__main__":
    run_server()
