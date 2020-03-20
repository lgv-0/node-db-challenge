let DB = require("knex")(require("../knexfile").development);

function GetResources(ProjectID)
{
    return DB
    .from("projects as Project")
    .join("resources_projects_join as RPJjoiner", "RPJjoiner.project", "=", "Project.id")
    .join("resources as Resource", "Resource.id", "=", "RPJjoiner.resource")
    .where("Project.id", ProjectID)
    .select("Resource.id", "Resource.name", "Resource.description");
}

function GetTasks(ProjectID)
{
    return DB
    .from("projects as Project")
    .join("tasks_projects_join as TPJjoiner", "TPJjoiner.task", "=", "Project.id")
    .join("tasks as Task", "Task.id", "=", "TPJjoiner.task")
    .where("Project.id", ProjectID)
    .select("Task.id", "Task.description", "Task.notes", "Task.completed");
}

function GetProject(id)
{
    return DB("projects").select("*").where("id", id).first();
}

function GetProjects()
{
    return DB("projects").select("*");
}

function GetAllResources()
{
    return DB("resources").select("*");
}

function GetAllTasks()
{
    return DB
    .from("projects as Project")
    .join("tasks_projects_join as TPJjoiner", "TPJjoiner.task", "=", "Task.id")
    .join("tasks as Task", "Task.id", "=", "TPJjoiner.task")
    .select(
        {
            TaskID:"Task.id", TaskDescription:"Task.description",
            TaskNotes:"Task.notes", TaskCompleted:"Task.completed",
            ProjectName:"Project.name", ProjectDescription:"Project.description"
        });
}

function AddResource(resource)
{
    return DB("resources").insert(resource);
}

function AddProject(project)
{
    return DB("projects").insert(project);
}

function AddTask(task)
{
    return DB("tasks").insert(task);
}

module.exports =
    {
        GetResources,
        GetTasks,
        GetProject,
        GetProjects,
        GetResources,
        GetAllResources,
        GetAllTasks,
        AddResource,
        AddProject,
        AddTask
    };