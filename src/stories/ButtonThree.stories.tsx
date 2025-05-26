import { FaHome } from "react-icons/fa";
import ButtonThree from "./ButtonThree";

export default {
  title: "ComponentsWithArgs/buttons",
  component: ButtonThree,
};

export const PrimaryThree = {
  args: {
    primary: true,
    label: "Primary Button",
    onClick: () => alert("You clicked the Primary button"),
    loading: false,
    size: "medium",
    color: "#007bff",
    fullWidth: false,
    icon: <FaHome />,
    iconPosition: "left",
    ariaLabel: "primary-button",
  },
};
