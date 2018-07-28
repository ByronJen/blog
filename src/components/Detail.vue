<template>
<div class="blog-detail">
    <h2>{{blog.title}}</h2>
    <p>作者：{{blog.author}}</p>
    <p>分类：
        <span v-for="(category,index) in blog.categories" :key="index">
            {{category}} 
        </span>
    </p>
    <article>{{blog.content}}</article>
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
        created(){
            this.$http.get('https://rxy-blog.firebaseio.com/posts/'+this.id+'.json')
            .then((result)=>{
                this.blog = result.body;
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