import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma";

export default async function(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { 
      level,
      challengesCompleted,
      currentExperience,
      totalExperience,
      accessToken
    } = req.body;

    if (!level) {
      throw new Error('Level is required');
    }
    if (!challengesCompleted) {
      throw new Error('Challenges Completed is required');
    }
    if (!currentExperience) {
      throw new Error('Current Experience is required');
    }
  
    const session = await prisma.session.findUnique({
      where: { accessToken }
    });
  
    const updatedUser = await prisma.user.update({
      data: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
        totalExperience: Number(totalExperience)
      },
      where: {
        id: session.userId
      }
    });
 
    return res.status(200).send({ updatedUser });    
  } catch (err) {
    console.error(err);

    res.status(500).send('Internal server error');
  }
}