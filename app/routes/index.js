import Ember from 'ember';
import Env from '../config/environment';

let handler = StripeCheckout.configure({
  key: Env.stripePerishableKey,
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    Ember.$.ajax({
      url: '/api/monies',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({ token: token.id }),
      success: function (jsonData) {
        console.log(jsonData)
      },
      error: function () {
        alert('invalid charge.')
      }
    })
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
