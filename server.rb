require 'sinatra'
require 'stripe'

# This is your test secret API key.
Stripe.api_key = 'sk_test_51PDe70FP63jGg694moqCnde4b4dKzMgZzMxIJeyeUUo4FdQ4HMj9Rs2OA9PBdIiEE79maARTTHI8cu6nPpU5c3rK00nyqfALSW'

Stripe.api_version = '2023-10-16'

Stripe::Checkout::Session.create({
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {name: 'T-shirt'},
        unit_amount: 1000,
      },
      quantity: 1,
    },
  ],
  payment_intent_data: {
    application_fee_amount: 123,
    transfer_data: {destination: '{{CONNECTED_ACCOUNT_ID}}'},
  },
  mode: 'payment',
  success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
})
# set :static, true
# set :port, 4242
# set :public_folder, 'dist'

# post '/account_session' do
#   content_type 'application/json'

#   body = JSON.parse(request.body.read)
#   connected_account_id = body["account"]

#   begin
#     account_session = Stripe::AccountSession.create({
#       account: connected_account_id,
#       components: {
#         account_onboarding: {enabled: true},
#       }
#     })

#     {
#       client_secret: account_session[:client_secret]
#     }.to_json
#   rescue => error
#     puts "An error occurred when calling the Stripe API to create an account session: #{error.message}";
#     return [500, { error: error.message }.to_json]
#   end
# end

# post '/account' do
#   content_type 'application/json'

#   begin
#     account = Stripe::Account.create({
#       controller: {
#         stripe_dashboard: {
#           type: "express",
#         },
#         fees: {
#           payer: "application"
#         },
#         losses: {
#           payments: "application"
#         },
#       },
#     })

#     {
#       account: account[:id]
#     }.to_json
#   rescue => error
#     puts "An error occurred when calling the Stripe API to create an account: #{error.message}";
#     return [500, { error: error.message }.to_json]
#   end
# end

# get '/*path' do
#   send_file File.join(settings.public_folder, 'index.html')
# end