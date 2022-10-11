import React from 'react';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Profile = () => {
    return (
        <div className='p-2 stickyy'>
            <div className='flex py-3'>
                <div className='pr-3'>
                    <img src="/assets/alill.jpg" style={{width:'50px'}} className='rounded-full border-4 border-zinc-50'  alt="" />
                </div>
                <div className=''>
                    <h5 className='p-0 m-0 text-start'>Mr. Hazrat Ali</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
                </div>
            </div>
            <div className='com_color2 rounded-3 d-flex justify-content-around p-2'>
                <div className='d-flex flex-column p-0 m-0 '>
                    <div className='d-flex'>
                        <h5 className='p-0 m-0'>70</h5>
                        <p className='p-0 m-0'>kg</p>
                    </div>
                    <p className='p-0 m-0 fw-bold'>weight</p>
                </div>
                <div className='d-flex flex-column p-0 m-0'>
                    <div className=''>
                        <h5 className='p-0 m-0'>5.8"</h5>
                    </div>
                    <p className='p-0 m-0 fw-bold'>Height</p>
                </div>
                <div className='d-flex flex-column p-0 m-0'>
                    <div className='d-flex'>
                        <h5 className='p-0 m-0'>25</h5>
                        <p className='p-0 m-0'>yr</p>
                    </div>
                    <p className='p-0 m-0 fw-bold'>Age</p>
                </div>
                
            </div>
            <h5 className='text-start pt-4 pb-2 fw-bold'>Add a Break</h5>
            <h5 className='text-start pt-4 pb-2 fw-bold'>Exercise Details</h5>
            <div className='com_color2 rounded-3 p-3 mt-2'>
                <div className='d-flex justify-content-between'>
                    <p className='m-0'>Exercise Time</p>
                </div>
            </div>
            <div className='com_color2 rounded-3 p-3 mt-2'>
                <div className='d-flex justify-content-between'>
                    <p className='m-0'>Break Time</p>
                </div>
            </div>
            <div className='pt-5'><button className="btn btn-warning w-100" >Clear Storage </button></div>
            <div className='pt-2'><button className="btn btn-primary w-100" >Activity Complited </button></div>
        </div>
    );
};

export default Profile;