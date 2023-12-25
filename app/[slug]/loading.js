import Animation from "@/components/loading-animation";

export default function Loading() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col text-center justify-center items-center">
        <Animation/>
      </div>
    </>
  );
}
