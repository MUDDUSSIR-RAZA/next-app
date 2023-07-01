import Button from "../Button/Button";
import Items from "./Items/Items";

export default function List({ items, setData }) {
    const removeHandler = (itemId) => {
        let dataBase = items.filter((item) => item.id !== itemId);
        setData(dataBase)
    }
    return (
        <>
            <ul>
                {items.map((item) => (
                    <Items key={item.id} item={item.text}>
                        <Button text="Remove" onclick={() => removeHandler(item.id)} />
                    </ Items>
                ))}
            </ul>
        </>
    )
}
