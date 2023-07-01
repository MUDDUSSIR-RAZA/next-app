import AuthContext from "../../Context/AuthContext/AuthContext";
import Button from "../../components/Button/Button";
import List from "../../components/List/List";
import { useContext, useState } from "react";


export default function Home() {
  const [dataBase ,setData] = useState([
    { id: 1, text: "data 1" },
    { id: 2, text: "data 2" },
    { id: 3, text: "data 3" },
    { id: 4, text: "data 4" },
    { id: 5, text: "data 5" },
    { id: 6, text: "data 6" },
    { id: 7, text: "data 7" },
  ])


  const addHandler = () => {
    const lastItemId = dataBase[dataBase.length - 1].id;
    const newItem = { id: lastItemId + 1, text: `data ${lastItemId + 1}` };
    setData((prevState) =>  [...prevState , newItem])
  }

  const authCtx = useContext(AuthContext)
  return (
    <>
      <List items={dataBase} setData={setData}/>
      <Button onclick={addHandler} text="Add" />

      <Button onclick={authCtx.logOut} text="Log Out" />
    </>
  )
}