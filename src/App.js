import "./Styles/app.scss";

import { Footer, Navbar } from "./Components";
import { Community, Home } from "./Pages";
import About from "./Pages/About";
import AlumniList from "./Pages/AlumniList";
import UpcomingEvent from "./Pages/UpcomingEvent";
import BigText from "./Pages/BigText";
import OurWorks from "./Pages/OurWorks";
import Membership from "./Pages/Membership";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Community />
      <About />
      <AlumniList />
      <UpcomingEvent />
      <BigText />
      <OurWorks />
      <Membership />
      <Footer />
    </div>
  );
}

export default App;
