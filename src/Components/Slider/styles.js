import styled from "@emotion/styled";
import previousIcon from '../../images/icon-previous.svg'
import nextIcon from '../../images/icon-next.svg'
import product from '../../images/image-product-1-thumbnail.jpg'

const Container = styled.div `
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
`

const Imagen = styled.img `
  width: 100%;
  height: 300px;
`

const ButtonLeft = styled.button `
  width: 44px;
  height: 44px;
  position: absolute;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-radius: 50%;
  border: none;

  span {
    width: 16px;
    height: 20px;
    background-image: url(${previousIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const ButtonRight = styled(ButtonLeft) `
  left: auto;
  right: 20px;

  span {
    background-image: url(${nextIcon});
  }
`

export { Container, Imagen, ButtonLeft, ButtonRight }