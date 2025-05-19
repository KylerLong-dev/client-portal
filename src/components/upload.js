export default function Upload() {
    return (
        <div className="bg-offwhite rounded-lg shadow ml-6 mr-6 mt-4">
            <h3 className="text-primary font-bold mb-2">Asset Upload</h3>
            <p className="text-gray-900 mb-4">Upload your project files, image, or other assets here. Accepted formats: PDF, JPG, PNG, DOCX, and more.</p>
            <div className="flex items-start gap-2 mb-3 max-[841px]:flex-col max-[841px]:items-start max-[841px]:space-y-3">
                {/* Hide the default file input */}
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    multiple
                />
                {/* Custom label styled as a button */}
                <label
                    htmlFor="file-upload"
                    className="min-h-[40px] max-w-md flex items-center justify-center text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none cursor-pointer w-full"
                >
                    <span className="w-full text-center">Click to select files</span>
                </label>
                <button className="px-4 py-2 bg-primary text-white text-base rounded hover:bg-primary-dark transition-colors cursor-pointer font-semibold">
                    Go to Upload Page
                </button>
            </div>
        </div>
    );
} 