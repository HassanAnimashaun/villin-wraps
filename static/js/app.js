const openBtn = document.querySelector('#open-cta');
const form = document.querySelector('#form-cta');

openBtn.addEventListener('click', () => {
    openBtn.classList.add('d-none');
    form.classList.remove('d-none');
});