
import _ from "lodash"
import Vuex from "vuex"
import { createLocalVue } from "@vue/test-utils"

describe("store/games", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })

  describe("playstationfour", () => {
    let playstationfour

    beforeEach(() => {
      playstationfour = store.getters['games/playstationfour']
    })

    test("getter is a function", () => {
      expect(_.isArray(playstationfour)).toBe(true)
    })

    test("should be 5 games in total", () => {
      expect(playstationfour.length).toBe(5)
    })
  })

  describe('byConsole', () => {
    let byConsole

    beforeEach(() => {
      byConsole = store.getters['games/byConsole']
    })

    test('is a function', () => {
      expect(_.isFunction(byConsole)).toBe(true)
    })

    test('should match what the playstation four getter returns', () => {
      const games = store.getters['games/byConsole']('PlayStation 4')
      const playstationfour = store.getters['games/playstationfour']
      expect(games).toEqual(playstationfour)
    })

    test('shows PlayStation 5 titles to be 3 in total', () => {
      expect(byConsole('PlayStation 5').length).toBe(3)
    })
  })
})