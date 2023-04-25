const PRODUCTS = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

const initApp = () => {
  const wrapper = document.querySelector(".sliderWrapper");
  const menuItem = document.querySelectorAll(".menuItem");

  let chosenProduct = PRODUCTS[0];

  const ProductImage = document.querySelector(".productImg");
  const ProductTitle = document.querySelector(".productTitle");
  const ProductPrice = document.querySelector(".productPrize");
  const ProductColor = document.querySelectorAll(".color");
  const ProductSize = document.querySelectorAll(".size");
  console.log(PRODUCTS);
  console.log(ProductImage);
  console.log(ProductTitle);
  console.log(ProductPrice);
  console.log(ProductColor);
  console.log(ProductSize);

  menuItem.forEach((node, index) => {
    node.addEventListener("click", () => {
      //change slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      //chossen product
      chosenProduct = PRODUCTS[index];
      console.log(chosenProduct);

      //change product
      ProductImage.src = chosenProduct.colors[0].img;
      ProductTitle.textContent = chosenProduct.title;
      ProductPrice.textContent = `$${chosenProduct.price}`;
      ProductColor.forEach((color, index) => {
        color.style.backgroundColor = chosenProduct.colors[index].code;
      });
    });
  });
  ProductColor.forEach((color, index) => {
    color.addEventListener("click", () => {
      ProductImage.src = chosenProduct.colors[index].img;
    });
  });
  ProductSize.forEach((size) => {
    size.addEventListener("click", () => {
      ProductSize.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
};

initApp();
