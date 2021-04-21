<template>
  <header class="flex flex-col justify-center items-center">
    <div class="mt-3 w-full flex justify-center items-center ">
      <router-link
        to="/"
        class="focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none"
      >
        <h1
          class="text-2xl font-bold uppercase text-indigo-700 dark:text-indigo-300"
          aria-hidden="true"
        >
          {{ '<vagas dev />' }}
        </h1>
        <h1 class="sr-only">Vagas dev</h1>
      </router-link>
    </div>
    <base-divider class="mb-0"></base-divider>
  </header>
</template>
