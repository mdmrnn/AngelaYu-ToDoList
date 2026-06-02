export default function ListItem(props) {
  return <li onClick={props.onCheck}>{props.item}</li>;
}
