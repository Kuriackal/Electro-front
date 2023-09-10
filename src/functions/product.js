import axios from "axios";

export const createProduct = async (product,authtoken) =>
await axios.post(` /api/product`,product,{
   headers:{
       authtoken,
   }
})

export const getProductsByCount = async (count) =>
await axios.get(`/api/products/${count}`)


export const removeProduct = async (slug,authtoken) =>
await axios.delete(` /api/product/${slug}`,{
   headers:{
       authtoken,
   }
})

export const getProduct = async (slug) =>
await axios.get(` /api/product/${slug}`)


export const updateProduct = async (slug,product,authtoken) =>
await axios.put(` /api/product/${slug}`,product,{
   headers:{
       authtoken,
   }
})

export const getProducts = async (sort,order,page) =>
await axios.post(`/api/products`,{
    sort ,
    order,
    page,
},

)

export const getProductsCount = async () =>
    await axios.get(`/api/products/total`)


 export const productStar = async (productId,star,authtoken) =>
    await axios.put(` /api/product/star/${productId}`,{star},{
       headers:{
           authtoken,
       }
    })


 export const getRelated = async (productId) =>
await axios.get(` /api/product/related/${productId}`)


export const fetchProductByFilter = async (arg) =>
await axios.post(` /api/search/filters`,arg)
