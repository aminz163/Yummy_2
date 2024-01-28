
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


/* Search Page Code */

let nameForm = document.getElementById("nameForm");
let firstLetterForm = document.getElementById("firstLetterForm");

nameForm.addEventListener("input", async function getMealNameData(){

    let query = nameForm.value;

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

    let mealsData = await res.json();

    

    await displayNameData(mealsData);


})

async function displayNameData(data){

    let divs = '';

   
    for(var i =0; i<data.meals.length; i++){
        divs+=`<div class="col-md-3 meal position-relative">
        <img src=${data.meals[i].strMealThumb} class="w-100" alt="" />
        <div
          class="meal-layer d-flex justify-content-center align-items-center opacity-75 position-absolute top-0 bottom-0 start-0 end-0 bg-white"
        >
          <h2>${data.meals[i].strMeal}</h2>
        </div>
      </div>`
    }

    rowData.innerHTML = divs;
}

firstLetterForm.addEventListener("input", async function getMealLetterData(){

    let query = firstLetterForm.value;

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`);

    let mealsData = await res.json();

    

    await displayLetterData(mealsData);


})

async function displayLetterData(data){

    let divs = '';

   
    for(var i =0; i<data.meals.length; i++){
        divs+=`<div class="col-md-3 meal position-relative">
        <img src=${data.meals[i].strMealThumb} class="w-100" alt="" />
        <div
          class="meal-layer d-flex justify-content-center align-items-center opacity-75 position-absolute top-0 bottom-0 start-0 end-0 bg-white"
        >
          <h2>${data.meals[i].strMeal}</h2>
        </div>
      </div>`
    }

    rowData.innerHTML = divs;
}


