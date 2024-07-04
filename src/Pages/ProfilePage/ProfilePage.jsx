import { useDispatch, useSelector } from "react-redux"
import { Logout } from "../../Redux/Slices/userSlice.js"

const Profile = ()=>{
    const user = useSelector((state)=>state.UserSlice)
    const dispatch = useDispatch()
    console.log(user)
   const  handleLogout=()=>{
        dispatch(Logout())
    }

    return(
        <div style={{display:'flex' , flexDirection:"column",alignItems:'center'}}>
            <div style={{fontSize:'1.5rem'}}>Profile</div>
            {user.isLoggedIn?
            <div style={{fontSize:'1.2rem'}}>
                <div>Name:{user.user.name}</div>
                <div>Registered Email:{user.user.email}</div>
                <div>DOB:{user.user.dob}</div>
                <div style={{display:"flex",justifyContent:'center'}}><button style={{backgroundColor:'red',color:'white',border:'none',borderRadius:'10px',width:'100px',padding:'10px'}} onClick={handleLogout}>LogOut</button></div>
            </div>:<div>First Make a Account or login to Existing Account</div>}
        </div>
    )
}
export default Profile