// const apiUrl = 'https://api.edamam.com/search?q=chicken&app_id=ec165b04&app_key=806febda6922960b171f9072daed2388';

// fetch(apiUrl)
// .then((res) => {
//     if (!res.ok) {
//         throw new Error('Network response was not ok');
//     }
//     // JSON- Javascript Object Notation
//     return res.json();
// })
// .then((data) => {
//     // label
//     // totalTime
//     // image
//     console.log(data)
//     const recipeInfo = document.getElementById("recipeInfo");
//     recipeInfo.innerHTML = `
//         <div class="card" style="width: 18rem;">
//             <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="recipe">
//             <div class="card-body">
//                 <h5 class="card-title">${data.hits[0].recipe.label}</h5>
//                 <p class="card-text">Total prep and cook time is ${data.hits[0].recipe.totalTime} minutes.</p>
//                 <a href="${data.hits[0].recipe.url}" target="_blank" class="btn btn-primary">Go to recipe</a>
//             </div>
//         </div>
//     `
// })
// .catch((error) => {console.error(error)})
const apiUrl = 'https://perenual.com/api/species-list?key=sk-nl0R657bb712f08993468'
fetch(apiUrl, {
    method: 'GET',
    redirect: 'follow'
}).then((response) => {
   if(!response.ok) {
  throw new Error('Network response is not ok!')
     }
     return response.json()
}).then((data) => {
         console.log(data)
}).catch((error) => {
         console.error(error)
});