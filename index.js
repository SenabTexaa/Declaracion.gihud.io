const yesBtn=document.querySelector('#yesBtn')
yesBtn.addEventListener('click',function(){

alert('SABIA QUE DIRIAS QUE SI ')
alert('ME HACES MUY FELIZ ')

})

const noBtn=document.querySelector('#noBtn')
noBtn.addEventListener('mouseover',function(){

const randonX = parseInt(Math.random()*100)
const randonY = parseInt(Math.random()*100)
noBtn.style.setProperty('top',randonX+'%')
noBtn.style.setProperty('left',randonY+'%')

noBtn.style.setProperty('transform','translate(-${randomX}%, -${randomX}%)');


})