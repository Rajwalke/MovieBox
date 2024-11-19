
export const validation=(email,password)=>{
    const isemailvalid=/^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isemailvalid){
        return "Email is Invalide";
    }
    else if(!ispasswordvalid) {
        return "Password is Invalide (atleast 1 captial letter,symbol and number)";
    }
    return null;
}