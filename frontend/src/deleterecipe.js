// delete recipe



function deleteRecipe(){
var url = 'http://localhost:8080/recipe';
let rNumber = parseInt(document.getElementById("recipeNo").value);
var xhr = new XMLHttpRequest();
xhr.open("DELETE",url+"/"+rNumber, true);
xhr.onload = function(){
    var users = JSON.parse(xhr.responseText);
    if (xhr.status ===200) {
        var recipeInfo = JSON.parse(xhr.responseText);
        console.log(recipeInfo);
    } //end loop
}

xhr.send();
}