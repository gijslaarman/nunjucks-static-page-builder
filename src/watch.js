const express = require('express')
const nunjucks = require('nunjucks')
const pages = require('./pages/config.json')

const app = express()

nunjucks.configure('src/pages', {
  app: 'express'
})

app.use(express.static('/assets/copy'))

pages.forEach(page => {
  app.get(page.route, (req, res) => {
    res.render(page.template)
  })
})

app.listen(3000, () => {
  console.log('listening on 3000');
})