import type {MetaFunction} from "@remix-run/node";
import {ComboboxWrapper} from "~/components/custom/combobox_wrapper";
import {PresetSave} from "~/components/custom/preset_save";
import {SelectWrapper} from "~/components/custom/select_wrapper";
import {SwitchWrapper} from "~/components/custom/switch_wrapper";
import {Button} from "~/components/ui/button";
import {Debug, HelloAtom} from "mnlib_components";

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}];
};

export default function Index() {
  // create an obj constant to pass to Debug component
  const o = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "NY",
      zip: "12345",
    },
  };
  return (
    <div className="mt-8 flex flex-col items-center gap-4 ">
      <h2 className="text-3xl text-primary">Demo Components</h2>
      {/* Placeholders for components */}
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <ComboboxWrapper />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <SelectWrapper />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <SwitchWrapper />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <Button size="lg" className="text-lg">
          Express
        </Button>
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <PresetSave />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <Debug o={o} />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <HelloAtom spin={9} size="9" name="one" />
      </div>
    </div>
  );
}
