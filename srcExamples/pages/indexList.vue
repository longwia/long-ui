<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Index List</span>
  </header-bar>
  <index-list :indexs="indexs">
    <p v-for="(item, index) in alphabet" :key="index" :data-index="item.initial">
      <content-title>{{item.initial}}</content-title>
      <list>
        <item-cell v-for="(cell, index) in item.cells" :key="index">
          <item-title>
            {{cell}}
          </item-title>
        </item-cell>
      </list>
    </p>
  </index-list>
</div>
</template>

<script>
// const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane']
const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Yvonne', 'Zack', 'Zane', 'Zane']

export default {
  data () {
    return {
      alphabet: [],
      indexs: []
    }
  },

  created () {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
      let cells = NAMES.filter(name => name[0] === initial)
      if (cells.length) {
        this.indexs.push(initial)
        this.alphabet.push({
          initial,
          cells
        })
      }
    })
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="less" scoped>
.ui-header-bar {
  position: fixed;
  top: 0;
}
.ui-content-title {
  margin: 0;
  padding: 0 16px;
}
.ui-list {
  margin: 0;
}
</style>
