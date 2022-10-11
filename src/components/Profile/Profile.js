import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const Profile = ({totalqsn, topicName, rightanswer, wronganswer, overallright, overallwrong}) => {
    return (
        <div className='p-2 '>
            <div className='flex py-3'>
                <div className=''>
                    <img src="/assets/alill.jpg" style={{width:'50px'}} className='rounded-full border-4 border-zinc-50'  alt="" />
                </div>
                <div className='pl-3'>
                    <h5 className='p-0 m-0 text-start font-bold'>Mr. Hazrat Ali</h5>
                    <p className='p-0 m-0 text-start font-bold'><FontAwesomeIcon icon={faLocationDot}/> Mohammdpur, Dhaka</p>
                </div>
            </div>
            <div className='rounded-lg bg-teal-200 border-2  border-teal-400  flex justify-around p-2'>
                <div className='flex flex-col p-0 m-0 '>
                    <div className='flex'>
                        <p className='p-0 m-0 font-bold text-2xl'>70</p>
                        <p className='p-0 m-0 align-bottom'>kg</p>
                    </div>
                    <p className='p-0 m-0 fw-bold'>weight</p>
                </div>
                <div className='flex flex-col p-0 m-0'>
                    <div className=''>
                        <h5 className='p-0 m-0 font-bold text-2xl'>5.8"</h5>
                    </div>
                    <p className='p-0 m-0 fw-bold'>Height</p>
                </div>
                <div className='flex flex-col p-0 m-0'>
                    <div className='flex'>
                        <h5 className='p-0 m-0 font-bold text-2xl'>25</h5>
                        <p className='p-0 m-0'>yr</p>
                    </div>
                    <p className='p-0 m-0 fw-bold'>Age</p>
                </div>
            </div>
            <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800" >Statistics</p>
            </div>
            <div className='rounded-lg bg-teal-200 border-2 border-teal-400 mt-5 p-2'>
                <h5 className='text-start py-2 font-bold '>Topic Name : {topicName}</h5>
                <h5 className='text-start py-2 font-bold '>Total Qeuestions : {totalqsn}</h5>
                <h5 className='text-start py-2 font-bold '>Right Answer : {rightanswer} </h5>
                <h5 className='text-start py-2 font-bold '>Wrong Answer : {wronganswer} </h5>
                <h5 className='text-start py-2 font-bold '>Total Mark : {rightanswer} </h5>
            </div>
            <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800" >Overall Statistics</p>
            </div>
            <div className='rounded-lg bg-teal-200 border-2 border-teal-400 mt-5 p-2'>
                <h5 className='text-start py-2 font-bold '>Total Qeuestions : {overallwrong+overallright} </h5>
                <h5 className='text-start py-2 font-bold '>Right Answer : {overallright}</h5>
                <h5 className='text-start py-2 font-bold '>Wrong Answer : {overallwrong}</h5>
                <h5 className='text-start py-2 font-bold '>Total Mark : {overallright}</h5>
            </div>
        </div>
    );
};

export default Profile;