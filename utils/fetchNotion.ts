const { Client } = require ('@notionhq/client');

const { NOTION_API_KEY, NOTION_DATABASE_ID } = process.env;

const notion = new Client({
  auth: NOTION_API_KEY,
});

export default async function fetchNotion() {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
  });
  return response.results;
}

/* export function getPost() {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        text: {
          equals: slug,
        }
      }
    }
  })
} */