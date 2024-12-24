const Prisma = require('../prisma/prisma')

exports.list = async (req, res) => {
    try{
        const user = await Prisma.users.findMany()
        res.send(user)
    }catch(err){
        console.log(err)
        res.status(500).json({ Message: err.message })
    }
}

exports.read = async (req, res) => {
    try{
        res.send('read controller')
    }catch(err){
        console.log(err)
        res.status(500).json({ Message: err.message })
    }
}

exports.create = async (req, res) => {
    try{
        const { username, password, email, phone_number, role } = req.body
        const created = await Prisma.users.create({
            data:{
                username: username,
                password: password,
                email: email,
                phone_number: phone_number,
                role: role
            }
        })
        res.send(created)
    }catch(err){
        console.log(err)
        res.status(500).json({ Message: err.message })
    }
}

exports.update = async (req, res) => {
    try{
        res.send('update controller')
    }catch(err){
        console.log(err)
        res.status(500).json({ Message: err.message })
    }
}

exports.remove = async (req, res) => {
    try{
        res.send('remove controller')
    }catch(err){
        console.log(err)
        res.status(500).json({ Message: err.message })
    }
}