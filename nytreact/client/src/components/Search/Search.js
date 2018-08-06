import React, { Component } from "react";
import "./Search.css";
import Results from "../Results"
import ResultItem from "../Results"
import API from "../../utils/API"
import DB from "../../utils/DB"

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Search extends React.Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    searchResults: []
  }
  componentDidMount


  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value })
  }
  handleStartChange = (event) => {
    this.setState({ startYear: event.target.value })
  }
  handleEndChange = (event) => {
    this.setState({ endYear: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear).then(res =>
      this.setState({ searchResults: res.data.response.docs }

      ))
    }
    saveArticle = (event) => {
      event.preventDefault()
      const {id} = event.target
      this.state.searchResults.forEach(function(element){
        if(element.headline.main === id)
          
          DB.save({
            title: element.headline.main,
            url: element.web_url,
            date: element.pub_date
          }).then(alert("saved"))
          
      })
    }
  render() {
    return (
      <div section="nytSearch">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 searchForm">
            <div className="card">
              <div className="card-header">
                <h2>Search</h2>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="topic" className="topicLabel">Topic</label>
                    <br />
                    <input type="text" className="form-control" value={this.state.topic} id="topic" placeholder="Enter Topic" onChange={this.handleTopicChange} />
                    <label htmlFor="startYear" className="topicLabel">Start Year</label>
                    <br />
                    <input type="text" className="form-control" value={this.state.startYear} id="startYear" placeholder="Enter Start Year" onChange={this.handleStartChange} />
                    <label htmlFor="endYear" className="topicLabel">End Year</label>
                    <br />
                    <input type="text" className="form-control" value={this.state.endYear} id="endYear" placeholder="Enter End Year" onChange={this.handleEndChange} />
                  </div>
                  <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 resultList" >
            <div className="card">
              <div className="card-header resHeader"><h2>Results</h2></div>
              <div className="card-body">

                {!this.state.searchResults.length ? (
                  <h3 className="text-center">No Articles to Display</h3>) :
                  (<Results>
                    {this.state.searchResults.map(article => {
                      return (
                        <li className="list-group-item">
                          <div className="row">
                          <div className="col-md-10">
                          <p class={1}>{article.headline.main}</p>
                          <p class={2}>{article.web_url}</p>
                          <p class={3}>{article.pub_date}</p>
                          </div>
                          <div className="col-md-2">
                          <button onClick={((event) => this.saveArticle(event))} id={article.headline.main}>Save</button>
                          </div>
                          </div>
                        </li>
                      )
                    })

                    }
                  </Results>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
export default Search;