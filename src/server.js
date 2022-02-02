import express from "express"
import path from "path";
import http from "http";

const app = express()
const httpServer = http.createServer(app)
const __dirname = path.resolve();

app.set("view engine", "pug")
app.set("views", __dirname + "/src/views")
app.use("/public",express.static(__dirname + "/src/public"))
app.get("/",(req,res)=> res.render("home"))
app.get("/*",(req,res)=> res.redirect("/"))


const handleListen = () => console.log(`Listening on http://localhost:2000`);
httpServer.listen(2000, handleListen);