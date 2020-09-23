<template>
    <div class="bg-main px-4 lg:px-5 xl:px-64 py-5 text-white" style="margin-bottom: 3px"> 
        <div class="relative flex items-center justify-between">
            <div @click="toggleNavigation = !toggleNavigation" class="cursor-pointer hover:text-orange-200">
                <svg class="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </div>
            <a href="https://zulhijaya.github.io/kursus-bakso-laris" class="flex items-center">
                <h6 class="hidden md:block mr-4">Divisi Pendidikan</h6>
                <img src="@/assets/img/profil.png" class="h-8 w-8 md:h-10 md:w-10 cursor-pointer">
            </a>
        </div>
        <router-link :to="{ name: 'home' }" tag="div" class="flex justify-center w-full">
            <img src="@/assets/img/logo.png" class="absolute top-0 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 mt-8 sm:mt-5 cursor-pointer">
        </router-link>
        <ul v-show="toggleNavigation" class="mt-20 md:mt-10 text-base md:text-lg cursor-pointer font-semibold">
            <router-link :to="{ name: 'home' }" tag="li" class="hover:text-orange-200 uppercase mb-2">Home</router-link>
            <router-link :to="{ name: 'profil' }" tag="li" class="hover:text-orange-200 uppercase mb-2">Profil</router-link>
            <router-link :to="{ name: 'kemitraan' }" tag="li" class="hover:text-orange-200 uppercase mb-2">Kemitraan</router-link>
            <router-link :to="{ name: 'order' }" tag="li" class="hover:text-orange-200 uppercase">Order</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggleNavigation: false
        }
    },

    watch: {
        '$route'() {
            this.toggleNavigation = false
        }
    },
}
</script>