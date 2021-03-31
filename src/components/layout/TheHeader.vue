<template>
  <header class="mt-4 flex flex-col justify-center items-center">
    <div class="mb-4 w-full flex justify-around items-center">
      <router-link to="/">
        <h1 class="text-2xl font-bold uppercase">{{ '<Vagas Dev />' }}</h1>
      </router-link>

      <button class="h-8 w-8" title="Abrir menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div class="w-11/12 border-b"></div>
  </header>
</template>
