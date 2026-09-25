import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header/Header";
import TopHeader from "./Components/Shared/Header/TopHeader";
import Home from "./Page/Home/Home";


const App = () =>{
  return(
    <div className="bg-[#F5F5FA]">
      <TopHeader />
      <Header />
      <div className="lg:px-20 px-4">
        <Home/>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;