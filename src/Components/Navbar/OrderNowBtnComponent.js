import React from 'react';
import styled from 'styled-components';

const OrderNowBtnComponent = ({ onClick, label = 'Order Now' }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        <span>{label}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 4px 12px;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 17px;
    overflow: hidden;
    background: #000;
    color: white;
    text-align: center;
    vertical-align: middle;
    border: 2px solid black;
    min-width: 80px;
  }

  button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    color: #F5E8DD;
  }

  button::before,
  button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  button::before {
    content: "";
    background: #CD4633;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  button::after {
    content: "";
    background: #ff6347;
    width: 110%;
    left: -5%;
    top: 0;
    z-index: -1;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::after {
    transform: translate3d(120%, 0, 0);
  }
`;

export default OrderNowBtnComponent;
