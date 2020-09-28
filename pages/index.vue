<template>
  <section>
    <h2 class="title">PlayStation 4 Bestsellers</h2>
    <ul class="games">
      <li v-for="game in psfourGames" :key="game.title">
        {{game.title}}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      byConsole: 'games/byConsole'
    }),
    psfourGames () {
      return this.byConsole('PlayStation 4')
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
  font-family: 'Courier Prime', monospace;
}
</style>