// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import { Container, Imagen, ButtonLeft, ButtonRight } from './styles'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const imagenes = [
  {
    src: {product1},
    index: 1,
  },
  {
    src: {product1},
    index: 2,
  },
  {
    src: {product1},
    index: 3,
  },
  {
    src: {product1},
    index: 4,
  },
]


const Slider = () => {
  const[currentPage, setCurrentPage] = useState(1);

  const clickPreviousImg = () => {
    if(currentPage === 1) {
      setCurrentPage(imagenes.length )
    } else {
      setCurrentPage(currentPage - 1)
    }
  }

  const clickNextImg = () => {
    if(currentPage === imagenes.length) {
      setCurrentPage(1)
    } else {
      setCurrentPage(currentPage + 1)
    }
  }

  console.log(currentPage)
  return ( 
    <Container>
      <ButtonLeft onClick={clickPreviousImg}><span/></ButtonLeft>
      {imagenes.map(el => (
        currentPage === el.index &&
          <GatsbyImage key={el.index} image={getImage(el.src)}  alt="imagen del producto" css={css`width: 200px; height:200px;`}></GatsbyImage>
      ))}
      <ButtonRight onClick={clickNextImg}><span/></ButtonRight>
    </Container>
  )
}

export default Slider