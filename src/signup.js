import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const navigate=useNavigate()
    const user=props.user
    const setuser=props.setuser
    const [eusername,seteusername]=useState("")
    const [epassword,setepassword]=useState("")
    function username(event){seteusername(event.target.value)}
    function password(event){setepassword(event.target.value)}
    function adduser(){
        setuser([...user,{username:eusername,password:epassword}])
        console.log(user)
        navigate("/")
    }
    return(<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md" >
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p className="">You can signup here :)</p>
            <input className="border border-black px-3 py-2 rounded mt-2 bg-transparent w-52" type="text" value={eusername} onChange={username} placeholder="Username" /><br/>
            <input className="border border-black px-3 py-2 rounded mt-2 bg-transparent w-52" type="text" value={epassword} onChange={password} placeholder="password" /><br/>
            <input className="border border-black px-3 py-2 rounded mt-2 bg-transparent w-52" type="text" placeholder="confirm password" /><br/>
            <button className="bg-[#FCA201] px-4 py-1 rounded mt-2" onClick={adduser}>Sign Up</button>
            <p className="mt-2">Already have an account ? <Link to={"/"} className="underline">Login</Link></p>

        </div>
    </div>)
}
export default Signup