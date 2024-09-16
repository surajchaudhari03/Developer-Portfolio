import React from "react";
import ProjectData from '../../details.json';

const ProjectCard = () => {
  return (
    <>
      {ProjectData.projects.map((card, index) => (
        <div key={index} className="bg-black border border-gray-700 rounded-lg p-4 md:m-4 md:mb-0 md:w-80 text-sm">
          <div className="flex items-center space-x-2 mb-4">
            <img src={card.logo} alt="Logo" className="w-10 h-10 rounded-full" width="40" height="40" />
          </div>

          <h2 className="text-xl font-bold mb-2">{card.title}</h2>

          <div className="flex items-center text-gray-400 mb-2">
            <i className="fas fa-users mr-2"></i>
            <span>{card.type}</span>
          </div>

          <div className="flex items-center text-gray-400 mb-4">
            <i className="fas fa-clock mr-2"></i>
            <span>{card.year}</span>
          </div>

          <p className="text-gray-400 mb-4">{card.description}</p>   

          <div className="flex space-x-2">
            {card.tags.map((tag, index) => (
              <span key={index} className="bg-gray-800 text-gray-400 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;