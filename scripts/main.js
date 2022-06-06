let userData = JSON.parse(localStorage.getItem("user")) || [];

function submit() {
    event.preventDefault();

    let userObj = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value,
        amount:document.getElementById("amount").value,
    };
   userData.push(userObj);

   localStorage.setItem("user",JSON.stringify(userData))

}