// components/UploadModal.tsx

// export default function UploadModal({
//   open,
//   onClose,
// }: {
//   open: boolean;
//   onClose: () => void;
// }) {
//   if (!open) return null;
//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Upload</h2>
//         <div className="space-y-3">
//           <button className="w-full py-2 bg-indigo-600 text-white rounded-xl">
//             Upload Audio
//           </button>
//           <button className="w-full py-2 bg-pink-600 text-white rounded-xl">
//             Upload eBook
//           </button>
//           <button className="w-full py-2 bg-green-600 text-white rounded-xl">
//             Start Podcast
//           </button>
//         </div>
//         <button
//           onClick={onClose}
//           className="mt-4 w-full py-2 border rounded-xl"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }

import { Dialog } from "@headlessui/react";

interface UploadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function UploadModal({ open, onClose }: UploadModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 w-full max-w-md">
          <Dialog.Title className="text-lg font-semibold">Upload</Dialog.Title>
          <p className="text-sm text-neutral-500">
            Upload book cover, reel, or content here.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
