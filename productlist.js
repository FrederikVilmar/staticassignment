const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category")


const url ="https://kea-alt-del.dk/t7/api/products?category=" + category;
console.log(url)
fetch(url)
    .then(function(res){
        return res.json();
    })
        .then(function(data){
            handleProductList(data);

        })


/*  <template id="smallProduct">
<article class="sale-item">
<h1>Sahara Team India Fanwear Round Neck Jersey</h1>
<p class="subtle">Tshirts | Nike.</p>
 <h3 class="price"> <span>Prev. </span> DDK 895,-</h3>
        <div class="discounted">
          <h3>Now DKK 895,- </h3>
          <p> -30% </p>
</div>
<img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="t-shirt">
<li><a href="product.html">Read More</a></li>
</article>
</template>
*/


function handleProductList(data){
console.log(data);
data.forEach(showProduct)
}
function showProduct(product) {
    console.log(product);
    //grab the template
const template = document.querySelector("#smallProductTemplate").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector(".subtle").textContent =`${product.articletype} | ${product.brandname}`;

    copy.querySelector("h1").textContent = product.productdisplayname;  

    copy.querySelector("img.productimg").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    // adding discount and soldout

    if(product.soldout){
        copy.querySelector("article").classList.add("soldout");
    }
    if(product.soldout){
        copy.querySelector("article").classList.add("on-sale");


        /* 
         <h3 class="price"> <span>Prev. </span> DDK 895,-</h3>
        <div class="discounted">
          <h3>Now DKK 895,- </h3>
          <p> -30% </p>
        */

copy.querySelector(".discounted p").textContent = product.discount;
copy.querySelector(".discounted h3").textContent = product.price;
    }

    copy.querySelector("article h3").textContent = product.price; 

copy.querySelector("img.productimg").alt= product.productdisplayname;

    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);
}

