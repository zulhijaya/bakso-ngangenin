<template>
    <div>
        <section name="main" class="flex justify-end px-5 sm:px-16 lg:px-10 xl:px-64 mb-40 xl:mb-40 bg-main lg:bg-cover lg:bg-no-repeat w-full">
            <div class="w-full mb-12 md:mb-12 lg:mb-8 xl:mb-24 mt-24 sm:mt-32 md:mt-40 xl:mt-48 text-base">
                <div class="flex justify-end">
                    <h6 class="w-full lg:w-1/2 font-semibold text-3xl md:text-4xl md:text-lg mb-5 tracking-wide text-white">Kemitraan</h6>
                </div>
                <div class="flex">
                    <div class="hidden lg:block w-1/2 flex justify-center">
                        <img src="@/assets/img/kemitraan.png" class="h-56">
                    </div>
                    <form @submit.prevent="sendEmail" class="w-full lg:w-1/2 bg-white rounded-lg px-5 pt-8 pb-5 shadow-lg -mb-24 xl:-mb-40 border border-gray-400">
                        <div class="relative mb-4">
                            <input type="text" v-model="form.name" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Nama Lengkap">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5" x="0" y="0" viewBox="0 -43 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve">
                            <g><path xmlns="http://www.w3.org/2000/svg" d="m453.332031 42.667969h-112v-5.335938c0-20.585937-16.746093-37.332031-37.332031-37.332031h-96c-20.585938 0-37.332031 16.746094-37.332031 37.332031v5.335938h-112c-32.363281 0-58.667969 26.300781-58.667969 58.664062v266.667969c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-266.667969c0-32.363281-26.304688-58.664062-58.667969-58.664062zm-154.644531 42.664062h-85.355469v-42.664062h85.335938zm-138.6875 64c29.398438 0 53.332031 23.9375 53.332031 53.335938 0 29.394531-23.933593 53.332031-53.332031 53.332031s-53.332031-23.9375-53.332031-53.332031c0-29.398438 23.933593-53.335938 53.332031-53.335938zm96 197.335938c0 8.832031-7.167969 16-16 16h-160c-8.832031 0-16-7.167969-16-16v-10.667969c0-32.363281 26.304688-58.667969 58.667969-58.667969h74.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969zm176 16h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.335938h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.332031h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="#ff7e23" data-original="#000000" style="" class=""/></g>
                            </svg>
                        </div>
                        <div class="relative mb-4">
                            <input type="text" v-model="form.email" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Alamat Email">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 512 512" xml:space="preserve" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5">
                                <g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z" fill="#ff7e23" data-original="#000000" style=""/> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8    c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z" fill="#ff7e23" data-original="#000000" style=""/> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g>
                            </svg>
                        </div>
                        <div class="relative mb-4">
                            <input type="text" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Nomor Telepon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve">
                            <g> <circle xmlns="http://www.w3.org/2000/svg" style="" cx="256" cy="256" r="256" fill="#ff7e23" data-original="#2196f3" class=""/> <path xmlns="http://www.w3.org/2000/svg" style="" d="M384,308.928c-27.616,0-53.952-6.016-78.24-17.888c-3.808-1.824-8.224-2.112-12.256-0.736  c-4.032,1.408-7.328,4.352-9.184,8.16l-11.52,23.84c-34.56-19.84-63.232-48.544-83.104-83.104l23.872-11.52  c3.84-1.856,6.752-5.152,8.16-9.184c1.376-4.032,1.12-8.448-0.736-12.256c-11.904-24.256-17.92-50.592-17.92-78.24  c0-8.832-7.168-16-16-16H128c-8.832,0-16,7.168-16,16c0,149.984,122.016,272,272,272c8.832,0,16-7.168,16-16v-59.072  C400,316.096,392.832,308.928,384,308.928z" fill="#fafafa" data-original="#fafafa" class=""/> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g>
                            </svg>
                        </div>
                        <div class="relative mb-4">
                            <input type="text" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Domisili Dimana">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m407.579 87.677c-31.073-53.624-86.265-86.385-147.64-87.637-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308l126.963-232.387c30.304-55.471 29.435-121.311-2.327-176.123zm-151.579 144.323c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z" fill="#ff7e23" data-original="#000000" style=""/></g></g></svg>
                        </div>
                        <div class="relative mb-4">
                            <input type="text" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Pekerjaan">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5" x="0" y="0" viewBox="0 -43 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m453.332031 42.667969h-112v-5.335938c0-20.585937-16.746093-37.332031-37.332031-37.332031h-96c-20.585938 0-37.332031 16.746094-37.332031 37.332031v5.335938h-112c-32.363281 0-58.667969 26.300781-58.667969 58.664062v266.667969c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-266.667969c0-32.363281-26.304688-58.664062-58.667969-58.664062zm-154.644531 42.664062h-85.355469v-42.664062h85.335938zm-138.6875 64c29.398438 0 53.332031 23.9375 53.332031 53.335938 0 29.394531-23.933593 53.332031-53.332031 53.332031s-53.332031-23.9375-53.332031-53.332031c0-29.398438 23.933593-53.335938 53.332031-53.335938zm96 197.335938c0 8.832031-7.167969 16-16 16h-160c-8.832031 0-16-7.167969-16-16v-10.667969c0-32.363281 26.304688-58.667969 58.667969-58.667969h74.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969zm176 16h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.335938h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.332031h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="#ff7e23" data-original="#000000" style="" class=""/></g></svg>
                        </div>
                        <div class="relative mb-4">
                            <input type="text" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Rencana Lokasi Usaha">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5" x="0" y="0" viewBox="-69 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m230.226562 177.535156h16.855469c-5.492187-21.929687-22.75-39.230468-44.621093-44.738281v16.898437c0 8.285157-6.699219 15-14.960938 15s-14.960938-6.714843-14.960938-15v-16.898437c-21.875 5.507813-39.128906 22.808594-44.621093 44.738281h16.851562c8.261719 0 14.960938 6.71875 14.960938 15 0 8.285156-6.699219 15-14.960938 15h-16.851562c5.492187 21.933594 22.746093 39.234375 44.621093 44.742188v-16.898438c0-8.285156 6.699219-15 14.960938-15s14.960938 6.714844 14.960938 15v16.898438c21.871093-5.511719 39.128906-22.808594 44.621093-44.742188h-16.855469c-8.261718 0-14.957031-6.714844-14.957031-15 0-8.28125 6.695313-15 14.957031-15zm0 0" fill="#ff7e23" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m374.539062 184.074219c-3.207031-50.441407-23.054687-97.445313-54.449218-128.957031-35.414063-35.542969-82.5-55.117188-132.585938-55.117188-50.089844 0-97.175781 19.574219-132.59375 55.117188-31.394531 31.511718-51.242187 78.515624-54.449218 128.957031-3.1875 50.089843 10.246093 99.289062 36.859374 135.039062l123.339844 178.773438c6.09375 8.839843 16.128906 14.113281 26.839844 14.113281s20.746094-5.273438 26.839844-14.113281l123.335937-178.773438c26.617188-35.753906 40.046875-84.949219 36.863281-135.039062zm-76.996093 23.460937h-19.921875c-6.355469 38.511719-36.753906 68.988282-75.160156 75.359375v19.972657c0 8.285156-6.699219 15-14.960938 15s-14.960938-6.714844-14.960938-15v-19.972657c-38.40625-6.371093-68.808593-36.847656-75.160156-75.359375h-19.921875c-8.261719 0-14.960937-6.714844-14.960937-15 0-8.28125 6.699218-15 14.960937-15h19.921875c6.351563-38.507812 36.75-68.988281 75.160156-75.359375v-19.972656c0-8.285156 6.699219-15 14.960938-15s14.960938 6.714844 14.960938 15v19.972656c38.40625 6.371094 68.804687 36.851563 75.160156 75.359375h19.921875c8.261719 0 14.960937 6.71875 14.960937 15 0 8.285156-6.699218 15-14.960937 15zm0 0" fill="#ff7e23" data-original="#000000" style=""/></g></svg>
                        </div>
                        <div class="relative mb-4">
                            <input type="text" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Harapan Penghasilan">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m271 328.946c17.245-4.235 30-15.335 30-28.092s-12.755-23.857-30-28.092z" fill="#ff7e23" data-original="#000000" style=""/><path d="m256 91c-90.981 0-165 74.019-165 165s74.019 165 165 165 165-74.019 165-165-74.019-165-165-165zm75 209.854c0 28.98-25.809 53.212-60 58.786v16.36c0 8.291-6.709 15-15 15s-15-6.709-15-15v-16.36c-34.191-5.574-60-29.806-60-58.786 0-8.291 6.709-15 15-15s15 6.709 15 15c0 12.757 12.755 23.857 30 28.092v-59.306c-34.191-5.574-60-29.806-60-58.786s25.809-53.212 60-58.786v-16.214c0-8.291 6.709-15 15-15s15 6.709 15 15v16.214c34.191 5.574 60 29.806 60 58.786 0 8.291-6.709 15-15 15s-15-6.709-15-15c0-12.757-12.755-23.857-30-28.092v59.306c34.191 5.573 60 29.805 60 58.786z" fill="#ff7e23" data-original="#000000" style=""/><path d="m241 182.761c-17.245 4.235-30 15.335-30 28.092s12.755 23.857 30 28.092z" fill="#ff7e23" data-original="#000000" style=""/><path d="m256 0c-140.61 0-256 115.39-256 256s115.39 256 256 256 256-115.39 256-256-115.39-256-256-256zm0 451c-107.52 0-195-87.48-195-195s87.48-195 195-195 195 87.48 195 195-87.48 195-195 195z" fill="#ff7e23" data-original="#000000" style=""/></g></g></svg>
                        </div>
                        <div class="relative mb-4">
                            <textarea rows="3" class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Apakah selama ini atau sebelumnya pernah membuka usaha kuliner"></textarea>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m346 0c-90.981 0-165 75.019-165 166s74.019 165 165 165 166-74.019 166-165-75.019-166-166-166zm51.211 196-21.211 21.211-30-30-30 30-21.211-21.211 30-30-30-30 21.211-21.211 30 30 30-30 21.211 21.211-30 30z" fill="#ff7e23" data-original="#000000" style=""/><path d="m151 397.211-51.211-51.211 21.211-21.211 30 30 54.448-54.448c-30.059-31.439-49.958-72.686-53.652-118.621-84.343 7.24-151.796 78.092-151.796 164.28 0 90.981 75.019 166 166 166 86.188 0 157.04-67.453 164.28-151.797-38.438-3.091-73.405-17.758-102.328-39.944z" fill="#ff7e23" data-original="#000000" style=""/></g></g></svg>
                        </div>
                        <div class="relative mb-8">
                            <textarea class="border border-gray-300 rounded pl-12 pr-4 md:pl-16 md:pr-6 py-2 w-full focus:outline-none focus:border-main placeholder-gray-600" placeholder="Apakah pernah menjadi mitra usaha sejenis"></textarea>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="absolute inset-y-0 mx-4 md:mx-6 mt-3 h-5 w-5"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m346 0c-90.981 0-165 75.019-165 166s74.019 165 165 165 166-74.019 166-165-75.019-166-166-166zm51.211 196-21.211 21.211-30-30-30 30-21.211-21.211 30-30-30-30 21.211-21.211 30 30 30-30 21.211 21.211-30 30z" fill="#ff7e23" data-original="#000000" style=""/><path d="m151 397.211-51.211-51.211 21.211-21.211 30 30 54.448-54.448c-30.059-31.439-49.958-72.686-53.652-118.621-84.343 7.24-151.796 78.092-151.796 164.28 0 90.981 75.019 166 166 166 86.188 0 157.04-67.453 164.28-151.797-38.438-3.091-73.405-17.758-102.328-39.944z" fill="#ff7e23" data-original="#000000" style=""/></g></g></svg>
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" class="bg-main px-4 py-2 rounded text-white">Kirim</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <main class="px-5 sm:px-16 lg:px-10 xl:px-64 text-gray-800">
            <about-us></about-us>

            <instagram></instagram>
        </main>
    </div>
</template>

<script>
import Instagram from '@/components/Instagram'
import AboutUs from '@/components/AboutUs'
import emailjs from 'emailjs-com'

export default {
    components: {
        Instagram, AboutUs
    },

    data() {
        return {
            form: {
                name: '',
                email: '',
                admin: 'Bakso Ngangenin',
                message: 'Cuman tes aja lagi'
            }
        }
    },

    methods: {
        sendEmail() {
            emailjs.send('service_zvi9z52', 'template_e0frqea', this.form, 'user_zCAFe3oVs5m9PMwxpcADH')
                .then((result) => {
                    this.form.name = ''
                    this.form.email = ''
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
    }
}
</script>

<style scoped>
    .bg-left-lg {
        background-position-x: -15rem;
    }

    .bg-left-xl {
        background-position-x: -3rem;
    }
</style>