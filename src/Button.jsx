function Button(props) {
  return <button onClick={props.onClick} className="button">{props.action}</button>;
}

export default Button;
