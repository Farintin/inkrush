import Tab from "@/components/Tab";

export default function UploadPage() {
  return (
    <Tab className=" flex flex-col items-center justify-center gap-4 bg-ink.bg text-ink.text">
      <p className="text-lg">Upload a new Reel</p>
      <input type="file" accept="video/*" className="text-sm" />
      <textarea
        placeholder="Write a caption..."
        className="w-3/4 h-20 p-2 rounded bg-ink.card"
      />
      <button className="px-4 py-2 rounded bg-ink.accent text-white">
        Post
      </button>
    </Tab>
  );
}
