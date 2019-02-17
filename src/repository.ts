import { IAddContent } from './interfaces';
import * as dynamoDbLib from './dynamodb-lib';
import uuidv1 from 'uuid/v1';
const TABLE_NAME = 'Conteudo_Microservice';

export function getAll(): any {
  const params = {
    TableName: TABLE_NAME
  }
  const result = dynamoDbLib.call("scan", params);
  return result.then((data: any) => {
    return data;
  }).catch((err: Error) => {
    console.error('erro DB ', err);
    return null;
  });
}

export function addOne(data: IAddContent): any {
  if (!data || data.content.trim().length <= 0) {
    throw new Error('invalid content');
  }
  const params = {
    TableName: TABLE_NAME,
    Item: {
      "uuid": uuidv1(),
      "content": data.content
    }
  }
  const result = dynamoDbLib.call("put", params);
  return result.then((data: any) => {
    return data;
  }).catch((err: Error) => {
    console.error('erro DB ', err);
    return null;
  });
}

export function getOne(uuid: string): any {
  if (!uuid || uuid.trim().length <= 0) {
    throw new Error('invalid content');
  }
  const params = {
    TableName: TABLE_NAME,
    Key: {
      "uuid": uuid,
    }
  }

  const result = dynamoDbLib.call("get", params);
  return result.then((data: any) => {
    return data;
  }).catch((err: Error) => {
    console.error('erro DB ', err);
    return null;
  });
}