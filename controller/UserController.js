import User from '../model/UserModel.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

const registersUser = async (req, res) => {
    const name = req.body
    const email = req.body
    const password = req.body
    if(!name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required'  
        });
    }
    try {
        const existingUser = await User.findOne({email})
        if (existingUser) {
            return res.status(400).json({
                message: 'User already Exist'
            })
        }

        const user = await User.create({
            name,
            email,
            password
        });
        console.log(user);
        
        if (!user) {
            return res.status(400).json({
                message: 'Users not registred'
            })
        }

        const token = crypto.randomBytes(32).toString('hex')
        console.log(token);
        user.verificationToken = token

        await user.save()

        //Send mail to verify to the users
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASS,
            },
          });


        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Please click this link below: ${process.env.BASE_URL}/api/v1/users/verify/${token}`
        }

        await transporter.sendMail(mailOption)

        res.status(201).json({
            message: 'User Registred Successfully',
            success: true
        })
        
    } catch (error) {
        res.status(400).json({
            message: 'User not  Registred',
            error,
            success: false
        })        
    }    
}

const verifyUser = async (req, res) => {
    
}

export {registersUser}