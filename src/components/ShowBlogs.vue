<template>
  <div class="show-blogs">
     <h2>博客总览</h2>
     <ul>
        <li v-for="item in items">
            <h4>{{item.title}}</h4>
            <p>
                {{item.body}}
            </p>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
     items:[]
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        this.items = response.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit  CSS to this component only -->
<style scoped>
  
</style>