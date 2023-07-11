import React from "react";

const NoteBoard = () => {
  return (
    <>
      <div className="border-[2px] border-black px-4 py-6 rounded-md">
        <h1 className="text-xl font-semibold">Buat Postingan</h1>
        <p className="text-sm pt-4">
          <b>Note:</b> Buatlah postingan pengumuman seputar kehilangan barang
          atau menemukan barang. Postingan akan dihapus secara otomatis setelah
          30 hari.
        </p>
      </div>
    </>
  );
};

export default NoteBoard;
