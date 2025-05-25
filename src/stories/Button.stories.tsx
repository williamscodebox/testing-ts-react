import Button from "./Button";

export default {
  title: "products/buttons",
  component: Button,
};

const primary = "bg-blue-500 text-white font-bold py-2 px-4 rounded";
const secondary = "bg-cyan-500 text-white font-bold py-2 px-4 rounded";
const danger = "bg-red-500 text-white font-bold py-2 px-4 rounded";

export const Primary = () => <Button className={primary}>Primary</Button>;
export const Secondary = () => <Button className={secondary}>Secondary</Button>;
export const Danger = () => <Button className={danger}>Danger</Button>;

// Renaming Stories
Primary.storyName = "Blue Button";
Secondary.storyName = "Cyan Button";
Danger.storyName = "Red Button";
