import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid #aaa;
  border-radius: 50%;
  position: relative;
  margin: 50px auto;
  display: block;
  animation: ${spin} 600ms linear infinite;

  &:before {
    content: '';
    height: 30px;
    width: 30px;
    background: green;
    border-radius: 50%;
    position: absolute;
    top: 35px;
    left: 35px;
  }

  &:after {
    content: '';
    height: 20px;
    width: 20px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 5px;
  }
`

export default Spinner
