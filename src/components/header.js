export default function Header() {
    return (
        <header className="bg-gradient-to-t from-gray-100 via-white to-gray-200 flex items-center justify-between p-3">
            <h1 className="text-primary font-bold px-4">Cypress Web Portal</h1>
            <div className="flex items-center gap-2">
                <p className="text-gray-900 font-semibold max-[767px]:hidden">Hello, User</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-8 mr-4 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
        </header>
    )
}


