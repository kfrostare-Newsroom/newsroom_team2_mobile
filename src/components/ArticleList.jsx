import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import {
  IonCard,
  IonButton,
  IonCardTitle,
  IonCardHeader,
  IonCardContent
} from '@ionic/react';
class ArticleList extends Component {
  componentDidMount() {
    axios.get("/articles").then(response => {
      this.props.dispatch({
        type: "ARTICLES",
        payload: { articleList: response.data }
      });
    });
  }

  async articleFetcher(event) {
    let id = event.target.id
    let response = await axios.get(`/articles/${id}`)
    this.props.dispatch({
      type: "SHOW_ARTICLE",
      payload: { readArticle: response.data }
    })
  }

  render() {
    let articleDisplay;
    if (this.props.articleList !== []) {
      articleDisplay = this.props.articleList.map(article => {
        return (
          <IonCard key={article.id} color="medium">
            <div id={article.id} className="article-box">
              <div className="feature-article">
                <div className="article-headline">
                  <IonCardHeader>
                   <img src={article.image} />
                    <IonCardTitle>{article.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent className="article-teaser">{article.teaser}   </IonCardContent>
                  <IonButton
                    id={article.id}
                    fill="outline"
                    color="dark"
                    type="submit"
                    onClick={this.articleFetcher.bind(this)}
                  >Read More</IonButton>
                </div>
              </div>
            </div>
          </IonCard>
        );
      });
    }
    return (
      <>
        {articleDisplay}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.articleList
  };
};

export default connect(mapStateToProps)(ArticleList);
