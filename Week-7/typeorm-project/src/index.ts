import "reflect-metadata";
import {createConnection} from "typeorm";
import { bootstrap, find } from "./bootstrap";
import {User, UserRole} from "./entity/User";

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Simber";
    // user.lastName = "Paw";
    // user.age = 20;
    // user.roles=[UserRole.GHOST];
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.findOne(User,{id:'7c608425-b1ba-4902-a1d3-db9f17664570'});
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

    await bootstrap().catch((err) => { console.log(err); });
    await find().catch((err) => console.log(err));

}).catch(error => console.log(error));
