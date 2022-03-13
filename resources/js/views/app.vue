<template>
    <div class="div_bao_ngoai">
       <!-- Preloader Start -->
        <div id="preloader-active">
            <div class="preloader d-flex align-items-center justify-content-center">
                <div class="preloader-inner position-relative">
                    <div class="preloader-circle"></div>
                    <div class="preloader-img pere-text">
                        <img src="/img/logo/logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- Preloader Start -->
        <header>
            <Menu />
        </header>
        <main>
            <router-view></router-view>
             <Main />
            <!-- Slider Area End-->
        </main>
        <footer>
            <!-- <Footer /> -->
        </footer>
    </div>
</template>


<script>
import Menu from '../components/MenuComponent.vue'
import Main from '../components/MainComponent.vue'
import Footer from '../components/FooterComponent.vue'
const default_layout = "default"
   export default {
       computed : {},
       mounted() {
           console.log('Component footer.')
       },
       data() {
           return {
               msg: 'app vue'
           }
       },
       components: {
            Menu,
            Main,
            Footer
       }
   }
</script>

