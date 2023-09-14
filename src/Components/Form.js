const Form=({
    item,
    setItem,
    budget,
    setBudget,
    editMode,
    setEditMode,
    selectedId,
    setSelectedId,
    setMessageOn,
    Submit,
    Reset,
  })=>{
    return(
<form onSubmit={Submit}>
       <div id="item">
        <div>
        <h2>지출항목</h2>
        <input required value={item} type='text' placeholder='예)렌트비' onChange={(e)=>{setItem(e.target.value)}}/>
        </div>

       <div>
       <h2>비용</h2>
        <input value={budget} type='number' onChange={(e)=>{setBudget(e.target.value)}}/>
       </div>
       </div>
      
     
      <button id='submit'>
      {editMode?<p>수정</p>:<p>제출</p>}
      <span id='send' class="material-symbols-outlined">send</span>
      </button>
      </form>)
}
export default Form;