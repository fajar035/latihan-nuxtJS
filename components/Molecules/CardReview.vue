<template>
  <div class="w-full h-auto p-6 mb-5 border">
    <div class="flex">
      <div class="mr-7 p-2 border rounded-full bg-[#8D959E] w-fit h-fit">
        <img :src="userIcon" alt="icon" width="30" height="30" />
      </div>

      <div>
        <p class="font-semibold leading-6 text-[#1F2A36] mb-2">
          {{ data.name }}
        </p>
        <div class="flex items-center mb-2">
          <img
            v-for="n in data.star"
            :key="n"
            :src="ratingIcon"
            alt="icon"
            height="20"
            width="20"
          />
        </div>
        <p class="text-sm text-[#46505C] mb-2">{{ data.comment }}</p>
        <p class="text-sm text-[#8D959E]">{{ data.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import userIcon from '@/static/icons/userComment.svg'
import ratingNullCommentIcon from '@/static/icons/ratingNullComment.svg'
import ratingIcon from '@/static/icons/ratingSolid.svg'

export default {
  name: 'ComponentCardReview',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    userIcon,
    ratingNullCommentIcon,
    ratingIcon,
  }),
}
</script>
