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
    picArray: [
      {
        'id': '1',
        'title': 'Title 1',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
        'thumbnails': {
          w160: 'http://placekitten.com/160/161',
        },
        'filename': 'http://placekitten.com/2048/1920',
      },
      {
        'id': '2',
        'title': 'Title 2',
        'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
        'thumbnails': {
          w160: 'http://placekitten.com/160/162',
        },
        'filename': 'http://placekitten.com/2041/1922',
      },
      {
        'id': '3',
        'title': 'Title 3',
        'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
        'thumbnails': {
          w160: 'http://placekitten.com/160/163',
        },
        'filename': 'http://placekitten.com/2039/1920',
      },
    ],
  };

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
