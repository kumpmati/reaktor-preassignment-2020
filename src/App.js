import React from 'react';
import SinglePackage from './SinglePackage';
import PackageView from './PackageView';
import Error from './Error';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: {type: "loading"}, view: "all"};
    this.getData();
  }

  render() {
    let body;
    switch(this.state.data.type) {
      case "package_list":
        body = (<PackageView data={this.state.data} />);
        break;
      case "single_package":
        body = (<SinglePackage data={this.state.data} />);
        break;
      case "error":
        body = (<Error data={this.state.data} />);
        break;
      default:
        body = <p>Loading</p>;
        break;
    }

    return (
      <div><a href="https://github.com/kumpmati/reaktor-preassignment">GitHub</a>
        <div id="App">

          {body}
        </div>
      </div>
    );
  }

  getData() {
    
    fetch(`${process.env.ADDR}${window.location.pathname}`) // https://localhost:9001/api/<packageName>
      .then(res => res.json())
      .then(data => {
        this.setState({data: data});
      },
      error => {
        this.setState({data: error});
      });
  }
}

export default App;
