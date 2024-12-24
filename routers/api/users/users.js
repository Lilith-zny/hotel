const express = require('express')
const router = express.Router()

// controller
const { list, read, create, update, remove } = require('../../../controllers/users')

router.get('/', list)

router.get('/:userid', read)

router.post('/', create)

router.put('/:userid', update)

router.delete('/:userid', remove)



module.exports = router