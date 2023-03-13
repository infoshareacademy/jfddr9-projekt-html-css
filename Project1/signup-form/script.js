let check = () => {
    let name = document.querySelector('#name');
    let last = document.querySelector('#last');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(name.value.length===0)
    {
        document.querySelector('.err_name').style.display = 'inline-block';
        name.classList.add('err_border');
    }
    else {
        document.querySelector('.err_name').style.display = 'none';
        name.classList.remove('err_border');
    }
    if(last.value.length===0)
    {
        document.querySelector('.err_last').style.display = 'inline-block';
        last.classList.add('err_border');
    }
    else {
        document.querySelector('.err_last').style.display = 'none';
        last.classList.remove('err_border');
    }
    if(email.value.length===0 || !(email.value.match(validRegex)))
    {
        document.querySelector('.err_email').style.display = 'inline-block';
        email.classList.add('err_border');
    }
    else {
        document.querySelector('.err_email').style.display = 'none';
        email.classList.remove('err_border');
    }
    if(password.value.length===0)
    {
        document.querySelector('.err_password').style.display = 'inline-block';
        password.classList.add('err_border');
    }
    else {
        document.querySelector('.err_password').style.display = 'none';
        password.classList.remove('err_border');
    }
}

document.querySelector('button').addEventListener('click', check)