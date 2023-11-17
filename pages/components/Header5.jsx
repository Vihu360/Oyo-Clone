
function Header5() {
    return (
        <div className="w-full text-white bg-gray-500">
            <div className="flex justify-between items-center p-8 border-b border-white">
                <div>
                    <p className="font-bold text-xl">World's leading chain of hotels and homes</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-bold text-xl">Join our network and grow your business!</p>
                    <input className="cursor-pointer h-14 outline-none w-36 ml-5 mr-10 rounded-md font-bold text-sm text-black bg-white " type="button" value="List your property" />
                </div>
            </div>

            <div className="flex text-sm items-center justify-center p-4 font-bold">
                2013-2022 © Oravel Stays Limited            
            </div>



        </div>
    )
}

export default Header5
