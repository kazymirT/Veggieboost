import { TAGS_DATA } from "./data";
import Tag from "./Tag";

const Tags = () => {
  return ( <div className="max-w-[250px] md:max-w-[300px] w-full flex flex-wrap content-end justify-end self-end gap-2">{TAGS_DATA && TAGS_DATA.map((item) => <Tag key={item.id} {...item} />)}</div> );
}
 
export default Tags;
