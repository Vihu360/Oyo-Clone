import Blocks from "./Blocks";
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className='h-20 flex px-16 items-center justify-between border-b-2 border-gray-300'>
            <img className='w-26 h-26' height={100} width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/1024px-OYO_Rooms_%28logo%29.png" alt="" />
           <div className="flex  h-full">
            <Blocks title={`Became a Member`} text={`Additional 10% off on stays`} icon={"healthicons:w-outline"}/>
            <Blocks title={`OYO for Business`} text={`Trusted by 5000 Corp`} icon={"basil:bag-outline"}/>
            <Blocks title={`List your Property`} text={`Start earning in 30 mins`} icon={"ri:building-line"}/>
            <Blocks title={`0124-58932`} text={`Call us to Book now`} icon={"material-symbols-light:call-outline" }/>
            </div> 
            
            <div className=" pr-10 flex justify-center w-24 border-r border-gray-300 h-full items-center">
            <Icon width={30} height={30} icon="ion:globe-outline" />
            <p className="font-bold">English</p>

            </div>
            <div className="justify-center flex w-28  border-r border-gray-300 h-full items-center">
            <p className="font-bold">Login/Signup</p>
            </div>

        </div>
    )
}

export default Header
