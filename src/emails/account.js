const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name)  => {
    sgMail.send({
        to: email,
        from: 'test@test.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know about the app.`
    })
};

const sendCancellationEmail = (email, name)  => {
    sgMail.send({
        to: email,
        from: 'test@test.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Let us know why you wanna leave.`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
