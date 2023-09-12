import './index.css';

export const Card=(props)=>{
    return(<div className="CardWrappr">
      <h1>{props.item}</h1>
      <h1>{props.budget}</h1>
    </div>)
    }