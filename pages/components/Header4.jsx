import TextField from '@mui/material/TextField';




function Header4() {
    return (
        <div>

            <div className="flex justify-center">
                <img className="mt-14 w-88% rounded" src="https://assets.oyoroomscdn.com/cmsMedia/f0be8dc3-e384-40b3-89f9-a0a0109159ce.jpg" alt="" />
            </div>

            <div className="flex justify-center">
                <img className="mt-20 mb-14 w-88% rounded" src="https://assets.oyoroomscdn.com/cmsMedia/ac15627f-c423-4383-a43b-1402ef8c3a73.png" alt="" />
            </div>



            <div className='flex justify-center'>

                <div className="flex border-2 h-24 border-gray-300 w-88% justify-between mb-10 items-center">
                    <div className='flex'>
                        
                    <img className='w-12 ml-5 mr-8' src="./fireImage.png" alt="" />
                    <div>
                    <h1 className='text-lg font-bold'>Get access to exclusive deals</h1>
                    <p className='text-gray-500'>Only the best deals reach your inbox</p>
                    </div>
                    </div>

                    <div className='flex items-center mr-4'>
                        <TextField className='' id="outlined-basic" label="Your Email" variant="outlined" placeholder='e.g xyz@gmail.com' />
                        <input className="cursor-pointer h-14 outline-none px-3 w-36 ml-5 mr-10 rounded-md font-bold text-sm text-white bg-red-500 " type="button" value="Notify me" />
                    
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Header4
