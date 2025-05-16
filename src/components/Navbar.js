import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white flex flex-col gap-4 mx-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/projects" className="hover:underline">Projects</Link>
      <Link href="/tasks" className="hover:underline">Tasks</Link>
      <Link href="/messages" className="hover:underline">Messages</Link>
      <Link href="/files" className="hover:underline">Files</Link>
    </nav>
  );
} 