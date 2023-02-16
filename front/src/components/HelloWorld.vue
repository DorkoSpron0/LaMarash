<template>
  <div class="hello">
    <ul id="example-1">
      <li v-for="producto in productos"> <!-- ES UN CICLO QUE RECORRE CADA PRODUCTO DE LA LISTA Y CREA UN "li" POR CADA UNO -->
        Nombre: {{ producto.nombre }} <br> <!-- IMPRIME EL [NOMBRE] DEL PRODUCTO -->
        precio: {{ producto.precio}} <br> <!-- IMPRIME EL [PRECIO] DEL PRODUCTO -->
        cantidad: {{ producto.cantidad}} <br> <!-- IMPRIME LA [CANTIDAD] DEL PRODUCTO -->
        descripcion: {{ producto.descripcion}} <br> <!-- IMPRIME LA [DESCRIPCION] DEL PRODUCTO -->
        fabricante: {{ producto.fabricante}} <!-- IMPRIME EL [FABRICANTE] DEL PRODUCTO -->
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      productos: [], // ES LA LISTA QUE VA A CONTENER TODOS LOS PRODUCTOS DE LA DB
    }
  },
  created() { // EL CREATED EJECUTA LO QUE HAYA DENTRO APENAS CARGA LA PAGINA
    axios.get('http://localhost:3000/productos') //LLAMA A LA API DE SALVE :D
      .then(resp => this.productos = resp.data.productos) // PASA TODOS LOS PRODUCTOS DE LA DB A LA LISTA
      .catch(err => console.error(err)) // POR SI SALEN ERRORES QUE LO NOTIFIQUE POR CONSOLA
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- LOS ESTILOS CSS PARA ESTE COMPONENTE -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
