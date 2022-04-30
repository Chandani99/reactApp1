import navbar from "../components/navbar.js";
import"../styles/navbar.css";
// console.log(navbar());

let nav=document.getElementById("navbar");
nav.innerHTML=navbar;

const url=`https://fakestoreapi.com/products/category/jewelery`;

let itemDisplay=document.querySelector("#items");
import {fetchData,displayData} from "../components/fetch.js";
fetchData(url).then((res)=>{
    displayData(res,itemDisplay);
})