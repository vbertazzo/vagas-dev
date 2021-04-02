<template>
  <li
    class="w-11/12 px-4 py-2 border rounded-md flex flex-col shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 hover:scale-105 hover:border-gray-300 md:flex-row"
  >
    <div class="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden hidden">
      <img
        :src="job?.user.avatar_url"
        :alt="job?.user.login"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="flex flex-col">
      <h2 class="font-semibold">{{ job?.title }}</h2>
      <p class="mt-1 text-xs">
        Publicado por <span class="font-semibold">{{ job?.user.login }}</span>
        {{ timeDistance }}
      </p>
      <ul class="mt-2 flex flex-wrap">
        <base-chip v-for="label in job?.labels" :key="label.id" class="m-0.5">
          <span>{{ label.name }}</span>
        </base-chip>
      </ul>
    </div>
  </li>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'

const props = defineProps({
  job: {
    labels: [
      {
        id: Number,
        name: String
      }
    ],
    title: String,
    user: {
      avatar_url: String,
      login: String
    }
  }
})

const timeDistance = computed(() => {
  return formatDistance(parseISO(props.job?.created_at), new Date(), {
    addSuffix: true,
    locale: pt
  })
})
</script>
