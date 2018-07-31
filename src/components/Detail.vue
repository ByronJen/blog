<template>
    <div class="blog-detail">
        <h2>{{blog.title}}</h2>
        <p>
            <span v-show="!!blog.author" >作者：</span>
            {{blog.author}}
        </p>
        <p>
            <span v-show="!!blog.categories" >分类：</span>
            <span v-for="(category,index) in blog.categories" :key="index">
                {{category}} 
            </span>
        </p>
        <article>{{blog.content}}</article>
        <div>
        <router-link tag='button' :to="'/edit/'+id">编辑</router-link>
        <button @click="deleteThisBlog()">删除</button>
        </div>
    </div>
</template>
<script>
    export default{
        name:"blog-detail",
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        methods:{
            deleteThisBlog(){
                this.$axios.delete('/posts/'+this.id+'.json')
                .then((response)=>{
                    if(response.status==200){
                        this.$router.push({path:"/"})
                    }
                })
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
.blog-detail{
    width:100%;
    padding: 25px;
    margin: 0 auto;
}
h2,article{
    padding:15px 0;
}

</style>