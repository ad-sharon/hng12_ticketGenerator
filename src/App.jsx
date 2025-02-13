import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketSelectionPage from "./pages/ticketSelectionPage";
import AttendeeDetailsPage from "./pages/attendeeDetailsPage";
import TicketDownloadPage from "./pages/ticketDownloadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketSelectionPage />} />
        <Route path="/attendeeForm" element={<AttendeeDetailsPage />} />
        <Route path="/downloadTicket" element={<TicketDownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
