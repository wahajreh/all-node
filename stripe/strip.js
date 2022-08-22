
const stripe = require('stripe');

const customer = await stripe.customers.create({
    description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
});


console.log(customer)