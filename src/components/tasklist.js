export default function Tasklist() {
    return (
        <ul className="ml-6 mr-6 space-y-2">
            {/* Task 1: Completed */}
            <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 max-[767px]:flex-col max-[767px]:items-start max-[767px]:space-y-3">
                <div className="flex items-center flex-1 max-[767px]:w-full">
                    <div className="w-6 h-6 mr-3 border-2 border-green-500 rounded flex items-center justify-center bg-green-100 text-green-600 font-bold flex-shrink-0">
                        ✓
                    </div>
                    <p className="text-gray-900 m-0">Submit project proposal</p>
                </div>
                <div className="flex items-center flex-1 justify-center max-[904px]:hidden max-[767px]:w-full max-[767px]:mt-2">
                    <div className="flex space-x-4">
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="flex items-center flex-1 justify-end space-x-2 max-[767px]:w-full max-[767px]:justify-start max-[767px]:mt-2">
                    <p className="font-semibold px-2 py-1 rounded m-0 text-green-600 bg-green-100">Completed</p>
                    <button className="ml-2 px-3 py-1 bg-primary text-white font-semibold rounded hover:bg-secondary cursor-pointer transition-colors">Go to Task</button>
                </div>
            </li>
            {/* Task 2: In Progress */}
            <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 max-[767px]:flex-col max-[767px]:items-start max-[767px]:space-y-3">
                <div className="flex items-center flex-1 max-[767px]:w-full">
                    <div className="w-6 h-6 mr-3 border-2 border-yellow-500 rounded flex items-center justify-center bg-yellow-100 text-yellow-600 font-bold flex-shrink-0">
                        –
                    </div>
                    <p className="text-gray-900 m-0">Review requirements</p>
                </div>
                <div className="flex items-center flex-1 justify-center max-[904px]:hidden max-[767px]:w-full max-[767px]:mt-2">
                    <div className="flex space-x-4">
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                        <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                    </div>
                </div>
                <div className="flex items-center flex-1 justify-end space-x-2 max-[767px]:w-full max-[767px]:justify-start max-[767px]:mt-2">
                    <p className="font-semibold px-2 py-1 rounded m-0 text-yellow-600 bg-yellow-100">In Progress</p>
                    <button className="ml-2 px-3 py-1 bg-primary text-white font-semibold rounded hover:bg-secondary cursor-pointer transition-colors">Go to Task</button>
                </div>
            </li>
            {/* Task 3: Not Started */}
            <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 max-[767px]:flex-col max-[767px]:items-start max-[767px]:space-y-3">
                <div className="flex items-center flex-1 max-[767px]:w-full">
                    <div className="w-6 h-6 mr-3 border-2 border-gray-400 rounded flex items-center justify-center bg-gray-100 text-gray-400 font-bold flex-shrink-0">
                        {/* Empty for not started */}
                    </div>
                    <p className="text-gray-900 m-0">Schedule kickoff meeting</p>
                </div>
                <div className="flex items-center flex-1 justify-center max-[904px]:hidden max-[767px]:w-full max-[767px]:mt-2">
                    <div className="flex space-x-4">
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    </div>
                </div>
                <div className="flex items-center flex-1 justify-end space-x-2 max-[767px]:w-full max-[767px]:justify-start max-[767px]:mt-2">
                    <p className="font-semibold px-2 py-1 rounded m-0 text-gray-500 bg-gray-100">Not Started</p>
                    <button className="ml-2 px-3 py-1 bg-primary text-white font-semibold rounded hover:bg-secondary cursor-pointer transition-colors">Go to Task</button>
                </div>
            </li>
        </ul>
    )
}