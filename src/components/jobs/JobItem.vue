<template>
  <button
    @click="openJobDetails"
    class="group w-full p-4 border border-gray-400 rounded-md flex flex-col cursor-pointer transition-all duration-300 transform motion-reduce:transform-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none md:hover:shadow-md md:hover:-translate-y-0.5 md:hover:scale-105 md:flex-row dark:bg-gray-900 dark:border-indigo-400 sm:flex-row sm:items-center lg:p-6"
  >
    <div
      class="w-16 h-16 mr-4 border shadow-sm flex-shrink-0 rounded-full overflow-hidden hidden sm:inline-block lg:w-20 lg:h-20 lg:mr-6"
      aria-hidden="true"
    >
      <img
        :src="job?.user.avatar_url"
        :alt="`Perfil de ${job?.user.login}`"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="flex flex-col">
      <h2
        class="text-base font-semibold text-left text-gray-800 group-hover:text-indigo-700 dark:text-white dark:group-hover:text-white transition-colors duration-200 lg:text-lg"
      >
        {{ job?.title }}
      </h2>
      <p
        class="mt-1 text-xs text-left text-gray-900 dark:text-indigo-300 lg:text-sm"
      >
        <span role="text">
          Publicado por
          <span class="font-semibold dark:text-indigo-100">{{
            job?.user.login
          }}</span>
          {{ timeDistance }}
        </span>
      </p>
      <ul class="mt-3 flex flex-wrap">
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
