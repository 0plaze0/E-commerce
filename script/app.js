const initApp = () => {
  const wrapper = document.querySelector(".sliderWrapper");
  const menuItem = document.querySelectorAll(".menuItem");

  menuItem.forEach((node, index) => {
    node.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
  });
};
initApp();
