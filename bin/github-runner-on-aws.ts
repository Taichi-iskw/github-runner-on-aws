#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GithubRunnerOnAwsStack } from '../lib/github-runner-on-aws-stack';

const app = new cdk.App();
new GithubRunnerOnAwsStack(app, 'GithubRunnerOnAwsStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

});