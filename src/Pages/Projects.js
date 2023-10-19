import React, { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const reposPerPage = 3; // Number of repos to be shown per page

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TommyBui89/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepos();
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
<   div style={styles.container}>
      <h2 style={styles.heading}>My GitHub Projects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={styles.repoList}>
            {currentRepos.map(repo => (
              <div key={repo.id} style={styles.repoCard}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={styles.repoLink}>
                  {repo.name}
                </a>
                {/* Removed the repo stats section */}
              </div>
            ))}
          </div>
          <div style={styles.pagination}>
            {Array.from({ length: Math.ceil(repos.length / reposPerPage) }, (_, index) => (
              <span 
                key={index}
                style={index + 1 === currentPage ? styles.activePage : styles.pageNumber}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '4rem',
    marginBottom: '20px',
    color:'white',
    textAlign: 'center', // Center the heading text

  },
  repoList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  repoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Add some opacity
    backdropFilter: 'blur(10px)', // Add blur for the "glass" effect
    border: '1px solid rgba(255, 255, 255, 0.2)', // Optional: subtle border    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    width: '60%',
    boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.1)',
    display:'flex',
    justifyContent:'center',
  },
  repoLink: {
    fontSize: '1.5em',
    textDecoration: 'none',
    color: '#0366d6',
    padding:'10px'
  },
  repoDescription: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  repoStats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  repoStat: {
    display: 'flex',
    alignItems: 'center',
  },
  pagination: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 20px',
  },
  pageNumber: {
    margin: '0 5px',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  activePage: {
    backgroundColor: 'rgba(3, 102, 214, 0.8)',
    backdropFilter: 'blur(5px)',
    margin: '0 5px',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
    color: '#fff',
    boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)',
  },
};

export default Projects;
