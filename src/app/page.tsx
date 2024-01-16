import Section from "@/components/Section";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from 'next/image'
import fator from '../../public/fator-icon.svg'
import dividendo from '../../public/dividendo-icon.svg'
import codigoPy from '../../public/codigo-py-icon.svg'

export default function Home() {

  return (
    <Section>
      <div className="desktop:w-1/2 w-full">
        <div><h1 className=" desktop:text-[52px] text-[32px] font-bold leading-snug">
          Investir de forma mais inteligente passa por aqui.
        </h1>
          <span className="block w-[80%]">
            Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.
          </span>
        </div>
        <Link href={'buy'} className=" transition duration-300 ease-linear font-bold hover:bg-[#124e12] bg-[#157c15] text-[#00F700] flex items-center justify-center box-border w-52 text-[16px] p-2 mb-10 mt-4 rounded-2xl">
          Comprar agora <FontAwesomeIcon className="ml-2" icon={faArrowRight} /></Link>
      </div>
      <div className="desktop:w-1/2 w-full desktop:justify-end">
        <Link href="" className=" flex desktop:w-[60%] items-center mb-10 mt-5 border-[1px] border-gray-50 p-2 rounded-lg desktop:ml-10  transition duration-300 ease-linear hover:bg-gray-50 hover:text-black"><Image className=" mr-2" src={fator} alt="icon"/>Carteira Fator</Link>
        <Link href="" className=" flex desktop:w-[60%] items-center mb-10 mt-5 border-[1px] border-gray-50 p-2 rounded-lg desktop:mr-10 transition duration-300 ease-linear hover:bg-gray-50 hover:text-black"><Image className=" mr-2" src={dividendo} alt="icon"/> Carteira Dividendo</Link>
        <Link href="" className=" flex desktop:w-[60%] items-center mb-10 mt-5 border-[1px] border-gray-50 p-2 rounded-lg desktop:ml-10  transition duration-300 ease-linear hover:bg-gray-50 hover:text-black"><Image className=" mr-2" src={codigoPy} alt="icon"/>Código<span className="text-[#00F0C9]">.py</span></Link>

      </div>
    </Section>
  )
}
