import {defineEventHandler} from "h3"
import project from "~/server/model/project"

export default defineEventHandler(async (event) =>
{
    console.log("GET /api/projects")

    try
    {
        return await project.find()
    }
    catch (err)
    {
        console.dir(err)
        event.res.statusCode = 500

        return {
            code: "ERROR",
            message: "Something went wrong.",
        }
    }
});