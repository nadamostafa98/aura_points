<template>
<div class="container py-5">
    <div class="d-flex justify-content-center align-self-center py-3">
        <div class="col">
            <div class="d-flex justify-content-center">
                <h2>Sherif</h2>
            </div>
            <div class="d-flex justify-content-center py-3">
                <button v-on:click="decSherif">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <input class="text-center" v-model="countSherif" readonly/>
                <button v-on:click="incSherif">
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="col ">
            <div class="d-flex justify-content-center">
                <h2>Nada</h2>
            </div>
            <div class="d-flex justify-content-center py-3">
                <button v-on:click="decNada">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <input class="text-center" v-model="countNada" readonly/>
                <button v-on:click="incNada">
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                </button>
            </div>

        </div>
    </div>
</div>
</template>
<script>
import Airtable from 'airtable';
export default {
    data(){
        let countSherif = this.$sherifCount;
        let countNada = this.$nadaCount;
        return{
            countSherif,
            countNada
        }
    },

  methods: {
    updatedb(){
        const base = new Airtable({ apiKey: 'patYqGigP1h6wsxqD.b7759fb0e3e11f9e8eacfc3748b0ffcfaadc106f138ed31934039d327a40d3f1' }).base('appGNg3K0FqrSF4HP');


        base('mytable').update([
  {
    "id": "recy4OgVgLgih6ndW",
    "fields": {
      "name": "sherif",
      "points": this.countSherif
    }
  },
  {
    "id": "rec7MajBZYZyUN6Yu",
    "fields": {
      "name": "nada",
      "points": this.countNada
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('name'));
  });
});
    },
    incSherif(){
        this.$sherifCount++;
        this.countSherif = this.$sherifCount;
        this.updatedb();
    },
    decSherif(){
        this.$sherifCount--;
        this.countSherif = this.$sherifCount;
        this.updatedb();
    },
    incNada(){
        this.$nadaCount++;
        this.countNada = this.$nadaCount;
        this.updatedb();
    },
    decNada(){
        this.$nadaCount--;
        this.countNada = this.$nadaCount;
        this.updatedb();
    }
  },

};
</script>
<style>
h2{
    font-family: 'Poppins';
    color:#42b983;    
}
button{
    background-color: #42b983;
    color: aliceblue;
    border: 0cap;
}
input{
    width:5em;
    border: 0cm;
}
</style>