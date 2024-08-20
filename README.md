## Setup Node Server
To setup a node server create an empty directory and open it in VS Code or any editor and open Terminal and run:

$ npm init

## Install Dependencies
Install some necessary dependencies:

$ npm install express

and

$ npm install agora-access-token

Once you have the following dependencies in your package.json. Then, create a file in the project name server.js and paste the code in it.

Run Server
To run the node server you need to run:

node server.js

Once you get the log in the console Agora token server running on http://localhost:3000 then you're good to go in setting up your node server.

Where and How to deal with tokenUrl?
If your Flutter app is running on virtual or a physical device, you need to copy your IP Address of the internet you're currently connected with and the port number which in our case is 3000.

Your tokenUrl should look something like this for using it with AgoraClient.

"http://XXX.XX.XX.X:3000/get_token?channelName=${YOUR-CHANNEL-NAME}"