import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
        <Route path="/favorites" element={<Favourites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
