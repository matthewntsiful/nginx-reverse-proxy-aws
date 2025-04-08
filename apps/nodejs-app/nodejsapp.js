// ~/service2/service2.js
const http = require('http');

const PORT = process.env.PORT || 3000;

const htmlResponse = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service 2 - Node.js HTTP Server</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #eef2f3;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 30px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            height: 80px;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #27ae60;
            padding-bottom: 10px;
        }
        .features {
            margin: 30px 0;
        }
        .features li {
            margin-bottom: 10px;
        }
        footer {
            margin-top: 30px;
            text-align: center;
            font-size: 0.9em;
            color: #7f8c8d;
        }
        a {
            color: #27ae60;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://via.placeholder.com/80x80?text=Service+2" alt="Service 2 Logo">
        </div>

        <h1>Welcome to Service 2</h1>
        <p>This service is powered by a <strong>Node.js HTTP Server</strong>.</p>

        <div class="features">
            <h2>Key Features:</h2>
            <ul>
                <li>Built with vanilla Node.js (no frameworks)</li>
                <li>Fast and lightweight HTTP response</li>
                <li>Dynamic port configuration</li>
                <li>Clean and structured HTML output</li>
            </ul>
        </div>

        <div class="status">
            <h2>Service Status</h2>
            <p><strong>Status:</strong> <span style="color: #27ae60;">Operational</span></p>
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Uptime:</strong> 99.9%</p>
        </div>

        <footer>
            <p>© 2023 Service 2 | <a href="/docs">Documentation</a> | <a href="/api">API</a> | <a href="/contact">Contact</a></p>
        </footer>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlResponse);
});

server.on('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
});

server.listen(PORT, () => {
    console.log(`✅ Service 2 is running at http://localhost:${PORT}`);
});
