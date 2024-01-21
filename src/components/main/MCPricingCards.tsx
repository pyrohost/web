import Image from 'next/image'

const MCPricingCards = () => {
  return (
    <>
      <div className='gap-8 bg-[#d6b4ba0f] h-[700px] w-full flex flex-col rounded-3xl backdrop-blur-lg p-8'>
        <div className='flex gap-[14PX]'>
          <Image src='/img/mc.png' alt='' width={31} height={31} className='aspect-square max-w-[31px] max-h-[31px]' />
          <h1 className='text-[31px] font-bold leading-[98%] tracking-[-0.1rem]'>
            Minecraft Basic
          </h1>
        </div>

        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className='text-left text-[#ffffff99]'>Try out Pyro's services for you and your community. Perfect for vanilla Minecraft versions below 1.12.2. Does not support modpacks.</h2>
        <p className="flex"><span className="text-[12px] font-medium text-white">US</span><span className="ml-1.5 text-5xl font-black text-white">$4</span><span className="ml-2 self-center text-sm text-[#ffffff99]">per month</span></p>
        <div className='font-bold text-md flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3f3e3e" className="w-6 h-6">
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>

            <p>2GB RAM</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3f3e3e" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>

            <p>Great for 1-3 players</p>
          </div>
        </div>

        <div aria-hidden className='bg-[#3f3e3e] pointer-events-none opacity-50 mt-auto text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4'>
          <p>Out of stock</p>
        </div>
      </div>



      <div className='gap-8 bg-[#d6b4ba0f] h-[700px] w-full flex flex-col rounded-3xl backdrop-blur-lg p-8'>
        <div className='flex gap-[14PX]'>
          <Image src='/img/mc.png' alt='' width={31} height={31} className='aspect-square max-w-[31px] max-h-[31px]' />
          <h1 className='text-[31px] font-bold leading-[98%] tracking-[-0.1rem]'>
            Minecraft Essential
          </h1>
        </div>

        <h2 className='text-left text-[#ffffff99]'>Everything you need to get started, quickly. Perfect for playing solo or with a small group of friends. Supports your favorite modpacks.</h2>
        <p className="flex"><span className="text-[12px] font-medium text-white">US</span><span className="ml-1.5 text-5xl font-black text-white">$8</span><span className="ml-2 self-center text-sm text-[#ffffff99]">per month</span></p>
        <div className='font-bold text-md flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>

            <p>4GB RAM</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <p>Unlimited players</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
            </svg>
            <p>Unlimited storage</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
            </svg>

            <p>Great modding support</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
            </svg>
            <p>pyro.host subdomain</p>
          </div>
        </div>

        <div aria-hidden style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='pointer-events-none opacity-50 mt-auto text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4'>
          <p>Out of stock</p>
        </div>
      </div>

      <div className='gap-8 bg-[#d6b4ba0f] h-[700px] w-full flex flex-col rounded-3xl backdrop-blur-lg p-8'>
        <div className='flex gap-[14PX]'>
          <Image src='/img/mc.png' alt='' width={31} height={31} className='aspect-square max-w-[31px] max-h-[31px]' />
          <h1 className='text-[31px] font-bold leading-[98%] tracking-[-0.1rem]'>
            Minecraft Premium
          </h1>
        </div>

        <h2 className='text-left text-[#ffffff99]'>Powerful features for the most demanding modpacks, large communities, and players desiring a premium, lag-free experience.</h2>
        <p className="flex"><span className="text-[12px] font-medium text-white">US</span><span className="ml-1.5 text-5xl font-black text-white">$16</span><span className="ml-2 self-center text-sm text-[#ffffff99]">per month</span></p>
        <div className='font-bold text-md flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>

            <p>8GB RAM</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <p>Unlimited players</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
            </svg>
            <p>Unlimited storage</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
            </svg>

            <p>Awesome modding support</p>
          </div>

          <div className='flex flex-row gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fa4e49" className="w-6 h-6">
              <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
            </svg>
            <p>pyro.host subdomain</p>
          </div>
        </div>

        <div aria-hidden style={{ backgroundImage: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)' }} className='pointer-events-none opacity-50 mt-auto text-sm font-bold pl-8 pr-6 py-3 rounded-full flex items-center justify-center gap-4'>
          <p>Out of stock</p>
        </div>
      </div>
    </>
  )
}

export default MCPricingCards