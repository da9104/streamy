const dotenv = require('dotenv')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const requireLogin = require('../middlewares/requireLogin')

dotenv.config();

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in.' })
    }    

    const charge = await stripe.charges.create({
            amount: 100,
            currency: 'usd',
            description: '',
            source: req.body.id,
        })
        req.user.credits += 1
        const user = await req.user.save()
        // console.log(charge)
        res.send(user)
    })
}