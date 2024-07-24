import martaLogo from "../imgs/martaLogo.png";
import martaRoutes from "../imgs/martaRoutes.png";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between h-15 items-center text-xl bg-slate-300 py-3">
                <Image src={martaLogo} alt="Marta Logo" className="w-36 h-auto ml-10"></Image>
                <Link href="/about" className="justify-self-end mr-10 px-3 py-1 hover:bg-slate-400 rounded-md"> About Marta </Link>
            </div>
            <div className="h-screen flex flex-row">
                <div className="w-2/5 ml-40 mt-32">
                    <h1 className="text-5xl font-extrabold "> View Routes Schedule: </h1>
                    <ul className="mt-10 ml-5 text-xl">
                        <li className="py-3"> 
                            <span className="mr-1">&rarr;</span>
                            <Link href="/linespage/gold"className="ml-2 mb-8 rounded-lg px-2 py-2 hover:bg-yellow-500"> Gold Line </Link> 
                        </li>
                        <li className="py-3"> 
                            <span className="mr-1">&rarr;</span> 
                            <Link href="/linespage/red" className="ml-2 mb-8 rounded-lg px-2 py-2 hover:bg-red-500"> Red Line </Link>
                        </li>
                        <li className="py-3"> 
                            <span className="mr-1">&rarr;</span> 
                            <Link href="/linespage/blue" className="ml-2 mb-8 rounded-lg px-2 py-2 hover:bg-blue-500"> Blue Line </Link>
                        </li>
                        <li className="py-3"> 
                            <span className="mr-1">&rarr;</span> 
                            <Link href="/linespage/green" className="ml-2 mb-8 rounded-lg px-2 py-2 hover:bg-green-500"> Green Line </Link>
                        </li>
                    </ul>
                </div>
                <Image className="w-1/3 object-contain mx-20 -mt-16" src={martaRoutes} alt="Gold Page image"></Image>
            </div>
        </div>
    )
}