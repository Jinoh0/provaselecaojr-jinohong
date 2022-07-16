import { Route, Routes } from "react-router-dom";
import { ProfileList } from "./Pages/ProfileList/index";
import { ProfileDetails } from "./Pages/ProfileDetails/index";
import style from "./style.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/:profileId" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
}

export default App;
