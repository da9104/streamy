const dotenv = require('dotenv')
const stripe = require('stripe')(process.env.VITE_APP_SECRET_KEY)
const requireLogin = require('../middlewares/requireLogin')
dotenv.config();
// stripe.setPublishableKey('PUBLISHABLE_KEY');

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
         res.send(user)
    })
}