let rowData = document.getElementById("rowData");



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



/* Ingredients Code */

async function getIng(){
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");

    let mealsIng = await res.json();

    

    await displayIng(mealsIng);
    
}

async function displayIng(data){

    let divs = '';

   
    for(var i =0; i<24; i++){
        divs+=`<div class="Ing col-md-3 indredient pt-3 d-flex flex-column justify-content-center">
        <i class="fa-solid fa-drumstick-bite display-4 text-white text-center"></i>

        <h2 class=" text-white text-center">${data.meals[i].strIngredient}</h2>

        <p class=" text-white text-center">${data.meals[i].strDescription.slice(0,100)}</p>
      </div>`
    }

    rowData.innerHTML = divs;
}






async function gotoIng(){
  
  let anchors = document.querySelectorAll(".Ing h2");

  console.log(anchors)
  for(var j=0; j<anchors.length; j++){
    await anchors[j].addEventListener('click', async function(e){

      console.log(e.target.innerText)

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.innerText}`);

    let mealsCatData = await res.json();

    console.log(mealsCatData);

    await displayData2(mealsCatData);

      
    })
  }

  
} 

async function alldata(){
  await getIng();

  await gotoIng();
}

async function displayData2(data){
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

alldata();
