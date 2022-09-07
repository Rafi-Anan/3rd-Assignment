import React from 'react';
import Search from "../assets/search.svg"
import { useDispatch } from 'react-redux';
import { search } from '../redux/filter/actions';




const SearchBar = () => {

    const dispatch = useDispatch()

    const handleDebounced = ( fn, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout( timeout);
            timeout = setTimeout( () => {
                fn (...args);
            }, wait);
        }

    }
const getSearchKey = (value) => {
    dispatch(search(value))
}

const getDebouncedKey = handleDebounced(getSearchKey, 500)
  return (
    
        <div
            className="border mt-6 border-slate-200 flex items-center w-80 w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                onChange = {(e) => getDebouncedKey(e.target.value)}
                placeholder="Search"
            />
            <img
                className="inline h-6 cursor-pointer"
                src={Search}
                alt="Search"
            />
        </div>
  )
}

export default SearchBar;