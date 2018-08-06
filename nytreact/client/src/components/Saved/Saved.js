import React, { Component } from "react"
import "./Saved.css"
import DB from "../../utils/DB"
import SavedList from "./SavedList"

class Saved extends Component {
    state={
        savedArticles : []
    }
    componentDidMount = () => {
        
        DB.get().then(res =>
        this.setState({
            savedArticles: res.data
        })
     
        )}
    deleteArticle = (event) => {
        const {id} = event.target
        this.state.savedArticles.forEach(function(element){
            if (element.title === id)
            DB.delete(element._id)
            })
            DB.get().then(res => this.setState({savedArticles: res.data}))
        }
    
    render() {
        return (
            <div className="row savedCard">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header resHeader"><h2>Saved Articles</h2></div>
                        <div className="card-body">
                        {!this.state.savedArticles.length ? (
                  <h3 className="text-center">No Articles Have Been Saved</h3>) :
                  (<SavedList>
                    {this.state.savedArticles.map(article => {
                      return (
                        <li className="list-group-item">
                          <div className="row">
                          <div className="col-md-10">
                          <p class={1}>{article.title}</p>
                          <p class={2}>{article.url}</p>
                          <p class={3}>{article.date}</p>
                          </div>
                          <div className="col-md-2">
                          <button onClick={((event) => this.deleteArticle(event))} id={article.title}>Delete</button>
                          </div>
                          </div>
                        </li>
                      )
                    })

                    }
                  </SavedList>)}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Saved