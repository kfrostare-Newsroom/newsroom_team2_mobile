import React, { Component } from "react";
import { connect } from "react-redux";
import { IonCard , IonButton, IonPage } from '@ionic/react'

class SpecificArticle extends Component {
  render() {
    let specArticle;
    if (this.props.readArticle !== undefined) {
      specArticle = this.props.readArticle;
    }
    return (
      <IonPage full theme={grommet}>
        <IonCard 
        direction="row"
        border={{ color: "brand", size: "small" }}
        pad="medium"
        margin="medium"
        className="article"
        id={specArticle.id}>
          <div>
            <div className="spec-title">
              <h2>{specArticle.title}</h2>
            </div>
            <div className="spec-content">
              <p>{specArticle.content}</p>
            </div>
            <div className="created-date">
              <p>Submitted on {specArticle.created_at}</p>
            </div>
          </div>
        </IonCard>
          <IonButton 
            type="submit"
            label="Back"
            onClick={() => this.props.dispatch({type: "HIDE_ARTICLE"})}>
          </IonButton>
      </IonPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    readArticle: state.readArticle
  };
};

export default connect(mapStateToProps)(SpecificArticle);