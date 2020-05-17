import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getAuctions(event, context) {
	const { status } = event.queryStringParameters;
	let auctions;

	const params = {
		TableName: process.env.AUCTIONS_TABLE_NAME,
		IndexName: 'statusAndEndDate'
	};

	try {
		const result = await dynamodb.query(params).promise();

		auctions = result.Items;
	} catch (error) {
		console.error(error);
		throw new createError.InternalServerError(error);
	}

	return {
		statusCode: 200,
		body: JSON.stringify(auctions)
	};
}

export const handler = commonMiddleware(getAuctions);
