import React from 'react';
import './Search.css';

const Search = ({ inputHandle, search }) => {
    return (
        <section>
            {/* <form> */}
                {/* <label htmlFor="movieTitle">MOVIE TITLE</label> */}
                <input 
                    id="movieTitle" 
                    type="text" 
                    onChange={inputHandle}
                    onKeyPress={search}  
                    placeholder="Search For A Movie"/>
            {/* </form> */}
        </section>
    )
}
export default Search;