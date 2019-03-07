const proxyurl = "https://cors-anywhere.herokuapp.com/";
let app = new Vue({
  el: '#app',
  data: {
    message: '',
    clickedbutt: false,
    loading: true,
    savedMessages: [],
  },
  methods: {
    async getAdvice() {
      try {
        this.clickedbutt = true;
        this.loading = true;
        const response = await axios.get('https://api.adviceslip.com/advice');
        this.loading = false;
        console.log(response);
        this.message = response.data.slip.advice;
      } catch (error) {
        console.log(error)
        this.message = "Error finding advice";
      }
    },
    async getQuote() {
      try {
        this.clickedbutt = true;
        this.loading = true;
        let urlTemp = 'https://api.kanye.rest';
        const url = proxyurl + urlTemp;
        const response = await axios.get(url);
        console.log(response);
        this.loading = false;
        this.message = response.data.quote + ' -Kanye Best';
      } catch (error) {
        console.log(error)
        this.message = "Error finding quote";
      }
    },
    async getInsult() {
      try {
        this.clickedbutt = true;
        this.loading = true;
        let urlTemp = 'https://insult.mattbas.org/api/insult.json';
        const url = proxyurl + urlTemp;
        const response = await axios.get(url);
        this.loading = false;
        console.log("what");
        console.log(response);
        this.message = response.data.insult;
      } catch (error) {
        console.log("error");
        console.log(error)
        this.message = "Error finding quote";
      }
    },
    saveMessage() {
      if (message != '') {
        this.savedMessages.push(this.message);
      }
    },
  },
});
