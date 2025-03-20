import {create} from "zustand"

const useStore = create((set)=>({
    user:localStorage.getItem("user"),
    color:false,

    loginUser:(token)=>{
        localStorage.setItem("user",token)
        set({user:token})
    },
    logOutUser : ()=>{
        localStorage.removeItem("user")
        set({user:null})
    },
    changeColor:()=>set((state)=>({color:!state.color}))
}))

export default useStore