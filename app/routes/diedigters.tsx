import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import LayoutItem from "~/components/LayoutItem";
import Poets from "~/components/Poets";

import { getAllPoets, getRandomPoem, Poem } from "~/models/poems.server";

type LoaderData = {
  poets: Awaited<ReturnType<typeof getAllPoets>>;
};

export const loader = async () => {
  return json<LoaderData>({
    poets: (await getAllPoets()) as string[],
  });
};

const LasteGedig = () => {
  const { poets } = useLoaderData() as { poem: Poem; poets: string[] };
  return (
    <Layout>
      <h2>Die Digters</h2>
      <LayoutItem>
        <Poets poets={poets} />
      </LayoutItem>
    </Layout>
  );
};

export default LasteGedig;
