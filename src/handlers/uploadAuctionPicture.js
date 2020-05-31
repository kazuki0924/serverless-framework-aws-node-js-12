/** @format */
import { getAuctionById } from './getAuction';

export async function uploadAuctionPicture(event) {
	const { id } = event.pathParameters;
	const auction = await getAuctionById(id);
	const base64 = event.body.replace(/^data:image\/\w+;base64,/, '');
	const buffer = Buffer.from(base64, 'base64');
	return {
		statusCode: 200,
		body: JSON.stringify({}),
	};
}

export const handler = uploadAuctionPicture;
