import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

import "./Icons.scss";

export const FacebookIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
    >
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z"
      />
    </svg>
  );
}

export const InstagramIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
    >
      <path
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      />
    </svg>
  );
}

export const ChevronIcon = ({isOpen}) => {

  let chevronRef = useRef(null);

  useEffect(() => {
    // console.log('chev: ', isOpen)
    if(isOpen) {
      TweenMax.fromTo(
        chevronRef,
        0.35,
        {
          rotation: 0
        },
        {
          rotation: 90,
          ease: "Power2.easeInOut",
        }
      );
    } else {
      TweenMax.fromTo(
        chevronRef,
        0.35,
        {
          rotation: 90
        },
        {
          rotation: 0,
          ease: "Power2.easeInOut",
          clearProps: "transform"
        }
      );
    }
  }, [isOpen]);
  
  return (
    // <Tween
    //   to={{ rotation: 0 }}
    //   from={{ rotation: 90 }}
    //   duration={isOpen ? 0.45 : 0.3}
    //   ease="Power2.easeInOut"
    //   playState={isOpen ? "reverse" : "play"}
    // >
      <svg
        ref={element => (chevronRef = element)}
        aria-hidden="true"
        viewBox="0 0 320 512"
      >
        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
      </svg>
    // </Tween>
  );
}

export const MenuIcon = () => {
  return (
    <svg viewBox="0 0 448 382" aria-hidden="true">
      <path d="M418.23 62H29.77A29.86 29.86 0 010 32.23v-2.46A29.86 29.86 0 0129.77 0h388.46A29.86 29.86 0 01448 29.77v2.46A29.86 29.86 0 01418.23 62zM418.23 222H29.77A29.86 29.86 0 010 192.23v-2.46A29.86 29.86 0 0129.77 160h388.46A29.86 29.86 0 01448 189.77v2.46A29.86 29.86 0 01418.23 222zM418.23 382H29.77A29.86 29.86 0 010 352.23v-2.46A29.86 29.86 0 0129.77 320h388.46A29.86 29.86 0 01448 349.77v2.46A29.86 29.86 0 01418.23 382z" />
    </svg>
  );
}

export const OldMenuIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </svg>
  );
}

export const Facebook2Icon = () => {
  return (
    <svg viewBox="0 0 470.513 470.513">
      <path d="M271.521 154.17v-40.541c0-6.086.28-10.8.849-14.13.567-3.335 1.857-6.615 3.859-9.853 1.999-3.236 5.236-5.47 9.706-6.708 4.476-1.24 10.424-1.858 17.85-1.858h40.539V0h-64.809c-37.5 0-64.433 8.897-80.803 26.691-16.368 17.798-24.551 44.014-24.551 78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086h-73.37z" />
    </svg>
  );
}

export const Instagram2Icon = () => {
  return (
  <svg viewBox="0 0 169.063 169.063">
    <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z" />
    <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z" />
  </svg>
  );
}

export const FacebookIconColored = props => {
  return (
    <svg viewBox="0 0 408.788 408.788" width="1rem" height="1rem" {...props}>
      <path
        d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 01-8.954-8.92l-.182-47.087a8.955 8.955 0 018.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 018.955 8.955v39.704a8.955 8.955 0 01-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 01-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
        fill="#475993"
      />
    </svg>
  );
};

export const InstagramIconColored = props => {
  return (
    <svg viewBox="0 0 551.034 551.034">
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={275.517}
        y1={4.57}
        x2={275.517}
        y2={549.72}
        gradientTransform="matrix(1 0 0 -1 0 554)"
      >
        <stop offset={0} stopColor="#e09b3d" />
        <stop offset={0.3} stopColor="#c74c4d" />
        <stop offset={0.6} stopColor="#c21975" />
        <stop offset={1} stopColor="#7024c4" />
      </linearGradient>
      <path
        d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z"
        fill="url(#prefix__a)"
      />
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={275.517}
        y1={4.57}
        x2={275.517}
        y2={549.72}
        gradientTransform="matrix(1 0 0 -1 0 554)"
      >
        <stop offset={0} stopColor="#e09b3d" />
        <stop offset={0.3} stopColor="#c74c4d" />
        <stop offset={0.6} stopColor="#c21975" />
        <stop offset={1} stopColor="#7024c4" />
      </linearGradient>
      <path
        d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z"
        fill="url(#prefix__b)"
      />
      <linearGradient
        id="prefix__c"
        gradientUnits="userSpaceOnUse"
        x1={418.31}
        y1={4.57}
        x2={418.31}
        y2={549.72}
        gradientTransform="matrix(1 0 0 -1 0 554)"
      >
        <stop offset={0} stopColor="#e09b3d" />
        <stop offset={0.3} stopColor="#c74c4d" />
        <stop offset={0.6} stopColor="#c21975" />
        <stop offset={1} stopColor="#7024c4" />
      </linearGradient>
      <circle cx={418.31} cy={134.07} r={34.15} fill="url(#prefix__c)" />
    </svg>
  );
}