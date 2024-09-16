import React from 'react';
import { Icon } from '@iconify/react';
import certificatesData from '../details.json'

const Certificates = () => {

    return (
        <section className="bg-black text-white text-sm px-4 pt-16 flex flex-col text-center  min-h-screen mt-20">
            {/* <h3 className='text-4xl font-bold m-12'>SKILLS</h3> */}
            <ul className="md:w-2/3 mx-auto flex flex-wrap justify-center  ">
                {
                    certificatesData.certificates.map((skill, i) => (
                        <li className=" md:w-28 flex flex-col items-center p-4 my-4 mx-3 md:m-4 bg-zinc-800 rounded-md delay-150 hover:-translate-y-1 hover:scale-110 duration-300" key={i}>
                            <Icon icon={skill.icon} className='text-6xl' />
                                <p className='text-xs'>{skill.name}</p>
                        </li>
                    ))
                }
            </ul>
        </section >
    );
}

export default Certificates;