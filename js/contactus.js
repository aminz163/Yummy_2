/* Side Navbar Code */

let sideControl = document.getElementById("sideControl");
let sidenavInner = document.querySelector('.sidenavInner');
let sidenav  = document.querySelector(".sidenav");
let sidnavSide = document.querySelector(".sidnavSide");
let catNav = document.getElementById("catNav");
let areaNav = document.getElementById("areaNav");
let ingNav = document.getElementById("ingNav");
let searchNav = document.getElementById("searchNav");
let contNav = document.getElementById("contNav");
let sidewidth = sidenavInner.offsetWidth; 
 

sideControl.addEventListener('click', function(){
if (sidenav.style.marginLeft === `-${sidewidth}px`) {
  sidenav.style.marginLeft = '0px';

}  else{
  sidenav.style.marginLeft = `-${sidewidth}px`;
}

})

searchNav.addEventListener('click', function gotoSearch(){
    searchNav.setAttribute("href","Search.html");
})
areaNav.addEventListener('click', function gotoarea(){
    areaNav.setAttribute("href","Area.html");
})
catNav.addEventListener('click', function gotoCategories(){
    catNav.setAttribute("href","Categories.html");
})
ingNav.addEventListener('click', function gotoingredients(){
    ingNav.setAttribute("href","ingredients.html");
})
contNav.addEventListener('click', function gotocontact(){
    contNav.setAttribute("href","contact.html");
})

/* Contact us code */

let nameInput = document.querySelector("#nameInput");
let EmailInput = document.querySelector("#EmailInput");
let PhoneInput = document.querySelector("#PhoneInput");
let ageInput = document.querySelector("#ageInput");
let pass1Input = document.querySelector("#pass1Input");
let pass2Input = document.querySelector("#pass2Input");

let valideName = document.querySelector(".valideName");
let valideEmail = document.querySelector(".valideEmail");
let validePhone = document.querySelector(".validePhone");
let valideAge = document.querySelector(".valideAge");
let validePass1 = document.querySelector(".validePass1");
let validePass2 = document.querySelector(".validePass2");


/* Validate Email */

function validateEmail(){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var x = regex.test(EmailInput.value);

    if(!x){
        valideEmail.classList.remove("d-none");

    }

    else{
        valideEmail.classList.add("d-none");
    }

    return x
}

EmailInput.addEventListener("blur",validateEmail)

/* Validate Name */

function validateName(){

    var regex = /^[a-zA-Z0-9]{4,10}$/gm;

    var x = regex.test(nameInput.value);

    if(!x){
        valideName.classList.remove("d-none");

    }

    else{
        valideName.classList.add("d-none");
    }

    return x

}

nameInput.addEventListener("blur",validateName);

/* Phone Number Regex */

function validatePhone(){

    var regex = /^\d{10}$/;

    var x = regex.test(PhoneInput.value);

    if(!x){
        validePhone.classList.remove("d-none");

    }

    else{
        validePhone.classList.add("d-none");
    }

    return x

}

PhoneInput.addEventListener("blur",validatePhone);

/* Age Validate */

function validateAge(){
    if(ageInput.value <10 || ageInput.value >=100){

        valideAge.classList.remove("d-none");

    } else{
        valideAge.classList.add("d-none");
    }
}

ageInput.addEventListener("blur", validateAge);

/* Password Validation */



function validatePass1(){
    var regex = /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{8,16}$/

    var x = regex.test(pass1Input.value);

    if(!x){
        validePass1.classList.remove("d-none");

    }

    else{
        validePass1.classList.add("d-none");
    }

    return x
}

pass1Input.addEventListener("blur",validatePass1)


/* Validate Retype Password */

function validatePass2(){

    if(pass2Input.value != pass1Input.value){

        validePass2.classList.remove("d-none");

    }

    else{
        validePass2.classList.add("d-none");
    }
}


pass2Input.addEventListener("blur",validatePass2)

