import React, { Component } from "react";
import { connect } from "react-redux";
import { IonCard, IonButton, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader } from '@ionic/react'

class SpecificArticle extends Component {
  componentDidMount() {
     if (this.props.currentUser === "subscriber") {
       this.props.dispatch({ type: "PREMIUM", payload: {premiumUser: true } });
     } else {
      this.props.dispatch({ type: "PREMIUM", payload: {premiumUser: false } })
     }      
  }

  render() {
    let specArticle;
    let articleContent;
    let showContent;
    let trimmedArticle;

    if (this.props.readArticle) {
      specArticle = this.props.readArticle;

      if (
        (specArticle.article_class === "premium") &
        (this.props.premiumUser === false)
      ) {
        trimmedArticle = specArticle.content.substring(0, 200) + "...";
      }

      articleContent =
        specArticle.article_class === "free" || this.props.premiumUser
          ? specArticle.content
          : trimmedArticle;
    }
    showContent =
      specArticle.article_class === "free" || this.props.premiumUser ? (
        <>
          <IonCardContent className="spec-content">
            {articleContent}
          </IonCardContent>
          <div className="created-date">
            <p>Submitted on {specArticle.new_created_at}</p>
          </div>
        </>
      ) : (
          <>
            <IonCardContent className="spec-content restricted">
            {articleContent}
          </IonCardContent>
            <p>
              This article require a premium membership.{" "}
              <IonButton
              onClick={() =>
              this.props.dispatch({
                type: "PAYMENT_FORM",
                payload: {showPaymentForm: true}
              })
              }
              > Buy Subscription </IonButton>
            </p>
          </>
        );

    return (
      <IonCard
        color="medium"
        className="article"
        id={specArticle.id}>
        <div>
          <IonCardHeader>
          <img src={specArticle.image} />
            <IonCardTitle className="spec-title">
              {specArticle.title}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="spec-content">
            {showContent}
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
    readArticle: state.readArticle,
    currentUser: state.currentUser,
    premiumUser: state.premiumUser
  };
};

export default connect(mapStateToProps)(SpecificArticle);