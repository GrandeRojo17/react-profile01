import React, { Component } from 'react';
import projects from "./projects.json";
//The Portfolio Page
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";

import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

// function Portfolio() {
//     return (<div className="project-container">
//         <ProjectCard id={projects.id}
//             title={projects.name}
//             image={projects.image}
//             occupation={projects.desciption} />
//         <ProjectCard id={projects.id}
//             title={projects.name}
//             image={projects.image}
//             occupation={projects.desciption} />
//         <ProjectCard id={projects.id}
//             title={projects.name}
//             image={projects.image}
//             occupation={projects.desciption} />
//     </div>
//     )
// }
class Portfolio extends Component {
    // Setting this.state.projects to the projects json array
    state = {
        projects
    };


    // Map over this.state.projects and render a projectCard component for project object
    render() {
        return (
            <Wrapper>
                <h1> A few things I have made...</h1>
                {this.state.projects.map(project => (
                    <ProjectCard
                        // removeProject={this.removeProject}
                        id={project.id}
                        key={project.id}
                        title={project.title}
                        link={project.link}
                        github={project.github}
                        image={project.image}
                        description={project.description}

                    />
                ))}
            </Wrapper>
        );
    }
}
export default Portfolio