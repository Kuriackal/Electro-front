import React from "react";


const LocalSerach =({keyword,setkeyword})=>{
      //step3 for adding search and filter
const handleSearchChange= (e)=>{
    e.preventDefault()
    setkeyword(e.target.value.toLowerCase());
}

    return(
       <div className="container d-flex  ">
           {/*for adding  filter and search categries (step2)*/}
           <input
             type="search"
             placeholder="Filter"
             value={keyword}
             onChange={handleSearchChange}
             className="form-control col-md-5 mr-1 "
         />
       </div>
    )

}

export default LocalSerach