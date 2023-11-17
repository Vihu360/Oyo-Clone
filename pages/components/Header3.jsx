

function Header3() {
  return (
    <div className="w-full bg-gradient-to-l text-white flex flex-col items-center justify-center from-red-800 to-red-500 h-52">
      <h1 className="font-bold text-3xl">Over 157,000 hotels and homes across 35 countries</h1>
      <div className="grid grid-cols-5 text-black w-70% my-5">
        <input className="h-14 outline-none px-3 rounded-l border-r border-black col-span-2" type="text" placeholder="Search"   />
        <input className="cursor-pointer h-14 font-bold outline-none px-3 bg-white border-r border-black col-span-1" type="button" value="Fri, 17 Nov - Sat, 18 Nov"   />
        <input className="cursor-pointer h-14 font-bold outline-none px-3 bg-white col-span-1" type="button" value="1 Room, 1 Guest"   />
        <input className="cursor-pointer h-14 outline-none px-3 rounded-r font-bold text-white bg-green-500 hover:bg-green-700 transition-colors col-span-1" type="button" value="Search" />
      </div>
      <div className="flex mr-auto ml-56 text-center items-center gap-8">
        <p className="font-bold">Continue your search</p>
        <p className="border-2 font-bold border-white hover:bg-gray-800	hover:bg-opacity-50 transition-colors cursor-pointer rounded p-2 text-sm">Banglore . Guests</p>
      </div>
    </div>
  )
}

export default Header3
