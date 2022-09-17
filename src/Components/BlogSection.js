import React from 'react'
import { useSelector, useDispatch }  from "react-redux"
import { reset } from '../redux/filter/actions'

import Blogs from "./Blogs"
import Heading from './Heading'
import allBlogs from './blogData';



const BlogSection = () => {
    const dispatch = useDispatch()



const reducer = useSelector( state => state.filters);
console.log(reducer);
const { authorFilter, searchFilter, categoryFilter } = reducer


const style = `${authorFilter || searchFilter || categoryFilter? "ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" : " hidden "  }`;

const resetHandeler = () => { 
    dispatch(reset())
}


const filterBySearch = (blog) => {

    return searchFilter?
    blog.title.toLowerCase().includes(searchFilter.toLowerCase()) 
     : blog
     

}

const filterByCategory = (blog) => {
    return categoryFilter?
    blog.category.toLowerCase() === categoryFilter.toLowerCase() 
    : blog
} 

const filterByAuthor = (blog)=> {
    return authorFilter?
    blog.authorName.toLowerCase() === authorFilter.toLowerCase()
    : blog
}



    return (
        <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8 -mb-">

            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">

                <Heading />
                
                <button className={style} onClick={resetHandeler}
                >  Reset</button>

                <div className=" mt-12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-10 lg:max-w-none">

                    {allBlogs
                    .filter(filterByCategory)
                    .filter(filterByAuthor)
                    .filter(filterBySearch)
                    .map((blog) =>
                        <Blogs key={blog.id} blog={blog} />

                    )

                    }
                </div>


            </div>
        </section>
    )
}

export default BlogSection; 