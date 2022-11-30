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

//dropdown & search 
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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

Daiquiri = new Recipe(
  "Strawberry & Mint Daiquiri",
  "Alan Gage",
  "https://images.unsplash.com/photo-1438522014717-d7ce32b9bab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "Daiquiri" 
);

Boadas = new Recipe(
  "The Boadas Cocktail",
  "Alan Gage",
  "https://images.unsplash.com/photo-1521483632781-413ac2a35ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXJyeSUyMGNvY2t0YWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Boadas" 
);

Mojito = new Recipe(
  "Pineapple Mojito",
  "Alan Gage",
  "https://media.istockphoto.com/id/534030630/photo/gin-and-lime-cocktail-with-pineapple-and-ice-served-cold.jpg?s=612x612&w=0&k=20&c=36rJ_bBwwC8BbN6qO2UQpvX7_7PXng4SJwJQ4bMKxN0=",
  "Mojito" 
);

Grappa = new Recipe(
  "Grappa Manhattan",
  "Alan Gage",
  "https://images.unsplash.com/photo-1621289793044-04a469c0eaf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "Grappa" 
);

Bellini = new Recipe(
  "Bellini",
  "Alan Gage",
  "https://st4.depositphotos.com/4441483/27682/i/600/depositphotos_276821916-stock-photo-layered-bellini-cocktail-with-peaches.jpg",
  "Bellini" 
);

Laila = new Recipe(
  "Laila Cocktail",
  "Alan Gage",
  "https://st2.depositphotos.com/1000260/6997/i/600/depositphotos_69977757-stock-photo-blueberry-cocktail-on-black.jpg",
  "Laila" 
);
Martini = new Recipe(
  "Naked Vodkatini",
  "Alan Gage",
  "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "Martini" 
);
Jenna = new Recipe(
  "Jenna J",
  "Alan Gage",
  "https://images.unsplash.com/photo-1522128418537-427fea304e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "Jenna" 
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
	
	
