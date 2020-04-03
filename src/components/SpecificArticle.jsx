import React, { Component } from "react";
import { connect } from "react-redux";
import { IonCard, IonButton, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader } from '@ionic/react'

class SpecificArticle extends Component {
  render() {
    let specArticle;
    if (this.props.readArticle !== undefined) {
      specArticle = this.props.readArticle;
    }
    return (
      <IonCard
        color="medium"
        className="article"
        id={specArticle.id}>
        <div>
          <IonCardHeader>
            <IonCardTitle className="spec-title">
              {specArticle.title}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="spec-content">
            {specArticle.content}
          </IonCardContent>
        </div>
        <IonCardSubtitle className="created-date">
          <p>Submitted on {specArticle.new_created_at}</p>
        </IonCardSubtitle>
        <IonButton
          fill="outline"
          color="dark"
          type="submit"
          onClick={() => this.props.dispatch({ type: "HIDE_ARTICLE" })}>
          Back
        </IonButton>
      </IonCard>
    );
  }
}

const mapStateToProps = state => {
  return {
    readArticle: state.readArticle
  };
};

export default connect(mapStateToProps)(SpecificArticle);