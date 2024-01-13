import Image from "next/image";
import logo from "../../public/logo.svg"
import Link from "next/link";
import {

    faCartShopping,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function () {


    return <header className=" box-border py-5 px-20  text-gray-300  h-12 flex items-center w-full fixed justify-around backdrop:blur-lg">
        <div className=" flex w-1/2 justify-around items-center">
            <Link href={"/"} className="mx-10">
                <Image src={logo} alt="logo" height={30} />
            </Link>
            <ul className=" flex w-full justify-between items-center">
                <li>
                    <Link href={''} className="link">Produtos</Link>
                </li>
                <li>
                    <Link href={''} className="link">Blog</Link>
                </li>
                <li>
                    <Link href={''} className="link">Conteúdos</Link>
                </li>
                <li>
                    <Link href={''} className="link">Quem somos</Link>
                </li>

            </ul>
        </div>
        <div className=" w-1/5">
            <ul className=" flex w-full justify-between items-center">
                <li>
                    <Link href={''} className="link"><FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 18, color: '#19C819' }} /> Assinar Agora</Link>
                </li>
                <li>
                    <Link href={''} className="link"><FontAwesomeIcon icon={faUser} style={{ fontSize: 18, color: '#19C819' }} /> Entrar</Link>
                </li>
            </ul>

        </div>
    </header>
}