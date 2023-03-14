let focus = (event) => {

    event.currentTarget.classList.remove('err_border');

    event.currentTarget.nextElementSibling.style.display = 'none';

    switch(event.srcElement.id)
    {
        case 'email':
            event.currentTarget.setAttribute('placeholder', 'Email Address');
            break;
            case 'name':
                event.currentTarget.setAttribute('placeholder', 'First Name');
                break;
                case 'last':
                    event.currentTarget.setAttribute('placeholder', 'Last Name');
                    break;
                    case 'password':
                        event.currentTarget.setAttribute('placeholder', 'Password');
                        break;
                        default:
                            console.log('Error!');
    }
   
}

let check = () => {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(name.value.length===0)
    {
        document.querySelector('.err_name').style.display = 'inline-block';
        name.classList.add('err_border');
        name.setAttribute('placeholder', '');
    }
    
    if(last.value.length===0)
    {
        document.querySelector('.err_last').style.display = 'inline-block';
        last.classList.add('err_border');
        last.setAttribute('placeholder', '');
    }
    
    if(email.value.length===0 || !(email.value.match(validRegex)))
    {
        document.querySelector('.err_email').style.display = 'inline-block';
        email.classList.add('err_border');
        email.setAttribute('placeholder', 'email@example/com');
    }
    
    if(password.value.length===0)
    {
        document.querySelector('.err_password').style.display = 'inline-block';
        password.classList.add('err_border');
        password.setAttribute('placeholder', '');
    }
    
}

let name = document.querySelector('#name');
let last = document.querySelector('#last');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

name.addEventListener('click', focus);
last.addEventListener('click', focus);
email.addEventListener('click', focus);
password.addEventListener('click', focus);

document.querySelector('button').addEventListener('click', check)