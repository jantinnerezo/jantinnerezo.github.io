<template>
<div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto ">
        <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {{ name }}
                <br />
                <span class="text-gray-500"> {{ position }}</span>
            </h2>
            <div class="flex items-center sm:justify-center lg:justify-start flex-wrap mt-4">
                <a :href="'mailto:' + email" class="text-center flex items-center font-medium transition duration-150 hover:text-gray-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg"  class="text-gray-600 w-6 h-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    {{ email }}
                </a>
                <a :href="'https://github.com/' + github" class="text-center flex items-center font-medium transition duration-150 hover:text-gray-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 w-6 h-6 mr-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                    </svg>
                    {{ github }}
                </a>
                <a :href="'https://twitter.com/' + twitter" class="text-center flex items-center font-medium transition duration-150 hover:text-gray-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 w-6 h-6 mr-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                    </svg>
                    {{ twitter }}
                </a>
            </div>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {{ description }}
            </p>
            <div class="mt-5 sm:mt-8 flex sm:justify-center lg:justify-start items-center space-x-6">
                <div v-for="(stack, index) in stacks" :key="index">
                    <img :src="require('./../assets/dev-icons/' + stack +'.png')" alt="Dev Logo" class="w-12 grayscale">
                </div>
            </div>
            </div>
        </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="relative w-full h-full overflow-hidden opacity-25 rounded-full">
            <img
                class="w-full object-cover"
                src="https://avatars0.githubusercontent.com/u/29738837?s=400&u=3b213d06bace44470ac537db4411692c2588808c&v=4" alt="Jantinn Erezo Image"
            />
        </div>
    </div>
</div>
</template>
<script>
export default {
    data: () => ({
        name: 'Jantinn Erezo',
        position: 'Full-stack Web Developer',
        description: 'A full-stack web developer with over 3+ years of experience. I am a heavy user of development tools like Laravel for my main development platform,  AlpineJS for a little sprinkle of DOM reactivity and behavior, VueJs for complex User interface and TailwindCSS for overall low-level styling.',
        stacks: ['laravel','livewire','alpinejs','vue','tailwindcss','wordpress'],
        email: 'erezojantinn@gmail.com',
        github: 'jantinnerezo',
        twitter: 'CuanJan'
    })
}
</script>