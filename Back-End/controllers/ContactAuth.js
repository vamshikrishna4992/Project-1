import Contact from "../models/Contact.js";

export const contactUs = async (req,res)=>{
    const {
        firstName,
        lastName,
        phoneAreaCode,
        phoneNumber,
        email,
        companyName,
        description,} = req.body // try to print the req.body after filling the form in front-end

    try {
        const userExists = await Contact.findOne({email});
        if(userExists){
            return res.status(400).json({message:'User Already exists'});
        }

        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password,salt);

        const user = await Contact.create({
            firstName,
            lastName,
            phoneAreaCode,
            phoneNumber,
            email,
            companyName,
            description,
        });

        res.status(201).json({
            _id:user.id,
            firstName:user.firstName,
            lastName:user.lastName,
            phoneAreaCode:user.phoneAreaCode,
            phoneNumber:user.phoneNumber,
            email:user.email,
            companyName:user.companyName,
            description:user.description,
        });

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}