import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonHeader, IonRouterOutlet,IonGrid,IonRow,IonCol, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonCard, IonCardContent, IonContent, IonAlert } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {calculatorOutline, refreshOutline} from 'ionicons/icons';
import {useRef, useState} from 'react';
import Home from './pages/Home';
import BmiControls from './components/BmiControls';
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

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [BMIStatus, setBMIStatus] = useState<String>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [changed, setChanged] = useState<boolean>()
  const calculateBMI = () => {
    
    let enteredWeight:any = weightInputRef.current!.value;
    let enteredHeight:any = heightInputRef.current!.value;
    console.log({calcUnits})


    
    if(changed){
      const weightInput = document.getElementById('weightInput')
      const heightInput = document.getElementById('heightInput')
      if(calcUnits==='ftlbs'){
        const sendweight:any = +enteredWeight * 2.205;
        const sendheight:any = +enteredHeight * 0.0328084;
        enteredWeight = +enteredWeight * 2.205;
        enteredHeight = +enteredHeight * 0.0328084;
        if(weightInput) weightInput.setAttribute('value', sendweight) 
        if(heightInput) heightInput.setAttribute('value', sendheight) 
      } else {
        const sendweight:any = +enteredWeight * 0.453592;
        const sendheight:any = +enteredHeight * 30.48;
        enteredWeight = +enteredWeight * 0.453592;
        enteredHeight = +enteredHeight * 30.48;
        if(weightInput) weightInput.setAttribute('value', sendweight) 
        if(heightInput) heightInput.setAttribute('value', sendheight) 
      }

      setChanged(false)
    }

   

      if(!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0){
        setError("Please entered a valid(non-negative) input number");
        return;
      }
      if(calcUnits==='ftlbs'){
        enteredWeight = +enteredWeight / 2.2;
        enteredHeight = +enteredHeight * 30.48;
        // console.log(enteredWeight)
      } 
      console.log(enteredWeight)
      console.log(enteredHeight)
  
      
      const bmi = +enteredWeight / ((+enteredHeight/100) * (+enteredHeight/100));

      if(bmi<18.5){
        setBMIStatus("kurus")
      } else if(bmi>=8.5 && bmi<=24.9){
         setBMIStatus("normal")
      } else if(bmi>=25 && bmi<=29.9){
         setBMIStatus("Gemuk")
      } else if(isNaN(bmi)){
          setBMIStatus("Data not Valid")
      } else {
         setBMIStatus("Obesitas")
      }
      
      setCalculatedBMI(bmi);
      // console.log(bmi);
  }

  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    setCalcUnits(selectedValue)
    onChangeHandler()
  }

  const onChangeHandler = () => {
    // console.log(calcUnits);
    if(calculatedBMI){
      setChanged(true)
      document.getElementById("click")?.click()
    }
  }

  const cleanError = () => {
    setError('')
  }

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBMI(undefined);
    setBMIStatus('');
  }


  return(
    <>
     <IonAlert
        isOpen={!!error}
        message = {error}
        buttons={[
          {text:'Okay', handler: cleanError}
        ]}
      />
      <IonApp>
          <IonHeader>
            <IonToolbar>
                <IonTitle>BMI Calculator</IonTitle>
            </IonToolbar>
          </IonHeader>


          <IonContent className="ion-padding">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <InputControl selectedValue={calcUnits} onSelectedValue={selectCalcUnitHandler} />
                </IonCol>
              </IonRow>

              <IonRow>
                  <IonCol>
                      <IonItem>
                        <IonLabel position="floating">Tinggi Badan({calcUnits==='cmkg' ? 'cm' : 'feet'})</IonLabel>
                        <IonInput ref={heightInputRef} id="heightInput"></IonInput>
                      </IonItem>
                  </IonCol>
              </IonRow>


              <IonRow>
                  <IonCol>
                      <IonItem>
                          <IonLabel position="floating">Berat Badan({calcUnits ==='cmkg'? 'kg' : 'lbs'})</IonLabel>
                          <IonInput ref={weightInputRef} id="weightInput"></IonInput>
                      </IonItem>
                  </IonCol>
              </IonRow>

              <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />


              {calculatedBMI && (
                <BmiResult calculatedBMI={calculatedBMI} BMIStatus={BMIStatus} />
              )}
            </IonGrid>
          </IonContent>
      </IonApp>
      </>
  );
};

export default App;






