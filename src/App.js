import React from "react";
import {product} from './data';
import Showdata from "./Showdata";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product : product,
      cartCount : 0
    }
  }
  handleSort = (e) => {
    let value = e.target.value;

  }

  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  render(){
    return (
      <div className="App" onChange={handleSort}>
        <select>
            <option value="all">All</option>
                <option value="confirmed">confirmed</option>
                <option value="delivered">Delivered</option>
                <option value="redund">Refund Completed</option>
                <option value="pending">Pending</option>
          </select>
          <select>
            <option value="">Sort</option>
                <option value="confirmed">High to Low</option>
                <option value="delivered">Low to high</option>
          </select>

          {}
      </div>
    );
  }
  
}

export default App;
