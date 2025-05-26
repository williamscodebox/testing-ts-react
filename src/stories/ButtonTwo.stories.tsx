import ButtonTwo from "./ButtonTwo";

export default {
  title: "ComponentsWithArgs/buttons",
  component: ButtonTwo,
};

export const PrimaryTwo = {
  args: {
    primary: true,
    label: "Primary",
    onClick: () => console.log("Primary Button Clicked"),
  },
};
