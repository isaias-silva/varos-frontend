import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg"
import logoTwo from "../../public/logo-2.svg"
export default function Footer() {

    return <footer className="flex flex-col relative bottom-0 w-full  content-around justify-around text-gray-50 desktop:px-7 ">
        <div className="flex w-full desktop:justify-around justify-start flex-wrap">
            <div className=" desktop:w-1/12">
                <Image src={logoTwo} width={74} height={74} className=" rounded-lg" alt="logo" />
                <Image src={logo} width={74} height={13} alt="logo" className="my-2" />
            </div>
            <div className=" desktop:flex desktop:w-1/2 w-full grid grid-cols-2 gap-2 ml-2">
                <div className=" desktop:mx-3 w-1/2">
                    <h4 className="font-bold text-lg">Cursos</h4>
                    <ul>
                        <li className="my-4">
                            <Link href={'#'} className="link">Valuation do Zero ao Avançado 2.0</Link>
                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Código.py</Link>

                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Minicurso Reels</Link>

                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Enciclopédia de FII</Link>

                        </li>
                    </ul>
                </div>
                <div className="desktop:mx-1 w-1/2">
                    <h4 className="font-bold text-lg">Carteiras</h4>
                    <ul>
                        <li className="my-4">
                            <Link href={'#'} className="link">Carteira FATOR</Link>
                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Carteira Seleção</Link>

                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Carteira Essencial</Link>

                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Carteira Small Caps</Link>

                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Carteira Dividendos</Link>

                        </li>   <li className="my-4">
                            <Link href={'#'} className="link">Carteira de FIIs</Link>

                        </li>
                    </ul>
                </div>
                <div className=" desktop:mx-3 w-1/2">
                    <h4 className="font-bold text-lg">Sobre</h4>
                    <ul>
                        <li className="my-4">
                            <Link href={'#'} className="link">Quem somos</Link>
                        </li>

                    </ul>
                </div>
                <div className=" desktop:mx-3 w-1/2">
                    <h4 className="font-bold text-lg">Redes Sociais</h4>
                    <ul>
                        <li className="my-4">
                            <Link href={'#'} className="link">Instagram</Link>
                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Twitter</Link>
                        </li>
                        <li className="my-4">
                            <Link href={'#'} className="link">Youtube</Link>
                        </li>

                    </ul>
                </div>
            </div>


        </div>
        <div className="w-full desktop:px-14 mt-10">
            <p>VAROS 2023</p>
            <p>Todos os direitos reservados</p>
        </div>
    </footer>

}