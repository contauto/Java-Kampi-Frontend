import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import {  Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuth, setIsAuth] = useState(false)
  const history=useHistory()
  function handleSignOut(params) {
    setIsAuth(false);
    history.push("/")
  }
  function handleSignIn(params) {
    setIsAuth(true);

  }
  function returnHome(){
    window.location.replace('/products');
  }
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item  name="home" onClick={returnHome} />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary/>}
            {isAuth?
            <SignedIn signOut={handleSignOut}></SignedIn>:
            <SignedOut signIn={handleSignIn}></SignedOut>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
