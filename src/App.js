import React from 'react';
import './App.css';
import { fetchData } from "./api/index"
import Cards from './components/cards/Cards'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},

    }
  }


  // i put the async in front of the componentDidMount, to make it asynchronous 
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({data: fetchedData})
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <h1>Hey</h1>
        <Cards data={data} />
      </div>
    )
  }
}

export default App;
