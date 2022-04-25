// const submit = document.querySelector('.submit');
// const nickName = document.querySelector('input');

// function redirect(){
//   location.replace = "../html/main.html";
// }

// function moveToMain(){
//   if(nickName.innerText === 'Eden') redirect();
// } else {
//   console.log("Please check your ID");
// }

// submit.onclick = moveToMain();
function login(){
    const id = document.getElementById("#id");

    if(id.value == "Eden"){
        window.location.href = "../html/main.html";
    }
    else{
        alert("아이디를 확인해주세요!")
    }

}