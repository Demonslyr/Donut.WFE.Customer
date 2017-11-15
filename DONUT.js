import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';




class DONUT extends Component {
  constructor(){
    super();
    this.state={
  ARRAY_Customer_Menu_List_Component: [],
  ARRAY_Customer_Order_List_Component:[]
             
/*heresaStateValue: "this is text from this.state.heresaStateValue",
  todos:[],
  projects: [    
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development"'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
      
    ]*/
   }
  }
  /******************************************************/
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
       this.setState({todos: data}, function(){
         console.log(this.state);
       });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
      this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development"'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});   
  }
  
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

handleAddProject(project){
 //console.log(project)
 let projects = this.state.projects;
 projects.push(project);
 this.setState({
   projects:projects
 });
}

handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
}




  /*****************************************************/
  render() {
  /*****************************************************/  

/*class Projects extends Component {
  render(){

let projectItems;
if(this.props.projects){
  projectItems = this.props.projects.map(project => {
    return(
      <ProjectItem
       project={project}
       key={project.title}
       />
    );
  });
}

    return(
      <div className="Projects">
       <p>hey there </p>
       <p>{this.props.test}</p>
       {projectItems}
      </div>  
    );
  }
}                                    */


  /******************************************************/
/*class ProjectItem extends Component {
   render(){
    return(
      <li className="ProjectItem">
        {this.props.project.title} :
        {this.props.project.category}
      </li>  
    );
   }
}                 */ 




  /*****************************************************/
class CASHIER extends Component {
    render(){
        return(
            <div className="CASHIER">
                
            </div>
        );
    }
}
/******************************************************/

class COOK extends Component{
    render(){
        return(
            <div className="COOK">

            </div>
        );
    }
}

/******************************************************/

class CUSTOMER_FACING_WEBPAGE extends Component {
    render(){
        return(
            <div className="CUSTOMER_FACING_WEBPAGE">
                <CUSTOMER_MENU_TOPLEVELCONTAINER />
                <CUSTOMER_ORDER_TOPLEVELCONTAINER />
            </div>
        );
    }
}
/******************************************************/

class CUSTOMER_MENU_TOPLEVELCONTAINER extends Component {
    render(){
        return(
            <div className="CUSTOMER_MENU_TOPLEVELCONTAINER">
                <CUSTOMER_MENU_LISTCOMPONENT />
            </div>
        );
    }
}
/******************************************************/

class CUSTOMER_MENU_LISTCOMPONENT extends Component {
    render(){
        return(
            <div className="CUSTOMER_MENU_LISTCOMPONENT">
                <p>jelly donut</p>
                <p>sausage roll</p>
                <p>coffee</p>
                <p>juice</p>
            </div>
        );
    }
}
/******************************************************/

class CUSTOMER_ORDER_TOPLEVELCONTAINER extends Component {
    render(){
        return(
            <div className="CUSTOMER_ORDER_TOPLEVELCONTAINER">
                <CUSTOMER_ORDER_LISTCOMPONENT />
            </div>
        );
    }
}
/******************************************************/

class CUSTOMER_ORDER_LISTCOMPONENT extends Component {
    render(){
        return(
            <div className="CUSTOMER_ORDER_LISTCOMPONENT">
                <p>Your cart: 0 items comes to a total of $0</p>
                <li></li>
            </div>
        );
    }
}
/******************************************************/

    return (
      <div className="DONUT">
     {/*  {this.state.heresaStateValue}
        <Projects
         test="Hello, world."
        projects={this.state.projects}
         />*/} 
         <CUSTOMER_FACING_WEBPAGE />
      </div>
    );
  }
}

export default DONUT;
