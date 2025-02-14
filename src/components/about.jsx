const About = () => {
  return (
    <section>
      <p className="w-[70%] mx-auto rounded-xl font-main p-5  text-[var(--text-color-light)]  border border-[var(--color-light-blue)]">
        Event Ticket Booking UI – Open Source Practice Project
        <br />
        <br />
        🎟️ Overview
        <br />
        This is a beginner-friendly yet practical Event Ticket Booking UI
        designed for developers to clone, explore, and build upon. The design
        focuses on a seamless, login-free ticket reservation flow, allowing
        users to book event tickets quickly and efficiently.
        <br />
        <br />
        The project consists of a three-step ticket booking flow, and developers
        can extend it further by integrating payment solutions, user
        authentication (optional), and ticket validation systems.
        <br />
        <br />
        Flow & Features
        <br />
        1️⃣ Ticket Selection
        <br />
        • Users can browse available tickets (Free & Paid).
        <br />
        • Ticket options are displayed in a list or card view.
        <br />
        • For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
        details.
        <br />
        • For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
        payment modal.
        <br />
        <br />
        2️⃣ Attendee Details Form
        <br />
        • Users input their Name, Email, and optional Phone Number.
        <br />
        • Profile picture upload option with preview functionality.
        <br />
        • Ticket summary is visible to ensure users review their details before
        submission.
        <br />
        <br />
        3️⃣ Payment or Success Page
        <br />
        • If the ticket is free, the user is taken directly to the Ticket
        Confirmation Page.
        <br />
        • If the ticket is paid, developers can integrate Stripe, Paystack, or
        Flutterwave to process payments before showing the confirmation page.
        <br />
        • Upon successful booking, users should receive: • A visual ticket
        preview with a unique QR Code.
        <br />
        • An option to download the ticket as PDF or save it to their device.
        <br />
        • An email confirmation containing ticket details.
        <br />
        <br />
        🚀 How to Build This
        <br />
        This UI can be implemented using: 📌 Frontend (Next.js or React)
        <br />
        Component Breakdown: • TicketCard.tsx → Displays ticket details
        <br />
        AttendeeForm.tsx → Captures user details
        <br />
        PaymentModal.tsx → Handles payment processing
        <br />
        SuccessScreen.tsx → Shows the final ticket preview
        <br />
        State Management: React’s Context API, Zustand, or Redux (if needed).
        <br />
        File Handling: Users should be able to upload images (profile picture
        for ticket) using Firebase Storage, Cloudinary, or local preview with
        URL.createObjectURL().
        <br />
        <br />
        📌 Backend (Optional)
        <br />
        If persistence is required, a backend can be built using:
        <br />
        Node.js & Express or Firebase Functions
        <br />
        Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket
        records
        <br />
        <br />
        📌 Payment Integration
        <br />
        For paid events, developers should integrate:
        <br />
        Stripe Checkout (for international transactions)
        <br />
        Paystack or Flutterwave (for African users)
        <br />
        <br />
        What You’ll Learn 🧑‍💻
        <br /> File handling & validation (profile picture uploads).
        <br /> Dynamic UI updates based on ticket selection.
        <br />
        Persisting bookings using local state or a backend.
        <br /> Integrating payment gateways for ticket purchases.
        <br /> Generating & validating QR Codes for event check-in (Advanced).
        <br /> Need Help? Reach Out! 💬
      </p>
    </section>
  );
};

export default About;
