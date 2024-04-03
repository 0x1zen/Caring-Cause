import { Routes,Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ContactUsPage from "./pages/ContactUsPage";
const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/about-us" element={<AboutUsPage/>}></Route>
    <Route path="/how-it-works" element={<HowItWorksPage></HowItWorksPage>}></Route>
    <Route path="/contact-us" element={<ContactUsPage></ContactUsPage>}></Route>
   </Routes>
  )
}

export default AppRoutes;