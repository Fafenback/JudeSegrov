import AWS from "aws-sdk";
import DynamodbFactory from "@awspilot/dynamodb";

const dynamo_db_config = () => ({
  endpoint: process.env.IS_OFFLINE
    ? process.env.DB_ENDPOINT_OFFLINE
    : undefined,
  region: process.env.AWS_REGION || process.env.REGION
});

const db = new AWS.DynamoDB(dynamo_db_config);

const DynamoDB = new DynamodbFactory(db);

export const fetch_Dynamo_table = async tableName => {
  const data = await DynamoDB.table(tableName).scan();
  return data;
};
