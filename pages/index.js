import Head from "next/head";
import { Layout, ResourceGrid } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Learn Web Dev: Resources</title>
        <meta
          name="description"
          content="  A collection of resources for the Learn Web Dev community."
        />
      </Head>
      <Layout>
        <ResourceGrid />
      </Layout>
    </>
  );
};

export default Home;
