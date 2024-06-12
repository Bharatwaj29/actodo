import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate=useNavigate()
    const user=props.user
    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()
    function username(event){seteusername(event.target.value)}
    function password(event){setepassword(event.target.value)}
    function checkUser(){
        console.log(user)
        var userfound = false
        user.forEach(function(item){
           if(item.username === eusername && item.password === epassword){
            console.log("login success")
            userfound=true
            navigate("/landing",{state:{user:eusername}})
           }
    })
if(userfound===false)
{
console.log("login failed")
setruser(false)
}
    }
    const [ruser,setruser]=useState(true)

    return (<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md" >
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?<p className="">I help you to manage your activities after you login :)</p>:<p className="text-red-400">Please signup before you login</p>}
            <input className="border border-black px-3 py-2 w-52 bg-transparent rounded mt-2" value={eusername} onChange={username} type="text" placeholder="Username" /><br />
            <input className="border border-black px-3 py-2 w-52 bg-transparent rounded mt-2" value={epassword} onChange={password} type="text" placeholder="password" /><br />
            <button className="bg-[#8272DA] px-4 py-1 rounded mt-2" onClick={checkUser}>Login</button>
            <p className="mt-2">Don't have an account ? <Link to={"/signup"} className="underline">Sign Up</Link></p>

        </div>
    </div>)
}
export default Login