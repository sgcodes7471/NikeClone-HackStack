import './drop.css'
const DropArrow=({open})=>{
    return(
        <span style={{position:'relative' , display:'flex' , alignItems:'center',justifyContent:'center'}}>
            <div className="drop-arrow"  id='arrow-1' style={{transform:open?'rotateZ(-45deg)':'rotateZ(45deg)'}}></div>
            <div className="drop-arrow" id='arrow-2' style={{transform:open?'rotateZ(45deg)':'rotateZ(-45deg)'}}></div>
        </span>
    )
}
export default DropArrow