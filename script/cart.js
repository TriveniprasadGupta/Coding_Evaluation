let cartData = JSON.parse(localStorage.getItem("cartData"));

displayMenu(cartData);


function displayMenu(meals){
    meals.forEach(function(element){
        let card = document.createElement("div");

        let dish_img = document.createElement("img");
        dish_img.src = element.strMealThumb;

        let dish_name = document.createElement("h3");
        dish_name.textContent = element.strMeal;

        let dish_price = document.createElement("p");
        dish_price.textContent = "Rs. " + element.price;

        let remove = document.createElement("button");
        remove.textContent = "Remove"
        remove.addEventListener("click",function(){
            removeDish(element);
        })

        let imgDiv = document.createElement("div");
        imgDiv.append(dish_img);
        imgDiv.setAttribute("class","imgDiv")
        
        let desDiv = document.createElement("div");
        desDiv.append(dish_name,dish_price,remove);
        desDiv.setAttribute("class","desDiv");

        card.append(imgDiv,desDiv);
        document.querySelector("#dishInCart").append(card);

    });

    let totalPrice = cartData.reduce(function(ac,el){
        return ac + el.price;
    },0)
    document.querySelector("#totalPrice").textContent = "Total Amount : Rs. " + totalPrice + "/-";
}

function removeDish(element){
    document.querySelector("#dishInCart").innerHTML = "";
    let cartItemTag = document.createElement("h1");
    cartItemTag.textContent = "Cart Items";
    document.querySelector("#dishInCart").append(cartItemTag);
    cartData = cartData.filter(function(curr_elem){
        return curr_elem != element;
    });
    localStorage.setItem("cartData",JSON.stringify(cartData));
    displayMenu(cartData);
    // window.location.href = "cart.html";
}