// delete recipe



// function deleteRecipe(){
// var url = 'http://localhost:8080/recipe';
// let rNumber = parseInt(document.getElementById("recipeNo").value);
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE",url+"/"+rNumber, true);
// xhr.onload = function(){
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.status ===200) {
//         var recipeInfo = JSON.parse(xhr.responseText);
//         console.log(recipeInfo);
//     } //end loop
// }

// xhr.send();
// // window.location='C:/Users/Faisal/Desktop/todo-app-master/frontend/public/recipepage.html';
// }



const formData = {} ;

function handleSubmit(event){
    for (let info of event) {
        formData[info.name] = info.value;
    }

    // console.log('handle submit works!', formData);
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
    let rNumber = parseInt(document.getElementById("recipeNo").value);
    const address = 'http://localhost:8080/recipe';
    request.open('DELETE', address+"/"+rNumber, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(value);
    window.location='C:/Users/Faisal/Desktop/todo-app-master/frontend/public/recipepage.html';
 }