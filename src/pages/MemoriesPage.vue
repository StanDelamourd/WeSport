<template>
    <base-layout page-title="WeSport">
    <ion-searchbar placeholder="Recherche(ex. foot,volley,tennis...)"></ion-searchbar>
    <ion-button>Filtre</ion-button>
    <ion-footer>
            <ion-list>
                <ion-item router-link="/memoriesPage/1">Trouver un groupe</ion-item>
                <ion-item router-link="/landing">Login</ion-item>
                <ion-item router-link="/memories/#">Profil</ion-item>
                <ion-item router-link="/memories/#">Contact</ion-item>
            </ion-list>
    </ion-footer>
     </base-layout>
</template>

<script>
import { IonList, IonItem, IonSearchbar, IonButton } from '@ionic/vue';

export default{
    components: {
      IonList,
      IonItem,
      IonSearchbar,
      IonButton
    }
}
</script>