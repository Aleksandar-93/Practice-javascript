getRandomMeal();

async function getRandomMeal() {
    const randomMeal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   console.log(randomMeal);

}

async function getMealById(id){
   const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + id)
}

async function getMealsBySearch(name){
    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" + name)
}

