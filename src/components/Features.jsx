import React from 'react'
import { FeaturecardsData, FeaturecardsData2, FeaturecardsData3 } from './common/Helper';
import { useState } from 'react';
const Features = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='py-[120px]'>
            <div className='max-w-[1464px] mx-auto px-3'>
                <p className='text-orange ff-poppins text-md text-center'>Features</p>
                <h2 className='text-center text-darkblue ff-poppins font-bold text-xxl'>How it works</h2>

                <div className="flex overflow-x-auto justify-between py-[6px] mt-[60px] items-center border px-[6px] border-[#d7d7d7] rounded-[48px] mx-auto max-w-[640px]">
                    <div
                        className={`xl:mr-4 px-4 py-1 duration-300 lg:py-2 ${activeTab === 'tab1' ? 'text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue' : 'bg-white text-darkblue'}`}
                        onClick={() => handleTabChange('tab1')}
                    >
                        <button className='text-center text-md ff-poppins font-semibold whitespace-nowrap text-darkblue'>
                            For Fans
                        </button>
                    </div>
                    <div
                        className={` xl:mr-4 px-4 py-1 duration-300 lg:py-2 ${activeTab === 'tab2' ? 'text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue' : 'bg-white text-darkblue'}`}
                        onClick={() => handleTabChange('tab2')}
                    >
                        <button className='text-center text-md ff-poppins whitespace-nowrap font-semibold  text-darkblue'>
                            For Artists
                        </button>
                    </div>


                    <div
                        className={`px-4 py-1 duration-300 lg:py-2 ${activeTab === 'tab3' ? 'text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue' : 'mr-4 bg-white text-darkblue'}`}
                        onClick={() => handleTabChange('tab3')}
                    >
                        <button className='text-center text-md ff-poppins whitespace-nowrap font-semibold  text-darkblue'>
                            For Event Organizers
                        </button>
                    </div>
                </div>

                {activeTab === 'tab1' && <div>
                    <div className="flex flex-wrap justify-center flex-row mt-[60px] gap-5 lg:gap-0 -mx-3">
                        {FeaturecardsData.map((card, index) => (
                            <div key={index} className="lg:w-3/12 sm:4/12 sm:6/12 lg:px-3">
                                <div className="flex justify-center mx-[3px] feature-card h-full max-w-[338px] min-h-[344px] flex-col px-6 items-center py-8 xl:py-12 rounded-[12px]">
                                    <img className="max-w-[90px]" src={card.image} alt="mobile" />
                                    <p className="ff-poppins font-semibold text-darkblue xl:mt-9 mt-5 text-[20px] xl:text-lg">{card.title}</p>
                                    <p className="mt-2 xl:mt-3 ff-poppins fs-md text-center max-w-[260px]">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
                {activeTab === 'tab2' && <div>
                    <div className="flex flex-wrap justify-center flex-row mt-[60px] gap-5 lg:gap-0 -mx-3">
                        {FeaturecardsData2.map((card, index) => (
                            <div key={index} className="lg:w-3/12 sm:4/12 sm:6/12 lg:px-3">
                                <div className="flex justify-center mx-[3px] feature-card h-full max-w-[338px] min-h-[344px] flex-col px-6 items-center py-8 xl:py-12 rounded-[12px]">
                                    <img className="max-w-[90px]" src={card.image} alt="mobile" />
                                    <p className="ff-poppins font-semibold text-darkblue xl:mt-9 mt-5 text-[20px] xl:text-lg">{card.title}</p>
                                    <p className="mt-2 xl:mt-3 ff-poppins fs-md text-center max-w-[260px]">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
                {activeTab === 'tab3' && <div>
                    <div className="flex flex-wrap justify-center flex-row mt-[60px] gap-5 lg:gap-0 -mx-3">
                        {FeaturecardsData3.map((card, index) => (
                            <div key={index} className="lg:w-3/12 sm:4/12 sm:6/12 lg:px-3">
                                <div className="flex justify-center mx-[3px] feature-card h-full max-w-[338px] min-h-[344px] flex-col px-6 items-center py-8 xl:py-12 rounded-[12px]">
                                    <img className="max-w-[90px]" src={card.image} alt="mobile" />
                                    <p className="ff-poppins font-semibold text-darkblue xl:mt-9 mt-5 text-[20px] xl:text-lg">{card.title}</p>
                                    <p className="mt-2 xl:mt-3 ff-poppins fs-md text-center max-w-[260px]">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Features