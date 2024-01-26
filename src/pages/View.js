import ProjectList from '../components/ProjectList'
import useFetch from '../hooks/useFetch'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const View = () => {
        const {username} = useParams();
        const {data: projects, isPending, errorMessage} = useFetch('https://projmanage-api.onrender.com/api/projects');
        const title = username + "'s Projects"
    
        return ( 
            <div className="home">
                {errorMessage && <div>{errorMessage}</div>}
                {isPending && <div>Loading...</div>}
                {projects && <ProjectList projects={projects.filter((project) => project.username === username)} title={title}  />}
            </div>
    
    
         );
    }
     
export default View;
