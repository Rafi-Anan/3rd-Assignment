import { useDispatch} from 'react-redux';
import { authorName, category } from "../redux/filter/actions"




const Blogs = ({ blog  }) => {

    // const reducer = useSelector((state) => state.filters)
    const dispatch = useDispatch();

    // const { authorFilter, categoryFilter } = reducer;

    const categoryFilterHandaler = (categoryFilter) => {
        dispatch(category(categoryFilter))
    }
    const authorFilterHandaler = (authorFilter) => {
dispatch(authorName(authorFilter))
    }


    return (

        <div key={blog.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover"
                    src={blog.blogImg} alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between ">
                <div className="flex-1 " >

                    <p className="text-sm font-medium text-indigo-600 cursor-pointer">

                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800" onClick={ () => categoryFilterHandaler(blog.category)}>
                            {blog.category}
                        </span>
                    </p>

                    <p className="text-xl font-semibold mt-1 text-gray-900">{blog.title}</p>

                </div>

                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">

                        <img className="h-10 w-10 rounded-full"
                            src={blog.authorImg} alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 hover:underline cursor-pointer" onClick={ () => authorFilterHandaler(blog.authorName)}> {blog.authorName}</p>
                        <div id='minText'
                            className="flex space-x-1
                                text-sm text-gray-500"
                        >
                            <time dateTime="2020-03-16"
                            >11 Jul, 2022
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> 6 min read </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>



    )



}

export default Blogs;