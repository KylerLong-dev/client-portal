import Logo from "./logo";
import Navbar from "./Navbar";
import Userinfo from "./userinfo";

export default function Sidebar() {
    return (
        <aside className="h-full bg-gray-900 text-white flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
                <Logo />
                <div className="h-px mx-4 bg-gray-600" />            
                <Navbar />
            </div>
            <div className="flex flex-col gap-4">
                <div className="h-px mx-4 bg-gray-600" />
                <Userinfo />   
            </div>       
        </aside>
    )
}