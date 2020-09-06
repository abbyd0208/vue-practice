<template>
  <div id="app">
    <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link active" to="/index">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/page">Pages</router-link >
        </li>
    </ul>
    <!-- <HelloWorld/> -->
    <router-view name="menu"></router-view>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      user:{}
    }
  },
  created(){
    // $.ajax({
    //   url: '',
    //   dataType: 'json',
    //   success: function(data) {
    //     console.log(data);
    //   }
    // });
    var myVm = this;
    this.$http.get('https://randomuser.me/api/').then((response) => {
      console.log(response.data)
      myVm.user = response.data.results[0];
    })
  }
}
</script>

<style lang="scss">
$color:pink;
 body{
   background:$color;
 }
 @import "~bootstrap/scss/bootstrap";
</style>
