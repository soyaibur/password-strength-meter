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

// All Functions calling
updateMeter()


function updateMeter(){
 const weaknesses = calculatePasswordStrength(passwordInput.value)
  let strength = 100
    weaknesses.forEach(weakness=>{
        if(weakness == null) return
        
        strength= strength-weakness.deduction  
        
    })
    passwordMeter.style.setProperty('--strength',strength)
  
}

function calculatePasswordStrength(password){
 const weaknesses = []
 weaknesses.push(lengthWeaknesses(password))
 return weaknesses
}

// All Executive Functions
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

// :::::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
passwordMeter.addEventListener('click',()=>{
    alert("this is working")
})

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::