function loginPage(){
    let login_email = document.getElementById("email").value.trim();
    let login_password = document.getElementById("Pass").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = users.find(user => user.email === login_email && user.password === login_password)

    if(foundUser){
        console.log("Login Succesfull",foundUser);
        window.location.href = "start_pg.html";
    } else{
        console.log("Invalid login attempt");
    }
}

let button = document.getElementById("login")
button.addEventListener("click", loginPage);