import React, { Component } from 'react'


const TypesOfFruit=()=>{
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    )
}

const Vegetables = ()=>{
    return (
        <div>
            <h2>Vegetables:</h2>
            <ul>
                <li>Brussel Sprouts</li>
                <li>Broccoli</li>
                <li>Squash</li>
            </ul>
        </div>
    )
}

const Fruits = ()=>{
    return (
        <div>
            <TypesOfFruit/>
            <Vegetables/>
        </div>
    )
}

class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
            <Fruits/> 
        </div>
      );
    }
  };