import Head from "next/head";
import { Layout, ResourceGrid } from "../components";
import { Provider } from "react-redux";
import { store } from "../store";
const Home = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default Home;
