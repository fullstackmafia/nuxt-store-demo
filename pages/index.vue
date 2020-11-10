<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="game in psfourGames" :key="game.title">
        <v-card>
          <v-img :src="game.photo" aspect-ratio="2"></v-img>
          <v-card-title primary-title>
            <div>
              <h3>{{game.title}}</h3>
              <h4>Rating: {{game.rating}}</h4>
              <h4>Price: ${{game.price}}</h4>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      consoleType: 'games/games/consoleType'
    }),
    psfourGames () {
      return this.consoleType('PlayStation 4')
    }
  }
}
</script>

<style>
.title {
  font-weight: 400;
  font-size: 40px;
  color:  #1a8cff;
  word-spacing: 5px;
  padding-bottom: 15px;
  margin-top: 40px;
  font-family: 'Courier Prime', monospace;
}
</style>