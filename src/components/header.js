import Logo from '../asssests/logo.webp'
import { CgProfile } from 'react-icons/cg';
export default function Header(props){
    return (
        <>
       <div className='w-full bg-black flex justify-center'>
       <div className='flex items-center w-4/5 p-4 justify-between m-auto bg-black'>
        <div className='flex items-center '>
            <img src={Logo} className='w-20 h-12'/>
        </div>
        <div>
            <p className='text-gray-200 max-[550px]:hidden text-2xl font-serif font-extrabold'>Mark Attendance</p>
        </div>
        <div className='flex gap-2 justify-center  items-center'>
        <CgProfile color='grey' size={35}/>
            <p className='text-gray-200 text-1xl ms-2 font-serif font-extrabold'>{props.username}</p>
        </div>
            
        </div>
        </div>
        </>
    )
}

