import React from 'react';

const Slider = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between flex-col md:flex-row lg:flex-row xl:flex-row bg-slate-400 p-2'>
                <div className="carousel rounded-lg w-ful md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="assets/p2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <span className="btn btn-circle">❮</span> 
                        <span className="btn btn-circle">❯</span>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="assets/p1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <span className="btn btn-circle">❮</span> 
                        <span className="btn btn-circle">❯</span>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="assets/p3.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <span className="btn btn-circle">❮</span> 
                        <span className="btn btn-circle">❯</span>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="assets/p4.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <span className="btn btn-circle">❮</span> 
                        <span className="btn btn-circle">❯</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-ful md:w-2/4 lg:w-2/4 xl:w-2/4 pl-2'>
                    <span className=''>
                        <h1 className='font-extrabold text-4xl p-2'>Learn faster. Stay motivated. <br /> Study smarter.</h1>
                        <p className='font-semibold text-2xl p-2'>Identify your strengths and weakness and focus on only what you need to learn to ace your next test</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Slider;