import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Airtable from 'airtable';


function getTable() {
  return new Promise(function(resolve, reject) {
    const base = new Airtable({ apiKey: 'patYqGigP1h6wsxqD.b7759fb0e3e11f9e8eacfc3748b0ffcfaadc106f138ed31934039d327a40d3f1' }).base('appGNg3K0FqrSF4HP');
    base('mytable').select({
      view: "mytable"
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        if(record.get('name') === "sherif"){
          console.log(record.get('name') + " da5alllllllllllllllllllll");
          Vue.prototype.$sherifCount= record.get('points');
        }
        if(record.get('name') === "nada"){
          Vue.prototype.$nadaCount = record.get('points');
        }
      });
      fetchNextPage();
    }, function done(err){
      if(err){
        reject("error");
      }
      else{
        resolve("success");
      }
    });
  });
}
getTable()
.then((message) =>{
  console.log(message);
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
})
.catch((error) =>{
  console.log(error);
});
