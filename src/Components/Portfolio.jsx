import React from "react";
import Toolbar from "./Toolbar";
import { projects } from "../projects";


const filters = ["All", "Websites", "Flayers", "Business Cards"];



export default class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "All",
            projects: projects
        }
    }
    render() {

        const selectFilter = (filter) => {
            this.setState({selected: filter})
            this.setState({projects: filter === 'All' ? projects : projects.filter(project => project.category === filter)})
        }

        console.log(this.state.projects);
        

        return (
            <div>
               <Toolbar
                    filters={filters}
                    selected={this.state.selected}
                    onSelectFilter={selectFilter}/>
                <div className="cards">
                    {this.state.projects.map((project, index) => (
                        <div className="card" key={index}>
                            <img src={project.img} alt={project.category} />
                        </div> 
                    ))}
                </div>
            </div>
        );
    }
}