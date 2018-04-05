import React, {Component} from 'react';
import './search_bar.css';
import 'bulma/css/bulma.css';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render (){
    return(
      <div className="searchHeader">
        <div className="searchInput">
          <input className="input inputSearch"
                 onChange={event => this.onInputChange(event.target.value)} value={this.state.term} />
          <button className="button is-dark">Search</button> 
        </div>
      </div>
    )
  }
}
