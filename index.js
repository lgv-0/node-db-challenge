const express = require("express");
const server = express();

const DB = require("./data/DB");

server.use(express.json());

server.get("/", (req, res)=>
{
    res.status(200).send("ok");
});

server.get("/projects/", (req, res)=>
{
    DB.GetProjects().then((response)=>
    {
        res.status(200).json(response);
    }).catch((error)=>{ res.status(500).send("error"); });
});

server.post("/projects/", (req, res)=>
{
    DB.AddProject(req.body).then((response)=>
    {
        res.status(200).json(response);
    }).catch((error)=>{ res.status(500).send("error"); });
});

server.get("/projects/:id", (req, res)=>
{
    DB.GetProject(req.params.id).then((response)=>
    {
        let ProjectData =
        {
            ...response,
            resources:[],
            tasks:[]
        };

        DB.GetResources(ProjectData.id).then((response)=>
        {
            ProjectData.resources = response;
            DB.GetTasks(ProjectData.id).then((response)=>
            {
                ProjectData.tasks = response;
                res.status(200).json(ProjectData);
            }).catch((error)=> { res.status(500).send("error"); });;
        }).catch((error)=> { res.status(500).send("error"); });
    }).catch((error)=>{ res.status(500).send("error"); });
});

server.get("/resources", (req, res)=>
{
    DB.GetAllResources().then((response)=>
    {
        res.status(200).json(response);
    }).catch((error)=>{ console.log(error); res.status(500).send("error"); });
});

server.post("/resources", (req, res)=>
{
    DB.AddResource(req.body).then((response)=>
    {
        res.status(200).json(response);
    }).catch((error)=>{ res.status(500).send("error"); });
});

server.get("/tasks", (req, res)=>
{
    DB.GetAllTasks().then((response)=>
    {
        res.status(200).json(response);
    }).catch((error)=>{ res.status(500).send("error"); });
});

server.post("/tasks", (req, res)=>
{
    DB.AddTask(req.body).then((response)=>
    {
        DB.InsertTaskJoin(response[0], req.body.projectid).then((response)=>
        {
            res.status(200).json(response);
        }).catch(()=>{ res.status(500).send("error"); });
    }).catch(()=>{ res.status(500).send("error"); });
});

server.listen(5000);