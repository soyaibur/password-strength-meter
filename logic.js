// ....Univesal Stracture of function and others......
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here.......
const passwordMeter = document.getElementById('password-meter')
const passwordInput = document.getElementById('password-input')
const reasons = document.getElementById('reasons')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All EventListener will go undernith here...........
passwordInput.addEventListener('input',updateMeter)
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// ......All Function will go here undernith..........

// Layer 1========================
updateMeter()


function updateMeter(){
 const weaknesses = calculatePasswordStrength(passwordInput.value)
  let strength = 100
  reasons.innerHTML = ''
    weaknesses.forEach(weakness=>{
        if(weakness == null) return
        strength= strength-weakness.deduction  

        const messageElement = document.createElement('div')
        if(weakness.message == null) return
        messageElement.innerText = weakness.message
        reasons.appendChild(messageElement)
    })
    passwordMeter.style.setProperty('--strength',strength)
  
}

// Layer 2============================
function calculatePasswordStrength(password){
 const weaknesses = []
 weaknesses.push(lengthWeaknesses(password))
 weaknesses.push(lowercaseWeaknesses(password))
 weaknesses.push(uppercaseWeaknesses(password))
 
 return weaknesses
}

// Layer 3===============

function lengthWeaknesses(password){
 const psLength = password.length 
 if(psLength < 5){
     return {
         message: 'your password is short',
         deduction: 60
     }
 
    }

    if(psLength > 12){
        return{
            message: 'You may not add any password',
            deduction: 5
        }
    }

}
function lowercaseWeaknesses(password){
    return characterTypeWeaknesses(password,/[a-z]/g,'lowercase character')
}
function uppercaseWeaknesses(password){
    return characterTypeWeaknesses(password,/[A-Z]/g,'uppercase character')
}



//Layer 4==========================

function characterTypeWeaknesses(password,regex,type){
   let matches = password.match(regex) || []
   
   if(matches.length === 0 ){
       return {
           message: `Your password has no ${type}`,
           deduction: 20
       }
   }
   if(matches.length === 0 ){
       return {
           message:`Your password has no ${type}`,
           deduction: 20
        } 

   }
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::



//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// passwordMeter.addEventListener('click',()=>{
//     alert("this is working")
// })

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::