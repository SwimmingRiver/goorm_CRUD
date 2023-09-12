import { useDispatch } from 'react-redux';
import './index.css';
import { itemsReducer } from '../Reducer/items';

export const Card=(props)=>{
    const dispatch = useDispatch()
    const Edit=()=>{
    };
    const Delete=()=>{
      dispatch(itemsReducer.actions.DELETE_ITEMS(props.id))
    };
    return(<div className="CardWrappr">
      
      <h1>{props.item}</h1>
      <h1>{props.budget}</h1>
      <div>
      <button>edit</button>
      <button onClick={Delete}>delete</button>
      </div>
    </div>)
    }   ;
        