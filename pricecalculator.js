const pricePerWindow = 59;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", () => {
    const windowCount = parseInt(document.getElementById("windowCount").value);

    if (windowCount && windowCount > 0) {
      const totalPrice = windowCount * pricePerWindow;

      document.querySelector("#priceOutput").innerHTML = `Ungefärligt pris: ${totalPrice} kr`;
    }
  });
});
