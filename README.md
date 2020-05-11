# Generate static pages with Nunjucks
Creating static sites is quite tiresome. A lot of boilerplating, as developers we hate repeating ourselves and so do I. That's why I wrote this package as a quick start up to avoid boilerplating and prebuild features as bundling css/js & converting them to optimize page performance.
It's making full use of nunjucks, all features are working.

⚠️ The project is making use of [nunjucks](https://mozilla.github.io/nunjucks/). If you're not familiar with it's templating I would recommend reading the [templating docs](https://mozilla.github.io/nunjucks/templating.html) first.

## Table of contents
1. [Installation](#installation)
2. [How to use it](#how-to-use-it)
    - [Structure](#structure)
3. [License](#license)
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
  |  |-components
  |  |  |-my-component
  |  |  |  |-template.html
  |  |  |  |-style.scss
  |  |  |  |-script.js
  |  |-pages                    # Create your own page structure inside here.
  |  |  |-layouts
  |  |  |-*.html
  |  |  |-config.json
  |  |-helpers
  |  |  |-nunjuckStatic.js      # helper function for generating the static files.
```

### Page structure
```json
[
  {
    "page": "index", // Page name
    "template": "index.html", // What template does the page need to use, found in src/pages dir.
    "route": "/" // The route of the page, needs to be unique, otherwise it will overwrite.
  },
  // {...} And other pages.
]
```

#### Route
I defined a route to clean up the page navigation. It makes it easier for visitors to find example.com/contact than example.com/contact.html.
And you can also nest pages this way.

## License
📝 [MIT License](/blob/master/LICENSE)