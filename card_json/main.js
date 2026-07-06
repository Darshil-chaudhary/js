function fetchdata(){
    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((data)=>displaydata(data))
    .then((err)=>console.log(err))
}
fetchdata()

function displaydata(data){
    const container = document.getElementById("product-container");
      data.map((el) => {
        container.innerHTML += `
            <div class="card">
                <img src="${el.image}" alt="${el.title}">
                
                <div class="card-content">
                    <h2>${el.title}</h2>

                    <p class="category">${el.category}</p>

                    <p class="description">
                        ${el.description}
                    </p>

                    <p class="price">$${el.price}</p>

                    <div class="rating">
                        <span>⭐ ${el.rating.rate}</span>
                        <span>${el.rating.count} Reviews</span>
                    </div>

                    <button>Add to Cart</button>
                </div>
            </div>
        `;
    });
}