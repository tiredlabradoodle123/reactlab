// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
    return (
        <div>
            <h1>{props.item.name}</h1>
            <img src={props.item.image}/>
            <button onClick={() =>props.updateCart(props.item)}>Add</button>
        </div>
    )
}


