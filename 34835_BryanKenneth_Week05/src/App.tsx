import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonHeader, IonRouterOutlet,IonGrid,IonRow,IonCol, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonCard, IonCardContent, IonContent, IonAlert } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {calculatorOutline, refreshOutline} from 'ionicons/icons';
import {useRef, useState} from 'react';
import Home from './pages/Home';
import BmiControls from './components/Controls';
import InputControl from './components/InputControl';
import BmiResult from './components/BmiResult';

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
import BmiCalc from './pages/BmiCalc';
import BmrCalc from './pages/BmrCalc';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Redirect exact from="/" to="/home" />
        <Route path="/bmi" component={BmiCalc} />
        <Route path="/bmr" component={BmrCalc} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)
export default App;






