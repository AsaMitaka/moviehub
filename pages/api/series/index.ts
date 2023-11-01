import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { userId } = req.query;

    if (userId && typeof userId === 'string') {
      const films = await prisma.series.findMany({
        where: {
          userId,
        },
      });

      return res.status(200).json(films);
    }
  } catch (error) {
    console.warn(error);
    return res.status(400).end();
  }
}
