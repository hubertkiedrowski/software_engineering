const path = require('path');

module.exports = {
  entry: './index.js', // Ändere den Pfad entsprechend
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // ... Weitere Konfigurationsoptionen ...
};
