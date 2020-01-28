import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Product from './product.js';
import "rbx/index.css";
import { Card, Title, Content, Footer, Image, Column, Group, Button, Navbar, Item, Brand, Burger, Linl, Dropdown, Divider,
Segment, Field, Control, Menu, Icon} from "rbx";

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
  <div>
    <Navbar color="light">
  <Navbar.Brand>
    <Navbar.Item href="https://new-shopping-car.firebaseapp.com/">
      <Title>Shopping Cart</Title>
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Segment align="start">
      <Navbar.Item href="https://new-shopping-car.firebaseapp.com/">Home</Navbar.Item>
      <Navbar.Item dropdown hoverable>
        <Navbar.Link href="https://new-shopping-car.firebaseapp.com/">
          Shopping Cart
        </Navbar.Link>
      </Navbar.Item>
    </Navbar.Segment>

    <Navbar.Segment align="end">
      <Navbar.Item as="div">
        <Field kind="group">
          <Control>
            <Button as="a" color="primary" href="https://twitter.com">
              <span>Sign Up</span>
            </Button>
          </Control>
        </Field>
      </Navbar.Item>
    </Navbar.Segment>
  </Navbar.Menu>
</Navbar>

  <Column.Group vcentered multiline gapSize={2}> 
            {products.map(product =>
              <Product product={product}/>
            )}
  </Column.Group>
  </div>
  )
};
export default App;