import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from "./_lib/chromium";
import getThumbnailTemplate from "./_lib/thumbTemplate";

const isDev = !process.env.AWS_REGION

export default async function(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { level, currentExperience, challengesCompleted } = req.query;
    console.log(req)

    if (!level) {
      throw new Error('Level is required');
    }
    if (!currentExperience) {
      throw new Error('Current Experience is required');
    }
    if (!challengesCompleted) {
      throw new Error('Challenges Completed is required');
    }

    const html = getThumbnailTemplate({
      level: String(level), 
      currentExperience: String(currentExperience), 
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