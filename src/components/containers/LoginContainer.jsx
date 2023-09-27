
export default function LoginContainer() {
    return (
        <>
        {/* On smaller screens (hidden on medium and above) */}
        
        <div className="flex items-center pr-4 pt-6 md:hidden">
            <button> 
                <img
                    src="/assets/login.png"
                    alt="login icon"
                    className="w-7 h-7 mr-2"
                />
            </button>
        </div>

        {/* On medium screens and above (hidden on small screens) */}
        
        <div className="hidden md:flex items-center pr-4 pt-7">
            {/* <button className="pr-2">
                <img
                    src="/assets/login.png"
                    alt="login icon"
                    className="w-4 h-4 mr-2"
                />
            </button> */}
            <button className="text-md font-md pr-4">
            <span className="flex items-center">
                <img
                src="/assets/login.png"
                alt="Login Icon"
                className="w-4 h-4 mr-2"
                />
                Login
            </span>
            </button>
        </div>
        
        </>
        
    ); 
}