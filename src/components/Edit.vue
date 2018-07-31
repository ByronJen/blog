<template>
    <div class="edite-blog">
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
            <button @click.prevent="post">提交编辑</button>
        </form>
        <div v-show="!!submited">
            <h2>编辑成功</h2>
            <router-link tag='button' to="/">返回首页</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name:"blog-detail",
        data(){
            return{
                id:this.$route.params.id,
                blog:{},
                authors:['Byron','Junay','Doria'],
                submited:false
            }
        },
        methods:{
            post(){
                this.$axios.put("/posts/"+this.id+'.json',this.blog)      
                .then((data)=>{
                    this.submited = !this.submited;
                })
                // console.log(JSON.stringify(this.blog));
            } 
                
        },
        created(){
            this.$axios.get('/posts/'+this.id+'.json')
            .then((result)=>{
                // console.log(result)
                this.blog = result.data;
            })
        }
    }
</script>
<style scoped>
  .edite-blog{
    padding:25px;
    margin:0 auto;
  }
  form > div{
    padding:5px 0;
    margin-top:20px;
  }
  form > div > label{
    margin-bottom:5px;
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
    margin:0 3px;
  }
  select{
    padding:7px 5px;
  }
  button{
    line-height:36px;
  }
</style>