<template>
    <base-layout page-title="WeSport">
        <div id="login">
            <ion-list>
                <h2>Identifiant: </h2>
                <ion-input placeholder=" identifiant"></ion-input>
                <br>
                <h2 >Mot de passe: </h2>
                <ion-input placeholder=" motdepasse"></ion-input>
                <ion-button router-link="/memories">Submit</ion-button>
            </ion-list>
            </div>
     </base-layout>
</template>

<script>
import {IonList, IonButton} from '@ionic/vue';

export default{
    components: {
      IonList,
      IonButton
    }
}
</script>

<style scoped>
#login {
  text-align: center;
  position: relative;
  top: 25%;
}
</style>
