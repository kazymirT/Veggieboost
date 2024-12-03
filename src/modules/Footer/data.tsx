import footer from '../../assets/footer.png';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import logo from '../../assets/icons/logo.svg';

export const FOOTER_DATA = {
  img: {
    alt: "footer images",
    src: footer,
  },
  links: [
    {id: 1, name: "How It Works", link: ""},
    {id: 2, name: "Vegetables", link: ""},
    {id: 3, name: "Contacts", link: ""},
  ],
  iconLinks: [
    {id: 1, icon: facebook, alt: 'facebook icon', link: ""},
    { id: 2, icon: instagram, alt: 'instagram icon', link: ""},
    {id: 3, icon: youtube, alt: 'youtube icon', link: ""},
  ],
  contacts: {
    phone: '+380 (68) 443-94-26',
    address: <></>,
  },
  logo: logo, 
};
