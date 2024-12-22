import { Event } from "@/types/member";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300 flex flex-col">
      <CardHeader className="text-white bg-gray-800 p-0 m-6">
        <div className="text-xl font-semibold mb-2">{event.event_name}</div>
        <div className="text-base text-gray-400">{event.event_date}</div>
        <div className="text-base text-gray-400">{event.location}</div>
      </CardHeader>
      <CardContent className="grow min-h-64 p-0 relative">
        <img
          src={event.thumbnail ? `https://${event.thumbnail}` : "/LCS.png"}
          alt={event.event_name}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-50 rounded-b-lg"
        />
        <div className="absolute bottom-3 left-6">
          {event.information_link ? (
            <Link
              to={event.information_link}
              className="inline-flex justify-center items-center py-3 px-6 mr-3 text-base font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-500"
            >
              Info
            </Link>
          ) : null}
          {event.registration_link ? (
            <Link
              to={event.registration_link}
              className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700"
            >
              Register
            </Link>
          ) : null}
        </div>
      </CardContent>
    </div>
  );
};

export default EventCard;
