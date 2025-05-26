import { Primary } from "./Button.stories";
import { SmallInput } from "./MyInput.stories";

export default {
  title: "Combo/Components",
};

export const Combo = () => (
  <div className="flex flex-col gap-2">
    <SmallInput />
    <div className="w-[20%]">
      <Primary />
    </div>
  </div>
);
