import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import { Executive } from "@/types/member";
import { User } from "lucide-react";
import { motion } from "framer-motion";

interface ExecutiveCardProps {
  executive: Executive;
  onClick: () => void;
}

export function ExecutiveMemberProfileCard({ executive, onClick }: ExecutiveCardProps) {
  return (
    <motion.div
      className="cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      onClick={onClick}
    >
      <Card className="bg-black/50 border-[rgb(241,90,34)]/20 transition-transform hover:scale-105">
        <CardContent className="p-6 text-center text-white">
          <Avatar className="h-24 w-24 mx-auto">
            <AvatarImage
              src={executive.profile_picture ? `https://${executive.profile_picture}` : ""}
              alt={executive.name || "Executive"}
            />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-xl font-bold">{executive.name}</h3>
          <p className="mt-2 text-gray-300">{executive.roles?.join(", ") || "No roles assigned"}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
