import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-slate-200 rounded-3 m-0 p-2'>
                <h1 className='text-2xl font-bold p-3 bg-violet-600 rounded-lg text-white'>Questions And Answer</h1>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                    <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800 text-start" >What is the purpose of react router?</p>
                    </div>
                    <div className='rounded-lg bg-teal-200 border-2 border-teal-400 m-2 p-2'>
                        <p className='text-start py-2'><strong>Answer: </strong>A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. </p>
                        <p className='text-start py-2'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                        <p className='text-start py-2'>By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800 text-start" >How does context api work?</p>
                    </div>
                    <div className='rounded-lg bg-teal-200 border-2 border-teal-400 m-2 px-2'>
                        <p className='text-start py-2'><strong>Answer: </strong>One of the concepts of React is to break your application into components, for reusability purposes. So in a simple React application, we have a few different components. As our application grows, these components can become huge and unmaintainable, so we break them into smaller components.</p>
                        <p className='text-start py-2'>The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc.</p>
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800 text-start" >About react useRef</p>
                    </div>
                    <div className='rounded-lg bg-teal-200 border-2 border-teal-400 m-2 p-2'>
                        <p className='text-start py-2'><strong>Answer: </strong>Essentially, useRef is like a ???box??? that can hold a mutable value in its .current property. Refs provide a way to access DOM nodes or React elements created in the render method.</p>
                        <p className='text-start py-2'>In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;