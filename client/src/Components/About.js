import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classNames from "classnames";
import { useRef, useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


function About() {
  const navigate = useNavigate();
  const bussinessSlider = useRef();
  const workSlider = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const moveRight = (slider) => {
    slider.current.slickNext();
  };

  const moveLeft = (slider) => {
    slider.current.slickPrev();
  };

  const [active, setActive] = useState("Home");
  const workSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },

      {
        breakpoint: 444,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const bussinessSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },

      {
        breakpoint: 444,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  // const testimonialsCard = [
  //   {
  //     title: "UI Soup",
  //     discription:
  //       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  //   },
  //   {
  //     title: "UI Soup",
  //     discription:
  //       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  //   },
  // ];

  const cardDetail = [
    {
      title: "Website Design",
      logoBg: "bg-[#FFDED4]",
      logo: "/photos/Headshot.png",
    },
    {
      title: "Web Development",
      logoBg: "bg-[#D4F0FF]",
      logo: "/assets/dreamagency/computerLogo.svg",
    },
    {
      title: "Marketing",
      logoBg: "bg-[#FFD4D4]",
      logo: "/assets/dreamagency/rocketLogo.svg",
    },
    {
      title: "Website Design",
      logoBg: "bg-[#FFDED4]",
      logo: "/assets/dreamagency/websiteLogo.svg",
    },
    {
      title: "Web Development",
      logoBg: "bg-[#D4F0FF]",
      logo: "/assets/dreamagency/computerLogo.svg",
    },
  ];

  const aboutUsData = [
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1700s, when an unknown printer took a galley of type and scrambled it make a type specimen book.",
  ];

  const templateCard = [
    {
      title: "3D NFT",
      img: "/photos/Headshot.png",
    },
    {
      title: "Crypto",
      img: "/assets/dreamagency/bgcrypto.png",
    },
    {
      title: "Advocate",
      img: "/assets/dreamagency/bgadvocate.png",
    },
    {
      title: "TBDesign",
      img: "/assets/dreamagency/bgtbdesign.png",
    },
  ];

  const Button = ({ className, onClick, label }) => {
    return (
      <button
        className={`bg-[#331B3B] rounded-[10px] text-[17px] text-white uppercase font-hindVadodara ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="bg-white">
      <div className="overflow-hidden">
        <nav className="px-5 sm:px-[50px] py-[26.36px] flex justify-between items-center relative max-w-screen-2xl mx-auto">
          <div className="xl:mr-56 cursor-pointer">
            <p className="text-2xl  font-bold font-playFairDisplay leading-7 tracking-[0.01]">
              GearUp
            </p>
          </div>
          <ul className="hidden md:flex gap-4 items-center">
            <div className="relative cursor-pointer z-20">
              {/* <svg
                width="46"
                height="49"
                viewBox="0 0 46 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.7347 35.3674C37.8086 40.3349 32.7551 44.2964 27.1723 46.2689C21.5909 48.2409 15.5957 48.1894 10.7238 45.3196C5.8519 42.4498 2.90043 37.2311 1.91937 31.3935C0.938064 25.5544 1.95301 19.2139 4.87912 14.2465C7.80523 9.27901 12.8587 5.31748 18.4415 3.34498C24.0229 1.37298 30.0181 1.42444 34.89 4.29427C39.7619 7.16409 42.7134 12.3827 43.6945 18.2204C44.6758 24.0595 43.6608 30.4 40.7347 35.3674Z"
                  stroke="#331B3B"
                  strokeOpacity="0.64"
                  strokeWidth="2"
                />
              </svg> */}
              <div className="absolute top-4 left-4 cursor-pointer">
                <svg
                  width="11"
                  height="21"
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <g clipPath="url(#clip0_8_35)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.62817 20.8071V11.8071H10.3606L10.8069 7.80713H7.62817V5.85889C7.62817 4.82889 7.65449 3.80713 9.09378 3.80713H10.5516V0.947266C10.5516 0.904266 9.29937 0.807129 8.03256 0.807129C5.38688 0.807129 3.73029 2.46432 3.73029 5.50732V7.80713H0.806885V11.8071H3.73029V20.8071H7.62817Z"
                      fill="#331B3B"
                    />
                  </g> */}
                  <defs>
                    <clipPath id="clip0_8_35">
                      <rect
                        width="10"
                        height="20"
                        fill="white"
                        transform="translate(0.806885 0.807129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="relative cursor-pointer z-20">
              <svg
                width="46"
                height="49"
                viewBox="0 0 46 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.7347 35.3674C37.8086 40.3349 32.7551 44.2964 27.1723 46.2689C21.5909 48.2409 15.5957 48.1894 10.7238 45.3196C5.8519 42.4498 2.90043 37.2311 1.91937 31.3935C0.938064 25.5544 1.95301 19.2139 4.87912 14.2465C7.80523 9.27901 12.8587 5.31748 18.4415 3.34498C24.0229 1.37298 30.0181 1.42444 34.89 4.29427C39.7619 7.16409 42.7134 12.3827 43.6945 18.2204C44.6758 24.0595 43.6608 30.4 40.7347 35.3674Z"
                  stroke="#331B3B"
                  strokeOpacity="0.64"
                  strokeWidth="2"
                />
              </svg>
              <div className="absolute top-4 left-4">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8_42)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.2566 18.8071H14.5582V12.5079C14.5582 10.7808 13.9019 9.81562 12.5349 9.81562C11.0478 9.81562 10.2709 10.82 10.2709 12.5079V18.8071H6.70659V6.80713H10.2709V8.42353C10.2709 8.42353 11.3425 6.44051 13.889 6.44051C16.4343 6.44051 18.2566 7.99483 18.2566 11.2095V18.8071ZM2.45444 5.23582C1.24038 5.23582 0.256592 4.24432 0.256592 3.02148C0.256592 1.79864 1.24038 0.807129 2.45444 0.807129C3.6685 0.807129 4.6517 1.79864 4.6517 3.02148C4.6517 4.24432 3.6685 5.23582 2.45444 5.23582ZM0.614017 18.8071H4.33062V6.80713H0.614017V18.8071Z"
                      fill="#331B3B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_42">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0.256592 0.807129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="relative cursor-pointer z-20">
              {/* <svg
                width="46"
                height="49"
                viewBox="0 0 46 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.7347 35.3674C37.8086 40.3349 32.7551 44.2964 27.1723 46.2689C21.5909 48.2409 15.5957 48.1894 10.7238 45.3196C5.8519 42.4498 2.90043 37.2311 1.91937 31.3935C0.938064 25.5544 1.95301 19.2139 4.87912 14.2465C7.80523 9.27901 12.8587 5.31748 18.4415 3.34498C24.0229 1.37298 30.0181 1.42444 34.89 4.29427C39.7619 7.16409 42.7134 12.3827 43.6945 18.2204C44.6758 24.0595 43.6608 30.4 40.7347 35.3674Z"
                  stroke="#331B3B"
                  strokeOpacity="0.64"
                  strokeWidth="2"
                />
              </svg> */}
              <div className="absolute top-3 left-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8_46)">
                    <path
                      d="M12.7065 3.12733C15.8612 3.12733 16.2315 3.14139 17.4784 3.19764C18.6315 3.24921 19.2549 3.44139 19.6721 3.60546C20.2252 3.82108 20.619 4.07421 21.0315 4.48671C21.444 4.89921 21.7018 5.29296 21.9127 5.84608C22.0721 6.26327 22.269 6.88671 22.3206 8.03983C22.3768 9.28671 22.3909 9.65702 22.3909 12.8117C22.3909 15.9664 22.3768 16.3367 22.3206 17.5836C22.269 18.7367 22.0768 19.3601 21.9127 19.7773C21.6971 20.3305 21.444 20.7242 21.0315 21.1367C20.619 21.5492 20.2252 21.807 19.6721 22.018C19.2549 22.1773 18.6315 22.3742 17.4784 22.4258C16.2315 22.482 15.8612 22.4961 12.7065 22.4961C9.55181 22.4961 9.18149 22.482 7.93462 22.4258C6.78149 22.3742 6.15806 22.182 5.74087 22.018C5.18774 21.8023 4.79399 21.5492 4.38149 21.1367C3.96899 20.7242 3.71118 20.3305 3.50024 19.7773C3.34087 19.3601 3.14399 18.7367 3.09243 17.5836C3.03618 16.3367 3.02212 15.9664 3.02212 12.8117C3.02212 9.65702 3.03618 9.28671 3.09243 8.03983C3.14399 6.88671 3.33618 6.26327 3.50024 5.84608C3.71587 5.29296 3.96899 4.89921 4.38149 4.48671C4.79399 4.07421 5.18774 3.81639 5.74087 3.60546C6.15806 3.44608 6.78149 3.24921 7.93462 3.19764C9.18149 3.13671 9.55181 3.12733 12.7065 3.12733ZM12.7065 0.999207C9.50024 0.999207 9.09712 1.01327 7.83618 1.06952C6.57993 1.12577 5.72212 1.32733 4.97212 1.61796C4.19399 1.91796 3.53774 2.32577 2.88149 2.98202C2.22524 3.63827 1.82212 4.29921 1.51743 5.07264C1.22681 5.82264 1.02524 6.68046 0.968994 7.94139C0.912744 9.19764 0.898682 9.60077 0.898682 12.807C0.898682 16.0133 0.912744 16.4164 0.968994 17.6773C1.02524 18.9336 1.22681 19.7914 1.51743 20.5461C1.81743 21.3242 2.22524 21.9805 2.88149 22.6367C3.53774 23.293 4.19868 23.6961 4.97212 24.0008C5.72212 24.2914 6.57993 24.493 7.84087 24.5492C9.10181 24.6055 9.50024 24.6195 12.7112 24.6195C15.9221 24.6195 16.3206 24.6055 17.5815 24.5492C18.8377 24.493 19.6956 24.2914 20.4502 24.0008C21.2284 23.7008 21.8846 23.293 22.5409 22.6367C23.1971 21.9805 23.6002 21.3195 23.9049 20.5461C24.1956 19.7961 24.3971 18.9383 24.4534 17.6773C24.5096 16.4164 24.5237 16.018 24.5237 12.807C24.5237 9.59608 24.5096 9.19764 24.4534 7.93671C24.3971 6.68046 24.1956 5.82264 23.9049 5.06796C23.6049 4.28983 23.1971 3.63358 22.5409 2.97733C21.8846 2.32108 21.2237 1.91796 20.4502 1.61327C19.7002 1.32264 18.8424 1.12108 17.5815 1.06483C16.3159 1.01327 15.9127 0.999207 12.7065 0.999207Z"
                      fill="#331B3B"
                    />
                    <path
                      d="M12.7065 6.74139C9.35962 6.74139 6.64087 9.45546 6.64087 12.807C6.64087 16.1586 9.35962 18.8726 12.7065 18.8726C16.0534 18.8726 18.7721 16.1539 18.7721 12.807C18.7721 9.46014 16.0534 6.74139 12.7065 6.74139ZM12.7065 16.7445C10.5315 16.7445 8.76899 14.982 8.76899 12.807C8.76899 10.632 10.5315 8.86952 12.7065 8.86952C14.8815 8.86952 16.644 10.632 16.644 12.807C16.644 14.982 14.8815 16.7445 12.7065 16.7445Z"
                      fill="#331B3B"
                    />
                    <path
                      d="M19.0112 7.91798C19.793 7.91798 20.4268 7.28418 20.4268 6.50236C20.4268 5.72053 19.793 5.08673 19.0112 5.08673C18.2294 5.08673 17.5956 5.72053 17.5956 6.50236C17.5956 7.28418 18.2294 7.91798 19.0112 7.91798Z"
                      fill="#331B3B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_46">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.706543 0.807129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </ul>
          <ul className="h-10 w-12 block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              onClick={() => setShowMenu(true)}
              className=" h-10 w-12"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
          </ul>
          <div className="absolute xl:-right-10 xl:top-0 -right-56 -top-20 hidden md:block">
            <svg
              width="570"
              height="712"
              viewBox="0 0 570 712"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M267.038 685.5C-191.362 549.5 42.7044 172.167 217.038 0.5L436.538 -61.5L779.038 -108L867.538 168.5C858.371 397.5 725.438 821.5 267.038 685.5Z"
                fill="#FEC828"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div
            className={classNames(
              `transition-all ease-in-out z-50`,
              showMenu
                ? "md:hidden flex flex-col min-h-screen h-max w-full left-0 top-0 fixed bg-[#2D4263]"
                : "md:hidden flex flex-col h-screen w-full top-0 left-full fixed bg-[#2D4263]"
            )}
          >
            <div
              className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={"/assets/dreamagency/closed.svg"}
                alt="close"
                className="h-7 cursor-pointer"
              />
            </div>
          </div>
        </nav>
        <div className="mx-auto max-w-screen-2xl">
          <div className="px-5 flex flex-col md:flex-row md:justify-between items-center relative sm:pl-[50px] mt-10 lg:mt-20 gap-7 md:gap-0 md:mb-4 mb-8">
            <div className="flex flex-col items-center md:items-start gap-7">
              <div className="w-full text-center md:text-left max-w-xl overflow-hidden text-4xl sm:text-5xl lg:text-[87px] text-gray-800 font-bold font-hindVadodara leading-[99.8%] tracking-[0.01]">
                <h1 className="whitespace-nowrap">Your Gear</h1>
                <p />
                <span className="font-light">
                  Your Passion
                  <br />
                  <span className="relative w-full z-10">
                    Shared With Others
                    <span className="bg-[#FDC221] lg:h-5 h-2 sm:bottom-2.5 bottom-1.5 lg:bottom-4 -z-[1] left-0 absolute w-full" />
                  </span>
                </span>
              </div>
              <div className="max-w-[515px] flex flex-col gap-8">
                <span className="text-[17px] Light font-normal font-hindVadodara leading-[146.3%] tracking-wide text-center md:text-left">
                  Say goodbye to the limitations of traditional department stores and embrace the freedom of peer-to-peer gear exchange. Whether you're an outdoor enthusiast, a fitness junkie, or a hobbyist looking to explore new passions, our platform empowers everyone to share their gear and expertise seamlessly. Join us in revolutionizing the way we access and enjoy recreational gear, because adventure knows no bounds when shared among friends.
                </span>

                <button
                  className="self-center md:self-start max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide"
                  onClick={() => navigate('/signup')} // Updated to use navigate
                  style={{ textDecoration: 'underline' }}
                >
                  GET STARTED + SIGN UP
                </button>
              </div>
            </div>
            <div>
              <img
                src={"/photos/ChavezBike.png"}
                alt="Home"
                className="h-[800px]"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </div>
          <div className="w-full relative sm:h-[650px] h-[500px] py-28 overflow-hidden md:mt-28 mt-14">
            <div className="absolute right-16 top-56 h-96 p-2 w-96 border-dashed border-[#000000] border-[1px] rounded-full"></div>
            <div className="max-w-[1293px] mr-3 w-full sm:h-[578px] h-[500px] bg-[#ECF7FF] rounded-tr-[137px] sm:rounded-tr-[400px] absolute top-0 z-10"></div>
            <div className="!z-30 absolute top-0 h-full w-full flex flex-col gap-24 py-24">
              <div className=" flex flex-col sm:gap-16 md:gap-24 gap-12">
                <div className="mx-auto md:text-5xl text-4xl text-gray-800 font-hindVadodara -tracking-[0.01] leading-[106.3%]">
                  <h1 className=" font-bold self-center text-center">
                    About the Developer
                  </h1>
                  <span className="font-light self-center">
                    Kyle
                    <span className="relative ml-1">
                      Brackman
                      <span className="bg-[#FDC221] md:h-2.5 h-2 bottom-1.5 md:bottom-2 -z-[1] right-0 absolute md:w-48 w-[145px]" />
                    </span>
                  </span>
                </div>
                <div className="lg:pl-32 sm:pl-8 px-5 flex gap-12">
                  <div className="md:flex gap-4 items-end hidden">
                    {/* <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180 cursor-pointer"
                      onClick={() => moveLeft(bussinessSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg> */}
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() => moveRight(bussinessSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="dream-agency-bussiness flex justify-center">
                    {/* <Slider {...bussinessSliderSetting} ref={bussinessSlider}>
                      {cardDetail?.map((card, index) => (
                        <div
                          key={index}
                          className="max-w-[308px] w-full p-[18px] flex flex-col justify-start bg-white shadow-3xl rounded-[10px] overflow-hidden"
                        >
                          <div
                            className={`w-[52px] h-12 flex justify-center items-center rounded-[10px] ${card?.logoBg}`}
                          >
                            <img src={card.logo}></img>
                          </div>
                          <div>
                            <span className="text-base mt-3 overflow-hidden uppercase font-bold font-hindVadodara leading-[137.3%] -tracking-tighter">
                              {card.title}
                            </span>
                          </div>
                          <div>
                            <span className="text-[15px] mt-1.5 max-w-[230px] h-full max-h-16 Light font-light font-hindVadodara leading-[145.3%] tracking-[0.02]">
                              Lorem Ipsum has been the industry&apos;s standard
                              dummy text ever since the 1500s.
                            </span>
                          </div>
                        </div>
                      ))}
                    </Slider> */}
<div className="flex items-center">
  <div className="text-[17px] Light font-normal font-hindVadodara leading-[146.3%] tracking-wide md:text-right max-w-[400px]">
    <span>
      Kyle Brackman is a Software Engineer, Climber, and Outdoor Enthusiast. He has a passion for building and creating, and is excited to bring that passion to the GearUp platform. He is excited to build a community to encourage more people to stay active, get outdoors, and create more sustainability while fighting against wasteful consumerism, ultimately fostering a culture of outdoor appreciation.
    </span>
  </div>
  <img src="/photos/Headshot.png" className="ml-4" style={{height:500, borderRadius: 40}}/>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center w-full px-5 sm:px-[50px] flex-col-reverse md:flex-row mt-11 sm:mt-0 gap-16 md:gap-4">
            <div className="relative">
              <img
                src="/assets/dreamagency/aboutus.png"
                className="md:h-full sm:h-[462px] h-[278px] !z-40 relative"
                alt="about us"
              />
            </div>
          </div> */}
          {/* <div className="w-full relative h-[725px] md:h-[636px] py-24 overflow-hidden md:mt-20 mt-12">
            <div className="max-w-[1300px] ml-3 w-full h-full bg-[#FFDED4] rounded-tl-[137px] sm:rounded-tl-[400px] absolute top-0 right-0 z-10"></div>
            <div className="!z-30 absolute top-0 h-full w-full flex flex-col gap-24 py-24 md:py-40">
              <div className=" flex flex-col gap-8 sm:gap-10 md:gap-24 mx-auto">
                <div className="flex flex-col gap-5 mx-5">
                  <div className="relative md:absolute lg:left-32 md:left-5 md:top-10">
                    <h1 className="lg:text-5xl text-3xl text-gray-800 font-bold font-hindVadodara leading-[106.3%] -tracking-[0.01] self-center">
                      Our Recent Work
                      <p />
                      <span className="font-light">
                        By Our
                        <span className="relative z-10">
                          Experts
                          <span className="bg-[#FDC221] h-2 bottom-1.5 lg:bottom-[9px] -z-[1] right-0 absolute lg:w-40 w-[104px]" />
                        </span>
                      </span>
                    </h1>
                  </div>
                  <span className="relative md:absolute text-lg font-normal max-w-md xl:max-w-lg w-full md:right-12 md:top-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis, aperiam facere labore ipsum, vitae impedit temporibus
                    ratione quae laborum itaque harum nihil maiores doloremque
                    minus debitis et nisi explicabo non.
                  </span>
                </div>
                <div className="lg:pl-64 sm:pl-8 px-5 flex gap-12">
                  <div className="md:flex gap-4 items-end hidden">
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180 cursor-pointer"
                      onClick={() => moveLeft(workSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() => moveRight(workSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex dream-agency-work">
                    <Slider {...workSliderSetting} ref={workSlider}>
                      {templateCard?.map((card, index) => (
                        <div
                          className="max-w-lg w-full p-[18px] justify-start bg-white shadow-3xl rounded-[10px] self-center"
                          key={index}
                        >
                          <div className="h-full">
                            <img
                              src={card.img}
                              alt="card image"
                              className="h-48 w-full object-cover"
                            />
                          </div>
                          <div className="mt-5 flex justify-between">
                            <span className="text-2xl font-bold text-[#331B3B]">
                              {card.title}
                            </span>
                            <div className="rounded-[100px] border-[2px] text-sm border-[#343434] py-0.5 px-3 w-28 whitespace-nowrap h-max cursor-pointer text-center">
                              View work
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col items-center justify-center w-full gap-14 md:mt-[75px] mt-9 px-5">
            <div className=" text-center w-full text-3xl md:text-5xl text-[#331B3B] font-hindVadodara -tracking-[0.01em]">
              <h1 className="whitespace-nowrap font-bold leading-[99.8%] text-center">
                Welcome to the Beta
              </h1>
              <span className="md:whitespace-nowrap !text-center font-light mt-1 max-w-sm md:max-w-xl mx-auto">
                You're
                <span className="relative z-10 ml-2">
                  Early
                  <span className="bg-[#FDC221] h-2 md:bottom-2 bottom-1 -z-[1] absolute w-full right-[100px] sm:right-0 left-0" />
                </span>
              </span>
            </div>

          </div>
        </div>
        <div className="bg-black rounded-tr-[158px] relative pt-[66px] mt-[92px] w-full">
          <div className="w-full flex md:gap-4 gap-8 sm:justify-between flex-col md:flex-row max-w-screen-2xl mx-auto pb-[76px] sm:pl-12 sm:pr-12 px-5 lg:pr-[152px]">
            <div className="flex flex-col gap-4 justify-start">
              <h1 className="text-4xl text-white font-playFairDisplay tracking-[0.01] w-fit cursor-pointer">
                GearUp
              </h1>
              <p className="text-base max-w-[439px] w-full text-white font-hindVadodara leading-[159.3%] font-normal tracking-wide">

                GearUp, currently in beta and being developed by a solo developer, aims to revolutionize the gear rental industry. It strives to offer superior quality gear at more accessible prices while fostering a sense of community and shared passion among users.
              </p>
              {/* <p className="text-base text-white font-hindVadodara leading-[159.3%] font-semibold tracking-wide uppercase">
                GET IN TOUCH
              </p>
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  className="bg-transparent p-3 border focus:outline-none border-white text-white"
                  placeholder="Enter Your Email"
                  id="email"
                  autoComplete="off"
                />
                <Button
                  className="max-w-[143px] py-3.5 w-full flex justify-center items-center !bg-white text-base !text-black font-semibold font-hindVadodara leading-[159.3%] tracking-wide rounded-none"
                  label="Send"
                />
              </div> */}
            </div>
            {/* <div className="relative">
              <div className="max-w-[197px] w-full flex flex-col justify-start px-2.5 py-[7px] bg-white shadow-4xl absolute top-[26px] left-8">
                <p className="font-bold text-[#414141] text-base leading-[134.8%]">
                  Texas
                </p>
                <p className="font-normal text-[#414141] text-base leading-[134.8%]">
                  United States
                </p>
                <p className="font-normal text-[#51A0DC] text-sm leading-[159.8%] cursor-pointer">
                  View Larger Map
                </p>
              </div>
              <img src={"/assets/dreamagency/mapImage.svg"} alt="map" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
