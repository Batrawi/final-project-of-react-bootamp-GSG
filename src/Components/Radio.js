

const Radio = (props) => {
    // console.log(props);
  

    return ( 
    <div className="flex-row">
    <label for={props.value}>{props.value}</label>
    <input name="cat" value={props.value} type="radio" onClick={props.onClick} />
    </div>
    
    );
}
 
export default Radio;