<template>
  <div class="bg-gray-100 py-6">
    <div class="flex items-center justify-center flex-wrap md:justify-between container">
      <div class="text-center">
        <p class="text-sm sm:text-base font-medium text-gray-500 px-4">&copy; {{ copyright }}</p>
      </div>
      <div class="flex items-center text-center space-x-2">
        <p class="text-sm sm:text-base font-medium text-gray-500">{{ crafted }}</p>
        <img :src="require('./../assets/dev-icons/vue.png')" alt="Dev Logo" class="w-6" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    copyright: new Date().getFullYear() + " Jantinn Erezo. All rights reserved",
    crafted: "Built with",
  }),
};
</script>