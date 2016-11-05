import Ember from 'ember';
import Env from '../config/environment';

let handler = StripeCheckout.configure({
  key: Env.stripePerishableKey,
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    console.log(token)
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
})

export default Ember.Route.extend({
  actions: {
    makePurchase() {
      handler.open({
        name: 'michaelsoolee',
        description: '2 widgets',
        amount: 2000
      });
    }
  }
});
