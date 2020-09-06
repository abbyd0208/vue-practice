<template>
<div>
   <img :src="user.picture.large" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title333333</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    {{user.picture}}
</div>
 
</template>

<script>
export default {
  data () {
    return {
      user:{
        picture:{}
      }
    }
  },
  created() {
    var vm = this;
    this.$http.get('https://randomuser.me/api/').then((response) => {
        vm.user = response.data.results[0];
        console.log(response.data)
    });
  },
}
</script>

