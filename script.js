// Add this code to your script.js file
var pantry_ing = ["peanut butter", "jelly", "chips", "bread"];
var ingredients = [];
var done = false;

function find_missing(pantry_ing, ingredients) {
    var set_pantry = new Set(pantry_ing);
    var set_ingredients = new Set(ingredients);

    var missing_ingredients = [...set_ingredients].filter(item => !set_pantry.has(item));

    var result = "Pantry list: " + pantry_ing.join(", ") + "<br>";

    if (missing_ingredients.length > 0) {
        result += "You need to go shopping for: " + missing_ingredients.join(", ");
    } else {
        result += "All ingredients are in your pantry.";
    }

    return result;
}

function addIngredient() {
    var ingredientInput = document.getElementById("ingredientInput");
    var resultDiv = document.getElementById("result");

    if (ingredientInput.value.toLowerCase() === "done") {
        resultDiv.innerHTML = "Ingredients added: " + ingredients.join(", ");
        var missingResult = find_missing(pantry_ing, ingredients);
        resultDiv.innerHTML += "<br>" + missingResult;
    } else {
        ingredients.push(ingredientInput.value);
        resultDiv.innerHTML = "Added: " + ingredientInput.value;
        ingredientInput.value = "";
    }
}
