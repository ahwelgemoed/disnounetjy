import { useParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllPoemsByPoet, Poem } from "~/models/poems.server";
import Layout from "~/components/Layout";
import LayoutItem from "~/components/LayoutItem";
import PoemComponent from "~/components/Poem";

type LoaderData = {
  poems: Awaited<ReturnType<typeof getAllPoemsByPoet>>;
};

export const loader = async ({ params }: { params: { woorde: string } }) => {
  console.log("Loader", params);

  return json<LoaderData>({
    poems: (await getAllPoemsByPoet(params.woorde)) as Poem[],
  });
};

export default function JouWoorde() {
  const { poems } = useLoaderData() as { poems: Poem[] };
  console.log("poems", poems);
  const params = useParams();
  console.log("params", params.woorde);
  return (
    <Layout>
      <h3>Joune</h3>
      <LayoutItem>
        {poems.map((poem) => {
          return (
            <div className="indevidual_poem">
              <PoemComponent poem={poem} />
            </div>
          );
        })}
      </LayoutItem>
    </Layout>
  );
}
