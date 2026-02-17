// Load All Products

const loadProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  displayProducts(products);
};

// Load Categories


const loadCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json();
  displayCategories(categories);
};

const singleProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json();
    displaySingleProduct(product)
    

}

//  Display Category Buttons

const displayCategories = (categories) => {
  const container = document.getElementById("category_container");
  container.innerHTML = "";

  // All Button


  const allBtn = document.createElement("button");
  allBtn.innerText = "All";
  allBtn.className =
    "px-6 py-2 bg-blue-600 text-white rounded-full";
  allBtn.onclick = () => {
    loadProducts();
    setActiveButton(allBtn);
  };
  container.appendChild(allBtn);

  // Dynamic Category Buttons


  categories.forEach(category => {
    const button = document.createElement("button");
    button.innerText = category;

    button.className =
      "px-6 py-2 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition";

    button.onclick = () => {
      loadCategoryProducts(category);
      setActiveButton(button);
    };

    container.appendChild(button);
  });
};

//  Load Products by Category
const loadCategoryProducts = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await res.json();
  displayProducts(data);
};

//  Active Button 

const setActiveButton = (activeBtn) => {
  const buttons = document.querySelectorAll("#category_container button");

  buttons.forEach(btn => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("border", "border-gray-300");
  });

  activeBtn.classList.add("bg-blue-600", "text-white");
  activeBtn.classList.remove("border", "border-gray-300");
};

//  Display Products

const displayProducts = (products) => {
  const container = document.getElementById("product_container");
  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className =
      "bg-white rounded-xl shadow-lg overflow-hidden";

    div.innerHTML = `
      <div class="bg-gray-200 flex justify-center items-center h-52">
        <img 
          src="${product.image}" 
          class="h-40 object-contain" 
          alt="${product.title}">
      </div>

      <div class="p-5">

        <div class="flex justify-between items-center mb-3">
          <span class="bg-primary text-white text-xs px-3 py-1 rounded-full">
            New
          </span>

          <div class="flex items-center gap-1 text-yellow-500 text-sm">
            <i class="fa-solid fa-star"></i>
            <span class="text-gray-700">
              ${product.rating.rate}
            </span>
          </div>
        </div>

        <p class="text-gray-500 text-sm mb-3">
          ${product.title.slice(0, 50)}...
        </p>

        <h4 class="text-xl font-bold mb-4">
          $${product.price}
        </h4>

        <div class="flex justify-between items-center text-sm">
          <button onclick="singleProduct(${product.id})" class="flex cursor-pointer items-center gap-2 text-primary font-medium">
            <i class="fa-solid fa-circle-info"></i>
            Details
          </button>

          <button class="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg">
            <i class="fa-solid fa-cart-plus"></i>
            Add
          </button>
        </div>

      </div>
    `;

    container.appendChild(div);
  });
};


const displaySingleProduct = (product) => {

  const modal = document.getElementById("product_modal");
  const content = document.getElementById("modal_content");

  content.innerHTML = `
    <div class="flex flex-col md:flex-row gap-6">

      <div class="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
        <img src="${product.image}" 
             class="h-52 object-contain">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-3">${product.title}</h2>

        <p class="text-gray-500 mb-3">
          ${product.description}
        </p>

        <div class="flex items-center gap-2 text-yellow-500 mb-3">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating.rate}</span>
        </div>

        <h3 class="text-xl font-bold text-blue-600">
          $${product.price}
        </h3>
      </div>

    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");




};


  const closeModal = () => {
  const modal = document.getElementById("product_modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
};


// 🔥 Initial Load
loadCategories();
loadProducts();

