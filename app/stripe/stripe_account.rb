class StripeAccount
    
    attr_reader :account

    def initialize(account)
        account = 
    end

    def create_account
        return if account.stripe_id.present?

        Stripe::Account.create(
            type: 'custom',
            country: 'US',
            email: account.user.email,
            capabilities: {
                card_payments: { requested: true },

                # Requested Capabilities
                transfers: { requested: true },
                treasury: { requested: true }, # Treasury and card issuing allows addition of embedded finance into the application later on
                card_issuing: { requested: true }
            }

        )
        account.update(stripe_id: account.id)

    end

    def onboarding_url
        Stripe::AccountLink.create({
            account: account.stripe_id,
            refresh_url: accounts_url,
            return_url: accounts_url,
            type: 'account_onboarding',
            collect: 'eventually_due',
        })
    
    end

end