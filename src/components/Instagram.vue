<template>
    <div>
        <div class="flex flex-col items-center justify-center">
            <h2 class="font-bitter font-semibold text-3xl text-center text-main mb-10">Instagram Bakso Ngangenin</h2>
            <a href="https://www.instagram.com/bakso_ngangenin" class="bg-main text-white mb-5 px-4 py-2 rounded-md mb-10">Follow @bakso_ngangenin</a>
        </div>
        <carousel 
            :items="numberOfItems" 
            :loop="true" 
            :center="true" 
            :nav="false" 
            :margin="setMargin"
            :autoWidth="autoWidth"
            :autoplay="true"
            :autoplayTimeout="2000"
            class="mb-32"
        >
            <div v-for="n in 20" :key="n" class="w-64 sm:w-full" data-aos="fade-up" data-aos-duration="800">
                <img :src="require('@/assets/img/' + n + '.jpg')" class="rounded-md object-cover h-40 md:h-48 lg:h-40 xl:h-48">
            </div>
        </carousel>
    </div>
</template>

<script>
import Carousel from 'vue-owl-carousel2'
import VueScreenSize from 'vue-screen-size'

export default {
    mixins: [VueScreenSize.VueScreenSizeMixin],

    components: {
        Carousel
    },

    computed: {
        numberOfItems() {
            if( this.$vssWidth >= 1024 ) return 4
            else return 2 
        },

        autoWidth() {
            if( this.$vssWidth >= 640 ) return false
            else return true 
        },

        setMargin() {
            if( this.$vssWidth >= 640 ) return 15
            else return 5 
        }
    },
}
</script>