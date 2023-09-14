
const ItemList=(props)=>{
    return(
        <div id='list'>
        {props.list.map((i,index)=><props.Card 
        key={index}
        id={i.id}
        item={i.item}
        budget={i.budget}
        setItem={props.setItem}
        setBudget={props.setBudget}
        setEditMode={props.setEditMode}
        setSelectedId={props.setSelectedId}
        setMessageOn={props.setMessageOn}
        itemsReducer={props.itemsReducer}
        />)}
      </div>

    )
}
export default ItemList;