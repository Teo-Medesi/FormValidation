// upon submition, check if forms are valid
// input fields can't be empty
// password must be more than 8 charachters, can't have spaces, must have numbers and uppercase characters
// email must be valid, i.e. it must exist 



function isPasswordValid(password)
{
    const validExpression = /(?=[A-Z]+[a-z]+\d)[A-Za-z\d]{8,}/;

    if(validExpression.test(password) == true && /\s/.test(password) == false)
    {
        return true;
    }

    return false;

}

function isEmailValid(email)
{
    const validExpression = /([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([\.a-z]+)?/i;

    if(validExpression.test(email) == true)
    {
        return true;
    }

    return false;
}


function displayPasswordErrorMessageSignUp(password)
{
    const elements = document.getElementsByClassName("error-text-password-signup");
     
    if(password.length == 0)
    {
        for (element of elements)
        {
            element.classList.remove("inactive");
            element.innerHTML = "Please enter your password.";
        }
        return;
    }
    else if(/.{8,}/.test(password) == false) // if password is shorter than 8 characters
    {
        for (element of elements)
        {
            element.classList.remove("inactive");
            element.innerHTML = "Password must be longer than 8 characters.";
        }
        return;
    }       
    else if(/\d/.test(password) == false) // if password doesn't contain any digits
    {
        for (element of elements)
        {
            element.classList.remove("inactive");
            element.innerHTML = "Password must contain digits.";
        }
        return;
    }       
    else if(/\s/.test(password) == true) // if password contains white space
    {
        for (element of elements)
        {
            element.classList.remove("inactive");
            element.innerHTML = "Password can't contain white space.";
        }
        return;
    }       
    else if(/[A-Z]/.test(password) == false) // if password doesn't contain uppercase characters
    {
        for (element of elements)
        {
            element.classList.remove("inactive");
            element.innerHTML = "Password must contain atleast one uppercase character";
        }
    }
}

function displayEmailErrorMessageSignUp(email) 
{

    const elements = document.getElementsByClassName("error-text-email-signup");

    if(email.length == 0)
    {
        for (element of elements)
        {
            element.classList.remove("inactive");
            element.innerHTML = "Please enter your email.";
        }

        return;
    }
    else {
        for (element of elements)
        {
            element.classList.remove("inactive");
            element.innerHTML = "Invalid email adress.";
        }
    }


}

function signUp(emailId, passwordId) {
    let email = document.getElementById(emailId).value;
    let password = document.getElementById(passwordId).value;

    // removes error texts if present
    for (element of document.querySelectorAll("[class^='error-text']"))
    {
        if(!element.classList.contains("inactive"))
        {
            element.classList.add("inactive");
        }
    }

    if (isEmailValid(email) == true && isPasswordValid(password) == true)
    {
        // do something
    }
    else {
        if(isEmailValid(email) == false)
        {
            displayEmailErrorMessageSignUp(email);
        }
        
        if(isPasswordValid(password) == false)
        {
            displayPasswordErrorMessageSignUp(password);
        }
    }


}

function logIn(emailId, passwordId) {
    let email = document.getElementById(emailId).value;
    let password = document.getElementById(passwordId).value;

}

