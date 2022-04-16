import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import Poems from "~/components/Poems";

import { getAllPoets, getRandomPoem, Poem } from "~/models/poems.server";

type LoaderData = {
  poem: Awaited<ReturnType<typeof getRandomPoem>>;
  poets: Awaited<ReturnType<typeof getAllPoets>>;
};

export const loader = async () => {
  return json<LoaderData>({
    poem: (await getRandomPoem()) as Poem,
    poets: (await getAllPoets()) as string[],
  });
};

export default function Index() {
  const { poem, poets } = useLoaderData() as { poem: Poem; poets: string[] };
  return (
    <Layout>
      <Poems poem={poem} />
    </Layout>
  );
}
