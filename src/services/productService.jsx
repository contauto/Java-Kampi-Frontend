import axios from "axios";


export default class ProductService{

getProducts(){
    return axios.get("http://localhost:8080/api/products/getAll")
}
findById(id){
    return axios.get("http://localhost:8080/api/products/findById?id="+id)
}
add(product){
    return axios.post("http://localhost:8080/api/products/add",product)
}

}