
export default function LogoTitleContainer() {
    return (
        <>
            {/* On smaller screens (hidden on medium and above) */}
            <div className="flex items-center md:hidden">
                <img
                src="/assets/EduLogo.png"
                alt="EduDialect Logo"
                className="w-20 h-20 mr-2"
                />
            </div>

            {/* On medium screens and above (hidden on small screens) */}
            <div className="hidden md:flex items-center">
                <img
                src="/assets/EduLogo.png"
                alt="EduDialect Logo"
                className="w-20 h-20 mr-2"
                />
                <div className="text-xl font-bold">EduDialect</div>
            </div>
        </>
    ); 
}