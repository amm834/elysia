import {Elysia, t} from "elysia";
import {getAllUsers} from "./user.handlers";

const app = new Elysia();

app
    .group("/api", () => app
        .get("/", () => "Hello World!")
        .get("/users", getAllUsers)
        .post("/users", ({body}) => {
                return {
                    name: body.name,
                    age: body.age
                }
            }
            , {
                body: t.Object({
                    name: t.String(),
                    age: t.Number()
                }),
                response: t.Object({
                    name: t.String(),
                    age: t.Number()
                }),
            })
    )


app.listen(8000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
