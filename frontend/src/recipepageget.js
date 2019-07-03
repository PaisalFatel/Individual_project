// // Getting all recipes

var url = 'http://localhost:8080/recipe'
var xhr = new XMLHttpRequest();
xhr.open('GET',url, true);
xhr.responseType = 'text';

xhr.onload = function() {
    if (xhr.status ===200) {
    var recipeInfo = JSON.parse(xhr.responseText);
    console.log(recipeInfo);

    } //end loop


    var myRecipeInfo = "";
    for (i=0; i<recipeInfo.length; i++) {
        // var x=i+1;
        myRecipeInfo += "<br>"+ "<strong>"+"Recipe Number: "+"</strong>"+recipeInfo[i].recipeNo+" <br>";
        myRecipeInfo += "<strong>"+"Recipe Name: "+"</strong>"+recipeInfo[i].nameOfRecipe+" <br>";
        myRecipeInfo += "<strong>"+"Ingredients: "+"</strong>"+recipeInfo[i].ingredients+" <br>";
    } // end loop

    document.getElementById('message').innerHTML = myRecipeInfo;

}

xhr.send();