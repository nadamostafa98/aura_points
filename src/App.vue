<script setup>

/* import all necessary views and components */

import { RouterView } from 'vue-router'
import HomeP from './components/HomePage.vue'
</script>


<template>

    <!-- the header component to create the header of the website whose content will always be visible throughout all router-views (pages)-->

    <!-- A div for the router-view which shows the content of the current route (its content changes as the user browses the website)-->
    
    <div>
        <HomeP/>
        <router-view></router-view>
    </div>

    <!-- the footer component to create the footer of the website whose content will always be visible throughout all router-views (pages)-->

</template>