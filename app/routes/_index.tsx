import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}];
};

export default function Index() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 ">
      <h2 className="text-4xl text-cyan-500">Home Page</h2>
    </div>
  );
}
