import Link from 'next/link'
import Logo from '../Logo'
import Image from 'next/image'

const Footer = () => {

  return (
    <footer className='mt-auto relative h-full w-full px-8 py-8 lg:px-32 lg:py-24'>
      {/* <div className='absolute w-full h-full inset-0 brightness-[4]' style={{
        // WebkitMaskImage: 'linear-gradient(black, transparent 99.9%)'
      }}>
        <div className='absolute w-full h-full inset-0 brightness-[4]' style={{
          WebkitMaskImage: 'linear-gradient(transparent, black 99%)'
        }}> */}
          <Image fill src='/img/footerlogo.png' alt='' aria-hidden className='select-none pointer-events-none absolute w-full h-full inset-0 bg-repeat-x object-cover' />
        {/* </div>
      </div> */}
      {/* <svg className='absolute top-0 left-6 bottom-0 select-none pointer-events-none flex h-full shrink-0' aria-hidden xmlns="http://www.w3.org/2000/svg" width="960" height="382" viewBox="0 0 960 382" fill="none">
        <g opacity="0.03">
          <path d="M39.7653 39.4503C66.5606 13.1501 98.772 0 136.399 0C174.027 0 206.096 13.1501 232.606 39.4503C259.401 65.4706 272.799 96.9469 272.799 133.879C272.799 170.811 259.401 202.427 232.606 228.728C206.096 254.748 174.027 267.758 136.399 267.758C124.177 267.758 112.241 266.208 100.592 263.108C88.3522 259.851 82.2322 258.222 78.9573 260.679C75.6824 263.136 75.6824 268.776 75.6824 280.056V341.217C75.6824 346.224 75.6824 348.728 74.4009 350.726C73.1193 352.724 70.8187 353.807 66.2174 355.975L23.9118 375.901C13.1715 380.959 7.80142 383.488 3.90071 381.081C0 378.674 0 372.83 0 361.143V133.879C0 96.9469 13.2551 65.4706 39.7653 39.4503ZM179.158 92.3304C167.47 80.5792 153.218 74.7037 136.399 74.7037C119.581 74.7037 105.186 80.5792 93.2134 92.3304C81.5261 103.802 75.6824 117.651 75.6824 133.879C75.6824 150.387 81.5261 164.516 93.2134 176.267C105.186 187.738 119.581 193.474 136.399 193.474C153.218 193.474 167.47 187.738 179.158 176.267C191.13 164.516 197.116 150.387 197.116 133.879C197.116 117.651 191.13 103.802 179.158 92.3304Z" fill="url(#paint0_linear_219_18)" />
          <path d="M438.976 285.385C428.999 311.965 412.323 333.089 388.948 348.757C371.4 360.878 352.534 368.473 332.352 371.544C323.893 372.831 319.664 373.474 316.671 370.551C313.678 367.628 314.371 363.116 315.756 354.093L322.204 312.104C322.951 307.237 323.325 304.803 324.366 303.279C325.407 301.755 329.334 299.449 337.188 294.839C342.026 291.998 345.139 288.514 346.19 287.483C347.994 285.713 363.293 271.255 367.569 259.784L371.95 248.495C373.164 245.368 373.771 243.805 373.723 242.177C373.675 240.549 372.977 239.023 371.581 235.97L274.217 23.0712C269.462 12.673 267.084 7.47387 269.55 3.73694C272.017 0 277.825 0 289.443 0H335.597C340.941 0 343.614 0 345.705 1.35489C347.797 2.70977 348.846 5.12051 350.945 9.942L394.619 110.279C401.782 126.733 405.363 134.961 411.084 134.762C416.806 134.563 419.784 126.107 425.741 109.196L460.32 11.0242C462.195 5.70005 463.133 3.03795 465.306 1.51897C467.48 0 470.351 0 476.093 0H521.171C532.016 0 537.439 0 539.93 3.49194C542.421 6.98388 540.564 11.9815 536.851 21.9767L438.976 285.385Z" fill="url(#paint1_linear_219_18)" />
          <path d="M541.735 133.879C541.735 96.9469 554.99 65.4706 581.5 39.4503C603.415 17.9408 637.672 5.22706 670.009 1.30899C679.241 0.190332 683.857 -0.368997 686.768 2.83514C689.679 6.03928 688.509 10.7693 686.17 20.2293L675.794 62.1919C674.481 67.5034 673.824 70.1591 672.246 71.7588C670.668 73.3584 667.019 74.3517 659.722 76.3384C649.944 79.0003 642.461 84.7456 634.73 92.3304C623.91 102.945 625.021 117.651 625.021 133.879V257.242C625.021 262.349 625.021 264.903 623.698 266.924C622.374 268.945 620.006 270.007 615.272 272.131L565.362 294.514C554.723 299.285 549.404 301.671 545.569 299.254C541.735 296.838 541.735 291.101 541.735 279.625V133.879Z" fill="url(#paint2_linear_219_18)" />
          <path d="M726.967 39.4503C753.762 13.1501 785.973 0 823.601 0C861.228 0 893.297 13.1501 919.807 39.4503C946.602 65.4706 960 96.9469 960 133.879C960 170.811 946.602 202.427 919.807 228.728C893.297 254.748 861.228 267.758 823.601 267.758C785.973 267.758 753.762 254.748 726.967 228.728C700.456 202.427 687.201 170.811 687.201 133.879C687.201 96.9469 700.456 65.4706 726.967 39.4503ZM866.359 91.9107C854.672 80.1596 840.419 74.284 823.601 74.284C806.782 74.284 792.387 80.1596 780.415 91.9107C768.727 103.382 762.884 117.372 762.884 133.879C762.884 150.107 768.727 164.096 780.415 175.847C792.387 187.319 806.782 193.054 823.601 193.054C840.419 193.054 854.672 187.319 866.359 175.847C878.331 164.096 884.318 150.107 884.318 133.879C884.318 117.372 878.331 103.382 866.359 91.9107Z" fill="url(#paint3_linear_219_18)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_219_18" x1="480" y1="-362.423" x2="480" y2="382" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stop-opacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="paint1_linear_219_18" x1="480" y1="-362.423" x2="480" y2="382" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stop-opacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="paint2_linear_219_18" x1="480" y1="-362.423" x2="480" y2="382" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stop-opacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="paint3_linear_219_18" x1="480" y1="-362.423" x2="480" y2="382" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stop-opacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg> */}

      <div className='max-w-[1620px] mx-auto flex flex-col gap-16 lg:flex-row justify-between w-full'>
        <div className='items-start flex flex-col gap-4'>
          <div className='h-12'>
            <Logo />
          </div>
          <div className='text-sm max-w-[30ch] leading-relaxed'>Pyro is a better way to host games. Instantly available, lag-free servers with unmatched value.</div>
        </div>
        <div className='flex flex-row gap-4'>
          <ul className='list-none flex flex-col gap-4 w-32'>
            <h2 className='text-brand font-bold text-sm'>
              Pyro For
            </h2>
            <li>
              <Link href='/coming-soon'>
                Minecraft
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Terarria
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Rust
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                GTA V
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Counter-Strike
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Valheim
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Garry's Mod
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Team Fortress 2
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Voice Servers
              </Link>
            </li>
          </ul>

          <ul className='list-none flex flex-col gap-4 w-32'>
            <h2 className='text-brand font-bold text-sm'>
              Hosting
            </h2>
            <li>
              <Link href='/coming-soon'>
                Pricing
              </Link>
            </li>
          </ul>

          <ul className='list-none flex flex-col gap-4 w-32'>
            <h2 className='text-brand font-bold text-sm'>
              Company
            </h2>
            <li>
              <Link href='/coming-soon'>
                About
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Contact
              </Link>
            </li>
            <li>
              <Link href='/coming-soon'>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='max-w-[1620px] w-full mx-auto mt-16 opacity-50 text-xs font-medium'>Copyright © 2024 Pyro Hosting. All rights reserved.</div>
    </footer>
  )
}

export default Footer