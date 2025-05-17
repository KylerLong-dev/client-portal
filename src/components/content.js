import Tasklist from "./tasklist";
import Projectstatus from "./projectstatus";
import Upload from "./upload";

export default function Content() {
    return (
        <div className="bg-offwhite">
            <div className="flex items-center justify-between my-4 mx-6">
                <div>
                    <h1 className="text-primary text-2xl font-bold">Insert Project Name</h1>
                    <p className="text-gray-900 text-sm">Your collection of tasks, files, and communication for the project name.</p>
                </div>
                {/* Notification Box */}
                <div className="relative bg-white rounded-lg shadow p-2 flex flex-row items-center justify-center w-48 min-w-[160px]">
                    {/* Bell Icon with badge */}
                    <div className="relative mr-2 flex-shrink-0">
                        {/* Bell SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD600" viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-lg">
                            <path d="M12 2C10.343 2 9 3.343 9 5v1.07C6.165 7.165 4 9.97 4 13v3l-1 1v1h18v-1l-1-1v-3c0-3.03-2.165-5.835-5-6.93V5c0-1.657-1.343-3-3-3z"/>
                        </svg>
                        {/* Red badge */}
                        <span className="absolute -top-1 -right-1 block w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">1</span>
                    </div>
                    <div className="text-center flex flex-col items-center flex-1">
                        <div className="text-gray-400 text-xs mb-1">1 unread message</div>
                        <button className="bg-primary text-white rounded-sm px-3 py-0.5 font-semibold text-xs shadow hover:bg-secondary cursor-pointer transition-colors flex items-center justify-center">
                            Open
                        </button>
                    </div>
                </div>
                {/*End Notification Box */}
            </div>
            <div className="flex flex-col">
                <h2 className="text-primary text-lg font-bold mb-2 ml-6 mr-6">Tasks</h2> 
                <p className="text-gray-900 text-sm mb-4 ml-6 mr-6 ">Please complete the assigned tasks below</p>
                <Tasklist />
                <Projectstatus />
                <Upload />
            </div>
        </div>
    )
}