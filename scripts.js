// JavaScript for TP8
//function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(recipeID, listName, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  //define the fromFile variable with the passed recipe name and list 
  fromFile = "recipes.php?recipeID=" + recipeID + "&recipeList=" + listName;

  console.log("From URL: " + fromFile);

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {

      console.log("AJAX response: " + this.responseText);

      if (this.responseText != 0) {
        responseArray = JSON.parse(this.responseText);

        responseHTML = "";
        for (x = 0; x < responseArray.length; x++) {
          responseHTML += "<li>" + responseArray[x] + "</li>";
        }

        document.querySelector(whereTo).innerHTML = responseHTML;

      } else {
        console.log("Error: no recipe or list found. ");
      }
      //document.querySelector(whereTo).innerHTML = this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}


// new Recipe object
function Recipe(recipeName, contributorName, imageURL, recipeID) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL= imageURL;
  this.id = recipeID
  
  this.displayRecipe = function() {
    
    layoutTitle = document.querySelectorAll("#titleBanner h1");
		layoutTitle[0].innerHTML = this.recipeName;
		
		layoutContributor = document.querySelectorAll("#titleBanner h3");
		layoutContributor[0].innerHTML = "Written by " + this.contributor;
    
    /*document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor; 
    
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL +")";*/
    		document.getElementById("titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    
    loadFileInto(this.id, "location", "#location h3");
    loadFileInto(this.id, "ingredients", "#ingredients ul");
    loadFileInto(this.id, "about", "#about ul");
    loadFileInto(this.id, "directions", "#directions ol");
    
  }
  
}
  
GoodOldfashionedPancakes = new Recipe(
  "Red Rum", "Alan Gage", "https://media.istockphoto.com/id/1064130906/photo/pomegranate-cranberry-cocktail.jpg?b=1&s=170667a&w=0&k=20&c=AeKskxxbge777BpLhAZOaYFgd2B0if4tt8AaYqr4X8I=",
 "GoodOldFashionedPancakes"
);
  
  MushroomSalsaChili = new Recipe( 
    "Abbey Road", "Alan Gage", "https://images.unsplash.com/photo-1517620430776-0ec904756579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxlbW9uJTIwbWludCUyMGNvY2t0YWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
  "MushroomSalsaChili"
  );
  
WineMustard = new Recipe(
  "Razzmopolitan",
  "Alan Gage",
  "https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxSYXNwYmVycnklMjBjb2NrdGFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "WineMustard" 
);
  
  HongKongSling = new Recipe(
  "Hong Kong Sling",
  "Alan Gage",
  "https://images.unsplash.com/photo-1511715112108-9acc6c3ff61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "HongKongSling" 
);

OrangeBlossom = new Recipe(
  "Orange Blossom",
  "Alan Gage",
  "https://images.unsplash.com/photo-1586338211598-e2d64cf97e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "OrangeBlossom" 
);

BloodyMary = new Recipe(
  "The Original Bloody Mary",
  "Alan Gage",
  "https://images.unsplash.com/photo-1576874208717-bfe3af939a4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvbWF0byUyMGp1aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "BloodyMary" 
);

Fizz = new Recipe(
  "Riviera Fizz",
  "Alan Gage",
  "https://images.unsplash.com/photo-1612547854156-3aae03949fed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMHBlZWwlMjBjb2NrdGFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "Fizz" 
);
window.onload = function() {
  
	
	/*document.querySelector("#firstRecipe").onclick =function() {
		GoodOldfashionedPancakes.displayRecipe();
	}
  
  document.querySelector("#secondRecipe").onclick = function() {
		MushroomSalsaChili.displayRecipe();
	}
  
  document.querySelector("#thirdRecipe").onclick = function() {
		WineMustard.displayRecipe();
	}
*/
  
}
	
	
