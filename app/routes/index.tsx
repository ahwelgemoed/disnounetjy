import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import Poems from "~/components/Poems";

import { getAllPoets, getRandomPoem, Poem } from "~/models/poems.server";

type LoaderData = {
  poem: Awaited<ReturnType<typeof getRandomPoem>>;
};

export const loader = async () => {
  return json<LoaderData>({
    poem: (await getRandomPoem()) as Poem,
  });
};

export default function Index() {
  const { poem } = useLoaderData() as { poem: Poem };
  return (
    <Layout>
      <Poems poem={poem} />
    </Layout>
  );
}
