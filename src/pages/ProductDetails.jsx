import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {
    let { id } = useParams();
    
    const [product, setProduct] = useState({});
  
    useEffect(()=>{
      let productService = new ProductService()
      productService.findById(id).then(data=>setProduct(data.data.data))
    })
    return (
        <div>
           <Card fluid>
      <Card.Content>
        
        <Card.Header>{product.productName}</Card.Header>
        
        <Card.Meta>{product.category?.categoryName}</Card.Meta>
        <Card.Description>
            
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )
}
