var express = require('express')
var app = express()

var asciicastTemplate = function (name) {
  var lines = [
    '<html>',
    '<head>',
      '<title>Title</title>',
      '<meta charset="utf-8">',
      '<link rel="stylesheet" type="text/css" href="/vendor/asciinema-player.css" />',
    '</head>',
    '<body>',
      '<asciinema-player src="/media/' + name + '.json"></asciinema-player>',
      '<script src="/vendor/asciinema-player.js"></script>',
    '</body>',
    '</html>',
  ]

  return lines.join('\n')
}

app.get('/ascii/:name', function (req, res) {
  var html = asciicastTemplate(req.params.name)
  res.send(html)
})

app.use(express.static('static'))

app.listen(3000, function () {
  console.log('Server started on port 3000')
})
