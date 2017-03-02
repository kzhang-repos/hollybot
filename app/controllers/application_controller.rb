class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def ask_holly
    reaction = HOLLYBOT.get_reaction(params[:query])
    render json: { response: reaction.present? ? reaction : "Sorry I don't understand what you just said. Ask me something else." }
  end

  def get_restaurants
    response = Yelp.client.search('San Francisco', { term: params[:query] })
    index = rand(25)
    string = "Check out #{response.businesses[index].name} in #{response.businesses[index].location.neighborhoods[0]}. If you liked this, you can leave your email in here and I’ll make sure that Kate reaches out!"
    render json: { response: string }
  end

  def contact
    ContactMailer.contact_email(params[:query]).deliver
    render json: { response: 'Thanks for leaving your email. Kate will reach out to you shortly.' }
  end
end
