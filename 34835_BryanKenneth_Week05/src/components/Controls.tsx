import React from 'react';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import {calculatorOutline, refreshOutline} from 'ionicons/icons';

const Controls: React.FC <{onCalculate:()=>void; onReset: ()=> void}> = props  => {
    return(
            <IonRow >
                  <IonCol size="12"  size-md="6"  className="ion-text-center">
                      <IonButton expand="block"  color="success" onClick={props.onCalculate}>
                          <IonIcon slot="start" id="click" icon={calculatorOutline}></IonIcon>
                          Calculate
                      </IonButton>
                  </IonCol>
                  <IonCol  size="12"  size-md="6" className="ion-text-center">
                      <IonButton fill="clear"  color="medium" onClick={props.onReset}>
                        <IonIcon slot="start"  icon={refreshOutline}></IonIcon>
                        Reset
                      </IonButton>
                  </IonCol>
              </IonRow>
    )
}

export default Controls