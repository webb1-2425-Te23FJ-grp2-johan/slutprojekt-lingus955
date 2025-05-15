const pricePerWindow = 60;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", () => {
    const windowCount = parseInt(document.getElementById("windowCount").value);

    if (windowCount && windowCount > 0) {
      const totalPrice = windowCount * pricePerWindow;

      document.getElementById(
        "priceOutput"
      ).textContent = `Ungefärligt pris: ${totalPrice} kr`;
    }
  });
});
