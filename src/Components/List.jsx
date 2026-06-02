import ListItem from "./ListItem";
import "./List.css";

export default function List(props) {
  function deleteItem(id) {
    props.setList((prevlist) => prevlist.filter((item, index) => index !== id));
  }
  return (
    <div>
      <ul>
        {props.list.map((item, index) => {
          return (
            <ListItem
              key={index}
              item={item}
              onCheck={() => deleteItem(index)}
            />
          );
        })}
      </ul>
    </div>
  );
}
