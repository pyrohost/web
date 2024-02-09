import Link from "next/link";
import Logo from "../Logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-auto h-full w-full px-8 py-8 lg:px-32 lg:py-24">
      {/* <div className='absolute w-full h-full inset-0 brightness-[4]' style={{
        // WebkitMaskImage: 'linear-gradient(black, transparent 99.9%)'
      }}>
        <div className='absolute w-full h-full inset-0 brightness-[4]' style={{
          WebkitMaskImage: 'linear-gradient(transparent, black 99%)'
        }}> */}
      <Image
        fill
        src="/img/footerlogo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none bg-repeat-x object-cover"
      />
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

      <div className="mx-auto flex w-full max-w-[1620px] flex-col justify-between gap-16 lg:flex-row">
        <div className="flex flex-col items-start gap-4">
          <div className="h-12">
            <Logo />
          </div>
          <div className="max-w-[30ch] text-sm leading-relaxed">
            Pyro is a better way to host games. Instantly available, lag-free
            servers with unmatched value.
          </div>
        </div>
        <div className="flex flex-col gap-16 md:flex-row md:gap-4">
          <ul className="flex w-32 list-none flex-col gap-4">
            <h2 className="text-sm font-bold text-brand">Pyro For</h2>
            <li>
              <Link href="/coming-soon">Minecraft</Link>
            </li>
            <li>
              <Link href="/coming-soon">Terarria</Link>
            </li>
            <li>
              <Link href="/coming-soon">Rust</Link>
            </li>
            <li>
              <Link href="/coming-soon">GTA V</Link>
            </li>
            <li>
              <Link href="/coming-soon">Counter-Strike</Link>
            </li>
            <li>
              <Link href="/coming-soon">Valheim</Link>
            </li>
            <li>
              <Link href="/coming-soon">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Garry's Mod
              </Link>
            </li>
            <li>
              <Link href="/coming-soon">Team Fortress 2</Link>
            </li>
            <li>
              <Link href="/coming-soon">Voice Servers</Link>
            </li>
          </ul>

          <ul className="flex w-32 list-none flex-col gap-4">
            <h2 className="text-sm font-bold text-brand">Hosting</h2>
            <li>
              <Link href="/coming-soon">Pricing</Link>
            </li>
          </ul>

          <ul className="flex w-32 list-none flex-col gap-4">
            <h2 className="text-sm font-bold text-brand">Company</h2>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/coming-soon">Contact</Link>
            </li>
            <li>
              <Link href="/coming-soon">Support</Link>
            </li>
          </ul>

          <ul className="flex w-32 list-none flex-col gap-4">
            <h2 className="text-sm font-bold text-brand">Policies</h2>
            <li>
              <Link href="/legal/cookies">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/legal/tos">Terms of Service</Link>
            </li>
            <li>
              <Link href="/legal/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        aria-hidden
        className="-16 mt-16 w-full border-t-2 border-solid border-t-[#ffffff11]"
      />
      <div className="mx-auto mb-4 mt-12 flex w-full max-w-[1620px] flex-row items-center justify-between text-xs font-medium opacity-50">
        <p>© 2024 Pyro</p>
        <div className="flex flex-row items-center justify-center gap-8">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/withPyro"
          >
            <svg
              height="16"
              stroke-linejoin="round"
              viewBox="0 0 16 16"
              width="16"
              aria-label=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/pyrohost"
          >
            <svg height="16" viewBox="0 0 14 14" width="16">
              <path
                d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://discord.gg/fxeRFRbhQh"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4">
              <path
                fill="currentColor"
                d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
