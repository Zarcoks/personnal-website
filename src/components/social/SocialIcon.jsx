import React from 'react';

export default function SocialIcon({ color, url, name, svg_path }) {
    return (
        <a 
            href={url} 
            target="_blank" 
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className={`text-${color} hover:text-lime-600 transition-colors duration-300`}>
                <path d={svg_path}/>           
            </svg>
        </a>
    );
};
