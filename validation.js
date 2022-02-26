const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const password2=document.querySelector("#password2");

form.addEventListener("submit", function(event){
	event.preventDefault();
	if(!username.value){
	username.parentNode.classList.add("error");
	username.parentNode.querySelector("small").innerText=
	"You must give an Username!";
	}
	else if (username.value.length < 4){
	username.parentNode.classList.add("error");
	username.parentNode.querySelector("small").innerText=
	"Username must be 4 characters long!";
	}
	else{
		username.parentNode.className="form-control success";
	}
if(!email.value){
	email.parentNode.classList.add("error");
	email.parentNode.querySelector("small").innerText=
	"You must give an Email!";
	}
	else if(!email.value.match(/\S+@\S+\.\S/)){
	email.parentNode.classList.add("error");
	email.parentNode.querySelector("small").innerText=
	"You must give a valid Email!";
	}
	else{
		email.parentNode.className="form-control success";
	}

	if(!password.value){
	password.parentNode.classList.add("error");
	password.parentNode.querySelector("small").innerText=
	"You must give password!";
	}
	else if(!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
	password.parentNode.classList.add("error");
	password.parentNode.querySelector("small").innerText=
	"Min 8 characters,Special Char, Letter & number";
	}
	else{
		password.parentNode.className="form-control success";
	}
	if(!password2.value){
	password2.parentNode.classList.add("error");
	password2.parentNode.querySelector("small").innerText=
	"You must Re-type your password!";
	}
	else if(password2.value!==password.value){
	password2.parentNode.classList.add("error");
	password2.parentNode.querySelector("small").innerText=
	"Your password doesn't match";
	}
	else{
		password2.parentNode.className="form-control success";
	}
});

