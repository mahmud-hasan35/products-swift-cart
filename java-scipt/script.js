
// const url = fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(data => displayProduct(data)
// )


 
// const displayProduct = (products) => {
//     const productContainer = document.getElementById('product_card')
//     productContainer.innerHTML = '';

//     for (let product of products) {
//         console.log(product);
        
//     }
    
    
// }



  document.getElementById("homeBtn")
    .addEventListener("click", function () {
      loadProducts();
    });


  // 👉 API call function
  const loadProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    displayProduct(data);
  };


  // 👉 Product show function


//   const displayProduct = (products) => {
//     const productContainer = document.getElementById('product_card');
//     productContainer.innerHTML = '';

//     for (let product of products) {
    

//       const div = document.createElement('div');
//       div.classList.add('border', 'p-4', 'rounded-lg', 'shadow');

//       div.innerHTML = `
//         <img src="${product.image}" class="h-40 mx-auto mb-4">
//         <h2 class="font-semibold">${product.title}</h2>
//         <p class="text-blue-600 font-bold">$${product.price}</p>
//       `;

//       productContainer.appendChild(div);
    }

  };