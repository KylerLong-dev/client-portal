import Header from "./header";
import Content from "./content";

export default function Main() {
    return (
        <div className="min-h-screen grid grid-rows-[1fr_11fr] grid-cols-1">
            <Header />
            <Content />
        </div>
    )
}