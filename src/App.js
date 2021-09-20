import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Presentation from "./components/Presentation";
import StickyFooter from "./components/StickyFooter";
import Layout from "./components/Layout";



function App() {
  return (
    <Layout>
      <Banner />
      <Explanation />
      <Presentation />
      <StickyFooter />
    </Layout>
  );
}

export default App;
