import { NextApiRequest, NextApiResponse } from 'next';

/**
 * ! Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 */
export default (req: NextApiRequest, res: NextApiResponse): void => {
  return res.status(200).json({ name: 'John Doe' });
};
