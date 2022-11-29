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

//drop down menu script


function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

this.displayHome = function() {
  
  function Home(PageURL) {
    this.page= PageURL;
    
   document.querySelectorAll("#body");
   Layout[0].innerHTML= this.page;
  }
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
		layoutContributor[0].innerHTML = "From " + this.contributor;
    
    /*document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor; 
    
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL +")";*/
    		document.getElementById("titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";

    loadFileInto(this.id, "ingredients", "#ingredients ul");
    loadFileInto(this.id, "equipment", "#equipment ul");
    loadFileInto(this.id, "directions", "#directions ol");
    
  }
  
}
  
GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes", "Maddy", "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
 "GoodOldFashionedPancakes"
);
  
  MushroomSalsaChili = new Recipe( 
    "Mushroom Salsa Chili", "sarah hoppe", "https://images.unsplash.com/photo-1608376630927-d064ac74866e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=558&q=80", 
  "MushroomSalsaChili"
  );
  
WineMustard = new Recipe(
  "Hal's Wine mustard",
  "Ally Steigmann",
  "https://images.unsplash.com/photo-1532641140-28932037521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "WineMustard" 
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
	
	
