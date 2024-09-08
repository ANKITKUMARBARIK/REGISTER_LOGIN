let signin = document.querySelector('#signin');
let namechange = document.querySelector('#namechange');
let account = document.querySelector('#account');
let butt = document.querySelector('#butt');
let title = document.querySelector('#title');
let register = document.querySelector('#register');
let login = document.querySelector('#login');

let currMode = "register";
signin.addEventListener("click", () => {
    if (currMode === "register") {
        currMode = "login";
        namechange.style.position = 'absolute';
        namechange.style.zIndex = '-1';
        signin.innerHTML = "Register here";
        account.innerHTML = "Don't have an account?&nbsp;&nbsp;";
        butt.innerHTML = "Sign In";
        title.innerHTML = "Sign in to your account";
        register.style.backgroundColor = '#eaeaea';
        register.style.color = 'grey';
        login.style.backgroundColor = 'white';
        login.style.color = 'black';
    }
    else {
        currMode = "register";
        namechange.style.position = 'relative';
        namechange.style.zIndex = '1';
        signin.innerHTML = "Sign in";
        account.innerHTML = "Already have an account?&nbsp;&nbsp;";
        butt.innerHTML = "Register";
        title.innerHTML = "Create a new account";
        register.style.backgroundColor = 'white';
        register.style.color = 'black';
        login.style.backgroundColor = '#eaeaea';
        login.style.color = 'grey';
    }
    console.log(`Mode : ${currMode}`);
});
