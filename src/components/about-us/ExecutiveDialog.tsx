import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Executive } from "@/types/member";
import { motion } from "framer-motion";

interface ExecutiveDialogProps {
  executive: Executive | null;
  onClose: () => void;
}

export function ExecutiveDialog({ executive, onClose }: ExecutiveDialogProps) {
  if (!executive) return null;

  return (
    <Dialog open={!!executive} onOpenChange={onClose}>
      <DialogContent className="bg-black border-[rgb(241,90,34)]/20 text-white max-w-2xl rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {executive.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-6 items-center p-6">
            <Avatar className="h-32 w-32">
              <AvatarImage
                src={`https://${executive.profile_picture}`}
                alt={executive.name}
              />
              <AvatarFallback>
                {executive.name?.[0] || "?"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">{executive.roles.join(", ")}</h3>
              <p className="text-gray-200 leading-relaxed">{executive.bio || "No bio available"}</p>
              <p className="text-gray-300">Pronouns: {executive.pronouns || "Not specified"}</p>
              <p className="text-gray-300">First Term: {executive.first_term || "Not specified"}</p>
              <p className="text-gray-300">Last Term: {executive.last_term || "Current"}</p>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
