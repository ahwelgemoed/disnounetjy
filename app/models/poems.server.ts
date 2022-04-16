import path from "path";
import fs from "fs";
import { marked } from "marked";

export type Poem = {
  id: string;
  title: string;
  bodyText: string;
  date: string;
  handle: string;
};
const ALL_PUBLISHED_POEMS = path.join(
  process.cwd(),
  "app/models/publishedPoems.json"
);
const ALL_PUBLISHED_POETS = path.join(
  process.cwd(),
  "app/models/publishedPoets.json"
);

export async function getAllPoems(): Promise<Array<Poem>> {
  const rawData = fs.readFileSync(ALL_PUBLISHED_POEMS);
  const data: Poem[] = JSON.parse(rawData as any); // TODO See what we can fix here?
  return [...data];
}
export async function getRandomPoem(): Promise<Poem> {
  const rawData = fs.readFileSync(ALL_PUBLISHED_POEMS);
  const data: Poem[] = JSON.parse(rawData as any); // TODO See what we can fix here?
  const poem = data[Math.floor(Math.random() * data.length)];

  const parsedMD = marked(poem.bodyText);
  const newPoem = {
    ...poem,
  };

  return newPoem;
}

export async function getAllPoets(): Promise<Array<string>> {
  const rawData = fs.readFileSync(ALL_PUBLISHED_POETS);
  const data: string[] = JSON.parse(rawData as any); // TODO See what we can fix here?
  return data;
}
