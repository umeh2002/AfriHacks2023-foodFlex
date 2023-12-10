import joi from "joi"


const regex = 
/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,33}$/;

export const registerUserValidator = joi.object({
    userName: joi.string().required(),
    email: joi.string().required().email().trim().lowercase(),
    phoneNumber:joi.number().required,
    BVN:joi.number().required(),
    password:joi.string().pattern(RegExp(regex)).required(),
    confirm:joi.ref("password")
})

export const signInUserValidator = joi.object({
    email: joi.string().required().email().trim().lowercase(),
    password:joi.string().pattern(RegExp(regex)).required()
})