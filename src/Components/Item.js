

const Item = (props) => {
    // console.log(props);
    return ( 
    <li className="card">
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <strong>{props.price} $</strong>
    </li>
    );
}
 
export default Item;