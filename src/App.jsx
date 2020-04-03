import React from 'react';
import { connect } from "react-redux";
import UrbanLiving from "./images/UrbanLiving.png"
import {
  IonApp,
  IonTitle,
  IonHeader,
  IonPage,
  IonToolbar,
  IonContent
} from '@ionic/react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import ArticleList from "./components/ArticleList";

const App = props => {
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle align="center">
              <img src={UrbanLiving} style={{ width: '60vw' }} alt='logo' />
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent align="center">
          <ion-text align="center" >Life inspiration for young professionals.</ion-text>
          {props.state.showArticleList && <ArticleList />}        
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(App);
