<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created(){
    axios.get('http://localhost:3000/productos')
      .then(resp => console.log(resp.data))
      .catch(err => console.error(err))
  }
}
</script>
