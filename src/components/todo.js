import { useState } from "react"

function Todo(){
    const [activityarr,setactivityarr]=useState([{id:1,activity:"Go for a walk"}])
    function handledelete(removeid){
        var temparr=activityarr.filter(function(get){
            if(get.id===removeid){
                return false
            }
            else{
                return true
            }
        })
        setactivityarr(temparr)
    }
    const [int,setint]=useState("")
    function handlechange(event){
        setint(event.target.value)
    }
    function handleinput(){
        setactivityarr([...activityarr,{id:activityarr.length+1,activity:int}])
        setint("")
    }






    return(
        <div className="flex justify-center items-center mt-5 gap-3 flex-wrap">
        <div>
            <h1 className="font-medium text-2xl">Manage Activities</h1>
            <input className="border border-black p-1 bg-transparent mt-2" value={int} onChange={handlechange} type="text" placeholder="Next Activity?" />
            <button className="bg-black text-white p-1 border border-black mt-2" onClick={handleinput}>Add</button>
        </div>
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityarr.length===0?<p>You haven't added anything yet</p>:""}
            {
                activityarr.map(function(item,index){
                    return <div className="flex justify-between">
                              <p>{index+1}.{item.activity}</p>
                              <button onClick={()=>{handledelete(item.id)}}>Delete</button>
                           </div>
                })
            }
        </div>
       </div>
    )
}
export default Todo