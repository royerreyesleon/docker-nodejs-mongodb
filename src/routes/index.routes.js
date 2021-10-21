const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Hello world desde docker, con nodemon, working...')
})

module.exports = router