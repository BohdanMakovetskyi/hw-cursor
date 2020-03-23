export default function(passwordLength = 8) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}