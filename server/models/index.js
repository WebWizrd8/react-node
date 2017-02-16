import fs from 'fs'

module.exports = app => {
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file == "index.js") return;
    var name = file.substr(0, file.indexOf('.'))
    require('./' + name)
  })
}
