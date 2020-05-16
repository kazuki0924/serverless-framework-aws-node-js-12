import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
import createError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function placeBid(event, context) {
	const { id } = event.pathParameters;

	const { amount } = event.body;

	const params = {
		TableName: process.env.AUCTIONS_TABLE_NAME,
		Key: { id },
		UpdateExpression: 'set highestBid.amount = :amount',
		ExpressionAttributeValues: {
			':amount': amount
		}
	};

	return {
		statusCode: 200,
		body: JSON.stringify(auction)
	};
}

export const handler = commonMiddleware(placeBid);
