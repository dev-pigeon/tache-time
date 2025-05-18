const net = require("net");

function findServerPort(startPort = 3000) {
    const MAX_PORT = 64000;
    const invalidPort = "ERROR: Input port must be greater than 1023.";
    const cannotFindPort = "ERROR: Cannot find valid port not in use.";

    if (startPort < 1024) {
        throw new Error(invalidPort);
    }

    for (let port = startPort; port < MAX_PORT; port++) {
        try {
            const server = net.createServer().listen(port);
            server.close();
            return port;
        } catch (err) {
            if (err.code === 'EADDRINUSE') {
                continue;
            } else {
                throw err;
            }
        }
    }

    throw new Error(cannotFindPort);
}

module.exports = {
    findServerPort
};
