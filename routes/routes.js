const Router = require('express').Router();
const passport = require('../config/passport')
const userValidator = require('../config/validator') //Requiero validador


// SHOES
const shoesControllers = require('../controllers/shoesControllers');
const { getShoes, getOneShoe, addShoe, modifyShoe, removeShoe, getShoesByType, getShoesByBrand } = shoesControllers;

Router.route('/shoes')
    .get(getShoes)
    .post(passport.authenticate('jwt', { session: false }), addShoe)

Router.route('/shoes/:id')
    .get(getOneShoe)
    .put(passport.authenticate('jwt', { session: false }), modifyShoe)
    .delete(passport.authenticate('jwt', { session: false }), removeShoe)

Router.route('/shoesByType/:id')
    .get(getShoesByType)

Router.route('/shoesByBrand/:id')
    .get(getShoesByBrand)


// USERS
const userControllers = require('../controllers/userControllers')
const { signUpUsers, loginUser, verifyEmail, verifyToken, logOut, paypalEmail } = userControllers

Router.route('/logOut')
    .post(logOut)

Router.route('/signUp')
    .post(userValidator, signUpUsers)

Router.route('/email')
    .post(paypalEmail)

Router.route('/login')
    .post(loginUser)

Router.route('/verify/:string')
    .get(verifyEmail)

Router.route('/logintoken')
    .get(passport.authenticate('jwt', { session: false }), verifyToken)

Router.route('/email')
    .post(paypalEmail)


//TYPE SHOES
const shoestypeControllers = require('../controllers/shoestypeControllers');
const { getTypeShoes, getOnetypeShoes, addTypeShoe, modifyTypeShoe, removeTypeShoe } = shoestypeControllers;

Router.route('/shoesType')
    .get(getTypeShoes)
    .post(passport.authenticate('jwt', { session: false }), addTypeShoe)

Router.route('/shoesType/:id')
    .delete(passport.authenticate('jwt', { session: false }), removeTypeShoe)
    .put(passport.authenticate('jwt', { session: false }), modifyTypeShoe)
    .get(getOnetypeShoes)


//BRAND SHOES
const brandShoesControllers = require('../controllers/brandShoesControllers');
const { getBrandShoes, addBrandShoe } = brandShoesControllers;

Router.route('/brandShoes')
    .get(getBrandShoes)
    .post(passport.authenticate('jwt', { session: false }), addBrandShoe)


module.exports = Router // lo llamo en server.js