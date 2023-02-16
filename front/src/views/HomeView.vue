<template>
  <div class="home">
    <listProduct/>
  </div>
</template>

<script>
// @ is an alias to /src
import listProduct from '@/components/listProduct.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    listProduct
  }
}
</script>
