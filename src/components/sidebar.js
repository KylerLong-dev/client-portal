import Logo from "./logo";
import Navbar from "./Navbar";
import Userinfo from "./userinfo";

export default function Sidebar() {
    return (
        <aside className="h-full bg-primary text-white flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
                <Logo />
                <div className="h-px mx-4 bg-offwhite" />            
                <Navbar />
            </div>
            <div className="flex flex-col gap-4">
                <div className="h-px mx-4 bg-offwhite" />
                <Userinfo />   
            </div>       
        </aside>
    )
}