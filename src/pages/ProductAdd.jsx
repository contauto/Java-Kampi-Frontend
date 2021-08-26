import { Formik, Form } from "formik";
import React from "react";
import * as yup from "yup";
import { Button } from "semantic-ui-react";
import BerkeTextInput from "../utilities/customFormControls/BerkeTextInput";
import ProductService from "../services/productService";

export default function ProductAdd() {
  const initialValues = { productName: "",quantityPerUnit:"" };
  const schema = yup.object({
    productName: yup.string().required("Ürün ismi zorunlu"),
    unitPrice: yup.number().typeError("Sadece sayı girişi yapılabilir").required("Ürün fiyatı zorunlu"),
    quantityPerUnit: yup.string().required("Açıklama zorunlu"),
    unitsInStock:  yup.number().typeError("Sadece sayı girişi yapılabilir").required("Stok adedi zorunlu"),
  });
  let productService=new ProductService()
  
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{productService.add(values)
      window.location.replace('/products')}}>
        <Form className="ui form">
          <BerkeTextInput name="productName" placeholder="Ürün Adı"></BerkeTextInput>
          <BerkeTextInput name="unitPrice" placeholder="Birim Fiyat"></BerkeTextInput>
          <BerkeTextInput name="category.categoryId" placeholder="Kategori ID"></BerkeTextInput>
          <BerkeTextInput name="quantityPerUnit" placeholder="Açıklama"></BerkeTextInput>
          <BerkeTextInput name="unitsInStock" placeholder="Stok Adedi"></BerkeTextInput>
          <Button color="facebook" type="submit">
            Ürün Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
