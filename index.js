// Import the express module and file system module
const express = require('express');
const fs = require('fs');
const path = require('path');

// Import the package.json file to get version
const packageJson = require('./package.json');

// Create an Express application
const app = express();

// Define a route to serve the "Hello World" message with version and large SKU
app.get('/', (req, res) => {
  // Dynamically read the app_settings.json file
  const appSettingsPath = path.join(__dirname, 'app_settings.json');
  const appSettings = JSON.parse(fs.readFileSync(appSettingsPath, 'utf8'));

  res.send(`
    <html>
      <body>
        <p>Hello World - Version ${packageJson.version}</p>
        <p style="font-size: 48px;">SKU: ${appSettings.SKU}</p>
      </body>
    </html>
  `);
});

// Set the app to listen on port 3007
app.listen(3007, () => {
  console.log('Server is running on port 3007');
});
