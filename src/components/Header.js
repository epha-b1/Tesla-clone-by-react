import React,{useState} from "react";
import styled from "styled-components";
// import { selectCars } from "../features/car/carSlice";


function Header() {
  const [burgerStatus,setburgerStatus]=useState(true)
  return (
    <Containor>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <p>
          <a href="#" />
          Model S
        </p>
        <p>
          <a href="#" />
          Model 3
        </p>
        <p>
          <a href="#" />
          Model X
        </p>
        <p>
          <a href="#" />
          Model Y
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu  src="/images/MenuIcon.png" onClick={()=>setburgerStatus(false)} />
     </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
         <CustomClose src="/images/close.png" onClick={()=>setburgerStatus(true)}/>
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
    </Containor>
  );
}

export default Header;

const Containor = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;
const CustomMenu = styled.img`
  width: 20px;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform:${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled.img`
  width: 20px;
  /* margin-left: 20px; */
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`