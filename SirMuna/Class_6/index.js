const toggle = document.querySelector('#Toggle')
const item = document.querySelector('#Item')
toggle.addEventListener('click', ()=> {
   item.classList.toggle('activated')
})
