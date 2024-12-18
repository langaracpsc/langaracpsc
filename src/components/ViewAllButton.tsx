import { Link } from "react-router-dom";
import React from "react";

interface ViewAllButtonProps {
  link: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ link }) => {
  return (
    <div className="text-right">
      <Link
        to={link}
        className="inline-flex items-center text-orange-500 hover:text-orange-700 font-medium transition duration-300"
      >
        View All &rarr;
      </Link>
    </div>
  );
};

export default ViewAllButton;
