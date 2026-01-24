import { useEffect, useState } from "react";


function Body (){
    const [profile, setProfile] = useState([])

   async function generateProfile(){
        const response =await fetch ("https://api.github.com/users?per_page=24")
        const data= await response.json(). // convert in json format tt

        setProfile(data)
    }

    useEffect(()=>{
        generateProfile();
    },[])


    return(
        <>  
        <div className="profiles">
            {
                profile.map((value)=>{
                    return (<div key = {value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="blank">profile</a>

                        </div>
                    )
                })
            }
        </div>
        
        
        </>
    )
}

export default Body;