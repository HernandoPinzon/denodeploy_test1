import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const tasks = [];

const taskRoutes = new Router()
  .get("/", (ctx) => {
    ctx.response.body = `Welcome to this API`;
  })
  .get("tasks", (ctx) => {
    ctx.response.body = tasks;
  })
  .post("/tasks", (ctx) => {
    ctx.response.body = "Creating task";
  });

app.use(taskRoutes.routes());

await app.listen({ port: 8000 });
