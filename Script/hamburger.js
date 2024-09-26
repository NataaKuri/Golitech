const menu = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')
count = 0

menu.addEventListener('click',()=>{
    if(count == 0){
        navbar.classList += '  sticky'
        count = 1   
    }else{
        navbar.classList = 'navbar'
        count = 0
    }
})