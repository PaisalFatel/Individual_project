// // update recipe

// function updateRecipe(){
//     var url = 'http://localhost:8080/recipe';

//     let rNumber = parseInt(document.getElementById("recipeNo").value);
//     let rName = String(document.getElementById("nameOfRecipe").value);
//     let rIngredient = String(document.getElementById("ingredients").value);
    
//     var data = {};
//     data.recipeNo = rNumber;
//     data.nameOfRecipe = rName;
//     data.ingredients = rIngredient;

//     var json = JSON.stringify(data);

//     var xhr = new XMLHttpRequest();
//     xhr.open('PUT',url, true);
//     request.setRequestHeader('Content-Type', 'application/json');
//     xhr.onload = function(){
//         var recipeInfo = JSON.parse(xhr.responseText);
//         if (xhr.status ===200) {
//             var recipeInfo = JSON.parse(xhr.responseText);
//             console.log(recipeInfo);
//         } //end loop
//     }
//     xhr.send(json);
// }

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
    request.open('PUT', address, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(value);
    window.location='C:/Users/Faisal/Desktop/todo-app-master/frontend/public/recipepage.html';
 }