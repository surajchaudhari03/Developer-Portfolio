import React, { useState } from 'react';
import EducationData from '../../details.json'

const EducationCard = () => {

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    function handleMouseMove(event) {
        const card = event.currentTarget;
        const cardRect = card.getBoundingClientRect();
        const cardInner = card.querySelector('.card-inner');
        const mouseX = event.clientX - cardRect.left;
        const mouseY = event.clientY - cardRect.top;
        const rotateX = ((mouseY / cardRect.height) - 0.5) * 20;
        const rotateY = ((mouseX / cardRect.width) - 0.5) * -20;
        cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        cardInner.style.boxShadow = `0px 0px 20px rgba(255, 255, 255, 0.5)`;
    }

    function resetTransform(event) {
        const cardInner = event.currentTarget.querySelector('.card-inner');
        cardInner.style.transform = 'rotateX(0) rotateY(0)';
        cardInner.style.boxShadow = 'none';
    }

    return (
        <>
            {EducationData.educationDetails.map(education => (
                <div
                    key={education.id}
                    className=" w-full max-w-xl bg-gray-900 mx-2 p-6 rounded-lg shadow-lg card transition-all duration-300 ease-in-out"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetTransform}
                    style={{
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    }}
                >
                    <div className="card-inner p-2">
                        <div className="flex items-center pb-2 border-b border-zinc-600 transition-all duration-300">
                            <img
                                alt="University logo"
                                className="w-12 h-12 rounded-full mr-4"
                                height="50"
                                src={education.logo}
                                width="50"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">{education.title}</h2>
                                <p className="text-sm text-gray-400">{education.university}</p>
                            </div>
                        </div>
                        <p className="flex items-center my-4 py-2 text-gray-400 border-b border-zinc-600">
                            <i className="fas fa-map-marker-alt mr-2" />
                            {education.location}
                        </p>
                        <p className="flex items-center my-4 py-2 text-gray-400 border-b border-zinc-600">
                            <i className="fas fa-clock mr-2" />
                            {education.duration}
                        </p>
                        <div className="flex flex-wrap ">
                            {education.skills.map(skill => (
                                <span
                                    key={skill.id}
                                    className="bg-gray-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default EducationCard;