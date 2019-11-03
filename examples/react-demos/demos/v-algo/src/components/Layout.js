// return (
//     <App>
//       <Navbar />
//       <Dashboard />
//       <Footer />
//     </App>
//     )
import React,{Component} from 'react'

const ChildComponent = ()=>{
    return (
        <div>
            <p>I am child!</p>
        </div>
    )
}

class ParentComponent extends Comment {
    constructor(props){
        super(props)
    }

    render() {
      return (
        <div>
          <h1> I am the ParentComponent</h1>
          <ChildComponent/>
        </div>
      )
    }
}

export default ParentComponent;