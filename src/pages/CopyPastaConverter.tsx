import {IonButton, IonContent, IonHeader, IonItem, IonItemDivider, IonPage, IonTextarea, IonTitle, IonToolbar} from '@ionic/react';
import './CopyPastaConverter.css';
import {useForm} from "react-hook-form";
import {INGREDIENTS} from "../constants/constants";
import React from "react";

const CopyPastaConverter: React.FC = () => {

  INGREDIENTS.sort((a, b) => a.name > b.name ? 1 : -1);

  const resultRef = React.createRef<HTMLIonTextareaElement>();

  const { register, handleSubmit } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange"
  });

  const convert = (data: any) => {
    // TODO implement
    let fullRecipe = data.recipe;
    let recipeArray: string[] = fullRecipe.split("\n");
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
              <IonTextarea placeholder="Copy paste recipe here"
                           {...register("recipe", { required: true })}
                           autoGrow>
              </IonTextarea>
            </IonItem>

            <IonButton type="submit" expand="full">Convert</IonButton>
          </form>

          <IonItemDivider></IonItemDivider>

          <IonItem>
            <IonTextarea ref={resultRef} readonly placeholder="Converted recipe"></IonTextarea>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CopyPastaConverter;
