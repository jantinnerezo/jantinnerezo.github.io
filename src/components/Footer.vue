<template>
    <div class="bg-gray-100 py-6">
        <div class="flex items-center justify-center flex-wrap md:justify-between container">
            <div class="text-center">
                <p class="text-sm sm:text-base font-medium text-gray-500 px-4"> &copy; {{ copyright }}</p>
            </div>
            <div class="text-center">
                <p class="text-sm sm:text-base font-medium text-gray-500 px-4">
                    {{ crafted }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        'copyright': new Date().getFullYear() + ' Jantinn Erezo. All rights reserved',
        'crafted': 'Built with VueJS'
    })
}
</script>