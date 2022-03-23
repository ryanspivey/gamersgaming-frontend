import React, { useEffect, useState } from 'react';
import axios  from 'axios'

const endpoint = "gamersgaming.xyz:3000"

const serverInfo = {
    "ip": "",
    "port": 0,
    "debug": {
        "ping": false,
        "query": false,
        "srv": false,
        "querymismatch": false,
        "ipinsrv": false,
        "cnameinsrv": false,
        "animatedmotd": false,
        "cachetime": 0,
        "apiversion": 2
    },
    "motd": {
        "raw": [
            "A Minecraft Server§r"
        ],
        "clean": [
            "A Minecraft Server"
        ],
        "html": [
            "A Minecraft Server"
        ]
    },
    "players": {
        "online": 0,
        "max": 0,
        "list": [
            ""
        ],
        "uuid": {
            "": ""
        }
    },
    "version": "",
    "online": false,
    "protocol": 0,
    "hostname": ""
}


const ServerInfo = () => {
    const [info, setInfo] = useState(serverInfo);


    useEffect(() => {     
        const getServerInfo = async () => {  
          await axios.get(`${endpoint}/api/server`)  
          .then(res => {  
            setInfo(res.data)  
          })  
          .catch(err => {  
            console.log(err)  
          });  
        }  
        getServerInfo()  
      }, [])


    
    return(

        <div>
            <h1>{info.hostname}</h1>
            <h1>Online: {info.online ? "Yes" : "No"}</h1>
            <br></br>
            <h1>Players Online: </h1>
            {info.players.list.map(player => {
                return <h2>{player}</h2>
                })
            }
        </div>
        
    );
    
}

export default ServerInfo;