let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
var cartShopBox = document.createElement("div");

//Cart Working js
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else{
    ready();
}

//Making Function
function ready(){
    //remove trash
    var removeCartButtons = document.getElementsByClassName('cart-revome');
    console.log(removeCartButtons);
    for(var i = 0; i<removeCartButtons.length; i++){
        var button =  removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    //Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i=0; i<quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    //Add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for(var i=0; i<addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click',addCartClicked);
    }
    
}

//Remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

//Add to cart 
function addCartClicked(event){
    
    var button = event.target;
    var shopProducts = button.parentElement;
}
let aa=document.querySelectorAll(".dish-box");
aa.forEach((e)=>{
    e.addEventListener("click",(d)=>{
        let title=d.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[0].textContent;
        let productImage=d.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src;
        let price=d.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[0].firstElementChild.firstElementChild.innerText;
            
        addProductToCart(title,price,productImage);
      updatetotal();
    })
}) 
function addProductToCart(title,price,productImage){
    cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsName = cartItems.getElementsByClassName('cart-product-title');
    for(var i=0; i<cartItemsName.length; i++){
        //alert('You have already add this item to cart');
    }

var cartBoxContent = `
    <img src="${productImage}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <i class="fa-solid fa-trash cart-revome"></i>`;
  

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-revome')[0].addEventListener('click',removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantityChanged);

}
//Update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    document.getElementById("count").innerHTML=cartBoxes.length;
    var count = document.getElementById("count").innerHTML;
    count = cartBoxes.length;
    //console.log(count);
    for(var i = 0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('MMK ',''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        console.log(price);
        console.log(quantity);
        console.log(total);
        document.getElementsByClassName('total-price')[0].innerText = 'MMK' + total;
    }
}


// const searchs = () =>{
//     const searchBox = document.getElementById('search-item').value.toUpperCase();
//     const storeitems = document.getElementById('product-list');
//     const productSearch = document.querySelectorAll('.row');
//     const pName = document.getElementsByClassName('h3-title');

//     for(var i=0; i<pName.length; i++){
//         let match = productSearch[i].getElementsByClassName('h3-title')[0];

//         if(match){
//             let textvalue = match.textContent;

//             if(textvalue.toUpperCase().indexOf(searchBox) > -1){
//                 productSearch[i].style.display = "";
//                 alert("Please Scroll the webpage your search Item will be appear");
//             } else {
//                 productSearch[i].style.display = "none";
//             }
//         }
//     }
// }