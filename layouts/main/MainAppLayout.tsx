import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter} from '@ionic/react'

interface MainAppLayoutProps {
  children?: React.ReactNode
}

export function MainAppLayout({children}: MainAppLayoutProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Решение</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Решение</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  )
}
