<template>
    <h1 class="my-4">Quotes page</h1>
    <div>
      <div v-if="loading" class="text-center">Loading quotes...</div>
      <div v-else-if="error" class="text-center text-danger">Error loading quotes.</div>
      <div v-else>
        <div class="quote-container">
          <div class="card my-4" v-for="quote in Qoutes" :key="quote.id">
            <div class="card-body">
              <p class="card-text">{{ quote.quote }}</p>
              <a href="#" class="card-link">{{quote.author}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Quotes',
    data() {
      return {
        Qoutes: null,
        loading: false,
        error: false,
      };
    },
    mounted() {
      this.getQuotes();
    },
    methods: {
      getQuotes() {
        this.loading = true;
        axios.get('https://dummyjson.com/quotes')
          .then((response) => {
            this.Qoutes = response.data.quotes;
            console.log(this.Qoutes);
            this.loading = false;
          })
          .catch((error) => {
            console.error('Error loading quotes:', error);
            this.loading = false;
            this.error = true;
          });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .quote-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Optional: Adjust as needed for your layout */
  }
  
  .card {
    width: 18rem; /* Set a fixed width for the cards */
    margin-bottom: 1rem; /* Optional: Add some spacing between the cards */
  }
  
  /* Add any custom styles you want here */
  </style>
  