const MessageBox=(props)=>{
    if(props.messageOn === "생성"){
      return <h1 id='messageBox'>아이템이 생성되었습니다.</h1>
    }
    if(props.messageOn === "수정"){
      return <h1 id='messageBox'>아이템이 수정되었습니다.</h1>
    }
    if(props.messageOn === "삭제"){
      return <h1 id='deleteBox'>아이템이 삭제되었습니다.</h1>
    }
  }
  export default MessageBox;