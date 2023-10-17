import BestSellers from "./components/BestSellers";
import Header from "./components/Header";

const Home = () => {
  return (
    <main className=" bg-mainBg">
      <Header />
      <BestSellers />
    </main>
  );
};

export default Home;
