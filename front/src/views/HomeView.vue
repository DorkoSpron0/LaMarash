<template>
  <div class="home mx-4">
    <carouselProduct />
    <listProduct />
  </div>
</template>

<script>
// @ is an alias to /src
import listProduct from '@/components/listProduct.vue'
import carouselProduct from '@/components/carouselProduct.vue';


import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    listProduct,
    carouselProduct
  }
}
</script>
