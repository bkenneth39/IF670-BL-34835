import { Redirect, Route } from 'react-router-dom';
import { IonApp,IonRadio,IonList, IonHeader, IonRouterOutlet,IonGrid,IonRow,IonCol, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonCard, IonCardContent, IonContent, IonAlert, IonPage, IonButtons, IonBackButton, IonRadioGroup, IonListHeader } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {calculatorOutline, refreshOutline} from 'ionicons/icons';
import {useRef, useState} from 'react';
import Home from '../pages/Home';
import BmrControls from '../components/Controls';
import InputControl from '../components/InputControl';
import BmiResult from '../components/BmiResult';
import BmrResult from '../components/BmrResult';

const BmrCalc: React.FC = () => {
    const [calculatedBMR, setCalculatedBMR] = useState<number>();
    const [caloriesNeeded, setCaloriesNeeded] = useState<number[]>([0]);
    const [error, setError] = useState<string>();
    const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const [GenderInput, setGenderInput] = useState<'Male' | 'Female'>();
    const ageInputRef = useRef<HTMLIonInputElement>(null);
    const [changed, setChanged] = useState<boolean>()
    const calculateBMR = () => {
    
    let enteredWeight:any = weightInputRef.current!.value;
    let enteredHeight:any = heightInputRef.current!.value;
    let enteredAge:any = ageInputRef.current!.value;
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
      
      let bmr:any;
      let neededCalories:any;
      let startingcount = 1.2;
      if(GenderInput==="Male"){
            bmr = 66 + (13.7*enteredWeight) + (5*enteredHeight) - (6.8*enteredAge)
      } else {
            bmr = 655 + (9.6*enteredWeight) + (1.8*enteredHeight) - (4.7*enteredAge)
      }
      
      for(let i=1; i<=5; i++){
            neededCalories = startingcount*bmr
            caloriesNeeded.push(neededCalories)
            startingcount += 0.175
      }
      
      
      setCalculatedBMR(bmr);
      // console.log(bmi);
  }

  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    setCalcUnits(selectedValue)
    onChangeHandler()
  }

  const onChangeHandler = () => {
    // console.log(calcUnits);
    if(calculatedBMR){
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
    ageInputRef.current!.value = '';
    setGenderInput(undefined)
    setCalculatedBMR(undefined);
    
  }


  return(
    <IonPage>
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
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle>BMR Calculator</IonTitle>
            </IonToolbar>
          </IonHeader>


          <IonContent className="ion-padding">
            <IonGrid>
              <IonRow>
                <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                  <IonGrid className="ion-no-padding">
                    <InputControl selectedValue={calcUnits} onSelectedValue={selectCalcUnitHandler} />
                  </IonGrid>
                </IonCol>
              </IonRow>

              <IonRow>
                  <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                      <IonItem>
                        <IonLabel position="floating">Age</IonLabel>
                        <IonInput ref={ageInputRef} id="ageInput"></IonInput>
                      </IonItem>
                  </IonCol>
              </IonRow>

          <IonRow>
            <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
            <IonList >
              <IonRadioGroup value={GenderInput} onIonChange={e => setGenderInput(e.detail.value)}>              
                    <IonListHeader>
                        <IonLabel>Gender</IonLabel>
                    </IonListHeader>
                  
                <IonRow>
                    <IonCol > 
                        <IonItem>
                            <IonLabel>Male</IonLabel>
                            <IonRadio slot="start" value="Male" />
                        </IonItem>
                    </IonCol>
                    <IonCol >
                        <IonItem>
                             <IonLabel>Female</IonLabel>
                            <IonRadio slot="start" value="Female" />
                        </IonItem>
                    </IonCol>
                </IonRow>
              </IonRadioGroup>
              </IonList>
              </IonCol>
          </IonRow>


              <IonRow>
                  <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                      <IonItem>
                        <IonLabel position="floating">Tinggi Badan({calcUnits==='cmkg' ? 'cm' : 'feet'})</IonLabel>
                        <IonInput ref={heightInputRef} id="heightInput"></IonInput>
                      </IonItem>
                  </IonCol>
              </IonRow>


              <IonRow>
                  <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3"> 
                      <IonItem>
                          <IonLabel position="floating">Berat Badan({calcUnits ==='cmkg'? 'kg' : 'lbs'})</IonLabel>
                          <IonInput ref={weightInputRef} id="weightInput"></IonInput>
                      </IonItem>
                  </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                  <BmrControls onCalculate={calculateBMR} onReset={resetInputs} />
                </IonCol>
              </IonRow>


              {calculatedBMR && (
                <BmrResult calculatedBMR={calculatedBMR} CaloriesNeeded={caloriesNeeded} />
              )}
            </IonGrid>
          </IonContent>
      </IonApp>
      </IonPage>
  );
}

export default BmrCalc;