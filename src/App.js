import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Product from './product.js';

import "rbx/index.css";
import { Card, Title, Content, Footer, Image, Column, Group } from "rbx";
import {Button, Container, Col, Row} from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);
  return( 
  <Column.Group vcentered multiline> 
            {products.map(product =>
              <Product product={product}/>
            )}
  </Column.Group>
  )
};
export default App;