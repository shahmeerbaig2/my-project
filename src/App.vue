<template>
  <main>
    <div class="wrapper">
      <Sidebar/>
      <div class="content">
        <Content>
        <!-- <router-view/> -->
      </Content>
       

      </div>
    </div>
  </main>
</template>
<script>

import Content from "./layouts/Content.vue";
import Sidebar from "./components/Sidebar.vue"

export default {

  components:{
 Sidebar,Content,Sidebar
}
  
}


</script>
