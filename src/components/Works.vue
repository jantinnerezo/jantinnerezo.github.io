<template>
  <div class="py-12 bg-white">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="text-base leading-6 text-gray-600 font-semibold tracking-wide uppercase">Works</p>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        What I've done through the years
      </h3>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        Websites and web applications I've built for clients as part of my web development journey.
      </p>
    </div>
    <div class="mt-10">
      <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
        <li v-for="work in works" :key="work.key">
          <div class="flex mb-8 sm:mb-0">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 sm:w-16 rounded-md text-white">
                <img :src="work.logo" :class="work.size">
              </div>
            </div>
            <div class="ml-4">
              <a :href="work.url" class="text-lg leading-6 font-bold tracking-wide text-gray-900 transition duration-150 hover:text-gray-500">
                {{ work.title }}
              </a>
              <p class="my-2 text-base leading-6 text-gray-500">
                {{ work.description }}
              </p>
              <div class="flex items-center space-x-6 mt-6">
                <div v-for="(stack, index) in work.stacks" :key="index">
                    <img :src="require('./../assets/dev-icons/' + stack +'.png')" alt="Dev Logo" class="w-8">
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    works: [
      {
        key: 'innovative-scholars',
        title: 'Innovative Scholars Website',
        url: 'https://www.innovativescholars.net',
        logo: 'https://www.innovativescholars.net/static/logo/app-logo.png',
        size: 'w-full',
        description: 'Innovative Scholars partners with non-public schools in Chicago to implement blended learning solutions that effectively improve academic performance in struggling students.',
        stacks: ['laravel','livewire','alpinejs','tailwindcss']
      },
      {
        key: 'filcaspro',
        title: 'FilCASPro',
        logo: 'https://jomomedia.co.uk/branding/filcaspro.png',
        url: 'https://filcaspro.com',
        size: 'w-6',
        description: 'Registered in the United Kingdom, FilCASPro.com was initially conceptualized by filmmaker/documentarist Jowee Morel in 2012 as a communication channel for Filipino artists in the worldwide web.',
        stacks: ['laravel','bootstrap']
      },
      {
        key: 'jomomedia',
        title: 'JoMo Media',
        logo: 'https://jomomedia.co.uk/branding/logo.png',
        url: 'https://jomomedia.co.uk/',
        size: 'w-full',
        description: 'is a dynamic media company based in London with a Creative Global Vision. We are a team of highly qualified and experienced Films and Media practitioners with a genuine humanitarian outlook on life.',
        stacks: ['laravel','wordpress','livewire','alpinejs','tailwindcss']
      },
      {
        key: 'innovative-scholars-system',
        title: 'Innovative Scholars Management System',
        logo: 'https://www.innovativescholars.net/static/logo/app-logo.png',
        url: 'https://system.innovativescholars.net',
        size: 'w-full',
        description: 'School Management System of Innovative Scholars for Teachers and Administrators.',
        stacks: ['laravel','livewire','alpinejs','tailwindcss']
      },
      {
        key: 'dfmrecruitment',
        title: 'DFM Recruitment',
        logo: require('./../assets/portfolio-logos/dfmrecruitment.png'),
        url: 'http://dfmrecruitment.ie/',
        size: 'w-full',
        description: 'We recognise the challenge in finding professionals for a range of different industries; Pharmaceutical, Healthcare, Financial, Construction & Engineering, Media, Technology to name a few.',
        stacks: ['laravel','tailwindcss']
      },
    ]
  })
}
</script>
