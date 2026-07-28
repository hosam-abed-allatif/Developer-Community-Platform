import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-2 text-gray-600">Page not found.</p>

            <Link
                href="/"
                className="mt-6 rounded bg-cyan-600 px-4 py-2 text-white"
            >
                Go Home
            </Link>
        </div>
    )
}
export default NotFound