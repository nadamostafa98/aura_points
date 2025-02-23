<template>    
    <div>
        <HomeP/>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HomeP from './components/HomePage.vue'
</script>