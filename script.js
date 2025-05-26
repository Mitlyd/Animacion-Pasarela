// Lista de categorías en orden
const categoryOrder = ["jacket", "vestidos", "pants", "accessory"];
let currentCategoryIndex = 0; 

const clothingImages = {
  jacket: [
    "https://img.kwcdn.com/product/fancy/1677e055-82a7-4752-9cbd-00de0ced830a.jpg?imageView2/2/w/1300/q/90/format/webp",
    "https://img.kwcdn.com/product/fancy/1677e055-82a7-4752-9cbd-00de0ced830a.jpg?imageView2/2/w/1300/q/90/format/webp"
  ],
  vestidos: [
    "https://img.kwcdn.com/product/fancy/c1e00f79-bf01-446f-9db3-223d9c076673.jpg?imageView2/2/w/1300/q/90/format/webp",
    "https://img.kwcdn.com/product/fancy/62ee3363-ab4d-46a4-8fa4-8c733875411d.jpg?imageView2/2/w/1300/q/90/format/webp"
  ],
  pants: [
    "https://img.kwcdn.com/product/fancy/dd41f049-e487-4a93-bd06-30fa0c31a526.jpg?imageView2/2/w/1300/q/90/format/webp",
    "https://img.kwcdn.com/product/fancy/fdee2f7e-dc86-4f31-b95a-6deac7656a92.jpg?imageView2/2/w/800/q/70/format/webp"
  ],
  accessory: [
    "https://img.kwcdn.com/product/fancy/8b667251-9156-4056-8fb8-28e67732ccae.jpg?imageView2/2/w/800/q/70/format/webp",
    "https://img.kwcdn.com/product/fancy/10e69e69-35da-4980-b149-54fb9790a309.jpg?imageView2/2/w/800/q/70/format/webp"
  ]
};

// Función para obtener la siguiente categoría
function getNextCategory() {
  currentCategoryIndex = (currentCategoryIndex + 1) % categoryOrder.length;
  return categoryOrder[currentCategoryIndex];
}

// Función para seleccionar una imagen aleatoria de la categoría actual
function getRandomClothingImage(category) {
  const images = clothingImages[category] || [];
  if (images.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Función para mostrar una prenda en la pasarela
function createClothing() {
  console.log("Creando prenda...");
  const img = document.createElement("img");
  img.className = "clothing animate__animated animate__fadeIn";

  // Cambia de categoría automáticamente
  currentCategory = getNextCategory();
  const imageUrl = getRandomClothingImage(currentCategory);

  if (imageUrl) {
    img.src = imageUrl;
  } else {
    img.src = "https://via.placeholder.com/250x400?text=No+Image";
  }

  // Reemplaza la prenda anterior con la nueva
  document.getElementById("modelos").innerHTML = "";
  document.getElementById("modelos").appendChild(img);
}

// Variable para guardar el ID del intervalo
let intervalId = null;

// Al hacer clic en "Play", inicia el desfile
document.getElementById("playButton").addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(createClothing, 2000); // Cambia cada 3 segundos
    document.getElementById("playButton").disabled = true;
  }
});


