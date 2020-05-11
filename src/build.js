const nunjucks = require('nunjucks')
const nunjuckStatic = require('./helpers/nunjuckStatic')
const cpx = require('cpx')
const path = require('path')
const pages = require('./pages/config.json')

nunjucks.configure('src/pages')
const distFolder = path.resolve(`${__dirname}/../dist`)

nunjuckStatic.config({
  staticDirectory: distFolder
})

cpx.copy(path.resolve(`${__dirname}/assets/copy/**`), distFolder)

pages.forEach(page => {
  nunjuckStatic.generate(page.template, {}, page.route)
})

return console.log('yo');

