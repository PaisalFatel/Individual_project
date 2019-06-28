var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:8080/recipe', true);
xhr.responseType = 'text';



xhr.onload = function() {
    if (xhr.status ===200) {
    var recipeInfo = JSON.parse(xhr.responseText);
    console.log(recipeInfo);

    // console.log(recipeInfo[0].ingredients);
    } //end loop


    var myRecipeInfo = "";
    for (i=0; i<recipeInfo.length; i++) {
        var x=i+1;
        myRecipeInfo += "<br>"+ "Recipe Number: "+x+" <br>";
        myRecipeInfo += "Recipe Name: "+recipeInfo[i].nameOfRecipe+" <br>";
        myRecipeInfo += "Ingredients: "+recipeInfo[i].ingredients+" <br>";
    } // end loop

    document.getElementById('message').innerHTML = myRecipeInfo;

}

xhr.send();

