<template>
  <nav>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div class="container-fluid mx-4">
        <a class="navbar-brand">
          <router-link to="/">
            <img src="../src/assets/logo-pccomponentes.svg" width="138" height="48" class="img-fluid">
          </router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"><router-link class="linkM" to="/prodcutos">Home</router-link></a>
            </li>
          </ul>
        </div>
        <router-link to="/perfil" class="icon linkM" ><font-awesome-icon icon="fa-solid fa-user"/> Mi cuenta</router-link>
        <router-link to="/perfil" class="icon linkM" ><font-awesome-icon icon="fa-solid fa-cart-shopping"/> Mi cuenta</router-link>
      </div>
    </nav>
  </nav>
  <router-view />
</template>

<style>

.linkM {
  text-decoration: dashed;
  color: #ffffff;
  font-size: 20px;
}

.icon{
  color: #ffffff;
  font-size: 20px;
  margin-left: 40px;
}

</style>
