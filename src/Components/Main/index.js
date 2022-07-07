import React, { useState } from "react";
import { Container, Title, Description, PriceContainer, Price, Discount, FinalPrice, AmountContainer, AddIcon, Amount, DeleteIcon, ContainerButton, Button} from './styles'
import Slider from "../Slider";



const Main = () => {

  const [amount, setAmount] = useState(0);

  const addItem = () => {
    setAmount(amount + 1)
  }

  const discountItem = () => {
    amount !== 0 && setAmount(amount - 1)
  }

  // const addToCart = () => {
  //   let newProdcuto = {
  //     amount : {amount},
  //     price:
  //   }
  // }
  return (

      <Container>
        <Slider />
        <Title>Fall limited edition sneakers</Title>
        <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, the'll withstand everything the weather can offer.</Description>
        <PriceContainer>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
          <FinalPrice>$250.00</FinalPrice>
        </PriceContainer>
        <AmountContainer>
          <DeleteIcon onClick={discountItem} />
          <Amount>{amount}</Amount>
          <AddIcon onClick={addItem}/>
        </AmountContainer>
        <ContainerButton>
          <Button><span/>Add  to cart</Button>
        </ContainerButton>
      </Container>
   
    
  )
}

export default Main