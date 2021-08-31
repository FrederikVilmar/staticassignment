const url = "https://kea-alt-del.dk/t7/api/products/2801";

// fetch the data

fetch(url)
.then((res) => res.json())
.then((data) => showProduct(data));

function showProduct(product) {
console.log(product);
document.querySelector(".item .brand").textContent=product.brandname;

document.querySelector(".item .productname").textContent=product.productdisplayname;


document.querySelector("img.productimg").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

document.querySelector("img.productimg").alt= product.productdisplayname;

}


