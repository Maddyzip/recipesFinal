<?
   
   /* recipe Loader for TP8 */

$recipes = Array();

$recipes["GoodOldFashionedPancakes"] = Array();
$recipes["GoodOldFashionedPancakes"]["ingredients"] = Array();
$recipes["GoodOldFashionedPancakes"]["equipment"] = Array();
$recipes["GoodOldFashionedPancakes"]["directions"] = Array();

  $recipes["GoodOldFashionedPancakes"]["ingredients"][] = "1½ cups all-purpose flour";
  $recipes["GoodOldFashionedPancakes"]["ingredients"][] = "3½ teaspoons baking powder";
  $recipes["GoodOldFashionedPancakes"]["ingredients"][] = "1¼ teaspoons salt, or more to taste";
  $recipes["GoodOldFashionedPancakes"]["ingredients"][] = "1¼ cups milk";
  $recipes["GoodOldFashionedPancakes"]["ingredients"][] = "1 tablespoon white sugar";
  $recipes["GoodOldFashionedPancakes"]["ingredients"][] = "3 tablespoons butter, melted";

    $recipes["GoodOldFashionedPancakes"]["equipment"][] = "Stove";
    $recipes["GoodOldFashionedPancakes"]["equipment"][] = "Frying pan";
    $recipes["GoodOldFashionedPancakes"]["equipment"][] = "Measuring cups";
    $recipes["GoodOldFashionedPancakes"]["equipment"][] = "Spatula";
    $recipes["GoodOldFashionedPancakes"]["equipment"][] = "Spoon";
    $recipes["GoodOldFashionedPancakes"]["equipment"][] = "Large bowl";
    $recipes["GoodOldFashionedPancakes"]["equipment"][] = "sifter";

      $recipes["GoodOldFashionedPancakes"]["directions"][] = "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth..";
      $recipes["GoodOldFashionedPancakes"]["directions"][] = "Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.";

$recipes["MushroomSalsaChili"] = Array();
$recipes["MushroomSalsaChili"]["ingredients"] = Array();
$recipes["MushroomSalsaChili"]["equipment"] = Array();
$recipes["MushroomSalsaChili"]["directions"] = Array();
  
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1 pound bulk pork sausage";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "2 cans, 16oz each, kidney beans, rinsed and drained";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "3 cups chunky salsa";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1 can, 14.5oz, diced tomatoes, undrained";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1 large onion, chopped";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1 can, 8oz, tomato sauce";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "can, 4oz, mushroom stems and pieces, drained";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1/2 cup each copped green, sweet red, and yellow peppers";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1/2 teaspoon dried oregano";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1/4 teaspoon garlic powder";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1/8 teaspoon dried thyme";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "1/8 teaspoon dried marjoram";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "Additional Toppings:";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "Shredded sharp cheddar cheese";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "Sour cream";
  $recipes["MushroomSalsaChili"]["ingredients"][] = "Thinly sliced green onions";

    $recipes["MushroomSalsaChili"]["equipment"][] = "Large skillet";
    $recipes["MushroomSalsaChili"]["equipment"][] = "Slow cooker";
    $recipes["MushroomSalsaChili"]["equipment"][] = "Spatula";
    $recipes["MushroomSalsaChili"]["equipment"][] = "Measuring cups";
    $recipes["MushroomSalsaChili"]["equipment"][] = "Can opener";
    $recipes["MushroomSalsaChili"]["equipment"][] = "Knife";
    $recipes["MushroomSalsaChili"]["equipment"][] = "Cutting Board";

      $recipes["MushroomSalsaChili"]["directions"][] = "In a large skillet, cook beef and sausage over medium heat 6-8 minutes or until no longer pink, breaking into crumbles.";
      $recipes["MushroomSalsaChili"]["directions"][] = "Drain all the meat and transfer to a 5- or 6-quart slow cooker.";
      $recipes["MushroomSalsaChili"]["directions"][] = "Stir in beans, salsa, tomatoes, onion, tomato sauce, mushrooms, peppers and seasonings.";
      $recipes["MushroomSalsaChili"]["directions"][] = "Cook, covered, on low 8-10 hours or until flavors are blended.";
      $recipes["MushroomSalsaChili"]["directions"][] = "Add toppings of your choice and serve!";

$recipes["WineMustard"] = Array();
$recipes["WineMustard"]["ingredients"] = Array();
$recipes["WineMustard"]["equipment"] = Array();
$recipes["WineMustard"]["directions"] = Array();

  $recipes["WineMustard"]["ingredients"][] = "3/4 cup white sugar";
  $recipes["WineMustard"]["ingredients"][] = "3/4 cup ground dry mustard";
  $recipes["WineMustard"]["ingredients"][] = "1/2 cup distilled white vinegar";
  $recipes["WineMustard"]["ingredients"][] = "1/2 cup dry white wine";
  $recipes["WineMustard"]["ingredients"][] = "3 eggs, beaten";

    $recipes["WineMustard"]["equipment"][] = "Double Boiler";
    $recipes["WineMustard"]["equipment"][] = "Whisk";
    $recipes["WineMustard"]["equipment"][] = "Container";

      $recipes["WineMustard"]["directions"][] = "In the top of a double boiler, whisk together sugar, mustard, vinegar, wine, and eggs.";
      $recipes["WineMustard"]["directions"][] = "Cook over simmering water, whisking constantly, for 8 minutes, or until thick.";
      $recipes["WineMustard"]["directions"][] = "Allow to cool in refrigerator. Store in sealed containers in refrigerator for up to 2 months.";

$requestedID = $_GET["recipeID"];
$requestedID = htmlspecialchars($requestedID);
$requestedID = filter_var($requestedID, FILTER_SANITIZE_STRING);

$requestedList = $_GET["recipeList"];
$requestedList = htmlspecialchars($requestedList);
$requestedList = filter_var($requestedList, FILTER_SANITIZE_STRING);

  $requestedOutput = $recipes[$requestedID][$requestedList];

    $requestedJSON = "0";

       If ($requestedOutput != null) {
         $requestedJSON = json_encode($requestedOutput);
       }

 Echo $requestedJSON;

