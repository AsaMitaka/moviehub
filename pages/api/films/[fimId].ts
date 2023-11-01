import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(400).end();
  }

  try {
    const { filmId } = req.query;

    if (!filmId || typeof filmId !== 'string') {
      throw new Error('Invalid seriesId');
    }

    const movie = await prisma.movie.findUnique({
      where: {
        id: filmId,
      },
    });

    return res.status(200).json(movie);
  } catch (error) {
    console.warn(error);
    return res.status(405).end();
  }
}
