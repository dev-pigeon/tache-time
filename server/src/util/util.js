const express = require("express")
const app = express()

function findServerPort(port) {
    const cannotFindPort = "ERROR: Cannot find valid port not in use."
    const invalidPort = "ERROR: Input port must be greater than 1023.";
    console.log(port);
    if(port < 1023) {
        throw new Error(invalidPort);
    }

    while(port < 64000) {
        try {
           const server =  app.listen(port, () => {
                console.log("port found")
                server.close();
            })
        
            return port;
        } catch(error) {
            ++port;
            continue
        }   
    }
    
    throw new error(cannotFindPort);
}

module.exports = {
    findServerPort
}