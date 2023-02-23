<template>
  <div class="hello">
    <!-- <ul id="example-1">
      <li v-for="producto in productos">
        ES UN CICLO QUE RECORRE CADA PRODUCTO DE LA LISTA Y CREA UN "li" POR CADA UNO
        Nombre: {{ producto.nombre }} <br> IMPRIME EL [NOMBRE] DEL PRODUCTO
        precio: {{ producto.precio }} <br> IMPRIME EL [PRECIO] DEL PRODUCTO
        cantidad: {{ producto.cantidad }} <br> IMPRIME LA [CANTIDAD] DEL PRODUCTO
        descripcion: {{ producto.descripcion }} <br> IMPRIME LA [DESCRIPCION] DEL PRODUCTO
        fabricante: {{ producto.fabricante }} IMPRIME EL [FABRICANTE] DEL PRODUCTO
      </li>
    </ul> -->

    <div class="row">

      <div class="col-md-3"  v-for="producto in productos">
        <div class="card mt-4">
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre.toUpperCase() }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ producto.fabricante }}</h6>
            <p class="card-text">{{ producto.descripcion }}</p>
            <h5 class="card-subtitle text-end">{{ producto.precio }}$</h5>
            <p class="text-end"><router-link to="/compras">Comprar</router-link></p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'listProduct',
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
<style scoped></style>
