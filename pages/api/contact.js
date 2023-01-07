import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function(req, res) {
    const query = req.query;
    const { interest, email, name, phone, budget, message, list, question1, question2, question3 } = query

    let fullText = ''

    if(interest == 0){
        fullText = `
            interest: Sito web <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            message: ${message} <br />
            budget: ${budget} <br />
        `
    }
    else if(interest == 1){
        fullText = `
            interest: Ecommerce <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            message: ${message} <br />
            budget: ${budget} <br />
        `
    }
    else if(interest == 2){
        fullText = `
            interest: Branding <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            message: ${message} <br />
            budget: ${budget} <br />
        `
    }
    else if(interest == 3){
        fullText = `
            interest: Marketing <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            question1: ${question1} <br />
            question2: ${question2} <br />
            question3: ${question3} <br />
        `
    }
    else if(interest == 4){
        fullText = `
            interest: Social Media <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            list: ${list} <br />
            question1: ${question1} <br />
            question2: ${question2} <br />
            question3: ${question3} <br />
        `
    }

    const data = {
        to: 'info@pegasodigitalstudio.com',
        from: 'pegasodigitalstudio@gmail.com',
        subject: `New message from ${name} - ${email}`,
        text: fullText,
        html: fullText.replace(/\r\n/g, '<br />'),
    }

    await mail.send(data)
        .catch((err) => console.log(err.response.body))

    res.status(200).json({ status: 'OK' })
}
