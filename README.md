<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Weather Dashboard</title>
</head>
<body>

  <h1>🌦 Weather Dashboard</h1>
  <p>
    A simple full-stack weather dashboard built with <b>React</b> (frontend) and 
    <b>Node.js + Express</b> (backend). It fetches real-time weather and a 
    <b>3-day forecast</b> from 
    <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a>.
  </p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Current weather data (temperature, condition, etc.)</li>
    <li>3-day forecast</li>
    <li>Backend proxy with API key protection</li>
    <li>Environment variable support (<code>.env</code>)</li>
    <li>CORS support</li>
  </ul>

  <h2>📂 Project Structure</h2>
  <pre>
root/
├── client/        # React frontend
├── server/        # Express backend
│   ├── index.js
│   └── .env       # NOT committed to GitHub
└── README.md
  </pre>

  <h2>⚙️ Setup & Installation</h2>
  <h3>1) Clone the repo</h3>
  <pre>
git clone https://github.com/&lt;your-username&gt;/&lt;your-repo&gt;.git
cd &lt;your-repo&gt;
  </pre>

  <h3>2) Install dependencies</h3>
  <p><b>Backend:</b></p>
  <pre>
cd server
npm install
  </pre>

  <p><b>Frontend:</b></p>
  <pre>
cd ../client
npm install
  </pre>

  <h3>3) Environment variables</h3>
  <p>Create a <code>.env</code> file inside the <code>server/</code> folder:</p>
  <pre>
WEATHER_API_KEY=your_api_key_here
PORT=5000
  </pre>
  <p><b>⚠️ Note:</b> Do not commit <code>.env</code> to GitHub. It is already included in <code>.gitignore</code>.</p>

  <h3>4) Run the app</h3>
  <p><b>Start backend:</b></p>
  <pre>
cd server
npm run dev   # or: npm start
  </pre>

  <p><b>Start frontend (in another terminal):</b></p>
  <pre>
cd client
npm start
  </pre>

  <p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.</p>

  <h2>🛡️ Security Notes</h2>
  <ul>
    <li>The API key is only used on the backend, never exposed to the frontend.</li>
    <li><code>.env</code> is ignored in Git to protect sensitive data.</li>
  </ul>

  <h2>🤝 Contributing</h2>
  <p>Pull requests are welcome! For major changes, please open an issue first to discuss.</p>

  <h2>📜 License</h2>
  <p>MIT License.</p>

</body>
</html>
