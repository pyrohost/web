const BRAND_COLOR = '#fa4e49';
const REGULAR_COLOR = '#646464';

export interface HugeIconProps {
    fill?: 'brand' | 'regular';
    className?: string;
}

export const CpuIcon = (props: HugeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
        >
            <path
                d='M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinejoin='round'
            />
            <path d='M9.5 2V4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M14.5 2V4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M9.5 20V22' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
                d='M14.5 20V22'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M13 9L9 13' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
                d='M15 13L13 15'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M22 14.5L20 14.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M4 9.5L2 9.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M4 14.5L2 14.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M22 9.5L20 9.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export const DatabaseIcon = (props: HugeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
        >
            <ellipse cx='12' cy='5' rx='8' ry='3' stroke='currentColor' strokeWidth='1.5' />
            <path
                d='M7 10.8418C7.60158 11.0226 8.27434 11.1716 9 11.2817'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <path
                d='M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12'
                stroke='currentColor'
                strokeWidth='1.5'
            />
            <path
                d='M7 17.8418C7.60158 18.0226 8.27434 18.1716 9 18.2817'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <path
                d='M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5'
                stroke='currentColor'
                strokeWidth='1.5'
            />
        </svg>
    );
};

export const CloudIcon = (props: HugeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
        >
            <path
                d='M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export const GithubIcon = (props: HugeIconProps) => {
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
        fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
    >
        <path
            d='M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>;
};

export const BlockchainIcon = (props: HugeIconProps) => {
    return <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
        fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
    >
        <path
            d='M12 19C12.2094 19 12.4041 18.9011 12.7934 18.7032L15.9228 17.1128C17.3076 16.4091 18 16.0572 18 15.5V8.5M12 19C11.7906 19 11.5959 18.9011 11.2066 18.7032L8.07717 17.1128C6.69239 16.4091 6 16.0572 6 15.5V8.5M12 19V12M18 8.5C18 7.94278 17.3076 7.59091 15.9228 6.88716L12.7934 5.29679C12.4041 5.09893 12.2094 5 12 5C11.7906 5 11.5959 5.09893 11.2066 5.29679L8.07717 6.88716C6.69239 7.59091 6 7.94278 6 8.5M18 8.5C18 9.05722 17.3076 9.40909 15.9228 10.1128L12.7934 11.7032C12.4041 11.9011 12.2094 12 12 12M6 8.5C6 9.05722 6.69239 9.40909 8.07717 10.1128L11.2066 11.7032C11.5959 11.9011 11.7906 12 12 12'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinejoin='round'
        />
        <path
            d='M13.1901 21.576L17.8842 19.3041C19.9614 18.2987 21 17.796 21 17V7C21 6.20397 19.9614 5.70129 17.8842 4.69594L13.1901 2.42399L13.1901 2.42398C12.6061 2.14133 12.3141 2 12 2C11.6859 2 11.3939 2.14133 10.8099 2.42399L6.11576 4.69594C4.03859 5.70129 3 6.20397 3 7V17C3 17.796 4.03858 18.2987 6.11572 19.304L6.11576 19.3041L10.8099 21.576C11.3939 21.8587 11.6859 22 12 22C12.3141 22 12.6061 21.8587 13.1901 21.576Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinejoin='round'
        />
    </svg>;
};

export const HardDriveIcon = (props: HugeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
        >
            <path
                d='M20.7104 8.70122L21.9186 12.7288C21.9578 12.8592 21.9773 12.9244 21.9879 12.9914L21.9908 13.0118C22 13.079 22 13.147 22 13.2831C22 16.7797 22 18.528 20.9812 19.6669C20.8824 19.7774 20.7774 19.8824 20.6669 19.9812C19.528 21 17.7797 21 14.2831 21H9.71685C6.22026 21 4.47197 21 3.33311 19.9812C3.22259 19.8824 3.11765 19.7774 3.01877 19.6669C2 18.528 2 16.7797 2 13.2831C2 13.147 2 13.079 2.00915 13.0118L2.01215 12.9914C2.02269 12.9244 2.04225 12.8592 2.08136 12.7288L3.28963 8.70122C4.11355 5.95484 4.5255 4.58166 5.5884 3.79083C6.6513 3 8.08495 3 10.9522 3H13.0478C15.9151 3 17.3487 3 18.4116 3.79083C19.4745 4.58166 19.8865 5.95484 20.7104 8.70122Z'
                stroke='currentColor'
                strokeWidth='1.5'
            />
            <path d='M2 13H22' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
            <path
                d='M17.9888 17H18M13 17H13.0112'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export const UserHeart = (props: HugeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
        >
            <path
                d='M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.53058 14.3187 9.7927 13.8404 12 14.0466'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z'
                stroke='currentColor'
                strokeWidth='1.5'
            />
            <path
                d='M15.015 15.3866C16.0876 14.7469 17.0238 15.0047 17.5863 15.4153C17.8169 15.5837 17.9322 15.6679 18 15.6679C18.0678 15.6679 18.1831 15.5837 18.4137 15.4153C18.9762 15.0047 19.9124 14.7469 20.985 15.3866C22.3928 16.2261 22.7113 18.9958 19.4642 21.3324C18.8457 21.7775 18.5365 22 18 22C17.4635 22 17.1543 21.7775 16.5358 21.3324C13.2887 18.9958 13.6072 16.2261 15.015 15.3866Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
            />
        </svg>
    );
};

export const SearchIcon = (props: HugeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            fill={props.fill === 'brand' ? BRAND_COLOR : REGULAR_COLOR}
        >
            <path d='M14 14L16.5 16.5' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
            <path
                d='M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <path
                d='M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinejoin='round'
            />
        </svg>
    );
};
