import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <Router>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Wrapper>
              <Header />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Wrapper>

            <Footer />
          </>
        )}
      </Router>
    </>
  );
};

export default App;
