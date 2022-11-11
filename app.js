const { createApp } = Vue;

console.log(axios);

createApp({
  data(){
    return{
      listRandomMail: [],
      limitMail: 10,
      isLoaded: false
    }
  },
  methods:{
    getApi(){
      this.isLoaded = false;
      this.listRandomMail = [];
      for(let i = 0; i < this.limitMail; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(mail => {
          this.listRandomMail.push(mail.data.response);
          this.isLoaded = true;
        })
      }
    }
  },
  mounted(){
    this.getApi();
  }

}).mount('#app')