const polka = require('polka')
const { json } = require('@polka/parse')
const user = require('./routes/user')
const { response } = require('./util/response');
const PORT = 3333

polka()
  .use(json())
  .use('users', user)
  .get('/', (req, res) => response(res, { msg: "it's Work!!!" }))
  .listen(PORT, err => {
    if (err) return `> error on server`
    console.log(`> running on localhost:${PORT}`)
  })