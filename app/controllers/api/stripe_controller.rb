class Api::StripeController < ApplicationController
    def create_checkout_session
        session = Stripe::Checkout::Session.create({
          line_items: [{
            price_data: {
              currency: 'usd',
              product_data: { name: 'T-shirt' },
              unit_amount: 1000,
            },
            quantity: 1,
          }],
          payment_intent_data: {
            application_fee_amount: 123,
            transfer_data: { destination: '{{CONNECTED_ACCOUNT_ID}}' },
          },
          mode: 'payment',
          success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
        })
    
        render json: { message: 'Checkout session created successfully.', session_id: session.id }
      end
end
