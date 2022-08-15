<template>
  <div
    class="w-[352px] h-[372px] flex flex-col justify-between items-center border font-open rounded-lg bg-white hover:shadow-md transform transition duration-500 hover:scale-105 py-5 text-black"
  >
    <img
      :src="require(`@/static/images/keunggulan-botcamp/${data.icon}`)"
      alt="foro bootcamp"
      width="100"
      height="100"
    />
    <p class="text-[20px] leading-9 text-center">
      {{ data.name }}
    </p>

    <div class="w-[80%] text-center mb-1">
      <p class="text-sm text-[#46505C]">{{ data.description }}</p>
    </div>

    <div class="flex w-[60%] justify-evenly items-center">
      <router-link
        to="#"
        class="flex items-center text-center text-[#EF6807] font-bold"
        >{{ data.link }}
      </router-link>
      <img :src="arrowRigth" width="20" height="20" />
    </div>
  </div>
</template>

<script>
import arrowRigth from '@/static/icons/arrowRigth.svg'
export default {
  name: 'ComponentCardPilihan',
  props: ['data'],
  data: () => ({
    arrowRigth,
  }),
}
</script>
