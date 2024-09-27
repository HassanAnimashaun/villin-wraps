const openBtn = document.querySelector('#open-cta');
const form = document.querySelector('#form-container');

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    form.style.display = 'flex';
})