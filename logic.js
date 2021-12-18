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
function updateMeter(){
 const weaknesses = calculatePasswordStrength(passwordInput.value)
 console.log(weaknesses)
}
function calculatePasswordStrength(password){
 const weaknesses = []
 weaknesses.push(lengthWeaknesses(password))
 return weaknesses
}
// All Executive Functions
function lengthWeaknesses(password){
 const psLength = password.length 
 if(psLength < 8){
     return {
         message: 'your password is short',
         deduction: 30
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
re.addEventListener('click',()=>{
    alert("this is working")
})

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::