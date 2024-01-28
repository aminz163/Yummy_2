/* Side Nav Code */

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



async function getCategories(){
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    let mealsCat = await res.json();

    

    await displayCat(mealsCat);

}


async function displayCat(data){

    let divs = '';

   
    for(var i =0; i<data.categories.length; i++){
        divs+=`<div class="category col-md-4 meal position-relative">
        
          <img src=${data.categories[i].strCategoryThumb} class="w-100" alt="" />
        <div
          class="meal-layer d-flex flex-column justify-content-center align-items-center opacity-75 position-absolute top-0 bottom-0 start-0 end-0 bg-white"
        >
          <h2>${data.categories[i].strCategory}</h2>
          <p class="text-black">${data.categories[i].strCategoryDescription.slice(0,100)}</p>
        </div>
          
      </div>`
    }

    rowData.innerHTML = divs;

    

}



async function gotocategory(){
  
  let anchors = document.querySelectorAll(".category h2");

  console.log(anchors)
  for(var j=0; j<anchors.length; j++){
    await anchors[j].addEventListener('click', async function(e){

      console.log(e.target.innerText)

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.innerText}`);

    let mealsCatData = await res.json();

    console.log(mealsCatData);

    await displayData2(mealsCatData);

      
    })
  }

  
} 

async function alldata(){
  await getCategories();

  await gotocategory();
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




