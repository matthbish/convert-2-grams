import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Converter.css';
import {useForm} from "react-hook-form";
import {INGREDIENTS, MEASUREMENTS} from "../constants/constants";
import React from "react";
import {MenuItem, Select} from "@mui/material";

const Converter: React.FC = () => {

  INGREDIENTS.sort((a, b) => a.name > b.name ? 1 : -1);

  const resultRef = React.createRef<HTMLIonInputElement>();

  const { register, handleSubmit } = useForm({
      mode: "onTouched",
      reValidateMode: "onChange"
  });

  const convert = (data: any) => {
    const measurementsMultiplier = MEASUREMENTS.find(m => m.name === data.originalMeasurement)?.inOneCup;
    const gramsMultiplier = INGREDIENTS.find(i => i.name === data.ingredient)?.gramsInOneCup;
    if (resultRef.current && measurementsMultiplier && gramsMultiplier) { // TODO make grams adjustable to other units
      resultRef.current.value = data.originalMeasurementValue * (1 / measurementsMultiplier) * gramsMultiplier;
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
            <Select {...register("originalMeasurement", { maxLength: 30, value: MEASUREMENTS[0].name })}
                    defaultValue={MEASUREMENTS[0].name}>
              {
                MEASUREMENTS.map(m => <MenuItem value={m.name}>{m.name}</MenuItem>)
              }
            </Select>
            <Select {...register("ingredient", { maxLength: 30, value: INGREDIENTS[0].name })}
                    defaultValue={INGREDIENTS[0].name}>
              {
                INGREDIENTS.map(i => <MenuItem value={i.name}>{i.name}</MenuItem>)
              }
            </Select>
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
