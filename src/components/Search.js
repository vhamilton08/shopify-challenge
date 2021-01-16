import React from 'react';

const Search = ({ inputHandle, search }) => {
    return (
        <section>
            {/* <form> */}
                {/* <label htmlFor="movieTitle">MOVIE TITLE</label> */}
                <input 
                    id="movieTitle" 
                    type="text" 
                    // value={inputv} 
                    onChange={inputHandle}
                    onKeyPress={search}  
                    placeholder="Search For A Movie"/>
            {/* </form> */}
        </section>
    )
}
export default Search;