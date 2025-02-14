import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketSelectionPage from "./pages/ticketSelectionPage";
import AttendeeDetailsPage from "./pages/attendeeDetailsPage";
import TicketDownloadPage from "./pages/ticketDownloadPage";
import AboutPage from "./pages/aboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketSelectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/attendeeForm" element={<AttendeeDetailsPage />} />
        <Route path="/downloadTicket" element={<TicketDownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
