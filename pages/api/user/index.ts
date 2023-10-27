import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(400).end();
  }

  try {
    const { body } = req.body;
  } catch (error) {
    console.warn(error);
    return res.status(405).end();
  }
}
