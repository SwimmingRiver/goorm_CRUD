import { useDispatch } from "react-redux";

const Card=(props)=>{
    const dispatch = useDispatch()
    const Edit=()=>{
      props.setItem(props.item);
      props.setBudget(props.budget);
      props.setEditMode(true);
      props.setSelectedId(props.id);
    };

    const Delete=()=>{
      dispatch(props.itemsReducer.actions.DELETE_ITEMS(props.id))
     props.setMessageOn("삭제");
    };
    return(
    <div className="CardWrapper">
      <h1>{props.item}</h1>
      <h1>{props.budget}</h1>
      <div id='btnGroup'>
      <button onClick={Edit}><span class="material-symbols-outlined">edit</span></button>
      <button onClick={Delete}><span id='delete' class="material-symbols-outlined">delete</span></button>
      </div>
    </div>)
    };
export default Card;