import React, { Component } from "react";
import { connect } from "react-redux";
import { IonCard, IonButton, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader } from '@ionic/react'

class SpecificArticle extends Component {
  state = {
    premiumUser: false
  };

  componentDidMount() {
    this.props.currentUser.role === "subscriber" &&
      this.setState({ premiumUser: true });
  }
  render() {
    let specArticle;
    let articleContent;
    let showContent;
    let trimmedArticle;

    if (this.props.readArticle) {
      specArticle = this.props.readArticle;

      if (specArticle.article_class === "premium" && !this.state.premiumUser) {
        trimmedArticle = specArticle.content.substring(0, 200) + "...";
      }

      articleContent =
        specArticle.article_class === "free" || this.state.premiumUser
          ? specArticle.content
          : trimmedArticle;
    }

    showContent =
      specArticle.article_class === "free" || this.state.premiumUser ? (
        <>
          <div className="spec-content">
            <p>{articleContent}</p>
          </div>
          <div className="created-date">
            <p>Submitted on {specArticle.new_created_at}</p>
          </div>
        </>
      ) : (
          <>
            <div className="spec-content restricted">
              <p>{articleContent}</p>
            </div>
            <p>
              This article require a premium membership.{" "}
              <IonButton label="Buy Subscription" color="lightgreen" />
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
    readArticle: state.readArticle,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(SpecificArticle);