<template>
  <div class="add-blog">
    <form v-show="!submited">
      <h2>写博客</h2>
      <div>
        <label>主题：</label>
        <input type="text" placeholder="请输入标题" v-model="blog.title" required>
      </div>
      <div>
        <label>内容：</label>
        <textarea v-model="blog.content"></textarea>
      </div>
      <div>
        <label>分类：</label>
        <p>
        <label>Vue.js</label><input type="checkbox" value="Vue.js" v-model='blog.categories'/>
        <label>JQuery</label><input type="checkbox" value="JQuery" v-model='blog.categories'/>
        <label>React.js</label><input type="checkbox" value="React.js" v-model='blog.categories'/>
        <label>Angular</label><input type="checkbox" value="Angular" v-model='blog.categories'/>
        </p>
      </div>
      <div>
        <label>作者：</label>
        <select v-model="blog.author">
          <option v-for="author in authors">
          {{author}}
          </option>
        </select>
      </div>
      <button @click.prevent="post">发布</button>
    </form>
    
    <div v-show="submited" id="preview">
      <h2>博客发布成功</h2>
      <p>博客主题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
      <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
     blog:{
        title:"",
        content:"",
        categories:[],
        author:""
     },
     authors:['Byron','Junay','Doria'],
     submited:false
    }
  },
  methods:{
    post(){
      this.$http.post("http://jsonplaceholder.typicode.com/posts",{
        title:this.blog.title,
        body:this.blog.content,
        userId:1
      }).then((data)=>{
        console.log(data)
        this.submited = !this.submited;
      })
      // console.log(JSON.stringify(this.blog));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  .add-blog,#preview{
    max-width:780px;
    padding:25px;
    margin:0 auto;
  }
  form > div{
    padding:5px 0;
  }
  input[type='text'],textarea,select,button{
    border:1px solid #ddd;
    width:100%;
  }
  input{
    padding:2px 5px;
    line-height:28px;
  }
  textarea{
    min-height:160px;
    padding:5px;
  }
  input[type='checkbox']{
    margin:0 8px 0 3px;
  }
  select{
    padding:7px 5px;
  }
  button{
    line-height:36px;
  }
  #preview h2{
    text-align:center;
  }
</style>
