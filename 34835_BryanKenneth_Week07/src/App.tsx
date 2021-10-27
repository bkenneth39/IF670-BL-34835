import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Mail from './pages/Mail';
import MailDetail from './pages/MailDetail';
import Meet from './pages/Meet';
import Spam from './pages/Spam';
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
import {alert, list, mailOutline, settings, videocamOutline} from 'ionicons/icons'
/* Theme variables */
import './theme/variables.css';
import Settings from './pages/Settings';
import FriendsContextProvider from './data/FriendsContextProvider';

const App: React.FC = () => (
  <IonApp>
    <h2>Hello World</h2>
  <IonReactRouter>
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            IonMail
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink="/mail">
              <IonIcon slot="start" icon={list} />
              <IonLabel>All Mail</IonLabel>
            </IonItem>
            <IonItem button routerLink="/spam">
              <IonIcon slot="start" icon={alert} />
              <IonLabel>Spam</IonLabel>
            </IonItem>
            <IonItem button routerLink="/settings">
              <IonIcon slot="start" icon={settings} />
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

      <FriendsContextProvider>
    <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path="/mail" component={Mail} />
          <Route exact path="/mail/:mailId" component={MailDetail} />
          <Route exact path="/meet" component={Meet} />
          <Route exact path="/spam" component={Spam} />
          
          <Redirect exact from="/" to= "/mail" />
        </IonRouterOutlet>
      

    <IonTabBar slot="bottom">
      <IonTabButton tab="mail" href="/mail">
        <IonIcon icon={mailOutline} />
        <IonLabel>Mail</IonLabel>
      </IonTabButton>
      <IonTabButton tab="meet" href="/meet">
        <IonIcon icon={videocamOutline} />
        <IonLabel>Meet</IonLabel>
      </IonTabButton>
    </IonTabBar>
    </IonTabs>
    </FriendsContextProvider>
    <Route exact path="/settings" component={Settings} />
    </IonReactRouter>
  </IonApp>
);

export default App;
