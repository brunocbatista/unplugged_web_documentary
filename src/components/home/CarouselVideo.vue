<template>
  <div class="carousel relative shadow-2xl bg-white">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
             checked="checked">
      <div class="carousel-item absolute opacity-0 flex items-center justify-center" style="height:60vh;background-image: url('/images/main-background.gif');background-size: cover;background-position: center;background-repeat: no-repeat;">
        <video class="w-5/6 md:w-3/6" controls>
          <source src="https://www.youtube.com/watch?v=TKqa-ZXGKYA&ab_channel=30PRAUM" type="video/mp4">
        </video>
      </div>

      <!--Slide 2-->
      <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0 flex items-center justify-center" style="height:60vh;background-image: url('/images/main-background.gif');background-size: cover;background-position: center;background-repeat: no-repeat;">
        <video class="w-5/6 md:w-3/6" controls>
          <source src="https://www.youtube.com/watch?v=TKqa-ZXGKYA&ab_channel=30PRAUM" type="video/mp4">
        </video>
      </div>

      <!--Slide 3-->
      <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0 flex items-center justify-center" style="height:60vh;background-image: url('/images/main-background.gif');background-size: cover;background-position: center;background-repeat: no-repeat;">
        <video class="w-5/6 md:w-3/6" controls>
          <source src="https://www.youtube.com/watch?v=TKqa-ZXGKYA&ab_channel=30PRAUM" type="video/mp4">
        </video>
      </div>

      <!-- Add additional indicators for each slide-->
      <ol class="carousel-indicators leading-5 w-10 h-10 mr-2 absolute z-10 inset-y-0 right-0 my-auto">
        <li>
          <label for="carousel-1"
                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-400">•</label>
        </li>
        <li>
          <label for="carousel-2"
                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-400">•</label>
        </li>
        <li>
          <label for="carousel-3"
                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-400">•</label>
        </li>
      </ol>

    </div>
  </div>
</template>
<script setup>

</script>
<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}


#carousel-1:checked ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #a2a2a2; /*Set to match the Tailwind colour you want the active one to be */
}
</style>
