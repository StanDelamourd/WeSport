<template>
    <base-layout page-title="WeSport">
    
            <ion-list>
                <ion-item router-link="/memoriesPage/1">Trouver un groupe</ion-item>
                <ion-item router-link="/landing">Login</ion-item>
                <ion-item router-link="/memories/#">Profil</ion-item>
                <ion-item router-link="/memories/#">Contact</ion-item>
            </ion-list>
     </base-layout>
</template>

<script>
import {IonList, IonItem } from '@ionic/vue';

export default{
    components: {
      IonList,
      IonItem
    }
}
</script>