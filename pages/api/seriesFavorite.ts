import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH' && req.method !== 'DELETE') {
    return res.status(405).end();
  }

  try {
    const { seriesId } = req.body;

    if (!seriesId || typeof seriesId !== 'string') {
      throw new Error(`Invalid filmId`);
    }

    const film = await prisma.series.findUnique({
      where: {
        id: seriesId,
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

    const updatedSerie = await prisma.series.update({
      where: {
        id: seriesId,
      },
      data: {
        isFavorite: favorite,
      },
    });

    return res.status(200).json(updatedSerie);
  } catch (error) {
    console.warn(error);
  }
}
