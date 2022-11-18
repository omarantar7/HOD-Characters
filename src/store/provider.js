import React, { useReducer } from "react";
import favContext from "./context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    
    const existingFavItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingFavItem=state.items[existingFavItemIndex];
    let updatedItems;
    if(existingFavItem){
        const updatedItem = {
            ...existingFavItem
        };
        updatedItems=[...state.items];
        updatedItems[existingFavItemIndex]=updatedItem;
    }
    else{
        updatedItems = state.items.concat(action.item);
    }
    
    return {
      items: updatedItems,
    };
  }
  if (state.type==='REMOVE'){
     const existingFavItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingFavItem=state.items[existingFavItemIndex];
    let updatedItems
        if(existingFavItem){
            updatedItems = state.items.filter( item => item.id !== action.id );
        }
        else{
            const updatedItem = {...existingFavItem};
            updatedItems=[...state.items];
            updatedItems[existingFavItemIndex]=updatedItem;
        }
    
    return{
        items:updatedItems
    }
   
}
  return { items: [] };
};

const FavProvider = (props) => {
  const [favState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItemFromFavHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemFromFavHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const Context = {
    items: favState.items,
    addItem: addItemFromFavHandler,
    removeItem: removeItemFromFavHandler,
  };
  return (
    <favContext.Provider value={Context}>{props.children}</favContext.Provider>
  );
};

export default FavProvider;