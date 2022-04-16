import path from "path";
import fs from "fs";
import { marked } from "marked";
import publishedPoems from "./publishedPoems.json";
import publishedPoets from "./publishedPoets.json";

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

  const parsedMD = marked(poem.bodyText);
  const newPoem = {
    ...poem,
  };

  return newPoem;
}

export async function getAllPoets(): Promise<Array<string>> {
  return publishedPoets;
}
