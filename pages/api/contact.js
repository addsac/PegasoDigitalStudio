import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
    let array = req.nextUrl.search.split('&')

    let email = array[0].replace('?', '').replace('email=', '').replaceAll('+', ' ')
    let name = array[1].replace('name=', '').replaceAll('+', ' ')
    let message = array[2].replace('message=', '').replaceAll('+', ' ')

    console.log(email)
    console.log(name)
    console.log(message)

    const data = {
        to: 'info@pegasodigitalstudio.com',
        from: 'pegasodigitalstudio@gmail.com',
        subject: `New message from ${name} - ${email}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    }

    await mail.send(data).catch((err) => console.log(err))

    res.status(200).json({ status: 'OK' })
}
