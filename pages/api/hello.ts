// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { Client } = require ('@notionhq/client');

type Data = {
  response: any
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  
  res.status(200).json({ response })
}
