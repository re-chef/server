const User = require('../model/user')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const jwt = require('jsonwebtoken')
require('dotenv').config()

class Controller {
    static login(req,res) {
        let logged = ""
        client.verifyIdToken({
            idToken : req.body.id_token,
            audience : process.env.CLIENT_ID })
            .then(response => {
                logged = response.payload
                return User.findOne({ email: logged.email })

            })
            .then(data => {
                if (data) {
                    res.status(200).json({
                        message: 'user succesfully logged',
                        token: jwt.sign({
                            id: data.id,
                            email: data.email
                        }, process.env.JWTSECRET), data: data
                    })
                } else {
                    return User.create(
                        {
                            first_name: logged.given_name,
                            last_name: logged.family_name,
                            email: logged.email,
                        }
                    )
                    .then(data => {
                        res.status(201).json({
                            message: 'user created',
                            token: jwt.sign({
                                id: logged.id,
                                email: logged.email
                            }, process.env.JWTSECRET), data: data
                        })
                    })
                }
            })
            .catch(err => {
                res.status(err).json(err)
            })
    }
}

module.exports = Controller