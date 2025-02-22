import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Airtable from 'airtable';
console.log("henaa");



// Start API calls to get data from the database (airtable)

const base = new Airtable({ apiKey: 'patYqGigP1h6wsxqD.b7759fb0e3e11f9e8eacfc3748b0ffcfaadc106f138ed31934039d327a40d3f1' }).base('appGNg3K0FqrSF4HP');

// Reading all records from the 'all books' table, for each record we get the: bookname, image, price, description, author and genre

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
}
  , function done(err) {
      if (err) { console.error(err); return; }
  });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(400).then(() => {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});
