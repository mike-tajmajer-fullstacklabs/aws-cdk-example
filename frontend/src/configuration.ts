import { ApiStack, AuthStack, DataStack } from '../../serverless/outputs.json';

const awsRegion = 'eu-east-1';
const spacesUrl = ApiStack.SpacesApiUrl + 'spaces'

export const configuration = {
  ApiStack,
  AuthStack,
  awsRegion,
  DataStack,
  spacesUrl,
};