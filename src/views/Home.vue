<template>
    <div>
        <section name="main" class="flex justify-center pt-32 md:pt-40 lg:pt-48 px-5 sm:px-16 lg:px-10 xl:px-64 mb-32 md:mb-40 xl:mb-40 bg-main lg:bg-cover lg:bg-no-repeat w-full lg:bg-bakso" :class="[ $vssWidth >= 1280 ? 'bg-left-xl' : 'bg-left-lg' ]">
            <div class="w-full sm:w-4/5 md:w-5/6 xl:w-2/3 -mb-10 md:-mb-12 lg:-mb-12 xl:-mb-12">
                <iframe class="w-full h-48 sm:h-64 md:h-md lg:h-80 rounded-md" src="https://www.youtube.com/embed/_Fq2nCix5YU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>

        <main class="px-5 sm:px-16 lg:px-10 xl:px-64"> 
            <section name="menu" class="mb-32">
                <h2 class="font-bitter font-semibold text-4xl text-main text-center mb-10">Our Menu</h2>
                <carousel 
                    :items="numberOfItems" 
                    :loop="true" 
                    :center="true" 
                    :nav="false" 
                    :margin="setMargin"
                    :autoWidth="autoWidth"
                    :autoplay="true"
                    :autoplayTimeout="2000"
                >
                    <div class="w-64 sm:w-full bg-white p-2 md:p-4 border border-gray-400 rounded-lg">
                        <div class="flex items-center w-12 mb-5">
                            <img src="@/assets/img/logo.png" class="h-12 mr-2">
                            <h6 class="font-semibold text-main whitespace-no-wrap">Bakso Rendang</h6>
                        </div>
                        <img :src="require('@/assets/img/rendang.jpg')" class="rounded-md w-full h-40 md:h-48 lg:h-32 xl:h-40 object-cover mb-8 md:mb-10">
                        <div class="flex justify-center">
                            <router-link :to="{ name: 'order' }" tag="button" class="bg-main text-white px-4 py-2 rounded-md">Order Delivery</router-link>
                        </div>
                    </div>
                    <div class="w-64 sm:w-full bg-white p-2 md:p-4 border border-gray-400 rounded-lg">
                        <div class="flex items-center w-12 mb-5">
                            <img src="@/assets/img/logo.png" class="h-12 mr-2">
                            <h6 class="font-semibold text-main whitespace-no-wrap">Bakso Keju</h6>
                        </div>
                        <img :src="require('@/assets/img/keju.jpeg')" class="rounded-md w-full h-40 md:h-48 lg:h-32 xl:h-40 object-cover mb-8 md:mb-10">
                        <div class="flex justify-center">
                            <router-link :to="{ name: 'order' }" tag="button" class="bg-main text-white px-4 py-2 rounded-md">Order Delivery</router-link>
                        </div>
                    </div>
                    <div class="w-64 sm:w-full bg-white p-2 md:p-4 border border-gray-400 rounded-lg">
                        <div class="flex items-center w-12 mb-5">
                            <img src="@/assets/img/logo.png" class="h-12 mr-2">
                            <h6 class="font-semibold text-main whitespace-no-wrap">Bakso Konro</h6>
                        </div>
                        <img :src="require('@/assets/img/konro.jpeg')" class="rounded-md w-full h-40 md:h-48 lg:h-32 xl:h-40 object-cover mb-8 md:mb-10">
                        <div class="flex justify-center">
                            <router-link :to="{ name: 'order' }" tag="button" class="bg-main text-white px-4 py-2 rounded-md">Order Delivery</router-link>
                        </div>
                    </div>
                    <div class="w-64 sm:w-full bg-white p-2 md:p-4 border border-gray-400 rounded-lg">
                        <div class="flex items-center w-12 mb-5">
                            <img src="@/assets/img/logo.png" class="h-12 mr-2">
                            <h6 class="font-semibold text-main whitespace-no-wrap">Bakso Rendang</h6>
                        </div>
                        <img :src="require('@/assets/img/rendang.jpg')" class="rounded-md w-full h-40 md:h-48 lg:h-32 xl:h-40 object-cover mb-8 md:mb-10">
                        <div class="flex justify-center">
                            <router-link :to="{ name: 'order' }" tag="button" class="bg-main text-white px-4 py-2 rounded-md">Order Delivery</router-link>
                        </div>
                    </div>
                    <div class="w-64 sm:w-full bg-white p-2 md:p-4 border border-gray-400 rounded-lg">
                        <div class="flex items-center w-12 mb-5">
                            <img src="@/assets/img/logo.png" class="h-12 mr-2">
                            <h6 class="font-semibold text-main whitespace-no-wrap">Bakso Keju</h6>
                        </div>
                        <img :src="require('@/assets/img/keju.jpeg')" class="rounded-md w-full h-40 md:h-48 lg:h-32 xl:h-40 object-cover mb-8 md:mb-10">
                        <div class="flex justify-center">
                            <router-link :to="{ name: 'order' }" tag="button" class="bg-main text-white px-4 py-2 rounded-md">Order Delivery</router-link>
                        </div>
                    </div>
                    <div class="w-64 sm:w-full bg-white p-2 md:p-4 border border-gray-400 rounded-lg">
                        <div class="flex items-center w-12 mb-5">
                            <img src="@/assets/img/logo.png" class="h-12 mr-2">
                            <h6 class="font-semibold text-main whitespace-no-wrap">Bakso Konro</h6>
                        </div>
                        <img :src="require('@/assets/img/konro.jpeg')" class="rounded-md w-full h-40 md:h-48 lg:h-32 xl:h-40 object-cover mb-8 md:mb-10">
                        <div class="flex justify-center">
                            <router-link :to="{ name: 'order' }" tag="button" class="bg-main text-white px-4 py-2 rounded-md">Order Delivery</router-link>
                        </div>
                    </div>
                </carousel>
            </section>

            <section name="nearby" class="mb-32">  
                <h2 class="font-bitter font-semibold text-4xl text-main text-center mb-10">Nearby</h2>
                <div class="block lg:flex lg:items-center lg:justify-between">
                    <div class="flex flex-col items-center mb-10 lg:mb-0" data-aos="fade-up" data-aos-duration="800">
                        <a href="https://maps.app.goo.gl/sKBSkjTy78pkmpbr6">
                            <svg class="mb-5 h-16 w-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.8132 94.2417C60.8244 102.522 33.3073 102.008 15.3209 91.8159C-9.90145 77.5245 -3.13274 51.8152 29.3813 43.2156C31.051 42.7742 32.7597 43.7683 33.203 45.4362C33.6443 47.1061 32.6503 48.8151 30.9826 49.2584C5.57024 55.9936 -3.01382 74.2386 18.4005 86.3786C34.4417 95.466 59.8308 96.1391 77.3135 88.5113C78.8953 87.8219 80.7369 88.5445 81.4282 90.1265C82.1175 91.7085 81.395 93.5503 79.8132 94.2417Z" fill="#E2E0E0"/>
                                <path d="M91.1259 87.3473C90.5361 87.8512 89.8155 88.0973 89.0969 88.0973C86.1995 88.0973 84.8686 84.4757 87.064 82.5974C102.03 69.8061 90.2463 54.884 69.0199 49.2584C67.3521 48.8151 66.3582 47.1061 66.7995 45.4362C67.2428 43.7683 68.9535 42.7742 70.6212 43.2156C100.052 50.9996 108.304 72.659 91.1259 87.3473Z" fill="#E2E0E0"/>
                                <path d="M84.3711 98.439C89.548 98.439 93.7447 94.2418 93.7447 89.0642C93.7447 83.8867 89.548 79.6895 84.3711 79.6895C79.1942 79.6895 74.9975 83.8867 74.9975 89.0642C74.9975 94.2418 79.1942 98.439 84.3711 98.439Z" fill="#F3D4B7"/>
                                <path d="M40.4519 63.1059C29.4483 64.5484 23.4428 68.2325 23.4428 70.3147C23.4428 71.0315 24.2942 72.0314 25.7217 72.9845C27.1551 73.9435 27.5398 75.8849 26.581 77.3204C25.6233 78.7492 23.6847 79.141 22.2457 78.1797C12.5624 71.6979 15.8509 60.0212 39.6395 56.9107C41.3463 56.6861 42.9184 57.8912 43.1429 59.6021C43.3675 61.313 42.1626 62.8832 40.4519 63.1059Z" fill="#E2E0E0"/>
                                <path d="M82.8088 70.3147C82.8088 82.4142 54.6351 86.9393 35.0641 82.9609C33.3729 82.6171 32.2813 80.9668 32.625 79.2754C32.9687 77.584 34.6208 76.4923 36.31 76.836C46.4711 78.8981 60.4604 78.5971 69.9104 75.1173C74.478 73.4338 76.5598 71.4475 76.5598 70.3147C76.5598 68.3235 70.8655 64.5892 59.5506 63.1059C57.8399 62.8832 56.635 61.313 56.8596 59.6021C57.0842 57.8912 58.6523 56.6861 60.363 56.9107C69.005 58.0408 82.8088 61.696 82.8088 70.3147Z" fill="#E2E0E0"/>
                                <path d="M30.9826 49.2584C28.0202 50.0435 25.2628 50.9947 22.7475 52.0865C21.693 50.2935 20.701 48.444 19.8085 46.5553C22.7612 45.2409 25.9697 44.1179 29.3813 43.2156C31.051 42.7742 32.7597 43.7683 33.203 45.4362C33.6443 47.1061 32.6503 48.8151 30.9826 49.2584Z" fill="#CECCCC"/>
                                <path d="M43.1429 59.6021C43.3675 61.313 42.1626 62.8832 40.4519 63.1059C37.0403 63.5531 34.195 64.1879 31.8692 64.9066C30.5198 63.2856 29.145 61.5434 27.7917 59.6997C31.1486 58.4458 35.1734 57.4947 39.6395 56.9107C41.3463 56.6861 42.9183 57.8912 43.1429 59.6021Z" fill="#CECCCC"/>
                                <path d="M60.363 56.9107C64.8291 57.4947 68.8539 58.4458 72.2108 59.6997C70.8594 61.5415 69.4827 63.2856 68.1313 64.9066C65.8055 64.1879 62.9622 63.5531 59.5506 63.1059C57.8399 62.8832 56.635 61.313 56.8596 59.6021C57.0842 57.8912 58.6523 56.6861 60.363 56.9107Z" fill="#CECCCC"/>
                                <path d="M80.194 46.5553C79.3015 48.444 78.3095 50.2935 77.255 52.0865C74.7397 50.9947 71.9823 50.0435 69.0199 49.2584C67.3521 48.8151 66.3582 47.1061 66.7995 45.4362C67.2428 43.7683 68.9535 42.7742 70.6212 43.2156C74.0328 44.1179 77.2413 45.2409 80.194 46.5553Z" fill="#CECCCC"/>
                                <path d="M78.5047 28.5116C78.5047 49.0931 53.1472 71.7058 52.0693 72.6589C50.8954 73.6935 49.1232 73.7077 47.9332 72.6589C46.8552 71.7058 21.4977 49.0931 21.4977 28.5116C21.4977 12.7932 34.2849 0.00445557 50.0012 0.00445557C65.7176 0.00445557 78.5047 12.7932 78.5047 28.5116Z" fill="#E56A1D"/>
                                <path d="M78.5048 28.511C78.5048 49.0925 53.1473 71.7053 52.0693 72.6584C51.4776 73.1798 50.7394 73.4396 50.0013 73.4396C48.5587 73.4396 47.8315 72.5919 46.6815 71.5138C51.9834 66.5511 71.8652 46.7352 71.8652 28.511C71.8652 13.9157 60.8395 1.84565 46.6815 0.1953C63.6762 -1.78473 78.5048 11.5481 78.5048 28.511Z" fill="#FB8C00"/>
                                <path d="M50.0012 43.7528C58.6294 43.7528 65.6239 36.7574 65.6239 28.1282C65.6239 19.499 58.6294 12.5036 50.0012 12.5036C41.3731 12.5036 34.3786 19.499 34.3786 28.1282C34.3786 36.7574 41.3731 43.7528 50.0012 43.7528Z" fill="#E2E0E0"/>
                                <path d="M65.6239 28.1282C65.6239 37.9699 56.5622 45.4243 46.8767 43.4384C53.9987 41.9872 59.3748 35.6729 59.3748 28.1282C59.3748 20.5835 53.9987 14.2692 46.8767 12.818C56.5543 10.8337 65.6239 18.2794 65.6239 28.1282Z" fill="#CECCCC"/>
                                <path d="M29.6918 87.5017C34.8687 87.5017 39.0654 83.3045 39.0654 78.127C39.0654 72.9494 34.8687 68.7522 29.6918 68.7522C24.5149 68.7522 20.3182 72.9494 20.3182 78.127C20.3182 83.3045 24.5149 87.5017 29.6918 87.5017Z" fill="#F3D4B7"/>
                                <path d="M29.6918 87.5017C34.8687 87.5017 39.0654 83.3045 39.0654 78.127C39.0654 72.9494 34.8687 68.7522 29.6918 68.7522C24.5149 68.7522 20.3182 72.9494 20.3182 78.127C20.3182 83.3045 24.5149 87.5017 29.6918 87.5017Z" fill="#F3D4B7"/>
                                <path d="M39.0654 78.1269C39.0654 84.5895 32.6478 89.1194 26.5673 86.9665C30.2054 85.6775 32.8164 82.201 32.8164 78.1269C32.8164 74.0528 30.2054 70.5763 26.5673 69.2873C32.6586 67.1307 39.0654 71.6757 39.0654 78.1269Z" fill="#E1C3A7"/>
                                <path d="M93.7447 89.0643C93.7447 95.5268 87.3271 100.057 81.2466 97.9039C84.8847 96.6149 87.4956 93.1384 87.4956 89.0643C87.4956 84.9902 84.8847 81.5137 81.2466 80.2247C87.3378 78.0681 93.7447 82.6131 93.7447 89.0643Z" fill="#E1C3A7"/>    
                            </svg>
                        </a>
                        <h6 class="font-semibold text-main text-center">BAKSO NGANGENIN CIBUBUR</h6>
                    </div>
                    <div class="flex flex-col items-center mb-10 lg:mb-0" data-aos="fade-up" data-aos-duration="800">
                        <a href="https://maps.app.goo.gl/LnesvyYc6CdgJgtn7">
                            <svg class="mb-5 h-16 w-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.8132 94.2417C60.8244 102.522 33.3073 102.008 15.3209 91.8159C-9.90145 77.5245 -3.13274 51.8152 29.3813 43.2156C31.051 42.7742 32.7597 43.7683 33.203 45.4362C33.6443 47.1061 32.6503 48.8151 30.9826 49.2584C5.57024 55.9936 -3.01382 74.2386 18.4005 86.3786C34.4417 95.466 59.8308 96.1391 77.3135 88.5113C78.8953 87.8219 80.7369 88.5445 81.4282 90.1265C82.1175 91.7085 81.395 93.5503 79.8132 94.2417Z" fill="#E2E0E0"/>
                                <path d="M91.1259 87.3473C90.5361 87.8512 89.8155 88.0973 89.0969 88.0973C86.1995 88.0973 84.8686 84.4757 87.064 82.5974C102.03 69.8061 90.2463 54.884 69.0199 49.2584C67.3521 48.8151 66.3582 47.1061 66.7995 45.4362C67.2428 43.7683 68.9535 42.7742 70.6212 43.2156C100.052 50.9996 108.304 72.659 91.1259 87.3473Z" fill="#E2E0E0"/>
                                <path d="M84.3711 98.439C89.548 98.439 93.7447 94.2418 93.7447 89.0642C93.7447 83.8867 89.548 79.6895 84.3711 79.6895C79.1942 79.6895 74.9975 83.8867 74.9975 89.0642C74.9975 94.2418 79.1942 98.439 84.3711 98.439Z" fill="#F3D4B7"/>
                                <path d="M40.4519 63.1059C29.4483 64.5484 23.4428 68.2325 23.4428 70.3147C23.4428 71.0315 24.2942 72.0314 25.7217 72.9845C27.1551 73.9435 27.5398 75.8849 26.581 77.3204C25.6233 78.7492 23.6847 79.141 22.2457 78.1797C12.5624 71.6979 15.8509 60.0212 39.6395 56.9107C41.3463 56.6861 42.9184 57.8912 43.1429 59.6021C43.3675 61.313 42.1626 62.8832 40.4519 63.1059Z" fill="#E2E0E0"/>
                                <path d="M82.8088 70.3147C82.8088 82.4142 54.6351 86.9393 35.0641 82.9609C33.3729 82.6171 32.2813 80.9668 32.625 79.2754C32.9687 77.584 34.6208 76.4923 36.31 76.836C46.4711 78.8981 60.4604 78.5971 69.9104 75.1173C74.478 73.4338 76.5598 71.4475 76.5598 70.3147C76.5598 68.3235 70.8655 64.5892 59.5506 63.1059C57.8399 62.8832 56.635 61.313 56.8596 59.6021C57.0842 57.8912 58.6523 56.6861 60.363 56.9107C69.005 58.0408 82.8088 61.696 82.8088 70.3147Z" fill="#E2E0E0"/>
                                <path d="M30.9826 49.2584C28.0202 50.0435 25.2628 50.9947 22.7475 52.0865C21.693 50.2935 20.701 48.444 19.8085 46.5553C22.7612 45.2409 25.9697 44.1179 29.3813 43.2156C31.051 42.7742 32.7597 43.7683 33.203 45.4362C33.6443 47.1061 32.6503 48.8151 30.9826 49.2584Z" fill="#CECCCC"/>
                                <path d="M43.1429 59.6021C43.3675 61.313 42.1626 62.8832 40.4519 63.1059C37.0403 63.5531 34.195 64.1879 31.8692 64.9066C30.5198 63.2856 29.145 61.5434 27.7917 59.6997C31.1486 58.4458 35.1734 57.4947 39.6395 56.9107C41.3463 56.6861 42.9183 57.8912 43.1429 59.6021Z" fill="#CECCCC"/>
                                <path d="M60.363 56.9107C64.8291 57.4947 68.8539 58.4458 72.2108 59.6997C70.8594 61.5415 69.4827 63.2856 68.1313 64.9066C65.8055 64.1879 62.9622 63.5531 59.5506 63.1059C57.8399 62.8832 56.635 61.313 56.8596 59.6021C57.0842 57.8912 58.6523 56.6861 60.363 56.9107Z" fill="#CECCCC"/>
                                <path d="M80.194 46.5553C79.3015 48.444 78.3095 50.2935 77.255 52.0865C74.7397 50.9947 71.9823 50.0435 69.0199 49.2584C67.3521 48.8151 66.3582 47.1061 66.7995 45.4362C67.2428 43.7683 68.9535 42.7742 70.6212 43.2156C74.0328 44.1179 77.2413 45.2409 80.194 46.5553Z" fill="#CECCCC"/>
                                <path d="M78.5047 28.5116C78.5047 49.0931 53.1472 71.7058 52.0693 72.6589C50.8954 73.6935 49.1232 73.7077 47.9332 72.6589C46.8552 71.7058 21.4977 49.0931 21.4977 28.5116C21.4977 12.7932 34.2849 0.00445557 50.0012 0.00445557C65.7176 0.00445557 78.5047 12.7932 78.5047 28.5116Z" fill="#E56A1D"/>
                                <path d="M78.5048 28.511C78.5048 49.0925 53.1473 71.7053 52.0693 72.6584C51.4776 73.1798 50.7394 73.4396 50.0013 73.4396C48.5587 73.4396 47.8315 72.5919 46.6815 71.5138C51.9834 66.5511 71.8652 46.7352 71.8652 28.511C71.8652 13.9157 60.8395 1.84565 46.6815 0.1953C63.6762 -1.78473 78.5048 11.5481 78.5048 28.511Z" fill="#FB8C00"/>
                                <path d="M50.0012 43.7528C58.6294 43.7528 65.6239 36.7574 65.6239 28.1282C65.6239 19.499 58.6294 12.5036 50.0012 12.5036C41.3731 12.5036 34.3786 19.499 34.3786 28.1282C34.3786 36.7574 41.3731 43.7528 50.0012 43.7528Z" fill="#E2E0E0"/>
                                <path d="M65.6239 28.1282C65.6239 37.9699 56.5622 45.4243 46.8767 43.4384C53.9987 41.9872 59.3748 35.6729 59.3748 28.1282C59.3748 20.5835 53.9987 14.2692 46.8767 12.818C56.5543 10.8337 65.6239 18.2794 65.6239 28.1282Z" fill="#CECCCC"/>
                                <path d="M29.6918 87.5017C34.8687 87.5017 39.0654 83.3045 39.0654 78.127C39.0654 72.9494 34.8687 68.7522 29.6918 68.7522C24.5149 68.7522 20.3182 72.9494 20.3182 78.127C20.3182 83.3045 24.5149 87.5017 29.6918 87.5017Z" fill="#F3D4B7"/>
                                <path d="M29.6918 87.5017C34.8687 87.5017 39.0654 83.3045 39.0654 78.127C39.0654 72.9494 34.8687 68.7522 29.6918 68.7522C24.5149 68.7522 20.3182 72.9494 20.3182 78.127C20.3182 83.3045 24.5149 87.5017 29.6918 87.5017Z" fill="#F3D4B7"/>
                                <path d="M39.0654 78.1269C39.0654 84.5895 32.6478 89.1194 26.5673 86.9665C30.2054 85.6775 32.8164 82.201 32.8164 78.1269C32.8164 74.0528 30.2054 70.5763 26.5673 69.2873C32.6586 67.1307 39.0654 71.6757 39.0654 78.1269Z" fill="#E1C3A7"/>
                                <path d="M93.7447 89.0643C93.7447 95.5268 87.3271 100.057 81.2466 97.9039C84.8847 96.6149 87.4956 93.1384 87.4956 89.0643C87.4956 84.9902 84.8847 81.5137 81.2466 80.2247C87.3378 78.0681 93.7447 82.6131 93.7447 89.0643Z" fill="#E1C3A7"/>    
                            </svg>
                        </a>
                        <h6 class="font-semibold text-main text-center">BAKSO NGANGENIN BOGOR</h6>
                    </div>
                    <div class="flex flex-col items-center" data-aos="fade-up" data-aos-duration="800">
                        <a href="https://maps.app.goo.gl/t3sRN7Yhp4EMb7z5A">
                            <svg class="mb-5 h-16 w-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.8132 94.2417C60.8244 102.522 33.3073 102.008 15.3209 91.8159C-9.90145 77.5245 -3.13274 51.8152 29.3813 43.2156C31.051 42.7742 32.7597 43.7683 33.203 45.4362C33.6443 47.1061 32.6503 48.8151 30.9826 49.2584C5.57024 55.9936 -3.01382 74.2386 18.4005 86.3786C34.4417 95.466 59.8308 96.1391 77.3135 88.5113C78.8953 87.8219 80.7369 88.5445 81.4282 90.1265C82.1175 91.7085 81.395 93.5503 79.8132 94.2417Z" fill="#E2E0E0"/>
                                <path d="M91.1259 87.3473C90.5361 87.8512 89.8155 88.0973 89.0969 88.0973C86.1995 88.0973 84.8686 84.4757 87.064 82.5974C102.03 69.8061 90.2463 54.884 69.0199 49.2584C67.3521 48.8151 66.3582 47.1061 66.7995 45.4362C67.2428 43.7683 68.9535 42.7742 70.6212 43.2156C100.052 50.9996 108.304 72.659 91.1259 87.3473Z" fill="#E2E0E0"/>
                                <path d="M84.3711 98.439C89.548 98.439 93.7447 94.2418 93.7447 89.0642C93.7447 83.8867 89.548 79.6895 84.3711 79.6895C79.1942 79.6895 74.9975 83.8867 74.9975 89.0642C74.9975 94.2418 79.1942 98.439 84.3711 98.439Z" fill="#F3D4B7"/>
                                <path d="M40.4519 63.1059C29.4483 64.5484 23.4428 68.2325 23.4428 70.3147C23.4428 71.0315 24.2942 72.0314 25.7217 72.9845C27.1551 73.9435 27.5398 75.8849 26.581 77.3204C25.6233 78.7492 23.6847 79.141 22.2457 78.1797C12.5624 71.6979 15.8509 60.0212 39.6395 56.9107C41.3463 56.6861 42.9184 57.8912 43.1429 59.6021C43.3675 61.313 42.1626 62.8832 40.4519 63.1059Z" fill="#E2E0E0"/>
                                <path d="M82.8088 70.3147C82.8088 82.4142 54.6351 86.9393 35.0641 82.9609C33.3729 82.6171 32.2813 80.9668 32.625 79.2754C32.9687 77.584 34.6208 76.4923 36.31 76.836C46.4711 78.8981 60.4604 78.5971 69.9104 75.1173C74.478 73.4338 76.5598 71.4475 76.5598 70.3147C76.5598 68.3235 70.8655 64.5892 59.5506 63.1059C57.8399 62.8832 56.635 61.313 56.8596 59.6021C57.0842 57.8912 58.6523 56.6861 60.363 56.9107C69.005 58.0408 82.8088 61.696 82.8088 70.3147Z" fill="#E2E0E0"/>
                                <path d="M30.9826 49.2584C28.0202 50.0435 25.2628 50.9947 22.7475 52.0865C21.693 50.2935 20.701 48.444 19.8085 46.5553C22.7612 45.2409 25.9697 44.1179 29.3813 43.2156C31.051 42.7742 32.7597 43.7683 33.203 45.4362C33.6443 47.1061 32.6503 48.8151 30.9826 49.2584Z" fill="#CECCCC"/>
                                <path d="M43.1429 59.6021C43.3675 61.313 42.1626 62.8832 40.4519 63.1059C37.0403 63.5531 34.195 64.1879 31.8692 64.9066C30.5198 63.2856 29.145 61.5434 27.7917 59.6997C31.1486 58.4458 35.1734 57.4947 39.6395 56.9107C41.3463 56.6861 42.9183 57.8912 43.1429 59.6021Z" fill="#CECCCC"/>
                                <path d="M60.363 56.9107C64.8291 57.4947 68.8539 58.4458 72.2108 59.6997C70.8594 61.5415 69.4827 63.2856 68.1313 64.9066C65.8055 64.1879 62.9622 63.5531 59.5506 63.1059C57.8399 62.8832 56.635 61.313 56.8596 59.6021C57.0842 57.8912 58.6523 56.6861 60.363 56.9107Z" fill="#CECCCC"/>
                                <path d="M80.194 46.5553C79.3015 48.444 78.3095 50.2935 77.255 52.0865C74.7397 50.9947 71.9823 50.0435 69.0199 49.2584C67.3521 48.8151 66.3582 47.1061 66.7995 45.4362C67.2428 43.7683 68.9535 42.7742 70.6212 43.2156C74.0328 44.1179 77.2413 45.2409 80.194 46.5553Z" fill="#CECCCC"/>
                                <path d="M78.5047 28.5116C78.5047 49.0931 53.1472 71.7058 52.0693 72.6589C50.8954 73.6935 49.1232 73.7077 47.9332 72.6589C46.8552 71.7058 21.4977 49.0931 21.4977 28.5116C21.4977 12.7932 34.2849 0.00445557 50.0012 0.00445557C65.7176 0.00445557 78.5047 12.7932 78.5047 28.5116Z" fill="#E56A1D"/>
                                <path d="M78.5048 28.511C78.5048 49.0925 53.1473 71.7053 52.0693 72.6584C51.4776 73.1798 50.7394 73.4396 50.0013 73.4396C48.5587 73.4396 47.8315 72.5919 46.6815 71.5138C51.9834 66.5511 71.8652 46.7352 71.8652 28.511C71.8652 13.9157 60.8395 1.84565 46.6815 0.1953C63.6762 -1.78473 78.5048 11.5481 78.5048 28.511Z" fill="#FB8C00"/>
                                <path d="M50.0012 43.7528C58.6294 43.7528 65.6239 36.7574 65.6239 28.1282C65.6239 19.499 58.6294 12.5036 50.0012 12.5036C41.3731 12.5036 34.3786 19.499 34.3786 28.1282C34.3786 36.7574 41.3731 43.7528 50.0012 43.7528Z" fill="#E2E0E0"/>
                                <path d="M65.6239 28.1282C65.6239 37.9699 56.5622 45.4243 46.8767 43.4384C53.9987 41.9872 59.3748 35.6729 59.3748 28.1282C59.3748 20.5835 53.9987 14.2692 46.8767 12.818C56.5543 10.8337 65.6239 18.2794 65.6239 28.1282Z" fill="#CECCCC"/>
                                <path d="M29.6918 87.5017C34.8687 87.5017 39.0654 83.3045 39.0654 78.127C39.0654 72.9494 34.8687 68.7522 29.6918 68.7522C24.5149 68.7522 20.3182 72.9494 20.3182 78.127C20.3182 83.3045 24.5149 87.5017 29.6918 87.5017Z" fill="#F3D4B7"/>
                                <path d="M29.6918 87.5017C34.8687 87.5017 39.0654 83.3045 39.0654 78.127C39.0654 72.9494 34.8687 68.7522 29.6918 68.7522C24.5149 68.7522 20.3182 72.9494 20.3182 78.127C20.3182 83.3045 24.5149 87.5017 29.6918 87.5017Z" fill="#F3D4B7"/>
                                <path d="M39.0654 78.1269C39.0654 84.5895 32.6478 89.1194 26.5673 86.9665C30.2054 85.6775 32.8164 82.201 32.8164 78.1269C32.8164 74.0528 30.2054 70.5763 26.5673 69.2873C32.6586 67.1307 39.0654 71.6757 39.0654 78.1269Z" fill="#E1C3A7"/>
                                <path d="M93.7447 89.0643C93.7447 95.5268 87.3271 100.057 81.2466 97.9039C84.8847 96.6149 87.4956 93.1384 87.4956 89.0643C87.4956 84.9902 84.8847 81.5137 81.2466 80.2247C87.3378 78.0681 93.7447 82.6131 93.7447 89.0643Z" fill="#E1C3A7"/>    
                            </svg>
                        </a>
                        <h6 class="font-semibold text-main text-center">BAKSO NGANGENIN BANDUNG</h6>
                    </div>
                </div>
            </section>

            <instagram></instagram>
        </main>
    </div>
</template>

<script>
import Carousel from 'vue-owl-carousel2'
import VueScreenSize from 'vue-screen-size'
import Instagram from '@/components/Instagram'

export default {
    mixins: [VueScreenSize.VueScreenSizeMixin],

    components: {
        Carousel, Instagram
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

<style scoped>
    .bg-left-lg {
        background-position-x: -15rem;
    }

    .bg-left-xl {
        background-position-x: -3rem;
    }
</style>    