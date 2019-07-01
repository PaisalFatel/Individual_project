// // // Getting all recipes

// var url = 'http://localhost:8080/recipe'
// var xhr = new XMLHttpRequest();
// xhr.open('GET',url, true);
// xhr.responseType = 'text';

// xhr.onload = function() {
//     if (xhr.status ===200) {
//     var recipeInfo = JSON.parse(xhr.responseText);
//     console.log(recipeInfo);

//     } //end loop


//     var myRecipeInfo = "";
//     for (i=0; i<recipeInfo.length; i++) {
//         var x=i+1;
//         myRecipeInfo += "<br>"+ "Recipe Number: "+x+" <br>";
//         myRecipeInfo += "Recipe Name: "+recipeInfo[i].nameOfRecipe+" <br>";
//         myRecipeInfo += "Ingredients: "+recipeInfo[i].ingredients+" <br>";
//     } // end loop

//     document.getElementById('message').innerHTML = myRecipeInfo;

// }

// xhr.send();






// post a recipe
const formData = {} ;

function handleSubmit(event){
    for (let info of event) {
        formData[info.name] = info.value;
    }

    console.log('handle submit works!', formData);
    const data = JSON.stringify(formData);
    regUser(data);
    
    return false;
}

function regUser(value) {
    const request = new XMLHttpRequest()
 
    request.onload = () => {
        // const parsedData = JSON.parse(request.responseText);
        // console.log("request for login:", parsedData);
    }
    const address = 'http://localhost:8080/recipe';
    request.open('POST', address, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(value);
    // window.location='C:/Users/Faisal/Desktop/todo-app-master/frontend/public/recipepage.html';
 }


// let newRecipeName = (document.getElementById("recipeName").value);
// let newIngredient = (document.getElementById("ingredients").value);

// let data = {};
// // data.recipeNo="5"
// data.nameOfRecipe = newRecipeName;
// data.ingredients = newIngredient;
// let json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = function () {
//         var recipeInfo = JSON.parse(xhr.responseText);
//         console.log(recipeInfo);

//      //end loop
// }
// xhr.send(json);
// window.location = 'C:/Users/Faisal/Desktop/todo-app-master/frontend/public/recipepage.html';


// delete recipe

// var xhr = new XMLHttpRequest();
// xhr.open("DELETE",url+'/8', true);
// xhr.onload = function(){
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.status ===200) {
//         var recipeInfo = JSON.parse(xhr.responseText);
//         console.log(recipeInfo);
//     } //end loop
// }

// xhr.send();
