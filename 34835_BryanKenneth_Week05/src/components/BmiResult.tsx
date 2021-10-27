import React from "react";
import './BmiResult.css';
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiResult: React.FC<{
    calculatedBMI: number,
    BMIStatus: any
    BmiCard: any
}> = props => {
    return(      
        <IonRow>
        <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
          <IonCard id="result" color={props.BmiCard}>
            <IonCardContent className="ion-text-center">
              <h2>{props.calculatedBMI}</h2>
              <h1>{props.BMIStatus}</h1>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    )
}

export default BmiResult