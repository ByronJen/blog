import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import Detail from './components/Detail'
import Edit from './components/Edit'

export const routes = [
    {path:"*",redirect:"/"},
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog},
    {path:"/blog/:id",component:Detail},
    {path:"/edit/:id",component:Edit},
]