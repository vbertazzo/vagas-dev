<template>
  <button
    @click="openJobDetails"
    class="w-full px-4 py-2 border rounded-md flex flex-col shadow cursor-pointer transition-all transform focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none md:hover:shadow-md md:hover:-translate-y-0.5 md:hover:scale-105 md:hover:border-gray-300 md:flex-row"
  >
    <div class="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden hidden">
      <img
        :src="job?.user.avatar_url"
        :alt="job?.user.login"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="flex flex-col">
      <h2 class="font-semibold text-left">{{ job?.title }}</h2>
      <p class="mt-1 text-xs text-left">
        <span role="text">
          Publicado por <span class="font-semibold">{{ job?.user.login }}</span>
          {{ timeDistance }}
        </span>
      </p>
      <ul class="mt-2 flex flex-wrap">
        <base-chip v-for="label in job?.labels" :key="label.id" class="m-0.5">
          <span>{{ label.name }}</span>
        </base-chip>
      </ul>
    </div>
  </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'

const router = useRouter()

const props = defineProps({
  repository: String,
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

const openJobDetails = computed(() => {
  router.push(`/${props.repository}/${props.job.number}`)
})
</script>
