
const Stripe = require('stripe')
const stripe = Stripe('sk_test_Bf3H1ZjnAc1piqEhBpQit2UT00PWuK1t0B');

main = async () => {

    const customer = await stripe.customers.create({
        Description = Description,
        Source = Source,
        Email = Email
    });


    console.log(customer)
}

main();