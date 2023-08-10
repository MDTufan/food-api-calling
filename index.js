

const searchFood=()=>{
    const input=document.getElementById('input');
    const inputValue =input.value;
           input.value='';
    // console.log(inputValue);

   const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => openFood(data.meals,inputValue))
}

const openFood=(food,inputValue)=>{
//  console.log(food)
const err=document.getElementById('err');
err.textContent='';
const span =document.createElement('span');
const showResult = document.getElementById('showResult');
  showResult.textContent=''; 

if(food==null){
  span.innerHTML=`<h1 class ='text-center text-danger'>The Food ${inputValue} is Not Found.</h1>
  
  `
  err.appendChild(span)
}else{
  
  for (const foodvalue of food){
    const div =document.createElement('div');
     div.classList.add('col');
      div.innerHTML=`
      <div class="card" >
      <img src=${foodvalue.strMealThumb} class="card-img-top" alt=${foodvalue.strMeal}>
      <div class="card-body">
        <h5 class="card-title text-info">${foodvalue.strMeal}</h5>
        <p class="card-text">${foodvalue.strInstructions.slice(0,100)+"<storng>See More<storng>"}</p>
        <button onclick='foodDetails(${foodvalue.idMeal})' class="btn w-100 btn-outline-dark">More Details</button>
      </div>
    </div>
      
      `
  
      showResult.appendChild(div)
  }
}

}

const foodDetails=(medalid)=>{
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${medalid}`
  // console.log(url)
  fetch(url)
  .then( res => res.json())
  .then( data =>  upDataShow(data.meals[0]))
}

const upDataShow =(showdata)=>{
 console.log(showdata);

 const Views =document.getElementById('views');
 Views.textContent=""
 const div =document.createElement('div');

 div.innerHTML=`
 <div class="card" >
 <img src=${showdata.strMealThumb} class="card-img-top" alt=${showdata.strMeal}>
 <div class="card-body">
   <h5 class="card-title text-danger">${showdata.strMeal}</h5>
   <p class="card-text">${showdata.strInstructions.slice(0,100)+"<storng>See More<storng>"}</p>
   
 </div>
</div>
 
 `

 Views.appendChild(div)
}