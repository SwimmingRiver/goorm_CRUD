import './index.css';

export const Card=(props)=>{
    const Edit=()=>{};
    const Delete=()=>{};
    return(<div className="CardWrappr">
      
      <h1>{props.item}</h1>
      <h1>{props.budget}</h1>
      <div>
      <button>edit</button>
      <button>delete</button>
      </div>
    </div>)
    }   ;
        