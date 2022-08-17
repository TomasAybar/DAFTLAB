const typeShoes = require('../models/typeShoes')


const typeShoesControllers = {
    getTypeShoes: async (req, res) => {
        let typeShoe
        let error = null
        try {
            typeShoe = await typeShoes.find().populate('brand')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { typeShoe },
            success: error ? false : true,
            error: error
        })
    },
    getOnetypeShoes: async (req, res) => {
        const id = req.params.id
        /* console.log(id); */
        let typeShoe
        let error = null
        try {
            typeShoe = await typeShoes.findOne({ _id: id })
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : typeShoe,
            success: error ? false : true,
            error: error
        })
    },
    addTypeShoe: async (req, res) => {
        const { name, description } = req.body.data
        let typeShoe
        let error = null

        if (req.user.role === 'admin') {
            try {
                typeShoe = await new typeShoes({
                    name: name,
                    description: description,
                }).save()
            } catch (err) { error = err }
            res.json({
                response: error ? 'ERROR' : typeShoe,
                succes: error ? false : true,
                error: error
            })
        }

        else {
            res.json({
                success: false,
                error: error,
                message: 'Unauthorized'
            })
        }

    },
    modifyTypeShoe: async (req, res) => {
        const id = req.params.id
        const typeShoe = req.body.data
        let typeShoedb
        let error = null

        if (req.user.role === 'admin') {
            try {
                typeShoedb = await typeShoes.findOneAndUpdate({ _id: id }, typeShoe, { new: true })
            } catch (err) { error = err }
            res.json({
                response: error ? 'ERROR' : typeShoedb,
                succes: error ? false : true,
                error: error
            })
        }

        else {
            res.json({
                success: false,
                error: error,
                message: 'Unauthorized'
            })
        }
        
    },
    removeTypeShoe: async (req, res) => {
        const id = req.params.id
        let shoeType
        let error = null

        if (req.user.role === 'admin') {
            try {
                shoeType = await typeShoes.findOneAndDelete({ _id: id })
            } catch (err) {
                error = err
            }
            res.json({
                response: error ? 'ERROR' : shoeType,
                success: error ? false : true,
                error: error
            })
        }

        else {
            res.json({
                success: false,
                error: error,
                message: 'Unauthorized'
            })
        }
        
    }

}

module.exports = typeShoesControllers;