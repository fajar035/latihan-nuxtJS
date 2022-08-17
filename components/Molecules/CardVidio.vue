<template>
  <routerLink
    :to="`/video-belajar/${data.id}`"
    class="flex items-center justify-center m-5"
  >
    <div class="w-72 shadow-xl card hover:scale-110 bg-base-100 lg:w-96 ">
      <figure><img :src="data.banner" class="lg:w-64" alt="img" /></figure>
      <div class=" pt-5  card-body">
        <h2 class="text-sm font-bold card-title lg:text-[15px]" >
          {{ data.title }}
        </h2>
        <p class="text-sm truncate lg:text-sm">
          Kunjungi Website Fazztrack Untuk Info Pelatihan
          https://www.fazztrack.com/Follow juga Akun Instagram
          Fazztrackhttps://www.instagram.com/fazztrack.id
        </p>
        <div class="flex items-center justify-between pb-4 mt-4 border-b-2">
          <div class="flex mr-3">
            <h3
              v-for="index in data.star"
              :key="index"
              class="text-yellow-400 text-sm lg:text-lg"
            >
              &#9733;
            </h3>
          </div>
          <h3 class="text-sm lg:text-sm">Level {{ data.level }}</h3>
        </div>
        <div class="flex items-center justify-between pb-2 mt-4 ">
          <h3 class="text-sm lg:text-sm">Harga Module</h3>
          <h3 class="text-sm  text-orange-500 font-bold lg:text-sm">
            {{ data.price }}
          </h3>
        </div>
      </div>
    </div>
  </routerLink>
</template>

<script>
export default {
  name: "CardVidio",
  props: ["data"],
};
</script>
