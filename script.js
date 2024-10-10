let products = {
    data: [{
        ProductName: " Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        Image: "https://img.freepik.com/free-photo/opened-white-tshirt-with-hanger-wood-background_1409-4422.jpg"
    },
    {
        ProductName: " Beige Short Skirt",
        category: "BottomWear",
        price: "49",
        Image: "https://desiminimals.com/cdn/shop/files/DSC_2385.jpg?v=1727523182&width=750"
    },
    {
        ProductName: "Sporty Smart  Watch",
        category: "Watch",
        price: "99",
        Image: "https://img.drz.lazcdn.com/static/bd/p/3dacbe2ad96ad67fc2e924f6abc6beeb.png_200x200q80.png_.webp"
    },
    {
        ProductName: " Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        Image: "https://res.cloudinary.com/teepublic/image/private/s--gRkIwHkp--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1571669489:production:blanks:jaeeqnv4r8crsxalh03n,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1650467509/production/designs/29571823_0"
    },
    {
        ProductName: " Black Leather Jacket",
        category: "Topwear",
        price: "129",
        Image: "https://media.istockphoto.com/id/157440390/photo/mans-blank-black-leather-jacket-back-isolated-on-white-w-clipping-path.jpg?s=612x612&w=0&k=20&c=dZQDve2NTDkWJKWH-9RyuCLvIyp0JOszDgqEAfLIhDk="
    },
    {
        ProductName: " Styllish Pink Trousers",
        category: "BottomWear",
        price: "89",
        Image: "https://assets.ajio.com/medias/sys_master/root/20220121/PuS2/61ea69f5f997dd6623324129/-1117Wx1400H-463015499-pink-MODEL.jpg"
    },
    {
        ProductName: " Brown Men's Jacket ",
        category: "Jaket",
        price: "189",
        Image: "https://statusquo.in/cdn/shop/products/JKT-22788-BROWN_0001_2.jpg?v=1660741943"
    },
    {
        ProductName: " Comfy Gray Pants",
        category: "BottomWear",
        price: "49",
        Image: "https://ecothreads.co.za/cdn/shop/files/ComfyPants_grey.jpg?v=1726132620&width=1445"
    },
    ]
}

for (let i of products.data) {
    //create card
    let card = document.createElement("div")
    // card should have category
    card.classList.add("card", i.category, "hide")
    // imgae div   
    let imgContainer = document.createElement("div")

    imgContainer.classList.add("img_container")
    // image tag
    let image = document.createElement("img")

    image.setAttribute("src", i.Image)

    imgContainer.appendChild(image)

    card.appendChild(imgContainer)

    //container
    let container = document.createElement("div")
    container.classList.add("container")
    //Products name
    let name = document.createElement("h5")

    name.classList.add("Produts_name")

    name.innerText = i.ProductName.toUpperCase();

    container.appendChild(name);
    //price
    let price = document.createElement('h6')

    price.innerText = `$ ${i.price}`

    container.appendChild(price)

    card.appendChild(container)

    document.querySelector(".produts").appendChild(card)
}




function filterProduct(value) {
    let buttons = document.querySelectorAll(".button_value");

    // Loop through buttons to highlight the active one
    buttons.forEach(button => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide")  
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide")
            }
            else{
                element.classList.add("hide")
            }
        }
    })
   
}


document.querySelector(".SearchBtn").addEventListener("click", ()=>{
 let searcInput  = document.querySelector("#search-input").value;
 let elements = document.querySelectorAll(".Produts_name")
 let cards = document.querySelectorAll(".card")
 //loops through all elements   
 elements.forEach((element,index)=>{
    //check if text includes  the search  vlaue
    if(element.innerText.includes(searcInput.toUpperCase())){
        cards[index].classList.remove("hide")
    }
    else{
        cards[index].classList.add("hide")
    }
 })
 
});




window.onload = () => {
    filterProduct("all")
}   