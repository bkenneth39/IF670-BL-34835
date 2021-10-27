import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent, IonGrid } from "@ionic/react";

const BmrResult: React.FC<{
    calculatedBMR: number,
    CaloriesNeeded: any
}> = props => {
    return(      
        <IonRow>
        <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3"> 
          <IonCard color="dark">
            <IonCardContent className="ion-text-center">
              <h2>BMR = {props.calculatedBMR}</h2>
              Daily Calorie needs based on activity level
              <IonGrid className="ion-text-left">
                    <IonRow>
                      <IonCol>
                          Activity Level
                      </IonCol>
                      <IonCol>
                          Calorie
                      </IonCol>
                  </IonRow>

                  <IonRow>
                      <IonCol>
                          Sedentary: little or no excercise
                      </IonCol>
                      <IonCol>
                          {props.CaloriesNeeded[1]}
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                         Excercise 1-3 times/week
                      </IonCol>
                      <IonCol>
                      {props.CaloriesNeeded[2]}
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                      Excercise 4-5 times/week
                      </IonCol>
                      <IonCol>
                      {props.CaloriesNeeded[3]}
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                        Daily excercise or intense excercise 3-4 times/week
                      </IonCol>
                      <IonCol>
                      {props.CaloriesNeeded[4]}
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                        Intense excercise 6-7 times/week
                      </IonCol>
                      <IonCol>
                      {props.CaloriesNeeded[5]}
                      </IonCol>
                  </IonRow>
              </IonGrid>
             
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    )
}

export default BmrResult