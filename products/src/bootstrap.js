import faker from "faker";

// element - HTML Element
const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// webpack automatically put the env variable from webpack.config.js, mode variable
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container doesnt have an element with id: dev-products.
  if (el) {
    // We are probably running in isolation.
    mount(el);
  }
}

export { mount };
