import { type ChangeEvent, type FormEvent, useState } from "react";
import { FRESH_DATA } from "../../data";

const Form = () => {
  const [value, setValue] = useState<string>('+ 380 (');
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
  const handleSubmitNumber = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    setValue('+ 380 (')
  }
  return (
    <form className="flex relative w-full max-w-[355px]" onSubmit={handleSubmitNumber}>
    <input type="phone" value={value} onChange={onChangeValue} placeholder={FRESH_DATA.form.placeholder} className="w-full rounded-[100px] border-2 border-grey-2 focus:border-grey-2 focus:outline-none text-sm text-grey-2 leading-[18px] tracking-normal py-[13px] pl-[22px]" />
    <button type="submit" className="bg-orange outline-none focus:outline-none text-white rounded-[100px] leading-[18px] -tracking-[0.09em] absolute top-0 right-0 py-[15px] px-[35px]">{FRESH_DATA.form.button}</button>
    </form> 
   );
}
 
export default Form;
