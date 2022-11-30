// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 25px;
  font-family: 'Open Sans';
  text-align: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-size: 16px;
  font-family: 'Open Sans';
`

export const InputElement = styled.input`
  color: #5a7184;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid #5a7184;
  border-radius: 8px;
  padding: 12px 12px;
  outline: none;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: 'Open Sans';
`
export const GenerateButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  border: none;
  cursor: pointer;
  align-self: flex-start;
  padding: 10px 40px;
  border-radius: 6px;
`
export const MemeContainer = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  background-image: url(${props => props.imageUrl});
  margin-bottom: 20px;
  display: ${props => (props.mobile ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-family: 'Open Sans';

  @media screen and (min-width: 768px) {
    width: 50%;
    display: ${props => (props.mobile ? 'none' : 'flex')};
    height: 400px;
  }
`

export const TextElement = styled.p`
  color: #ffffff;
  margin: 0px;
  text-align: center;
  font-size: ${props => props.fontSize}px;
`
