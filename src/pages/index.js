import { Inter } from "next/font/google";
import HomePage from './home.js';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomePage />
  );
}
