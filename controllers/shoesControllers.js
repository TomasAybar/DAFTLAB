const ShoesModel = require('../models/shoes');

const shoesControllers = {

    getShoes: async (req, res) => {
        let shoes;
        let error = null;

        try {
            shoes = await ShoesModel.find().populate('type', { name: 1 }).populate('brand', { name: 1 })
        }

        catch (err) {
            error = err;
            console.log(error);
        }

        res.json({
            response: error ? 'ERROR' : shoes,
            success: error ? false : true,
            error: error
        })
    },

    getOneShoe: async (req, res) => {
        const id = req.params.id;
        let shoe;
        let error = null;

        try { shoe = await ShoesModel.findOne({ _id: id }) }

        catch (err) {
            error = err;
            console.log(error);
        }

        res.json({
            response: error ? 'ERROR' : shoe,
            success: error ? false : true,
            error: error
        })
    },

    addShoe: async (req, res) => {
        const { name, brand, colorway, price, image, description, stock, type } = req.body.data

        console.log('USER', req.user.role)

        let newShoe;
        let error = null;

        if (req.user.role === 'admin') {
            try {
                newShoe = await new ShoesModel({
                    name,
                    brand,
                    colorway,
                    price,
                    image,
                    description,
                    stock,
                    type
                }).save()

                // res.json({ success: true, response: { newShoe }, message: 'Product added' })

            } catch (err) {
                error = err;
            }

            res.json({
                response: error ? 'ERROR' : newShoe,
                success: error ? false : true,
                error: error,
                message: 'Product added'
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

    modifyShoe: async (req, res) => {
        const id = req.params.id;
        const shoe = req.body.data;

        let shoeDB;
        let error = null;

        if (req.user.role === 'admin') {
            try {
                shoeDB = await ShoesModel.findOneAndUpdate({ _id: id }, shoe, { new: true })
            } catch (err) {
                error = err;
            }

            res.json({
                response: error ? 'ERROR' : shoeDB,
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


    },

    removeShoe: async (req, res) => {
        const id = req.params.id;
        let shoe;
        let error = null;

        if (req.user.role === 'admin') {
            try {
                shoe = await ShoesModel.findOneAndDelete({ _id: id })
                // res.json({ success: true, response: { shoe }, message: 'remove product' })
            } catch (err) {
                error = err;
            }

            res.json({
                response: error ? 'ERROR' : shoe,
                success: error ? false : true,
                error: error,
                message: 'remove product'
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

    getShoesByType: async (req, res) => {
        const id = req.params.id
        let shoe
        let error = null
        try {
            shoe = await ShoesModel.find({ type: id }).populate('type', { name: 1 }).populate('brand', { name: 1 })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : (shoe),
            success: error ? false : true,
            error: error
        })
    },

    getShoesByBrand: async (req, res) => {
        const id = req.params.id
        let shoe
        let error = null
        try {
            shoe = await ShoesModel.find({ brand: id }).populate('type', { name: 1 }).populate('brand', { name: 1 })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : (shoe),
            success: error ? false : true,
            error: error
        })
    },



}

module.exports = shoesControllers; // los llamo en rutas