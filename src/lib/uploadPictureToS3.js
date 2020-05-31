/** @format */

import { Lambda } from 'aws-sdk';

import AWS from 'aws-sdk';

const s3 = new AWS.S3({});

export async function uploadPictureToS3(key, body) {
	await s3.upload({}).promise();
}
