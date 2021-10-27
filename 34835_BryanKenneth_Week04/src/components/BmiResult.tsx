import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiResult: React.FC<{
    calculatedBMI: number,
    BMIStatus: any
}> = props => {
    return(      
        <IonRow>
        <IonCol>
          <IonCard>
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