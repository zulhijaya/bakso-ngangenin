<template>
    <div id="app" class="text-base lg:text-lg font-rubik">
        <navigation></navigation>

        <router-view></router-view>

        <footer class="py-5 text-center">
            &copy; 2020 Bakso Ngangenin
        </footer>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
    components: {
        Navigation
    },
}
</script>


