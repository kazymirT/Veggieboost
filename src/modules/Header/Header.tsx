import Links from "./components/Links/Links";
import logo from '../../assets/logo.svg';
import cart from '../../assets/shopping-cart.svg';
import menu from '../../assets/gg_menu-left.svg';

const Header = () => {
  const handleOpenCart = () => console.log('open cart');
  const handleToggleOpenMenu = () => console.log('open menu');
  return ( 
  <header className="container relative flex justify-between items-center py-[13px]">
    <Links/>
    <a href="/" className="absolute md:left-1/2 md:top-4 md:-translate-x-1/2" >
      <img src={logo} width={118} height={18} alt="logo icon"/>
    </a>
    <button onClick={handleOpenCart} className="hidden md:flex">
      <img src={cart} width={24} height={24} alt="icon cart" />
    </button>
    <button onClick={handleToggleOpenMenu} className="flex md:hidden">
      <img src={menu} width={24} height={24} alt="icon menu" />
    </button>
  </header> );
}
 
export default Header;