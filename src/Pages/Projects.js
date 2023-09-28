import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Handler function to navigate to the new page
  const goToNewPage = () => {
    navigate('/new-page');
  };

  return (
    <div>
      <h2>Projects</h2>
      {/* Other content */}
      <button onClick={goToNewPage}>Go to New Page</button>
    </div>
  );
}

export default Projects;
