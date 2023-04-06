import {
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage, IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Converter.css';
import {useForm} from "react-hook-form";
import {INGREDIENTS, MEASUREMENTS} from "../constants/constants";
import React from "react";

const Converter: React.FC = () => {

  INGREDIENTS.sort((a, b) => a.name > b.name ? 1 : -1);

  const resultRef = React.createRef<HTMLIonInputElement>();

  const { register, handleSubmit } = useForm({
      mode: "onTouched",
      reValidateMode: "onChange"
  });

  const convert = (data: any) => {
    if (resultRef.current) { // TODO make grams adjustable to other units
      resultRef.current.value = data.originalMeasurementValue * data.originalMeasurement.inOneCup * data.ingredient.gramsInOneCup;
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Convert2Grams</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Convert2Grams</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="parent">
          <form onSubmit={handleSubmit(convert)}>
            <IonItem>
              <IonInput {...register("originalMeasurementValue", { required: true, value: "1" })}
                        inputmode="decimal"
                        step="any"
                        required
                        type="number"
                        value="1" />
            </IonItem>
            <IonItem>
              <IonSelect {...register("originalMeasurement", { value: MEASUREMENTS[0] })}
                         value={MEASUREMENTS[0]}>
                {
                  MEASUREMENTS.map(m => <IonSelectOption value={m} key={m.name}>{m.name}</IonSelectOption>)
                }
              </IonSelect>
            </IonItem>
            <IonItemDivider class="of">
              <IonLabel>of</IonLabel>
            </IonItemDivider>
            {/*TODO make the ingredient select below searchable*/}
            <IonItem>
              <IonSelect {...register("ingredient", { maxLength: 30, value: INGREDIENTS[0] })}
                         value={INGREDIENTS[0]}>
                {
                  INGREDIENTS.map(i => <IonSelectOption value={i} key={i.name}>{i.name}</IonSelectOption>)
                }
              </IonSelect>
            </IonItem>
            <IonButton type="submit" expand="full" disabled={false}>Convert</IonButton>
          </form>

          <IonItemDivider></IonItemDivider>

          <IonItem>
            <IonInput ref={resultRef} readonly placeholder="Result" />
            <IonLabel>grams</IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Converter;
