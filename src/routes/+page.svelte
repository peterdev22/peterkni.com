<!-- ---------------- SCRIPT -------------------- -->
<script lang="ts">
  import { personalProjects, schoolProjects } from "$lib/projectData";
  import Card from "./Card.svelte";
  import { onMount } from "svelte";

  /* shuffleText of title on page load */
  const letters = "abcdefghijklmnopqrstuvwxyz~/";
  let interval: any;
  let title: any;

  onMount(() => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      title.innerText = title.innerText
        .split("")
        .map((letter: any, index: number) => {
          if (index < iteration) {
            return title.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 21)];
        })
        .join("");

      if (iteration >= title.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 35);
  });

</script>

<!-- ---------------- HEAD -------------------- -->
<svelte:head>
  <meta
    name="description"
    content="A portfolio containing all public projects created by Peter."
  />
  <title>Peter // Home</title>
</svelte:head>

<!-- ---------------- TITLE -------------------- -->
<div class="row zoom-fade-in">
  <div class="col-2" />
  <div class="col-8">
    <h1 data-value="~/peters-website" bind:this={title}>~/peters-website</h1>

    <p style="color: #6C7284;">
      <a href="https://github.com/peterdev22" class="github-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        GitHub
      </a>
    </p>
  </div>
  <div class="col-2" />
</div>

<!-- ---------------- CARDS -------------------- -->
<div class="row zoom-fade-in-delay">
  <div class="col-2" />

  <div class="col-4">
    <h2 style="color: #F38BA8;">Personal Projects</h2>
    {#each personalProjects as project, i (project.id)}
      <Card {...project} />
    {/each}
    <div class="hover-tip">
      <svg id="image-tip-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M177.62 159.6a52 52 0 0 1-34 34a12.2 12.2 0 0 1-3.6.55a12 12 0 0 1-3.6-23.45a28 28 0 0 0 18.32-18.32a12 12 0 0 1 22.9 7.2ZM220 144a92 92 0 0 1-184 0c0-28.81 11.27-58.18 33.48-87.28a12 12 0 0 1 17.9-1.33l19.69 19.11L127 19.89a12 12 0 0 1 18.94-5.12C168.2 33.25 220 82.85 220 144Zm-24 0c0-41.71-30.61-78.39-52.52-99.29l-20.21 55.4a12 12 0 0 1-19.63 4.5L80.71 82.36C67 103.38 60 124.06 60 144a68 68 0 0 0 136 0Z"/></svg>
      <p id="image-tip-pt1" >Tip</p>
      <p id="image-tip-pt2">Hover over a project to preview</p>
    </div>
  </div>

  <div class="col-6" />
  <div class="col-2" />
</div>

<div class="row zoom-fade-in-delay">
  <div class="col-2" />

  <div class="col-4">
    <h2 style="color: #A6E3A1;">School Shenanigans</h2>

    {#each schoolProjects as project, i (project.id)}
      <Card {...project} />
    {/each}
  </div>

  <div class="col-6" />
</div>

<div class="row zoom-fade-in-delay">
  <div class="col-2" />

  <div class="col-8">
    <p style="color: #2c2d44; text-align: center; font-size: small;">~/peters-website · Thanks for visiting!</p>
  </div>
  
  <div class="col-2" />
</div>

<!-- ---------------- STYLES -------------------- -->
<style>
  /* everything */
  :root {
    background-color: #11111b;
    text-shadow: 0px 0px 250px #605e80;
    margin: 0px;
  }

  /* headers & text  */
  h1 {
    font-family: "JetBrainsMono", monospace;
    font-size: xx-large;
    font-weight: 700;

    color: #bac2de;
  }
  h2 {
    font-family: "JetBrainsMono", monospace;
    font-size: x-large;
    font-weight: 700;

    color: #6c7284;
  }
  p {
    font-family: "JetBrainsMono", monospace;
    font-size: large;
    font-weight: 400;

    color: #bac2de;
  }

  .github-link {
    font-weight: 500;
    color: #6c7284;
    text-decoration: none;
    transition: color 0.3s, margin-left 0.4s;
  }
  .github-link:hover {
    color: #f9e2af;
    margin-left: 5px;
  }
  .icon {
    width: 25px;
    height: 25px;
    margin-bottom: -5px;
  }
  .hover-tip {
    display: none;
    height: 80px;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 0px 60px rgb(182, 180, 211);
  }
  #image-tip-icon {
    color: #fab387;
    position: absolute;
    transform: translate(-20px, -21px);
    z-index: -5;
  }
  #image-tip-pt1 {
    color: #f9e2af;
    position: absolute;
    font-size: smaller;
    transform: translate(-5px, -14px);
    background-color: #11111B;
    padding: 6px 10px 20px 30px;
    font-weight: 600;
    z-index: -15;
    border: #1E1E2E;
    border-style: solid;
    border-radius: 12px;
  }
  #image-tip-pt2 {
    font-style: italic;
    font-size: smaller;
    color: #6c72847c;
    font-size: smaller;
    z-index: -10;
    transform: translate(0px, 10px);
    background-color: #11111B;
    padding: 4px 10px 4px 10px;
    font-weight: 500;
    border: #212130a2;
    border-style: solid;
    border-radius: 12px 5px 12px 5px;
  }

  /* responsive resizing (mobile first) */
  * {
    box-sizing: border-box;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  [class*="col-"] {
    width: 100%;
    float: left;
    padding: 0px 15px 0px 15px;
  }
  @media only screen and (min-width: 1000px) {
    .col-1 {
      width: 8.33%;
    }
    .col-2 {
      width: 16.66%;
    }
    .col-3 {
      width: 25%;
    }
    .col-4 {
      width: 33.33%;
    }
    .col-5 {
      width: 41.66%;
    }
    .col-6 {
      width: 50%;
    }
    .col-7 {
      width: 58.33%;
    }
    .col-8 {
      width: 66.66%;
    }
    .col-9 {
      width: 75%;
    }
    .col-10 {
      width: 83.33%;
    }
    .col-11 {
      width: 91.66%;
    }
    .col-12 {
      width: 100%;
    }

    h1 {
      margin-top: 20vmin;
    }
    [class*="col-"] {
      padding: 15px;
    }
    .hover-tip {
      display: flex;
    }

  }

  /* animations */
  .zoom-fade-in {
    opacity: 0; /* Start with the text hidden */
    animation: zoomFadeIn 1s forwards; /* Apply the animation with a duration of 1 second */
  }
  .zoom-fade-in-delay {
    opacity: 0; /* Start with the text hidden */
    animation: zoomFadeIn 1s forwards; /* Apply the animation with a duration of 1 second */
    animation-delay: 0.1s;
  }
  @keyframes zoomFadeIn {
    0% {
      transform: scale(0.95); /* Start with a smaller size */
      opacity: 0; /* Start with the text hidden */
    }
    100% {
      transform: scale(1); /* End with the original size */
      opacity: 1; /* Fully visible */
    }
  }
</style>
