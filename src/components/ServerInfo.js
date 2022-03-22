import React, { useEffect, useState } from 'react';
import axios  from 'axios'

const endpoint = "http://gamersgaming.xyz"

const ServerInfo = () => {
    const [info, setInfo] = useState();

    const getServerInfo = async () => {
        axios.get(`${endpoint}/api/server`)
        .then(res => {
            console.log("hw2")
            setInfo(res)
        });
    }

    useEffect(() => {
        getServerInfo()
        console.log(info)
    })

    console.log(info)

    return(
        `${info}`
    );
    
}

export default ServerInfo;