import React from "react";
import { Button, Navbar, Select, TextArea } from "../../components";
import { container } from "../../utils/Style";

const CreatePost = () => {
  return (
    <>
      <Navbar />
      <div
        className={`${container} py-[20px] flex justify-between gap-x-[50px]`}
      >
        <div className="w-[40%]">
          <h1 className="text-xl font-semibold">Buat Postingan</h1>
          <p className="text-sm pt-4 text-justify">
            <b>Note:</b> Buatlah postingan pengumuman seputar kehilangan barang
            atau menemukan barang. Postingan akan dihapus secara otomatis
            setelah 30 hari.
          </p>
        </div>
        <div className="w-[60%]">
          <form method="post" className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm">Kategori</label>
              <Select name="category_id"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Pengumuman</label>
              <TextArea name="announcement"/>
            </div>
            <Button text="Simpan" variant="primary"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;