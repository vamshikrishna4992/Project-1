import Subscribe from "../models/Subscribe.js";


export const Subscriber = async (req,res)=>{
    const {email} = req.body // try to print the req.body after filling the form in front-end

    try {

        const enjoy = await Subscribe.create({
            email
        });

        res.status(201).json({
            _id:enjoy.id,
            email:enjoy.email
        });

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}