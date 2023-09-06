import publishedPoems from "./publishedPoems.json";
import publishedPoets from "./publishedPoets.json";
import { sanitizePoet } from "~/helpers/utlis";

export type Poem = {
  id: string;
  title: string;
  bodyText: string;
  date: string;
  handle: string;
};

export async function getAllPoems(): Promise<Array<Poem>> {
  return publishedPoems;
}
export async function getRandomPoem(): Promise<Poem> {
  const poem =
    publishedPoems[Math.floor(Math.random() * publishedPoems.length)];

  const newPoem = {
    ...poem,
  };

  return newPoem;
}

export async function getAllPoets(): Promise<Array<string>> {
  return publishedPoets;
}

export async function getAllPoemsByPoet(handle: string): Promise<Array<Poem>> {
  return publishedPoems.filter((poem) => sanitizePoet(poem.handle) === handle);
}
