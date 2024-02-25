import type {MetaFunction} from "@remix-run/node";
import {Button} from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}];
};

export default function Index() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 ">
      <h2 className="text-3xl text-primary">Demo Components</h2>
      {/* Placeholders for components */}

      <div className="w-96 border border-gray-200 p-4 text-justify">
        <Button size="lg" className="text-lg">
          Express
        </Button>
      </div>
    </div>
  );
}
