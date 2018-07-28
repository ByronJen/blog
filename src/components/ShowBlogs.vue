<template>
  <div v-theme:black="'wide'" class="show-blogs">
     <h2>博客总览</h2>
     <input type="text" v-model="keywords" v-focus placeholder="搜索">
     <ul>
        <li v-for="item in filterBlogs" v-rainbow>
            <router-link tag="div" :to="'/blog/'+item.id">
              <h4>{{item.title | to-uppercase}}</h4>
              <p>
                  {{item.content | snippet}}
              </p>
            </router-link>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
      keywords:"",
      items:[]
    }
  },
  directives:{//局部自定义指令
    focus:{
      inserted:function(el){
        el.focus();
      }
    }
  },
  filters:{    
    snippet(val){
      return val.slice(0,100)+'......'
    }
  },
  created(){
    this.$http.get('https://rxy-blog.firebaseio.com/posts.json')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      // data.forEach((item,i)={
      //   this.items[i] = item;
      // })
      const blogArray = [];
      for(let key in data){
        data[key].id = key;
        this.items.push(data[key]);
      }
      console.log(this.items);
    })
  },
  computed:{
    filterBlogs:function(){
      return this.items.filter((item)=>{
        return item.title.match(this.keywords);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit  CSS to this component only -->
<style scoped>
.show-blogs{
  padding:25px;
}
input{
    border:1px solid #ddd;
    width:100%;
    padding:2px 5px;
    line-height:28px;
    margin:10px auto 20px; 
}
ul{
  width:100%;
  display:grid;
}
li{
  color:#fff;
  justify-content:center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15);
  margin-bottom: 16px;
}
li > div > h4{
  padding:15px;
  border-bottom:1px solid #ddd;
}
li > div > p{
  padding:15px;
  display: inline-block;
}
</style>