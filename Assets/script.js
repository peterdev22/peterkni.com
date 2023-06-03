const letters = "abcdefghijklmnopqrstuvwxyz~/404";

let interval = null;

window.addEventListener("load", () => {
  const h1Element = document.querySelector("h1");
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1Element.innerText = h1Element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1Element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 31)];
      })
      .join("");

    if (iteration >= h1Element.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 2;
  }, 35);
});
