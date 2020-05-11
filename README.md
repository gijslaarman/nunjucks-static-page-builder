# Generate static pages with Nunjucks

## Installation
```bash
# Clone repo
git clone https://github.com/gijslaarman/nunjucks-static-page-builder.git

# Cd into repo
cd nunjucks-static-page-builder

# Install dependencies
npm install
```

#### Commands
```bash
# Build dist folder
npm run build

# Watch for changes, useful for developing
npm run dev
```

## How to use it
### Structure
```
  |-src
  |  |-assets                   # Contains all the js/css/assets
  |  |  |-js
  |  |  |  |-rollup.config.js   # Rollup config, uses babel to convert to ES5.
  |  |  |  |-index.js           # Rollup looks for index.js as index file.
  |  |  |-scss
  |  |  |  |-main.scss          # Node-sass looks for main.scss as index file, use sass as you see fit.
  |  |  |-copy                  # Everything inside the 'copy' folder will be directly copied into the dist folder.
  |  |  |  |-img
  |  |  |  |-favicon.ico
  |  |-pages                    # Create your own page structure inside here.
  |  |  |-layouts
  |  |  |-*.html
  |  |  |-config.json
  |  |-helpers
  |  |  |-nunjuckStatic.js      # helper function for generating the static files.
```