import Image from "next/image";
import logo from "../../public/logo.svg"
import Link from "next/link";
import Menu from "./Menu";


export default function () {


    return <header className=" box-border py-4 desktop:px-20  text-gray-300  h-12 flex desktop:items-center w-full fixed justify-around">
        <div className=" flex justify-start desktop:w-1/6 desktop:justify-around desktop:items-center ">
            <Link href={"/"} className="desktop:mx-10">
                <Image src={logo} alt="logo" width={100} height={30} />
            </Link>


        </div>
        <Menu />

    </header>
}