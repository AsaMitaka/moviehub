import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(400).end();
  }

  try {
    const { seriesId } = req.query;

    if (!seriesId || typeof seriesId !== 'string') {
      throw new Error('Invalid seriesId');
    }

    const serie = await prisma.series.findUnique({
      where: {
        id: seriesId,
      },
    });

    return res.status(200).json(serie);
  } catch (error) {
    console.warn(error);
    return res.status(405).end();
  }
}
