"use client"
import Link from "next/link";
import {

    faCartShopping,
    faUser,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";


export default function () {
    const [_, setViewMobileMenu] = useState<boolean>(false)
    return <>
        <div className=" w-full hidden desktop:justify-around desktop:flex justify-between ">

            <ul className=" flex justify-between items-center w-1/2">
                <li>
                    <Link href={'#'} className="link">Produtos</Link>
                </li>
                <li>
                    <Link href={'#'} className="link">Blog</Link>
                </li>
                <li>
                    <Link href={'#'} className="link">Conteúdos</Link>
                </li>
                <li>
                    <Link href={'#'} className="link">Quem somos</Link>
                </li>

            </ul>
            <ul className=" flex w-1/3 justify-around items-center">
                <li>
                    <Link href={'#'} className="link"><FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 18, color: '#19C819' }} /> Assinar Agora</Link>
                </li>
                <li>
                    <Link href={'#'} className="link"><FontAwesomeIcon icon={faUser} style={{ fontSize: 18, color: '#19C819' }} /> Entrar</Link>
                </li>
            </ul>

        </div>

        <div className=" w-1/2 flex justify-end desktop:hidden ">
            <div onClick={() => setViewMobileMenu(!_)} className={`burguer-menu ${_ ? 'active' : ''} h-[10px] w-[40px] relative`}>


                <span></span>
                <span></span>
                <span></span>


            </div>
           {_? <ul className="bg-[#0000001f] absolute flex  flex-col top-12  justify-evenly  items-start w-full left-0 px-6 h-screen backdrop:blur-lg" >
                <li>
                    <Link href={'#'} className="link ">Produtos</Link>
                </li>
                <li>
                    <Link href={'#'} className="link ">Blog</Link>
                </li>
                <li>
                    <Link href={'#'} className="link ">Conteúdos</Link>
                </li>
                <li>
                    <Link href={'#'} className="link ">Quem somos</Link>
                </li>
                <li>
                    <Link href={'#'} className="link "><FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 18, color: '#19C819' }} /> Assinar Agora</Link>
                </li>
                <li>
                    <Link href={'#'} className="link "><FontAwesomeIcon icon={faUser} style={{ fontSize: 18, color: '#19C819' }} /> Entrar</Link>
                </li>
            </ul>:<></>}
        </div>
    </>
}