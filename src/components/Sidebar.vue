<template>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="bg-dark col-auto col-md-2 min-vh-100">
          <div class="bg-dark p-2">
            <router-link to="/" class="d-flex text-decoration-none mt-1 align-items-center text-white">
              <span class="fs-4 d-none d-sm-inline">SideMenu</span>
            </router-link>
            <ul class="nav flex-column mt-4">
              <li class="nav-item">
                <router-link to="/Dashboard" class="nav-link text-white"> 
                  <i class="fs-5 fa fa-gauge"></i><span class="fs-4 ms-2 d-none d-sm-inline">Dashboard</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/create" class="nav-link text-white"> 
                  <i class="fs-5 fa fa-home"></i><span class="fs-4 ms-2 d-none d-sm-inline">Home</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Qoutes" class="nav-link text-white"> 
                  <i class="fs-5 fa fa-list"></i><span class="fs-4 ms-2 d-none d-sm-inline">Qoutes</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Students" class="nav-link text-white"> 
                  <i class="fs-5 fa fa-list"></i><span class="fs-4 ms-2 d-none d-sm-inline">Students</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/AddStudent" class="nav-link text-white"> 
                  <i class="fs-5 fa fa-clipboard"></i><span class="fs-4 ms-2 d-none d-sm-inline">Add Students</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/customers" class="nav-link text-white"> 
                  <i class="fs-5 fa fa-users"></i><span class="fs-4 ms-2 d-none d-sm-inline">Customers</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>

  .nav-link:hover {
    background-color: green;
  }
  </style>
  