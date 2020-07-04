import createError from 'http-errors';
import { getEndedAuctions } from '../lib/getEndedAuctions';
import { closeAuction } from '../lib/closeAuction';

async function processAuctions(event, context) {
  try {
    const auctionstoClose = await getEndedAuctions();
    const closePromises = auctionstoClose.map((auction) =>
      closeAuction(auction)
    );
    await Promise.all(closePromises);
    return { closed: closePromises.length };
  } catch (e) {
    console.error(e);
    throw new createError.InternalServerError(e);
  }
}

export const handler = processAuctions;
