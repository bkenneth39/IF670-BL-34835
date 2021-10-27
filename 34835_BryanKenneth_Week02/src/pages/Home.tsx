import {IonPage, IonHeader,IonGrid,IonRow,IonCol, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonContent, IonDatetime, IonSelect, IonSelectOption } from '@ionic/react';

import { useRef, useState } from 'react';
import './Home.css';
import { bookmark } from 'ionicons/icons';

const Home: React.FC = () => {
  const nameInputRef = useRef<HTMLIonInputElement>(null);
  const [Date, setDate] = useState<string>("initial date")
  const [gender, setGender] = useState<"Male" | "Female">("Female")
  return (
    <IonPage>
      <IonHeader>
            <IonToolbar>
                <IonTitle>Hello World!</IonTitle>
            </IonToolbar>
          </IonHeader>


          <IonContent className="ion-padding">
            <IonGrid>
              <IonRow>
                  <IonCol>
                      <IonItem>
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput ref={nameInputRef}></IonInput>
                      </IonItem>
                  </IonCol>
              </IonRow>


              <IonRow>
                  <IonCol>
                      <IonItem>
                          <IonLabel>MM DD YY</IonLabel>
                          <IonDatetime displayFormat="MM DD YY" placeholder="Select Date" value={Date} onIonChange={event => setDate(event.detail.value!)}></IonDatetime>
                      </IonItem>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol>
                    <IonItem>
                    <IonLabel>Gender</IonLabel>
                    <IonSelect value={gender} onIonChange={event => setGender(event.detail.value)}>
                      <IonSelectOption value="Female">Female</IonSelectOption>
                      <IonSelectOption value="Male">Male</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  </IonCol>
              </IonRow>


              <IonRow>
                  <IonCol className="ion-text-left">
                      <IonButton>
                          <IonIcon slot="start" icon={bookmark}></IonIcon>
                          Register
                      </IonButton>
                  </IonCol>
                
              </IonRow>


             
            </IonGrid>
          </IonContent>
    </IonPage>
  );
};

export default Home;
