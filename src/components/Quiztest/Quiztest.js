import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Profile';
import Questions from '../Questions/Questions';

const Quiztest = () => {
    const [rightanswer, setrightanswer] = useState(0);
    const [wronganswer, setwronganswer] = useState(0);
    const [overallwrong, setoverallwrong] = useState(0);
    const [overallright, setoverallright] = useState(0);
    const rightmarkstore = [];
    const wrongmarkstore = [];
    const {data} = useLoaderData();
    const {questions} = data;
    const notify = (qsnid) => {
        const result= questions.find(({id})=> id===qsnid)
        if(result){
            toast.success(result.correctAnswer, {
                position: toast.POSITION.TOP_CENTER
              });
        }
        
    }
    const handlequiz=(value, qsnid)=>{
        const result= questions.find(({id})=> id===qsnid)
        if(result.correctAnswer === value){
              const markcart = localStorage.getItem('RightMark');
              const markcartobj = JSON.parse(markcart)
              if(markcart){
                //   console.log(markcartobj);
                  const findResult = markcartobj.find(data => data.id == qsnid)
                //   console.log(findResult);
                  if(findResult){
                    alert('Already Answerd')
                }
                else{
                    toast.success('Well Done.', {
                        position: toast.POSITION.TOP_CENTER
                      });
                    setrightanswer(rightanswer+1)
                    rightmarkstore.push(...markcartobj,{id:qsnid, text: value})
                    localStorage.setItem('RightMark',JSON.stringify(rightmarkstore))
                }
            }
            else{
                toast.success('Well Done.', {
                    position: toast.POSITION.TOP_CENTER
                  });
                setrightanswer(rightanswer+1)
                rightmarkstore.push({id:qsnid, text: value})
                localStorage.setItem('RightMark',JSON.stringify(rightmarkstore))
              }
        }
        else{
            toast.error('Wrong Answer.', {
                position: toast.POSITION.TOP_CENTER
              });
              setwronganswer(wronganswer+1)
              const wrongmarkcart = localStorage.getItem('WrongMark');
              const wrongmarkcartobj = JSON.parse(wrongmarkcart);
              if(wrongmarkcart){
                const wrongfindResult = wrongmarkcartobj.find(data => data.id == qsnid)
                if(wrongfindResult){
                    alert('Already Answerd')
                }
                else{
                    setrightanswer(rightanswer+1)
                    wrongmarkstore.push(...wrongmarkcartobj,{id:qsnid, text: value})
                    localStorage.setItem('WrongMark',JSON.stringify(wrongmarkstore))
                }
              }
              else{
                setrightanswer(rightanswer+1)
                wrongmarkstore.push({id:qsnid, text: value})
                localStorage.setItem('WrongMark',JSON.stringify(wrongmarkstore))
              }
              
        }
    }
    useEffect(()=>{
        const storwrongmark = localStorage.getItem('WrongMark');
        const storrightmark = localStorage.getItem('RightMark');
       if(storwrongmark || storrightmark){
        const storrightmarkobj = JSON.parse(storrightmark)
        const storwrongmarkobj = JSON.parse(storwrongmark)
        setoverallwrong(storwrongmarkobj.length);
        setoverallright(storrightmarkobj.length);
       }
    },[setwronganswer,setrightanswer])

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-12 bg-red-100'>
                <div className='col-span-9'>
                <p className='text-center font-bold text-4xl p-3'>Topic Name : {data.name}</p> 
                    {
                        data.questions.map(qsn => <Questions key={qsn.id} handlequiz={handlequiz} notify={notify} allquestions={qsn}></Questions>)
                    }
                </div>
                <div className='bg-cyan-100 col-span-3'>
                    <div className='p-3 bg sticky top-0'>
                        <Profile rightanswer={rightanswer} overallright={overallright} overallwrong={overallwrong} wronganswer={wronganswer} totalqsn = {data.total} topicName={data.name}></Profile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiztest;