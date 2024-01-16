import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg"
import logoTwo from "../../public/logo-2.svg"
export default function () {

    return <footer className="flex flex-col absolute bottom-0 w-full  content-around justify-around text-gray-50 px-7">
        <div className="flex w-full justify-around">
            <div className=" w-1/12">
                <Image src={logoTwo} width={74} height={74} className=" rounded-lg" alt="logo" />
                <Image src={logo} width={74} height={13} alt="logo" className="my-2" />
            </div>
            <div className="flex w-1/2">
                <div className=" mx-3 w-full">
                    <h4 className="font-bold text-lg">Cursos</h4>
                    <ul>
                        <li>
                            <Link href={'#'} className="link">Valuation do Zero ao Avançado 2.0</Link>
                        </li>
                        <li>
                            <Link href={'#'} className="link">Código.py</Link>

                        </li>
                        <li>
                            <Link href={'#'} className="link">Minicurso Reels</Link>

                        </li>
                        <li>
                            <Link href={'#'} className="link">Enciclopédia de FII</Link>

                        </li>
                    </ul>
                </div>
                <div className=" mx-1 w-full">
                    <h4 className="font-bold text-lg">Carteiras</h4>
                    <ul>
                        <li>
                            <Link href={'#'} className="link">Carteira FATOR</Link>
                        </li>
                        <li>
                            <Link href={'#'} className="link">Carteira Seleção</Link>

                        </li>
                        <li>
                            <Link href={'#'} className="link">Carteira Essencial</Link>

                        </li>
                        <li>
                            <Link href={'#'} className="link">Carteira Small Caps</Link>

                        </li>
                        <li>
                            <Link href={'#'} className="link">Carteira Dividendos</Link>

                        </li>   <li>
                            <Link href={'#'} className="link">Carteira de FIIs</Link>

                        </li>
                    </ul>
                </div>
                <div className=" mx-3 w-full">
                    <h4 className="font-bold text-lg">Sobre</h4>
                    <ul>
                        <li>
                            <Link href={'#'} className="link">Quem somos</Link>
                        </li>

                    </ul>
                </div>
                <div className=" mx-3 w-full">
                    <h4 className="font-bold text-lg">Redes Sociais</h4>
                    <ul>
                        <li>
                            <Link href={'#'} className="link">Instagram</Link>
                        </li>
                        <li>
                            <Link href={'#'} className="link">Twitter</Link>
                        </li>
                        <li>
                            <Link href={'#'} className="link">Youtube</Link>
                        </li>

                    </ul>
                </div>
            </div>


        </div>
        <div className="w-full px-14 mt-10">
            <p>VAROS 2023</p>
            <p>Todos os direitos reservados</p>
        </div>
    </footer>

}