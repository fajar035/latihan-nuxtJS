<template>
  <div
    class="w-[539px] h-auto flex flex-wrap border font-open rounded-md hover:shadow-md transform transition duration-500 hover:scale-105 lg:justify-between"
  >
    <img
      :src="require(`@/static/images/pilihan_botcamp/${data.foto}`)"
      alt="foro bootcamp"
      class="object-cover object-center lg:w-[40%] w-full p-5 md:p-0"
    />
    <div class="flex flex-col justify-around p-5 w-full lg:w-[60%]">
      <p class="text-[24px] font-semibold leading-9 text-[#1F2A36]">
        {{ data.name }}
      </p>
      <p>{{ data.description }}</p>

      <router-link to="#" class="flex items-center text-[#2557A7] font-bold"
        >Lihat kurikulum
        <img
          :src="arrowRigth"
          width="20"
          height="20"
          class="ml-2 text-red-600"
        />
      </router-link>
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
