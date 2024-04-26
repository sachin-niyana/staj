import React, { useRef, useState } from 'react';
import aboutvideo from "../assets/videos/about_video.mp4";
import videoPoster from "../assets/images/png/video_poster.png";
import playbtn from "../assets/images/webp/play_btn.webp";
import videovec from "../assets/images/webp/video_vector.webp";

const Aboutus = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayBtn, setShowPlayBtn] = useState(true); // State to manage play button visibility
    const videoRef = useRef(null);

    const toggleVideo = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
            setShowPlayBtn(false);

        } else {
            video.pause();
            setIsPlaying(false);
            setShowPlayBtn(true); // Show play button when video is paused
        }
    };

    return (
        <div className='bg-skyblue pt-12 sm:pt-[100px] lg:pt-[200px] xl:pt-[322px] mt-[-15%] pb-12 sm:pb-[60px] md:pb-[80px] lg:pb-[120px]'>
            <div className='max-w-[1440px] mx-auto px-3'>
                <div className="flex flex-col-reverse justify-between xl:justify-start lg:flex-row items-center">
                    <div className='relative lg:mt-0 mt-8'>
                        {showPlayBtn && (
                            <button className='absolute z-20 top-[50%] start-[50%] rounded-[50%] translate-x-[-50%] translate-y-[-50%]' onClick={toggleVideo}>
                                <img className='max-w-[60px] xl:max-w-[90px] cursor-pointer hover:shadow-lg hover:shadow-black rounded-[50%] duration-300' src={playbtn} alt="playbtn" />
                            </button>
                        )}
                        <div >  <video className="relative video_width z-10 xl:h-[705px] max-w-[500px]  xl:max-w-[705px]  rounded-[18px] object-cover" ref={videoRef} src={aboutvideo} width={705} poster={videoPoster} onClick={toggleVideo}></video></div>
                        <img className='absolute bottom-[-12%] z-0 start-[-15%] max-w-[80px] md:max-w-[200px] lg:max-w-[313px]' src={videovec} alt="video" />

                    </div>
                    <div className='xl:ps-[95px] lg:ps-6'>
                        <p className='text-orange lg:text-start text-center'>About us</p>
                        <h2 className='text-darkblue ff-poppins font-bold text-[30px] sm:text-[45px] xl:text-xxl mt-3 leading-[113%] lg:text-start text-center'>Staj difference</h2>
                        <p className='text-darkblue leading-[144%] ff-poppins text-base xl:text-md max-w-[900px] lg:max-w-[640px] pt-[18px] lg:text-start text-center'>Discovering local artists and their underground events has always been challenging and time-consuming. With Staj, supporting local artists and event organizers becomes effortless. Access artist and event schedules, enjoy flexible tipping options, and explore the local arts culture effortlessly. Our goal is to help people easily connect with the local arts scene worldwide, providing instant access to the information they need through our user-friendly app.</p>
                        <p className='text-darkblue leading-[144%] ff-poppins text-base xl:text-md max-w-[900px] lg:max-w-[670px] pt-4 xl:pt-6 lg:text-start text-center'>Independent artists and event organizers lack support in various aspects - seeking better solutions for exposure, promotion, artist collaboration, and payment management. They have to use numerous tools to reach more people for each event, but get minimal results. Staj helps them manage event payments and personnel effectively. We aim to increase artists' and organizers’ earnings, reduce costs, and simplify their workflow. Our goal is to use technology to eliminate the 'starving artist' stereotype, empowering all artists to earn more effortlessly as essential societal contributors.</p>
                        <button className='bg-orange flex items-center lg:mx-0 mx-auto justify-center rounded-[30px] border-orange border text-white duration-300 hover:bg-white hover:text-orange mt-5 xl:mt-[60px] capitalize lg:w-[199px] w-[170px] h-[50px]  lg:h-[60px] font-semibold ff-poppins'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
