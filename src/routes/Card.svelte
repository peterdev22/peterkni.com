<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let id: number;
  export let title: string;
  export let description: string;
  export let date: string;
  export let url: string;
  export let domain: string;
  export let images: Array<{
    source: string;
    alt: string;
    initialX: number;
    initialY: number;
    initialRotation: number;
    initialScale: number;
    finalX: number;
    finalY: number;
    finalRotation: number;
    finalScale: number;
  }>;

  const image = images[0];
  const translateX = tweened(image.initialX, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });
  const translateY = tweened(image.initialY, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });
  const rotation = tweened(image.initialRotation, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });
  const scale = tweened(image.initialScale, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });

  function handleMouseOver() {
    translateX.set(image.finalX);
    translateY.set(image.finalY);
    rotation.set(image.finalRotation);
    scale.set(image.finalScale);
  }
  function handleMouseLeave() {
    translateX.set(image.initialX);
    translateY.set(image.initialY);
    rotation.set(image.initialRotation);
    scale.set(image.initialScale);
  }

</script>

<div class="card">
  <div
    class="card-content"
    role="main"
    on:mouseover={handleMouseOver}
    on:mouseleave={handleMouseLeave}
    on:focus={handleMouseOver}
    on:blur={handleMouseLeave}
  >
    <p class="card-title">
      {title} <span class="date">{date}</span>{#if title == 'Airohh'}<span
          style="
      color: #14131F;
      text-align: center;
      vertical-align: 25%;
      font-weight: 600;
      margin-left: 10px;
      font-size: x-small;
      border: #2ecde9;
      border-style: solid;
      border-width: 2px;
      background-color: #37defc;
      border-radius: 5px;
      padding: 2px 5px 2px 5px;">Unindexed</span
        >{/if}
    </p>
    <p class="card-description">
      {description}
    </p>
    <a class="card-button" href={url}>
      Visit <span class="domain">{domain}</span> ->
    </a>
  </div>
  {#each images as image, i (id)}
    <img
      class="card-image"
      style="transform: translate({$translateX}rem, {$translateY}rem) rotate({$rotation}deg) scale({$scale});"
      src={image.source}
      alt={image.alt}
    />
  {/each}
</div>

<style>
  /* ----- Text ----- */
  p {
    font-family: "JetBrainsMono", monospace;
    font-size: large;
    font-weight: 400;
    color: #bac2de;
  }

  /* ----- Full Card ----- */
  .card {
    transition: 0.5s;
  }
  .card:hover {
    box-shadow: 0px 15px 40px #25263981;
    transform: translate(0, -4px);
  }

  /* ----- Major Contents----- */
  .card > .card-content {
    background: linear-gradient(30deg, #1e1e2e00 50%, #27273b);
    border: #1e1e2e;
    border-width: 3px;
    border-radius: 12px;
    border-style: solid;

    padding-left: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
  }
  .card > .card-image {
    box-shadow: 0px 30px 50px #1e1e2ebe;
    border-radius: 12px;
    position: absolute;
    display: none;
  }

  /* ----- Minor Contents ----- */
  .card-content > .card-title {
    font-weight: 500;
  }
  .card-content > .card-title > .date {
    color: #14131f;
    text-align: center;
    vertical-align: 25%;
    font-weight: 600;
    margin-left: 5px;
    border: #d4946c;
    border-style: solid;
    border-width: 2px;
    font-size: x-small;
    background-color: #fab387;
    border-radius: 5px;
    padding: 2px 5px 2px 5px;
  }
  .card-content > .card-description {
    font-size: medium;
    margin-top: -10px;
    color: #6c7284;
    display: none;
  }
  .card-content > .card-button {
    font-family: "JetBrainsMono", monospace;
    font-size: small;
    font-weight: 500;
    color: #bac2debe;
    background: #1e1e2e00;
    border: #222235bb;
    border-width: 2px;
    border-radius: 8px;
    border-style: solid;
    word-wrap: break-word;

    padding: 5px 10px 5px 10px;

    transition: 0.3s;
    text-decoration: none;
  }
  .card-content > .card-button:hover {
    color: #f9e2af;
    font-weight: 800;
  }

  @media only screen and (min-width: 1000px) {
    .card > .card-image {
      display: block;
    }

    .card {
      margin-right: 0px;
    }

    .card-content > .card-description {
      display: block;
    }
  }
</style>
