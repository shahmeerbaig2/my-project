<template>
 
  <div class="container py-5 h-100">

    <div class="row d-flex  h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <div class="card" style="color: #4B515D; border-radius: 35px;">
          <div class="card-body p-4">

            <div class="d-flex">
              <h6 class="flex-grow-1">Warsaw</h6>
              <h6>15:07</h6>
            </div>

            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> 13°C </h6>
              <span class="small" style="color: #868B94">Stormy</span>
            </div>

            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 40 km/h
                  </span></div>
                <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 84% </span>
                </div>
                <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 0.2h </span>
                </div>
              </div>
              <div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                  width="100px">
              </div>
            </div>

          </div>
        </div>

      </div>
      <div  id="carouselExampleControls" class="carousel slide my-4 " data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://example.com/path/to/your/second/image.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://example.com/path/to/your/third/image.jpg" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
      
  
    </div>
    
  </div>

</template>

<script>

    export default {
        name: 'Dashboard'
        
    }
</script>

<style lang="scss" scoped>

</style>