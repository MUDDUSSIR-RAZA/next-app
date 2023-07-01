export default function Items({ item ,children }) {
    return (
        <>
            <li>
                {item}
                {children}
            </li>
        </>
    )
}
