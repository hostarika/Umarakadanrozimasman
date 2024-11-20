import { products } from './products.js';

const box=document.getElementById("box")   
const section1 =document.getElementById("section1")
const qidiruvInput=document.getElementById("qidiruv")
const btn=document.getElementById("btn")
const noname= document.getElementById("noname")
const md= document.getElementById("md")
const select = document.getElementById("select-type");
const selectSort = document.getElementById("sort");

console.log(products[0])







function productsView(data) {

    section1.innerHTML="";

    data.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML=`
        <h2>${e.title}</h2>
        <br>
        <p>${e.description}</p>
        <br>
        <div class="yozuv">
            <p class="red">${e.category}</p>
            <p class="blue">${e.price}$</p>
            <p class="yellow">${e.discountPercentage}%</p>
        </div>
        <div class="yozuv">
            <p class="green">${e.rating}</p>
            <p class="aqua">${e.brand}</p>
            <p class="white">${e.weight}kg</p>
        </div>
        `

        section1.appendChild(div)
    });
    
}
productsView(products)



qidiruvInput.addEventListener("input",()=>{

        

    let searchPk=products.filter(e=>e.title.toLocaleLowerCase().includes(qidiruvInput.value.toLocaleLowerCase().trim()));
         productsView(searchPk)

})


select.addEventListener("change", () => {
    if (select.value == "all") {
        productsView(products);
    } else {
        let searchPk = products.filter(e => e.category.toString().includes(select.value));
        productsView(searchPk);
    }
});


selectSort.addEventListener("click", () => {
    if (selectSort.value == "A-Z") {
        let changedProducts = products.sort((pr1, pr2) => pr1.title.localeCompare(pr2.title));
        productsView(changedProducts);
    } else {
        let changedProducts = products.sort((pr1, pr2) => pr2.title.localeCompare(pr1.title));
        productsView(changedProducts);
    }
});
