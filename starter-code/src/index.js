import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {
    return (
      <div>
<button isSmall isDanger className="is-rounded my-class">Button 1</button>
<button isSmall isSuccess>Button 2</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);