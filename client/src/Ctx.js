import React, { createContext, useContext, useReducer } from "react";

export const Ctx = createContext();

export const CtxProvider = ({ reducer, initialState, children }) => (
  <Ctx.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Ctx.Provider>
);

export const GetCtx = () => useContext(Ctx);



  // const initialState = {
  //   theme: { primary: false },
  //   desktop: { isDesktop: null }
  // };

  // const reducer = (state, action) => {
  //   console.log("state: ", state);
  //   switch (action.type) {
  //     case "changeTheme":
  //       return {
  //         ...state,
  //         theme: action.newTheme
  //       };

  //     case "changeDesktop":
  //       return {
  //         ...state,
  //         desktop: action.newDesktop
  //       };

  //     default:
  //       return state;
  //   }
  // };






  // const [state, dispatch] = GetCtx();
  // console.log("state: ", state);
  // // console.log("dispatch: ", dispatch);

  // useEffect(() => {
  //   // console.log('', theme)
  //   if (state.desktop.isDesktop === null) {
  //     setTimeout(() => {
  //       dispatch({
  //         type: "changeDesktop",
  //         newDesktop: { isDesktop: true }
  //       });
  //     }, 4000);
  //   }
  // });





// import { StateProvider } from "../state";

// const App = () => {
//   const initialState = {
//     theme: { primary: "green" }
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "changeTheme":
//         return {
//           ...state,
//           theme: action.newTheme
//         };

//       default:
//         return state;
//     }
//   };

//   return (
//     <StateProvider initialState={initialState} reducer={reducer}>
//       // App content ...
//     </StateProvider>
//   );
// };

// import { useStateValue } from "./state";

// const ThemedButton = () => {
//   const [{ theme }, dispatch] = useStateValue();
//   return (
//     <Button
//       primaryColor={theme.primary}
//       onClick={() =>
//         dispatch({
//           type: "changeTheme",
//           newTheme: { primary: "blue" }
//         })
//       }
//     >
//       Make me blue!
//     </Button>
//   );
// };