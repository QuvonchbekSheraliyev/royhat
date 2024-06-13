const btn = document.getElementById('USERS')
const closebtn = document.getElementById('close')
const modalopen = document.getElementById('modal')


btn.addEventListener('click' , () =>
{
modalopen.classList.toggle('hidden')

})
closebtn.addEventListener('click' , () => {
    modalopen.classList.toggle('hidden')
})