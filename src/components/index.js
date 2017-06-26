const components = {}

let req = require.context('./', true, /^(.*\.(vue$))[^.]*$/igm);
req.keys().forEach(function(key) {
  let _key = key.replace('./', '').replace('.vue', '')
  // 文件夹处理
  _key = _key.replace(/\//g, '-')
  _key && components[_key] = req(key);
});

module.exports = components
