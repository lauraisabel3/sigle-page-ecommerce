import styled from "@emotion/styled";
import iconMenu from '../../images/icon-menu.svg'
import logo from '../../images/logo.svg'
import iconCart from '../../images/icon-cart.svg'

const Container = styled.div `
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  align-items: center;
`

const IconMenu = styled.span `
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: flex;
  background-image: url(${iconMenu});
  background-position: center;
  background-size: cover;
`

const Logo = styled.span `
  width: 154px;
  height: 22px;
  display: flex;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
`

const IconCart = styled.span `
width: 20px;
height: 20px;
position: absolute;
right: 20px;
display: flex;
background-image: url(${iconCart});
background-position: center;
background-size: cover;
cursor: pointer;
`

export { Container, IconMenu, Logo, IconCart }