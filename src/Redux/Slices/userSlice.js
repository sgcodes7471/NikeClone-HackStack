import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth,db } from '../../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc , getDoc ,doc} from 'firebase/firestore';

const initialState = {
    user:null,
    isLoggedIn:false,
    error:false
}

export const joinus = createAsyncThunk(
    'user/joinus',
    async ({ email, password, name, dob }, { rejectWithValue }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email,password)
        console.log(userCredential)
        const user = userCredential.user
        await setDoc(doc(db,'user',user.uid),{
            name, dob , email
        })
        return {email,name,dob}
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  );
  
  export const signin = createAsyncThunk(
    'user/signin',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        console.log(userCredential)
        const userDoc = await getDoc(doc(db, 'users', user.uid))

        if (userDoc.exists()) {
            const userData = userDoc.data()
            return {  email, name: userData.name, dob: userData.dob }
        } else throw new Error('No User Data')
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  );

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        Logout:(state)=>{
            state.user = null
            state.isLoggedIn = false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(joinus.fulfilled , (state , actions)=>{
            state.user = actions.payload
            state.isLoggedIn=true
            console.log(JSON.stringify(user , null , 2))
        }).addCase(signin.fulfilled , (state,actions)=>{
            state.user=actions.payload
            state.isLoggedIn=true
        }).addCase(signin.rejected , (state , actions)=>{
            state.error = true
        })
    }
    })

export const {Logout} = userSlice.actions

export default userSlice.reducer

