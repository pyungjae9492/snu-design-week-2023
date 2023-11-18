import { useState } from "react"

{
    /*props: isMenuOpen, setIsMenuOpen, selectedMenu, setSelectedMenu*/
}
export const MobileMenuBar = (props) => {
    const [selectedMenu, setSelectedMenu] = useState(props.selectedMenu)

    const toggleMenu = (menu: string) => (
        <div 
            onClick={() => onClickMenuButton(menu)} 
            className='text-2xl font-semibold cursor-pointer'
        >
            {menu}
        </div>
    )

    const onClickMenuButton = (menu: string) => {
        props.setIsMenuOpen(!props.isMenuOpen)
        setSelectedMenu(menu)
        props.setSelectedMenu(menu)
    }

    return (
        <>
            {/* <div className="fixed top-10 w-full flex lg:hidden flex-row justify-end z-50">
                <button 
                    onClick={onClickMenuButton}
                >
                    {isMenuOpen ? "X" : "Menu"}
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed top-0 w-screen h-screen z-40 bg-[rgba(0,0,0,0.9)] flex flex-col gap-10 justify-center items-center">
                    <p>ALL</p>
                    <p>BRAND</p>
                    <p>MEDIA</p>
                    <p>GRAPHIC</p>
                    <p>UX/UI</p>
                    <p>SPACE</p>
                    <p>PRODUCT INTERACTION</p>
                    <p>MOBILITY</p>
                    <p>LIVING</p>
                </div>
            )} */}
            {!props.isMenuOpen ? (
                <div>
                    <div onClick={()=> props.setIsMenuOpen(!props.isMenuOpen)} className="flex flex-row justify-center items-center pt-[50px] pb-5 gap-[25px]">
                        <div className={selectedMenu === 'PRODUCT INTERACTION' ? 'w-[150px] justify-center text-center text-2xl leading-[22px] font-semibold cursor-pointer' : 'justify-center text-4xl font-semibold cursor-pointer'}>{selectedMenu}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                            <path d="M6.5 8L0.00480908 0.5L12.9952 0.500001L6.5 8Z" fill="white"/>
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="294" height="2" viewBox="0 0 294 2" fill="none" className='mx-auto lg:hidden'>
                        <path d="M0 1H294" stroke="url(#paint0_linear_776_20425)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_776_20425" x1="1.31839" y1="1.50011" x2="300.592" y2="1.49947" gradientUnits="userSpaceOnUse">
                                <stop stop-opacity="0.546875"/>
                                <stop offset="0.5" stop-color="white"/>
                                <stop offset="1" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                ) : (
                    <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-[rgba(0,0,0,0.9)] flex flex-col justify-center items-center mx-auto">
                        <div onClick={()=> props.setIsMenuOpen(!props.isMenuOpen)} className="flex flex-row mx-auto items-center pt-[50px] pb-5 gap-[10px]">
                            <div className={selectedMenu === 'PRODUCT INTERACTION' ? 'w-[160px] text-center text-2xl leading-[22px] font-semibold' : 'text-center text-4xl font-semibold'}>{selectedMenu}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.5 0L12.9952 7.5L0.00480938 7.5L6.5 0Z" fill="white"/>
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="294" height="2" viewBox="0 0 294 2" fill="none">
                            <path d="M0 1H294" stroke="url(#paint0_linear_776_20425)" stroke-width="2"/>
                            <defs>
                                <linearGradient id="paint0_linear_776_20425" x1="1.31839" y1="1.50011" x2="300.592" y2="1.49947" gradientUnits="userSpaceOnUse">
                                    <stop stop-opacity="0.546875"/>
                                    <stop offset="0.5" stop-color="white"/>
                                    <stop offset="1" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="flex flex-col pt-6 gap-[30px] items-center">
                            {toggleMenu('ALL')}
                            {toggleMenu('BRAND')}
                            {toggleMenu('MEDIA')}
                            {toggleMenu('GRAPHIC')}
                            {toggleMenu('UX/UI')}
                            {toggleMenu('SPACE')}
                            {toggleMenu('PRODUCT INTERACTION')}
                            {toggleMenu('MOBILITY')}
                            {toggleMenu('LIVING')}
                        </div>
                    </div>
                )}
        </>
    )
}