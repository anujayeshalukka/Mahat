import React from 'react'
const Banner = ({ setIsContactOpen }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center px-[5%] relative z-10">
            <div className="w-full max-w-350">
                <h1 className="text-white text-left text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.01em] sm:tracking-[0.02em] leading-[1.1] sm:leading-[1.2] font-bold">
                    <span className="font-extralight block sm:inline uppercase">CREATIVE </span>
                    Digital Agency.
                </h1>
                <div className='flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-10 w-full mt-8 md:mt-5'>
                    <p className='text-white max-w-150 leading-[1.8] text-sm md:text-base font-light text-left'>
                        <span className="font-extralight text-[10px] mr-5 md:mr-10 uppercase tracking-[0.5em] block md:inline mb-4 md:mb-0">HOME</span>
                        We are a digital studio delivering UI/UX design, website development, digital marketing, and graphic design to help businesses build strong, modern, and growth-focused online identities.
                    </p>

                    <button
                        onClick={() => setIsContactOpen()}
                        className="cursor-pointer group"
                    >
                        <div className="flex flex-col items-end w-fit">
                            <span className="text-white text-xs tracking-widest uppercase font-light">Consult</span>
                            <div className="w-full h-px bg-linear-to-r from-[#f4103f] to-[#1140aa] mt-1.5 relative">
                                <span className="absolute right-0 -top-0.75 border-t border-r border-[#1140aa] w-1.75 h-1.75 rotate-45"></span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Banner;