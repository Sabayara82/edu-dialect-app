

export default function FooterContainer() {
    return (
        <>
        <div className="flex">
            <div className="basis-5/6 pl-4">© 2023 Edu Dialect</div>
            <div className="flex basis-1/6 justify-end pr-5 space-x-2">
                <a href="https://www.instagram.com/edu.dialect/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" >
                    <img className="h-7" src="/assets/Instagram.png" alt="Instagram" />
                </a> 
                <a href="https://www.linkedin.com/company/edudialect/about/" target="_blank" >
                    <img className="h-7" src="/assets/Linkedin.png" alt="Linkedin"/>
                </a>
            </div>
        </div>
        </>
); }