
// menu active class add and remove //
const navLinks = document.querySelectorAll(".nav-link");

// current page বের করছি
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {

  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("text-blue-600", "font-semibold");
  }

});




  // 👉 API call function
  const loadProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    const firstThree = data.slice(0, 3);

    displayProduct(firstThree);
    
    
  };

  const singleProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json();
    displaySingleProduct(product)
    

}

  const displayProduct = (products) => {
    const container = document.getElementById('product_cart')
    container.innerHTML= "";
    products.forEach(product => {
      const div = document.createElement('div')
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
    }) 

  }

const displaySingleProduct = (product) => {

  const modal = document.getElementById("product_modal");
  const content = document.getElementById("modal_content");

  content.innerHTML = `
    <div class="flex flex-col md:flex-row gap-6">

      <div class="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
        <img src="${product.image}" class="h-52 object-contain">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-3">${product.title}</h2>

        <p class="text-gray-500 mb-3">
          ${product.description}
        </p>

        <div class="flex items-center gap-2 text-yellow-500 mb-3">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating?.rate}</span>
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


loadProducts()


