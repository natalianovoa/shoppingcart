
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Card, Title, Content, Footer, Image, Column, Group } from "rbx";

const ProductList = ({products}) => {
    return products.map(product => {
      return <Card style={{ width: '20rem'}}>
         <Card.Image>
            <Image.Container>
              <Image src={"data/products/" + product.sku + "_2.jpg"} />
            </Image.Container>
          </Card.Image> 

          <Card.Content>
          <Title>{product.title}</Title>
          <Title subtitle>{"$" + product.price}</Title>
          </Card.Content>

        <Card.Footer as="footer" size={128}>

          <Card.Footer.Item as="p">
            <span>
              <a href="#">S</a>
            </span>
          </Card.Footer.Item>
          <Card.Footer.Item as="p">
            <span>
              <a href="#">M</a>
            </span>
          </Card.Footer.Item>
          <Card.Footer.Item as="p">
            <span>
              <a href="#">L</a>
            </span>
          </Card.Footer.Item>
          <Card.Footer.Item as="p">
            <span>
              <a href="#large">XL</a>
            </span>
          </Card.Footer.Item>
        </Card.Footer>
        <Card.Footer as="footer">
          <Card.Footer.Item as="a">
            <span>
              <a href="#add">Add to Cart</a>
            </span>
          </Card.Footer.Item>
        </Card.Footer>
      </Card> 
})
}

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/data/products.json');  
      //if ! response.ok 
        //console.log()
        //response.status
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, [])
  
  return (
    <ul>
      <ProductList products={products}/>
    </ul>
  );
};

export default App;