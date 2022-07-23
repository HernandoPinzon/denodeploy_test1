import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const tasks = [];

const posts = new Router()
  .get("/", (ctx) => {
    ctx.response.body = `Welcome to this API`;
  })
  .get("tasks", (ctx) => {
    ctx.response.body = tasks;
  })
  .post("/tasks", (ctx) => {
    ctx.response.body = 'Creating task'
  });

const forums = new Router()
  .use("/forums/:forumId/posts", posts.routes(), posts.allowedMethods());

await new Application()
  .use(forums.routes())
  .listen({ port: 8000 });
