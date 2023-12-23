const passwordBox = document.querySelector('#Password')

const length = 12
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbols = '@#$%^&()_+~|}{[]></-='

const allChart = upperCase + lowerCase + number + symbols

function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length )]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length )]
    password += number[Math.floor(Math.random() * number.length )]
    password += symbols[Math.floor(Math.random() * symbols.length )]
    
    while(length >  password.length){
        password += allChart[Math.floor(Math.random() * allChart.length )]
     }
     passwordBox.value = password; 
}

function copyPasword(){
    passwordBox.select();
    document.execCommand('copy')

}