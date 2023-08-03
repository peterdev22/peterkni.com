import { onMount } from "svelte";

/* shuffleText of title on page load */
const letters = "abcdefghijklmnopqrstuvwxyz~/404";
let interval: any;
let title: any;

onMount(() => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    title.innerText = title.innerText
      .split("")
      .map((letter: any, index: any) => {
        if (index < iteration) {
          return title.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 31)];
      })
      .join("");

    if (iteration >= title.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 2;
  }, 35);
});