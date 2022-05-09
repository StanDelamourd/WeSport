<template>
    <base-layout page-title="WeSport">
    <ion-searchbar placeholder="Recherche(ex. foot,volley,tennis...)"></ion-searchbar>
    <ion-button>Filtre</ion-button>
    <ion-footer>
            <ion-list>
                <ion-item router-link="/memoriesPage/1">Trouver un groupe</ion-item>
                <ion-item router-link="/landing">Logingf</ion-item>
                <ion-item router-link="/memories/#">Profil</ion-item>
                <ion-item router-link="/memories/#">Contact</ion-item>
            </ion-list>
    </ion-footer>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Basket</ion-card-title>
        </ion-card-header>
        <ion-description style="margin-left:50px">
            "Fun garanti! Rejoignez-nous vite!"<br>Bon - Evenement 30/01 - 18-25
        </ion-description>
    </ion-card>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Foot</ion-card-title>
        </ion-card-header>
        <ion-description style="margin-left:50px">
            "Fun garanti! Rejoignez vite!"<br>Moyen - Evenement 30/01 - 18-25
        </ion-description>
    </ion-card>
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