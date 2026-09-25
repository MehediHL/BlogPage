import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../../../assets/logo.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdLightMode } from "react-icons/md";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="shadow-2xl">
            <div className="container mx-auto py-3 px-6 lg:px-24">

                {/* Header Top */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <img className="w-25" src={logo} alt="Logo" />

                    {/* Desktop Menu - LG and above */}
                    <div className="hidden lg:flex items-center gap-12">

                        {/* Navigation */}
                        <div className="flex gap-8">
                            <p>Home</p>
                            <p>Success Story</p>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-8">

                            {/* Join Now */}
                            <div className="flex items-center gap-1 bg-[#FF5671] text-white justify-center py-1 rounded-md px-3">
                                <FaTelegramPlane />
                                <p>Join Now</p>
                            </div>

                            {/* Icons */}
                            <div className="flex gap-4 text-xl items-center">
                                <BiSearchAlt />

                                <div className="bg-[#EEEFF2] py-1 rounded-md px-3">
                                    <MdLightMode />
                                </div>

                                <IoIosMenu />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-3xl"
                    >
                        {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 border-t pt-4">

                        {/* Navigation */}
                        <div className="flex flex-col gap-4">
                            <p>Home</p>
                            <p>Success Story</p>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>

                        {/* Mobile Right Side */}
                        <div className="flex items-center gap-6 mt-5">

                            {/* Join Now */}
                            <div className="flex items-center gap-1 bg-[#FF5671] text-white justify-center py-2 rounded-md px-3">
                                <FaTelegramPlane />
                                <p>Join Now</p>
                            </div>

                            {/* Search */}
                            <BiSearchAlt className="text-xl" />

                            {/* Light Mode */}
                            <div className="bg-[#EEEFF2] py-1 rounded-md px-3 text-xl">
                                <MdLightMode />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Header;

