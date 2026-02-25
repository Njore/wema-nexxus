import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/services" element={<Services />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:slug" element={<TeamMember />} />
            </Routes>
        </BrowserRouter>
    );
}