import { CiLocationOn } from "react-icons/ci"
import { IoCallOutline } from "react-icons/io5"

function Header() {
    return (
        <div className=''>
            <div className="first-header bg-gradient-to-b from-blue-500 to-blue-700 text-white flex gap-[20px] px-20 py-3 text-sm">
                <div className="flex items-center gap-2 ">
                    <CiLocationOn size={18} color="#fff" />
                    <p>HSR Layout, Banglore</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoCallOutline size={18} color="#fff" />
                    <p>+91 9876543210</p>
                </div>
            </div>
            <div className="bg-[#fff] py-5 px-20 flex justify-between items-center">
                <div>
                    <img src="/assets/BoomOnT.png" className="img-fluid" alt="logo" />
                </div>
                <div>2</div>
            </div>
        </div>
    )
}

export default Header