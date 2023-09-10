import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";


const CategoryList = ()=>{
    const [categories,setCategories] = useState([])
    const [loading,setLoading]= useState(false)


    useEffect(()=>{
        setLoading(true)
        getCategories().then(c =>{
            setCategories(c.data)
            setLoading(false)
        })
    },[])

    const showCategories=()=>(
        categories.map((c)=> 
            <div key={c._id} 
           className="btn  shadow p-3 mb-3 btn-light rounded col btn-block btn-lg m-3 text-info text-center">
               <Link to={`/category/${c.slug}`}>{c.name}</Link>
        </div>
        )

    )

    

    return(
        <div className="container">
            <div className="row">
                {loading ?(<h4 className="text-center">Loading</h4>):showCategories()}

            </div>
        </div>
    )

}

export default CategoryList;