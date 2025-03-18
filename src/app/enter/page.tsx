// src/app/enter/page.tsx
import Link from "next/link";

export default function EnterPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website!</h1>
      <p className="mb-8">Here you can find links to my profiles:</p>
      <nav>
        <ul className="flex flex-col gap-4 text-lg">
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://classtab.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Classtab.org
            </a>
          </li>
          <li>
            <a
              href="https://chess.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Chess.com
            </a>
          </li>
        </ul>
      </nav>
      <Link href="/" className="mt-8 underline text-blue-500 hover:text-blue-700">
        Back to Home
      </Link>
    </main>
  );
}
