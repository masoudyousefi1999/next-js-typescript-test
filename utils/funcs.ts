import { compare, hash } from "bcrypt";




const hashPassword = async (password : string) => {
    const hashedPassword =  await hash(password,12)
    return hashedPassword
}

const comparePassword = async (password : string, hashedPassword : string) => {
    const isEqualPassword =  await compare(password,hashedPassword)
    return isEqualPassword;
}


export {hashPassword, comparePassword}