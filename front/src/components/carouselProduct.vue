<script>

export default {
    name: 'carouselProduct',
    data() {
        return {}
    }
}

</script>

<template>
    <div class=" mt-5">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://img.pccomponentes.com/pcblog/1676847600000/1560x349-1.jpg" class=" miImagen" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/mando.jpg" class="img-fluid miImagen" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/logo.png" class="img-fluid miImagen" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
    </div>
</template>

<style>

.miImagen{ 
    max-width: 100%;
}


</style>