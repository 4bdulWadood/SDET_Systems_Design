export function validateUserData(data){
    const {email,password} = data
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassValid = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{8,}$/.test(password)
    if(!isEmailValid){
        return "Please Enter Valid Email"
    }
    if (!/^[A-Z]/.test(password)) {
        return "Password should start with an uppercase letter";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return "Password should contain at least one special character";
    }
    if (password.length < 8) {
        return "Password should be at least 8 characters long";
    }
    return ""
}

