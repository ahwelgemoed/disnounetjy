import LastPoem from "~/components/LastPoem";
import Layout from "~/components/Layout";
import LayoutItem from "~/components/LayoutItem";

const LasteGedig = () => {
  return (
    <Layout>
      <h3>Die Lasste Gedig</h3>
      <LayoutItem>
        <LastPoem />
      </LayoutItem>
    </Layout>
  );
};

export default LasteGedig;
