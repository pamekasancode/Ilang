import React from 'react'
import { container } from '../utils/Style'
import TextInput from './TextInput'
import { SearchIcon } from '../assets'

const Navbar = () => {
  return (
    <div className="bg-white border-b-[2px] z-[99] border-black w-full sticky top-0">
        <div className={`${container} flex items-center justify-between py-3`}>
          <div>
            <h1 className="text-xl font-semibold">ilang</h1>
          </div>
          <div className="w-[62%]">
              <form className="flex items-center gap-x-4">
                <TextInput type="search" name="search" placeholder="Cari Pengumuman.."/>
                <button><img src={SearchIcon} alt="icon"/></button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Navbar