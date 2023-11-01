
export default function HomePageTab() {
    return (
        //        <img className="w-32 md:w-48 lg:w-96"> <HomePageTab /> src="HomeImg.png"</img>
        //<div className="w-2/12 bg-white-700 flex justify-end items-center transform scale-90"><HomePageTab />
        //Page container: 
        <div className = "container" >
            <div className = "left">
                {/* welcome message   */}
                <div className = "object-none object-left">WELCOME TO EDUDIALECT </div>
                    <div className = "aboutButton"> </div>
            </div>
            <div className = "right">
                <img className="object-none object-right-top bg-yellow-300  w-32 md:w-48 lg:w-96" src="HomeImg.png" />

            </div>
            <div/>
        </div>
    ); 
}