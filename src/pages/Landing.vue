<template>
    <base-layout page-title="WeSport">
        <div id="login">
            <ion-list>
                <h2>{{ User.firstName }}</h2>
                <ion-input placeholder=" identifiant"></ion-input>
                <br>
                <h2>{{ User.lastName }}</h2>
                <ion-input placeholder=" identifiant"></ion-input>
                <br>
                <h2>{{ User.age }}</h2>
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
import axios from 'axios';

export default{
    components: {
      IonList,
      IonButton,
    },
    name:'hello',
    data() {
      return{
        User:{},
      }
    },
    mounted(){
      axios.get('http://localhost:3000/api')
      .then((response) =>{
        console.log(response);
        this.User = response.data.data;
      })
    },
}
</script>

<style scoped>
#login {
  text-align: center;
  position: relative;
  top: 25%;
}
</style>
