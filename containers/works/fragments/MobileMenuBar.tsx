{
    /*props: isMenuOpen, setIsMenuOpen, selectedMenu, setSelectedMenu*/
}
export const MobileMenuBar = (props) => {

    const ToggleMenu = ({ menu }: { menu: string }) => (
        <div 
            onClick={() => onClickMenuButton(menu)} 
            className='text-2xl font-semibold cursor-pointer'
        >
            {menu}
        </div>
    )

    const onClickMenuButton = (menu: string) => {
        props.setIsMenuOpen(!props.isMenuOpen)
        props.setSelectedMenu(menu)
        props.setSelectedMenu(menu)
    }

    return (
        <div className={`${props.isMenuOpen && "overflow-y-hidden"}`}>
            <div>
                <div onClick={()=> props.setIsMenuOpen(!props.isMenuOpen)} className="flex flex-row justify-center items-center pt-[50px] pb-5 gap-[25px]">
                    <div className={props.selectedMenu === 'PRODUCT INTERACTION' ? 'w-[150px] justify-center text-center text-2xl leading-[22px] font-semibold cursor-pointer' : 'justify-center text-4xl font-semibold cursor-pointer'}>{props.selectedMenu}</div>
                    <svg className={`${props.isMenuOpen && "rotate-180"}`} xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
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
            <div className={`absolute left-0 w-full h-[calc(100vh-198px)] z-40 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex flex-col justify-start items-center mx-auto opacity-0 pointer-events-none transition-all ${props.isMenuOpen && "opacity-100 pointer-events-auto"}`}>
                <div className="flex flex-col pt-6 gap-[30px] items-center">
                    <ToggleMenu menu='ALL' />
                    <ToggleMenu menu='BRAND' />
                    <ToggleMenu menu='MEDIA' />
                    <ToggleMenu menu='GRAPHIC' />
                    <ToggleMenu menu='UX/UI' />
                    <ToggleMenu menu='SPACE' />
                    <ToggleMenu menu='PRODUCT INTERACTION' />
                    <ToggleMenu menu='MOBILITY' />
                    <ToggleMenu menu='LIVING' />
                </div>
            </div>
        </div>
    )
}