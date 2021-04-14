import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from "./_lib/chromium";
import getThumbnailTemplate from "./_lib/thumbTemplate";

const isDev = !process.env.AWS_REGION

export default async function(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { level, totalExperience, challengesCompleted } = req.query;

    if (!level) {
      throw new Error('Level is required');
    }
    if (!totalExperience) {
      throw new Error('Total Experience is required');
    }
    if (!challengesCompleted) {
      throw new Error('Challenges Completed is required');
    }

    const html = getThumbnailTemplate({
      level: String(level), 
      totalExperience: String(totalExperience), 
      challengesCompleted: String(challengesCompleted),
    });

    const file = await getScreenshot(html, isDev);

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000');

    return res.end(file);
  } catch (err) {
    console.error(err);

    res.status(500).send('Internal server error');
  }
}