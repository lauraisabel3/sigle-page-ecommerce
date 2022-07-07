import styled from "@emotion/styled";
import minusIcon from '../../images/icon-minus.svg'
import addIcon from '../../images/icon-plus.svg'
import cartIcon from '../../images/icon-cart.svg'

const Container = styled.div `
  width: 100%;
  height: auto;
`



const Title = styled.h1 `
  margin: 20px 0 0 20px;
  font-size: 2rem;
  color: var(--black);

  ::before {
    content:"SNEAKER COMPANY";
    margin-bottom: 8px;
    display: flex;
    font-size: 1.2rem;
    color: var(--orange);
  }
`

const Description =  styled.p `
  margin: 8px 20px 0 20px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--dark-grayish-blue);
`

const PriceContainer = styled.div `
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  align-items: center;
`

const Price = styled.h3 `
  margin-right: 16px;
  font-size: 3rem;
  color: var(--dark);
`

const Discount = styled.span `
  width: auto;
  height: auto;
  padding: 4px 6px;
  background-color: var(--pale-orange);
  border-radius: 4px;
  color: var(--orange);
  font-size: 1.4rem;
  font-weight: 700;
`

const FinalPrice = styled.span `
  position: absolute;
  right: 20px;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--grayish-blue);
  text-decoration: line-through;
`

const AmountContainer = styled.div `
  height: auto;
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-grayish-blue);
  border-radius: 8px;
`

const AddIcon = styled.span `
  width: 16px;
  height: 16px;
  background-image: url(${addIcon});
  bakcground-position: center;
  background-size: cover;
`

const Amount = styled.span `
  font-size: 1.6rem;
  color: var(--black);
  font-weight: 700;
`

const DeleteIcon = styled(AddIcon) `
  width: 16px;
  height: 6px;
  background-image: url(${minusIcon});
`
const ContainerButton = styled.div `
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 0 20px;
`

const Button = styled.button `
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--orange);
  border: none;
  border-radius: 8px;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 700;

  span {
    width: 20px;
    height: 20px;
    margin-right: 16px;
    color: var(--white);
    background-image: url(${cartIcon});
    background-size: cover;
    background-position: center;
  }
`

export { Container, Title, Description, PriceContainer, Price, Discount, FinalPrice, AmountContainer, AddIcon, Amount, DeleteIcon, ContainerButton, Button}