import { HEADER_LINKS } from "../../data";

const Links = () => {
  return ( <nav>
    <ul className="hidden md:flex gap-[14px] md:gap-[clamp(14px,-4px+2.344vw,20px)]">{HEADER_LINKS && HEADER_LINKS.map(({id, link, name}) => (
      <li key={id}><a href={link} className="text-sm text-black -tracking-[0.034em]">{name}</a></li>
    ))}</ul>
  </nav> );
}
 
export default Links;