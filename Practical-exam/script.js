const form = document.getElementById("productForm");
const title = document.getElementById("title");
const price = document.getElementById("price");
const image = document.getElementById("image");
const category = document.getElementById("category");

const productList = document.getElementById("productList");
const search = document.getElementById("search");
const filter = document.getElementById("filter");
const sort = document.getElementById("sort");
const count = document.getElementById("count");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

let products = JSON.parse(localStorage.getItem("products")) || [];

let editIndex = -1;

function saveData() {
    localStorage.setItem("products", JSON.stringify(products));
}

function displayProducts(arr = products) {

    productList.innerHTML = "";

    if (arr.length === 0) {

        message.innerText = "No Products Found";
        count.innerText = 0;
        return;
    }

    message.innerText = "";

    count.innerText = arr.length;

    arr.forEach((product) => {

        let index = products.findIndex(item => item.id === product.id);
        productList.innerHTML += `
        <tr>

            <td>
                <img src="${product.image}" width="80">
            </td>

            <td>${product.title}</td>

            <td>${product.category}</td>

            <td>₹ ${product.price}</td>

            <td>
                <button
                    class="edit-btn"
                    onclick="editProduct(${index})">
                    Edit
                </button>
            </td>

            <td>
                <button
                    class="delete-btn"
                    onclick="deleteProduct(${index})">
                    Delete
                </button>
            </td>

        </tr>
        `;

    });

}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (
        title.value.trim() === "" ||
        price.value.trim() === "" ||
        image.value.trim() === "" ||
        category.value === ""
    ) {

        alert("Please Fill All Fields");
        return;

    }

    const product = {

        id: Date.now(),

        title: title.value,

        price: Number(price.value),

        image: image.value,

        category: category.value

    };

    if (editIndex === -1) {

        products.push(product);

    } else {

        products[editIndex] = product;
        editIndex = -1;
        submitBtn.innerText = "Add Product";

    }

    saveData();

    displayProducts();

    form.reset();

});

displayProducts();

function editProduct(index) {

    const product = products[index];

    title.value = product.title;
    price.value = product.price;
    image.value = product.image;
    category.value = product.category;

    editIndex = index;

    submitBtn.innerText = "Update Product";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function deleteProduct(index) {

    const confirmDelete = confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) return;

    products.splice(index, 1);

    saveData();

    displayProducts();

}

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase().trim();

    let searchData = products.filter(function (product) {

        return product.title.toLowerCase().includes(value);

    });

    displayProducts(searchData);

});

filter.addEventListener("change", function () {

    let value = filter.value;

    if (value === "All") {

        displayProducts();
        return;

    }

    let filterData = products.filter(function (product) {

        return product.category === value;

    });

    displayProducts(filterData);

});

sort.addEventListener("change", function () {

    let temp = [...products];

    if (sort.value === "low") {

        temp.sort(function (a, b) {

            return a.price - b.price;

        });

    }

    else if (sort.value === "high") {

        temp.sort(function (a, b) {

            return b.price - a.price;

        });

    }

    displayProducts(temp);

});