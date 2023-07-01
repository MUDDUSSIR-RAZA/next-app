// import Button from "../../components/Button/Button";
// import List from "../../components/List/List";
// import { useState } from "react";


// export default function Home() {
//   const [dataBase ,setData] = useState([
//     { id: 1, text: "data 1" },
//     { id: 2, text: "data 2" },
//     { id: 3, text: "data 3" },
//     { id: 4, text: "data 4" },
//     { id: 5, text: "data 5" },
//     { id: 6, text: "data 6" },
//     { id: 7, text: "data 7" },
//   ])


//   const addHandler = () => {
//     const lastItemId = dataBase[dataBase.length - 1].id;
//     const newItem = { id: lastItemId + 1, text: `data ${lastItemId + 1}` };
//     setData((prevState) =>  [...prevState , newItem])
//   }

//   return (
//     <>
//       <List items={dataBase} setData={setData}/>
//       <Button onclick={addHandler} text="Add" />
//     </>
//   )
// }


import { useState } from "react"
import AuthHandler from "../../components/AuthHandler/AuthHandler";
import AuthContext from "../../Context/AuthContext/AuthContext";

export default function () {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const logIn = () => {
    setAuthenticated(true)
  };
  const logOut = () => {
    setAuthenticated(false)
  };

  return (
    <div>
      <AuthContext.Provider value={{
        isLoggedIn: isAuthenticated,
        logIn, logOut
      }}>
        <AuthHandler />
      </AuthContext.Provider>
    </div>
  )
}