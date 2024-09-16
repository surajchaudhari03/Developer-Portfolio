import React from 'react'
import Details from '../details.json';

export default function About() {

    return (
        <main className="bg-black text-white">
            <section className='md:max-w-7xl mx-auto md:min-h-screen flex flex-col md:flex-row-reverse items-center justify-center text-center py-20'>
                <section className="md:w-1/3 flex justify-center items-center p-4">
                    <div className="">
                        <img src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Prfile Picture"
                            className="w-44 md:w-60 rounded-full"
                        />
                    </div>
                </section>
                <section className='md:w-2/3 p-4'>
                    <h1 className="text-4xl md:text-6xl font-bold">{Details.personalDetails.name}</h1>
                    <p className="md:text-xl font-semibold mt-4 mx-auto">{Details.personalDetails.designation}</p>
                    <p className='text-justify md:text-left text-sm my-4'>{Details.personalDetails.description}</p>
                    <div id="social-links" className="flex justify-center space-x-4 mt-6">
                        <a href="https://github.com"><i className="fab fa-github text-2xl"></i></a>
                        <a href="https://linkedin.com"><i className="fab fa-linkedin text-2xl"></i></a>
                        <a href="https://twitter.com"><i className="fab fa-instagram text-2xl"></i></a>
                    </div>
                </section>
            </section>
        </main>
    );
}