import order from '../../assets/orderVegetables.png';

const Order = () => {
  return ( 
    <section className="container py-20 md:py-[100px] lg:py-[124px] text-black flex flex-col gap-5 md:gap-10">
      <div className='flex flex-col gap-5 md:flex-row md:gap-2 lg:justify-between'>
        <h2 className='uppercase text-[28px] sm:text-[clamp(28px,16.55px+3.053vw,40px)] md:text-[clamp(40px,28px+1.563vw,48px)] font-medium leading-8 tracking-tight md:leading-[45px] md:tracking-[0.01em] lg:leading-[50px] lg:pt-[9px] lg:tracking-[0.01em] xl:max-w-[615px]'>To order your vegetable basket, simply follow these easy steps</h2>
        <img src={order} alt="vegetables images" width={335} height={158} className='min-h-[158px] max-h-[176px] h-full max-w-[410px] w-full min-w-[280px] self-center' />
      </div>
      <div className='flex flex-col gap-5 md:flex-row lg:gap-10'>
        <p className='w-full text-sm -tracking-[0.04em] leading-[18px] md:max-w-[317px] md:text-lg md:leading-[23px] lg:max-w-[353px] lg:leading-[24px]'>Our baskets are assembled with care and delivered straight to your doorstep, so you can enjoy the taste of fresh fruit without ever leaving your home. </p>
        <p className='w-full text-sm  -tracking-[0.04em] leading-[18px] md:max-w-[279px] md:text-lg md:leading-[23px] lg:max-w-[294px] lg:leading-[24px]'>Whether you're looking for a healthy snack or a thoughtful gift, our fruit baskets are the perfect choice.</p>
      </div>
    </section> );
}
 
export default Order;
