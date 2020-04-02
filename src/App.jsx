import React from 'react';
import { connect } from "react-redux";
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
import './Home.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle align="center"> Urban Living </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <text>adasdasd</text>
      </IonContent>

    </IonPage>
  </IonApp>
);

const mapStateToProps = state => {
  return {
    state: state
  };
};


export default connect(mapStateToProps)(App);
