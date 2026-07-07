const fs = require('fs');
let content = fs.readFileSync('vite.config.ts', 'utf8');
content = content.replace(
  "    server: {\n      hmr: process.env.DISABLE_HMR !== 'true',\n      watch: process.env.DISABLE_HMR === 'true' ? null : {},\n    }",
  `    server: {
      host: '0.0.0.0',
      port: 3000,
      hmr: process.env.DISABLE_HMR === 'true' ? false : {
        protocol: 'wss',
        clientPort: 443,
      },
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    }`
);
fs.writeFileSync('vite.config.ts', content);
