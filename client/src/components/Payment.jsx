import { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payment extends Component {
    render() {
        // debugger;

        return (
                <StripeCheckout
                name='Streamy'
                description='Please do not refresh this page until it finishes.'
                amount={100} 
                token={token => this.props.handleToken(token)}
               // stripeKey={import.meta.env.VITE_APP_STRIPE_KEY}>
                stripeKey={`${__STRIPE_KEY__}`}>
                <a className='px-4 py-1 text-white transition duration-500 ease-out bg-pink-200 rounded-lg hover:bg-pink-200 cursor-point text-sm font-medium'>Buy a credit</a>
              
                </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payment)