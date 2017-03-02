class ContactMailer < ActionMailer::Base
  default from: "from@hollybot.com"

  def contact_email(data)
    @email = data
    mail(to: 'yrz.945@gmail.com', subject: 'contact from Hollybot')
  end
end