const Range = (props) => {
  // console.log(props);

  return (
    <div className="flex-row">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type="range"
        id={props.id}
        onChange={props.onChange}
        min={0}
        max={10}
      />
    </div>
  );
};

export default Range;
