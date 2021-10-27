import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const InputControl: React.FC<{
    selectedValue: 'cmkg' | 'ftlbs';
    onSelectedValue: (value:'cmkg' | 'ftlbs') => void

}> = props  => {

    const inputChangeHandler = (event:CustomEvent) => {
        console.log(event.detail.value)
        props.onSelectedValue(event.detail.value);
    }

    return(
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="cmkg">
                <IonLabel>cm/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControl