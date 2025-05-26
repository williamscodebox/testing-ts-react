import MyInput from "./MyInput";

export default {
  title: "inputs",
  component: MyInput,
};

export const SmallInput = () => (
  <MyInput
    type="text"
    className="text-gray-500 text-2xl border-1 w-[25%] pl-1 rounded-md border-gray-400 focus:outline-gray-500 "
    placeholder="Enter text here..."
  />
);

export const NameInput = () => (
  <MyInput
    type="text"
    className="text-gray-500 text-2xl border-1 w-[25%] pl-1 pb-1 rounded-md border-gray-400 focus:outline-gray-500 bg-amber-100 "
    placeholder="Enter your name..."
    maxLength={20}
  />
);
