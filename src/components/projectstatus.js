export default function Projectstatus() {
    return (
        <div className="bg-offwhite rounded-lg shadow ml-6 mr-6 mt-4">
            <h3 className="text-primary font-bold mb-4">Project Progress</h3>
            <ul className="space-y-2">
                {/* Progress 1: Completed */}
                <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 max-[767px]:flex-col max-[767px]:items-start max-[767px]:space-y-3">
                    <div className="flex items-center flex-1 max-[767px]:w-full">
                        <div className="w-6 h-6 mr-3 border-2 border-green-500 rounded flex items-center justify-center bg-green-100 text-green-600 font-bold flex-shrink-0">
                            ✓
                        </div>
                        <p className="text-gray-900 m-0">Initial Planning</p>
                    </div>
                    <div className="flex items-center flex-1 justify-end max-[767px]:w-full max-[767px]:justify-start max-[767px]:mt-2">
                        <p className="font-semibold px-2 py-1 rounded m-0 text-green-600 bg-green-100">Completed</p>
                    </div>
                </li>
                {/* Progress 2: In Progress */}
                <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 max-[767px]:flex-col max-[767px]:items-start max-[767px]:space-y-3">
                    <div className="flex items-center flex-1 max-[767px]:w-full">
                        <div className="w-6 h-6 mr-3 border-2 border-yellow-500 rounded flex items-center justify-center bg-yellow-100 text-yellow-600 font-bold flex-shrink-0">
                            –
                        </div>
                        <p className="text-gray-900 m-0">Design Phase</p>
                    </div>
                    <div className="flex items-center flex-1 justify-end max-[767px]:w-full max-[767px]:justify-start max-[767px]:mt-2">
                        <p className="font-semibold px-2 py-1 rounded m-0 text-yellow-600 bg-yellow-100">In Progress</p>
                    </div>
                </li>
                {/* Progress 3: Not Started */}
                <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 max-[767px]:flex-col max-[767px]:items-start max-[767px]:space-y-3">
                    <div className="flex items-center flex-1 max-[767px]:w-full">
                        <div className="w-6 h-6 mr-3 border-2 border-gray-400 rounded flex items-center justify-center bg-gray-100 text-gray-400 font-bold flex-shrink-0">
                            {/* Empty for not started */}
                        </div>
                        <p className="text-gray-900 m-0">Development</p>
                    </div>
                    <div className="flex items-center flex-1 justify-end max-[767px]:w-full max-[767px]:justify-start max-[767px]:mt-2">
                        <p className="font-semibold px-2 py-1 rounded m-0 text-gray-500 bg-gray-100">Not Started</p>
                    </div>
                </li>
                {/* Progress 4: Not Started */}
                <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 max-[767px]:flex-col max-[767px]:items-start max-[767px]:space-y-3">
                    <div className="flex items-center flex-1 max-[767px]:w-full">
                        <div className="w-6 h-6 mr-3 border-2 border-gray-400 rounded flex items-center justify-center bg-gray-100 text-gray-400 font-bold flex-shrink-0">
                            {/* Empty for not started */}
                        </div>
                        <p className="text-gray-900 m-0">Testing & Launch</p>
                    </div>
                    <div className="flex items-center flex-1 justify-end max-[767px]:w-full max-[767px]:justify-start max-[767px]:mt-2">
                        <p className="font-semibold px-2 py-1 rounded m-0 text-gray-500 bg-gray-100">Not Started</p>
                    </div>
                </li>
            </ul>
        </div>
    );
} 