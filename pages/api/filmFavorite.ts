import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH' && req.method !== 'DELETE') {
    return res.status(405).end();
  }

  try {
    const { filmId } = req.body;

    if (!filmId || typeof filmId !== 'string') {
      throw new Error(`Invalid filmId`);
    }

    const film = await prisma.movie.findUnique({
      where: {
        id: filmId,
      },
    });

    if (!film) {
      throw new Error(`Movie not found`);
    }

    let favorite;
    if (req.method === 'DELETE') {
      favorite = false;
    }

    if (req.method === 'PATCH') {
      favorite = true;
    }

    const updatedFilm = await prisma.movie.update({
      where: {
        id: filmId,
      },
      data: {
        isFavorite: favorite,
      },
    });

    return res.status(200).json(updatedFilm);
  } catch (error) {
    console.warn(error);
  }
}
