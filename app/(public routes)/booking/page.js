import BookingContainer from "@/components/booking/BookingContainer";

export const metadata = {
  title: "Book Appointment | Dr. Victor Azmy",
  description: "Schedule your dental appointment بسهولة وبسرعة",
};

const page = () => {
  return (
    <main className="min-h-screen">
      <BookingContainer />
    </main>
  );
};

export default page;
