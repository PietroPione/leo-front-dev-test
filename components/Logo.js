import React from 'react';

export default function Logo({ color, className = '', style = {} }) {
    return (
        <svg
            viewBox="0 0 168 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={className}
            style={style}
        >
            <g clipPath="url(#clip0_0_387)">
                <path d="M127.365 71.5671C147.23 72.3038 164.914 58.0377 166.868 36.9095C168.822 15.7767 154.301 0.829446 134.441 0.0881061C134.167 0.0788393 133.899 0.0834727 133.626 0.0788393C117.41 -0.393765 112.062 1.18158 92.7896 6.89453C64.8124 15.1883 51.7314 5.04118 30.0284 3.64653C11.7196 2.46965 -0.000122679 13.9187 -0.00012359 34.7642C-0.000124787 62.1521 15.0118 68.5276 30.2507 67.0959C44.3597 65.7708 58.3529 58.9551 68.9613 58.3157C89.0019 57.1064 103.944 70.6914 127.365 71.5625L127.365 71.5671Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_0_387">
                    <rect width="71.5902" height="167.044" fill="white" transform="translate(167.044) rotate(90)"/>
                </clipPath>
            </defs>
        </svg>
    );
}