import express from "express";
import bodyParser from "body-parser";
import { getAll, addOne, getOne } from './repository';

const server = express();
server.use(bodyParser.json());

server.get("/", (_, res) => {
  getAll().then((X: any) => {
    const dataObject = {
      "status": "ok",
      "data": X.Items
    }
    res.send(dataObject);
  }).catch((error: Error) => {
    console.log('ERROR', error)
    res.status(500).send({ "status": "nok" });
  });
});

server.post("/", (_, res) => {
  addOne(_.body).then((X: any) => {
    const dataObject = {
      "status": "ok",
      "data": X.Items
    }
    res.send(dataObject);
  }).catch((error: Error) => {
    console.log('ERROR POST', error)
    res.status(500).send({ "status": "nok" });
  });
});

server.get("/:uuid", (_, res) => {
  getOne(_.params.uuid).then((X: any) => {
    const dataObject = {
      "status": "ok",
      "data": X.Item
    }
    res.send(dataObject);
  }).catch((error: Error) => {
    console.log('ERROR GET', error)
    res.status(500).send({ "status": "nok" });
  });
});

export default server;
