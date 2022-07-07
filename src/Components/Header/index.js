import React from "react";
import { Container, IconMenu, Logo, IconCart } from './styles'

const Header = () => {
  return (
    <Container>
      <IconMenu />
      <Logo />
      <IconCart />
    </Container>
  )
}

export default Header