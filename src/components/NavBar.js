import Link from "next/link";

export default function NavBar( {line} ) {

    let lineColor = "";
    if (line === "gold") {
        lineColor = "border-y-yellow-500"
    } else if (line === "red") {
        lineColor = "border-y-red-500"
    } else if (line === "blue") {
        lineColor = "border-y-blue-500"
    } else if (line === "green") {
        lineColor = "border-y-green-500"
    }

    function display() {
        return (
            <div className="flex flex-col">
            <nav className="flex flex-row justify-around h-14 items-center">
                <Link href="/linespage/gold" className={line === "gold" ? 'rounded-md bg-yellow-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-yellow-500 px-10 py-1'}> Gold </Link>
                <Link href="/linespage/red" className={line === "red" ? 'rounded-md bg-red-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-red-500 px-10 py-1'}> Red </Link>
                <Link href="/linespage/blue" className={line === "blue" ? 'rounded-md bg-blue-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-blue-500 px-10 py-1'}> Blue </Link>
                <Link href="/linespage/green" className={line === "green" ? 'rounded-md bg-green-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-green-500 px-10 py-1'}> Green </Link>
            </nav>
            <div className={`border-y-4 ${lineColor} py-2 mt-2 font-extrabold text-center`}>
                <h1 className="text-5xl"> {line === null ? "SELECT LINE" : line.toUpperCase()} </h1>
            </div>
        </div>
        )
    }

    return (
        <div>
            {display()}
        </div>
    )
}