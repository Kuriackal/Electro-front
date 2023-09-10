import React,{useState, useEffect} from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getProduct,updateProduct } from "../../../functions/product";
import {getCategories,getCategorySubs} from '../../../functions/category'
import FileUpload from "../../../components/forms/FileUpload";
import {LoadingOutlined } from '@ant-design/icons'
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";


const initialState ={
    title:"",
    description:"",
    price:"",
    category:"",
    subs:[],
    shipping:"",
    quantity: "",
    images: [],
    colors:["Black","Brown","Silver","White","Blue"],
    brands: ["Apple","Samsung","Microsoft","Lenovo","ASUS","Dell","Nikon"],
    color:'',
    brand: "",
};



const ProductUpdate = ({match,history}) =>{

    //state
    const [values,setValues]= useState(initialState);
    const [categories,setCategories] = useState([])
    const [subOption,setSubOption]=useState([])
    const [arrayofSubs,setArrayofSubs]=useState([]);
    const [selectedCategory,setSelectedCategory]= useState("");
    const [loading,setLoading]= useState(false)

    //redux
    const { user } = useSelector((state)=> ({...state}))

    //router(destructing)

    const { slug } = match.params;


    useEffect(()=>{
        loadProduct();
        loadCategories();

    },[]);

    const loadProduct = () =>{
        getProduct(slug).then((p) =>{
            // console.log('single product',p)
            //1 load single product
            setValues({...values, ...p.data});
            //2 load single product category subs
            getCategorySubs(p.data.category._id)
            .then(res => {
                setSubOption(res.data)
            })
            //3 prepare array of sub ids to show as default sub values to select
                let arr =[]
                p.data.subs.map(s=>{
                    arr.push(s._id)
                })
                console.log("ARRAY",arr)
                setArrayofSubs((prev)=>arr);//required for ant design to select to work
        });
    }

    const loadCategories= ()=> 
    getCategories().then((c) =>{
        setCategories(c.data)
      
        
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)
        
        values.subs = arrayofSubs
        values.category = selectedCategory ? selectedCategory : values.category

        updateProduct(slug,values,user.token)
        .then ((res) =>{
            setLoading(false)
            toast.success(`${res.data.title} is updated`)
            history.push("/admin/products")

        })
        .catch((err) =>{
                console.log(err)
                setLoading(false)
                toast.error(err.response.data.err)
        })

    }

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
      //   console.log(e.target.name,"----",e.target.value)
      }

      const handleCategoryChange =(e)=>{
        e.preventDefault();
        // console.log('CLICKED CATEGORY',e.target.value)
        setValues({...values,subs:[]});

        setSelectedCategory(e.target.value);


        getCategorySubs(e.target.value)
        .then(res=>{
            console.log("Sub option on category CLICK",res)    
            setSubOption(res.data)
        })


        console.log("EXISTING CATEGoRY values.category",e.target.value);


        //if user clicks  back to the category show the sub categories as default
        if(values.category._id === e.target.value){
            loadProduct();
        }
        //for clearing the old sub category
        setArrayofSubs([])
   
    }


    return(
        <div className="container-fluid">
            <div className="row">
            <div className='col-md-2'>
                <AdminNav/>
            </div>
                <div className="col-md-10">
                        {loading ?<LoadingOutlined  className="text-danger h1" /> :<h4>Product update</h4>}

                        {/* {JSON.stringify(values)} */}

                        <div className="p-3">
                        <FileUpload
                         values={values} 
                        setValues={setValues}
                        setLoading={setLoading}
                        />
                    </div>

                        <ProductUpdateForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setValues={setValues}
                         values={values}
                         handleCategoryChange={handleCategoryChange}
                         categories={categories}
                         subOption={subOption}
                         arrayofSubs={arrayofSubs}
                         setArrayofSubs={setArrayofSubs}
                         selectedCategory={selectedCategory}

                        
                        />
                    <hr /> 
                </div>
            </div>

        </div>
    )

}
export default ProductUpdate;