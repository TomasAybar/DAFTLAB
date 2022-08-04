const brandShoes = require('../models/brandShoes')


const brandShoesControllers = {
    getBrandShoes: async(req, res) => {
        let brandShoe
        let error = null
        try{
            brandShoe = await brandShoes.find().populate('type')
        } catch(err) {error = err}
        res.json({
            response: error ? 'ERROR' : { brandShoe },
            success: error ? false : true,
            error : error
        })
    },
    addBrandShoe: async (req, res) => {
        const {name, description} = req.body.data
        let brandShoe
        let error = null
        try{
            brandShoe = await new brandShoes ({
                name:name,
                description: description
            }).save()
        }catch(err){error = err}
        res.json({
            response: error ? 'ERROR' : brandShoe,
            succes: error ? false : true,
            error : error
        })
    }

}

module.exports = brandShoesControllers;