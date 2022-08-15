<template>
  <div class="bg-white w-full px-5 rounded-sm">
    <div class="flex justify-between mt-5">
      <h3 class="lg:text-lg font-bold text-blue-900">{{ data.type }}</h3>
      <h3 v-if="data.hiring" class="lg:text-lg font-bold text-orange-600">
        Disalurkan Kerja
      </h3>
    </div>
    <div class="h-10">
      <h3 class="text-black font-medium mt-5 lg:text-xl">{{ data.title }}</h3>
    </div>
    <div class="lg:h-12">
      <h3 class="font-medium mt-10 lg:text-sm">{{ data.description }}</h3>
    </div>
    <h3 class="mt-10 lg:text-sm">{{ data.date }}</h3>
    <div class="flex py-5 border-b-2 border-t-2 mt-5">
      <img
        :src="data.trainerProfilePicture"
        class="w-14 h-14 rounded-md"
        alt=""
      />
      <div class="flex flex-col justify-between ml-5">
        <h3 class="font-semibold lg:text-sm">{{ data.trainerName }}</h3>
        <h3 class="lg:text-sm">{{ data.trainerTitle }}</h3>
      </div>
    </div>
    <div class="flex justify-between mt-5 border-b-2">
      <h3 class="lg:text-sm">Harga Mini Bootcamp</h3>
      <h3 class="text-black font-semibold mb-5 lg:text-sm">
        {{ rupiah(data.price) }}
      </h3>
    </div>
    <div class="my-5 flex justify-center">
      <button class="text-blue-800 font-semibold">Daftar Sekarang</button>
      <div class="flex justify-center items-center ml-3">
        <img src="@/static/icons/arrowRigth.svg" class="w-4 h-4" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMiniBootcamp',
  props: ['data'],
  methods: {
    rupiah(number) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(number)
    },
  },
}
</script>
