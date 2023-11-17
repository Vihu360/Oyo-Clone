import { Icon } from '@iconify/react';

function Blocks({title, text, icon}) {
  return (
    <div className="w-60 flex items-center justify-center border-r border-gray-300 h-full">
      <Icon width={30} height={30} className='mr-3' icon={icon} />
      <div className="">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm line-clamp-1 text-gray-400">{text}</p>
      </div>
    </div>
  )
}

export default Blocks;
