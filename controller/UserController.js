const registersUser = async (req, res) => {
    const name = req.body
    const email = req.body
    const password = req.body
    if(!name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required'  
        });
    }
    console.log(req.body.email);
    
}

export {registersUser}