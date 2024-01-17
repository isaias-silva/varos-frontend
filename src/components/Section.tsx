import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode; 
  }
const Section: React.FC<SectionProps> = ({ children }) => {
    return (
      <section className="desktop:flex justify-between w-full px-20 items-center desktop:my-20 my-10 flex-wrap">
        {children}
      </section>
    );
  };

  export default Section