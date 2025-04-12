function signup(){
    let fullname = document.getElementById("name").value.trim();
    let email = document.getElementById("mail").value.trim();
    let password = document.getElementById("Password").value.trim();
    let checkbox = document.getElementById("accept");


    if(fullname == "" || email == "" || password == "" ){
        alert ("Enter your details");
        return;
    }
    let newUser = {name: fullname, email:email, password:password};

    if(!email.endsWith("@gmail.com")){
        alert("Enter valid email")
        return;
    }
    if(!checkbox.checked){
        alert("Please accept the terms!!")
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let usernameExists = users.some(user => user.name == fullname);
    if (usernameExists){
        alert("Username already used, Try with a different one.");
        return;
    }

    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
    window.location.href = "login.html";
    alert("User added successfully")

    console.log("User Signed Up Successfully",newUser);
}

let button = document.getElementById("Signup")
button.addEventListener("click", signup);