import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { userId } = req.query;

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid userId');
    }

    const user = await prisma.user.findOne({
      where: {
        id: userId,
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.warn(error);
  }
}
