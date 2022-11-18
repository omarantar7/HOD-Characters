import { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Content from './components/Content/content';
import FavoriteCart from './components/layout/FavoriteCart';
import FavProvider from './store/provider';
import AllCharacters from './components/more-detail/allcharacters';
import Cookie from './Cookies/cookie';
const App = () => {

  const [favIsShown,setFavIsShown]= useState(false);
  const [charIsShown,setCharIsShown] = useState(false);
  const [showCookie,setShowCookie] = useState(true);
  
  const favShownHandler = () => {
    setFavIsShown((prev) => !prev);
  }
  const charShownHandler = () => {
    setCharIsShown((prevent)=>!prevent);
  }
  const cookieCloseHandler = () => {
    setShowCookie(false);
  }

  return (
    <FavProvider>
      {favIsShown&&<FavoriteCart onClose={favShownHandler}/>}
      <Header onShown={favShownHandler}/>
      <Content onLook={charShownHandler}/>
      {charIsShown&&<AllCharacters onCancel={charShownHandler}/>}
      {showCookie && <Cookie Quit={cookieCloseHandler} />}
    </FavProvider>
  );
}

export default App;
