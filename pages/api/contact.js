import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
    const query = req.query;
    const { email, name, message } = query

    const data = {
        to: 'info@pegasodigitalstudio.com',
        from: 'pegasodigitalstudio@gmail.com',
        subject: `New message from ${name} - ${email}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    }

    await mail.send(data)
        .catch((err) => console.log(err.response.body))

    res.status(200).json({ status: 'OK' })
}
