import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact} from '@ionic/react';
import Converter from './pages/Converter';

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
import CopyPastaConverter from "./pages/CopyPastaConverter";
import React from "react";
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router";
import {calculatorOutline, documentTextOutline, ellipse, triangle} from "ionicons/icons";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/converter">
            <Converter />
          </Route>
          <Route exact path="/copy-paste-converter">
            <CopyPastaConverter />
          </Route>
          <Route exact path="/">
            <Redirect to="/converter" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/converter">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Converter</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/copy-paste-converter">
            <IonIcon aria-hidden="true" icon={documentTextOutline} />
            <IonLabel>Copy Paste Converter</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
