import React from 'react';
import skillsData from '../details.json';

const Skills = () => {
    return (
        <main className='bg-black text-white min-h-screen p-4 mt-20 '>
            <div className="max-w-5xl mx-auto">
                {Object.keys(skillsData.skills).map((category) => (
                    <div key={category} className="mb-4">
                        <div className="flex items-center content-start mb-2">
                        <span className="mx-2 text-gray-400">{category}</span>
                            <hr className="flex-grow border-gray-800" />                      
                        </div>
                        <div
                            className="grid grid-cols-3 gap-4"
                        >
                            {skillsData.skills[category].map((skill) => (
                                <div
                                    key={skill.name}
                                    className="skill-card"
                                    style={{ backgroundImage: `url('${skill.image}')` }}
                                >
                                    <span className='w-screen bg-gray-600 opacity-70 px-2 py-3 md:p-5 rounded-lg '>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>

    );
};

export default Skills;