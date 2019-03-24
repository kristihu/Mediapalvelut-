import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

class PicArray extends Component {
  render() {
    return this.props.picArray.map((picArr) => (
        <tr>
          <td>
            <img src={picArr.thumbnails.w160} alt='Kissan kuva' />
          </td>
          <td>
            <p>{picArr.id}</p>
          </td>
          <td>
            <h3>{picArr.title}</h3>
            <p>{picArr.description}</p>
          </td>
          <td>
            <a href={picArr.filename}>View</a>
          </td>
        </tr>

    ));
  }
}
PicArray.propTypes = {
  picArr: PropTypes.array.isRequired
};
class App extends Component {
  state = {
    picArray: [ ],
  };

  componentDidMount() {
    fetch( 'test.json').then((response) => {
      return response.json();
    }).then( (json) => {
      console.log(json);
      this.setState({picArray:json});
    })
  }

  render() {
    return (
        <table>
          <tbody>
          <PicArray picArray={this.state.picArray}/>
          </tbody>
        </table>
    );
  }
}

export default App;
