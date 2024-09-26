const button = document.querySelector('#button')

button.addEventListener('click',e=>{
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const addr = document.getElementById('address').value
    const male = document.getElementById('male')
    const female = document.getElementById('female')
    const other = document.getElementById('other')
    
    if(name === ''){
        document.getElementById('nameA').innerHTML = "Input Name*"
        return false
    }
    if(email === ''){
        document.getElementById('emailA').innerHTML = "Input Email*"
        return false
    }
    let x = -23
    for(let i = 0; i<email.length; i++){
        console.log(email[i])
        if(email[i] === '@') x = i
    }

    let y = email.length
    let ends = email.substring(x,y)
    if(ends !== '@gmail.com'){
        document.getElementById('emailA').innerHTML = "Wrong Email use @gmail.com"
        return
    }
    if(phone === ''){
        document.getElementById('phoneA').innerHTML = "Input Phone*"
        return false
    }
    if(isNaN(phone)){
        document.getElementById('phoneA').innerHTML = "Please Insert a valid Phone*"
        return false
    }
    if(addr === ''){
        document.getElementById('addressA').innerHTML = "Input Address*"
        return false
    }
    const email_length = addr.length;
    if(email_length < 10){
        document.getElementById('addressA').innerHTML = "Wrong Address*"
        return false
    }
    if(!male.checked && !female.checked && !other.checked){
        document.getElementById('genderA').innerHTML = "Pick Gender*"
        return false
    }
    alert('Registrasi Berhasil')
    window.location.reload()
})