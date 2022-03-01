# webpack-work-with-a-backend-server
The purpose of this repo is to demonstrate how to get webpack to work with a backend server (i.e. node-express).  
The index.html template is consumed by the backend server. Webpack's role here is to bundle js assets and then inject it back to the index.html; all contents are served from the backend server (kinda like server-side rendering).  

Node-express server is running at port 8000 while webpack dev server is running at port 3000. Webpack hot reload is enabled and proxy is configured to forward all traffics from port 3000 to port 8000. Therefore, http://localhost:3000 can show the same contents as http://localhost:8000. To get started, start both node-express server and webpack dev server.

## scripts
```bash
# start node-express server
node server
```

```bash
# start webpack dev server:
npm run dev
```
