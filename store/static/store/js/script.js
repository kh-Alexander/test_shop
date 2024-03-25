function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');



//let btns = document.querySelectorAll(".productContainer button")
let btns_add = document.querySelectorAll(".btn_1")
btns_add.forEach(btn=>{
    btn.addEventListener("click", addToCart)
})

let btns_dec = document.querySelectorAll(".btn_2")
//console.log(btns_dec)
btns_dec.forEach(btn=>{
    btn.addEventListener("click", decrementToCart)
})

let btns_clear = document.querySelectorAll(".btn_3")
//console.log(btns_clear)
btns_clear.forEach(btn=>{
    btn.addEventListener("click", clearCart)
})


function addToCart(e){
    let product_id = e.target.value
    let url = "/add_to_cart"

    let data = {id:product_id}

    fetch(url, {
        method: "POST",
        headers: {"Content-Type":"application/json", 'X-CSRFToken': csrftoken},
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("num_of_items").innerHTML = data
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
    })
}

function decrementToCart(e){
    let product_id = e.target.value
    let url = "/decrement_to_cart"

    let data = {id:product_id}

    fetch(url, {
        method: "POST",
        headers: {"Content-Type":"application/json", 'X-CSRFToken': csrftoken},
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("num_of_items").innerHTML = data
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
    })
}

function clearCart(e){
    let product_id = e.target.value
    let url = "/clear_cart"

    let data = {id:product_id}

    fetch(url, {
        method: "POST",
        headers: {"Content-Type":"application/json", 'X-CSRFToken': csrftoken},
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("num_of_items").innerHTML = data
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
    })
}
