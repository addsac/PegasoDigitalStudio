import mail from '@sendgrid/mail'

var Mailchimp = require('mailchimp-api-v3')

export default async function handler(req, res) {
    let {
        api_key,
        list_id,
        email,
        username,
        rag_soc,
        data_reg,
        abbonato,
        codice_ditta,
        phone,
        scadenza_abbonamento,
        data_ins,

        // subscribe
        tipo_abbonamento,

        // onboarding
        primo_rapp,
        onb_rapportini,
        onb_interventi,
        scaricata_app,
        onb_rapp_gg,
        onb_doc,
        onb_contratti,
        onb_customers,
        mese_gratis,
    } = req.query

    var mailchimp = new Mailchimp(api_key)

    // Validity checks
    let error = []

    if(!email || email.trim() == '') {
        // res.status(500).json({ error: 'Email is empty' })
        error.push('Email is empty')
    }
    /* if(!username || username.trim() == '') {
        // res.status(500).json({ error: 'Username is empty' })
        error.push('Username is empty')
    }
    if(!codice_ditta || codice_ditta.trim() == '') {
        // res.status(500).json({ error: 'Codice ditta is empty' })
        error.push('Codice ditta is empty')
    }
    if(!data_reg || data_reg.trim() == '') {
        // res.status(500).json({ error: 'Data registrazione is empty' })
        error.push('Data registrazione is empty')
    }
    if(!data_ins || data_ins.trim() == '') {
        // res.status(500).json({ error: 'Data inserimento is empty' })
        error.push('Data inserimento is empty')
    }
    if(!abbonato || abbonato.trim() == '') {
        // res.status(500).json({ error: 'Abbonato is empty' })
        abbonato = 'No'
    }
    if(abbonato.trim() != 'Si' && abbonato.trim() != 'No') {
        // res.status(500).json({ error: 'Abbonato is not valid' })
        error.push('Abbonato is not valid')
    } */

    if(error.length > 0) {
        // sending the email to alert the error
        mail.setApiKey(process.env.SENDGRID_API_KEY)

        let fullText = `
            EMAIL: ${email},\n
            USERNAME: ${username},\n
            RAGSOC: ${rag_soc},\n
            DATAREG: ${data_reg},\n
            ABBON: ${abbonato},\n
            CODDITTA: ${codice_ditta},\n
            PHONE: ${phone},\n
            SCADABB: ${scadenza_abbonamento},\n
            TIPOABB: ${tipo_abbonamento},\n
            DATAINS: ${data_ins},\n
            -
            Motivo di error: ${error.join(', ')}
        `
        
        const data = {
            to: 'citton.massimo6@gmail.com',
            from: 'pegasodigitalstudio@gmail.com',
            cc: ['info@pegasodigitalstudio.com'],
            subject: `Errore mailchimp api - ${username} - ${email}`,
            text: fullText,
            html: fullText.replace(/\r\n/g, '<br />'),
        }

        await mail.send(data)
            .catch((err) => console.log(err.response.body))

        /* return error */
        res.status(500).json({ error: error.join(', ') })
        
        return
    }

    // control if email is not single but is a list with , as separator
    let emailList = email.split(',')
    // trim the results
    emailList.forEach((item, index) => {
        emailList[index] = item.trim()
    })

    if(emailList.length > 1) {
        for(let i = 0; i < emailList.length; i++) {
            // Sending the email
            const payload = {
                email_address: emailList[i],
                status: 'subscribed',
                merge_fields: {}
            };
            
            if (typeof username != 'undefined') {
                payload.merge_fields.USERNAME = username;
            }
            if (typeof rag_soc != 'undefined') {
                payload.merge_fields.RAGSOC = rag_soc;
            }
            if (typeof data_reg != 'undefined') {
                payload.merge_fields.DATAREG = data_reg;
            }
            if (typeof abbonato != 'undefined') {
                payload.merge_fields.ABBON = abbonato;
            }
            if (typeof codice_ditta != 'undefined') {
                payload.merge_fields.CODDITTA = codice_ditta;
            }
            if (typeof phone != 'undefined') {
                payload.merge_fields.PHONE = phone;
            }
            if (typeof scadenza_abbonamento != 'undefined') {
                payload.merge_fields.SCADABB = scadenza_abbonamento;
            }
            if (typeof tipo_abbonamento != 'undefined') {
                payload.merge_fields.TIPOABB = tipo_abbonamento;
            }
            if (typeof data_ins != 'undefined') {
                payload.merge_fields.DATAINS = data_ins;
            }
            if (typeof primo_rapp != 'undefined') {
                payload.merge_fields.PRIMORAPP = primo_rapp;
            }
            if (typeof onb_rapportini != 'undefined') {
                payload.merge_fields.ONBRAPP = onb_rapportini;
            }
            if (typeof onb_interventi != 'undefined') {
                payload.merge_fields.ONBINT = onb_interventi;
            }
            if (typeof scaricata_app != 'undefined') {
                payload.merge_fields.DWNLAPP = scaricata_app;
            }
            if (typeof onb_rapp_gg != 'undefined') {
                payload.merge_fields.ONBRAPPGG = onb_rapp_gg;
            }
            if (typeof onb_doc != 'undefined') {
                payload.merge_fields.ONBDOC = onb_doc;
            }
            if (typeof onb_contratti != 'undefined') {
                payload.merge_fields.ONBCONTR = onb_contratti;
            }
            if (typeof onb_customers != 'undefined') {
                payload.merge_fields.ONBCMERS = onb_customers;
            }
            if (typeof mese_gratis != 'undefined') {
                payload.merge_fields.MESEGRATIS = mese_gratis;
            }
            
            mailchimp
                .put(`/lists/${list_id}/members/${emailList[i]}`, payload)
                .then(function (results) {
                    console.log(results)
                    /* return result */
                    res.status(200).json({ results })
                })
                .catch(async function (err) {
                    console.log(err)

                    // sending the email to alert the error
                    mail.setApiKey(process.env.SENDGRID_API_KEY)

                    let fullText = `
                        EMAIL: ${emailList[i]},\n
                        USERNAME: ${username},\n
                        RAGSOC: ${rag_soc},\n
                        DATAREG: ${data_reg},\n
                        ABBON: ${abbonato},\n
                        CODDITTA: ${codice_ditta},\n
                        PHONE: ${phone},\n
                        SCADABB: ${scadenza_abbonamento},\n
                        TIPOABB: ${tipo_abbonamento},\n
                        DATAINS: ${data_ins},\n
                    -
                    Motivo di error: ${err}
                    `
                    
                    const data = {
                        to: 'citton.massimo6@gmail.com',
                        from: 'pegasodigitalstudio@gmail.com',
                        cc: ['info@pegasodigitalstudio.com'],
                        subject: `Errore mailchimp api - ${username} - ${emailList[i]}`,
                        text: fullText,
                        html: fullText.replace(/\r\n/g, '<br />'),
                    }

                    await mail.send(data)
                        .catch((err) => console.log(err.response.body))

                    /* return error */
                    res.status(500).json({ error: err })
                })
        }
    }
    else{
        // Sending the email
        const payload = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {}
        };
        
        if (typeof username != 'undefined') {
            payload.merge_fields.USERNAME = username;
        }
        if (typeof rag_soc != 'undefined') {
            payload.merge_fields.RAGSOC = rag_soc;
        }
        if (typeof data_reg != 'undefined') {
            payload.merge_fields.DATAREG = data_reg;
        }
        if (typeof abbonato != 'undefined') {
            payload.merge_fields.ABBON = abbonato;
        }
        if (typeof codice_ditta != 'undefined') {
            payload.merge_fields.CODDITTA = codice_ditta;
        }
        if (typeof phone != 'undefined') {
            payload.merge_fields.PHONE = phone;
        }
        if (typeof scadenza_abbonamento != 'undefined') {
            payload.merge_fields.SCADABB = scadenza_abbonamento;
        }
        if (typeof tipo_abbonamento != 'undefined') {
            payload.merge_fields.TIPOABB = tipo_abbonamento;
        }
        if (typeof data_ins != 'undefined') {
            payload.merge_fields.DATAINS = data_ins;
        }
        if (typeof primo_rapp != 'undefined') {
            payload.merge_fields.PRIMORAPP = primo_rapp;
        }
        if (typeof onb_rapportini != 'undefined') {
            payload.merge_fields.ONBRAPP = onb_rapportini;
        }
        if (typeof onb_interventi != 'undefined') {
            payload.merge_fields.ONBINT = onb_interventi;
        }
        if (typeof scaricata_app != 'undefined') {
            payload.merge_fields.DWNLAPP = scaricata_app;
        }
        if (typeof onb_rapp_gg != 'undefined') {
            payload.merge_fields.ONBRAPPGG = onb_rapp_gg;
        }
        if (typeof onb_doc != 'undefined') {
            payload.merge_fields.ONBDOC = onb_doc;
        }
        if (typeof onb_contratti != 'undefined') {
            payload.merge_fields.ONBCONTR = onb_contratti;
        }
        if (typeof onb_customers != 'undefined') {
            payload.merge_fields.ONBCMERS = onb_customers;
        }
        if (typeof mese_gratis != 'undefined') {
            payload.merge_fields.MESEGRATIS = mese_gratis;
        }
        
        mailchimp
            .put(`/lists/${list_id}/members/${email}`, payload)
            .then(function (results) {
                console.log(results)
                /* return result */
                res.status(200).json({ results })
            })
            .catch(async function (err) {
                console.log(err)

                // sending the email to alert the error
                mail.setApiKey(process.env.SENDGRID_API_KEY)

                let fullText = `
                    EMAIL: ${email},\n
                    USERNAME: ${username},\n
                    RAGSOC: ${rag_soc},\n
                    DATAREG: ${data_reg},\n
                    ABBON: ${abbonato},\n
                    CODDITTA: ${codice_ditta},\n
                    PHONE: ${phone},\n
                    SCADABB: ${scadenza_abbonamento},\n
                    TIPOABB: ${tipo_abbonamento},\n
                    DATAINS: ${data_ins},\n
                -
                Motivo di error: ${err}
                `
                
                const data = {
                    to: 'citton.massimo6@gmail.com',
                    from: 'pegasodigitalstudio@gmail.com',
                    cc: ['info@pegasodigitalstudio.com'],
                    subject: `Errore mailchimp api - ${username} - ${email}`,
                    text: fullText,
                    html: fullText.replace(/\r\n/g, '<br />'),
                }

                await mail.send(data)
                    .catch((err) => console.log(err.response.body))

                /* return error */
                res.status(500).json({ error: err })
            })
    }
}
