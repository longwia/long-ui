<template>
  <modal :click-overlay-close="false" ref="modal" :title="title">
    <div class="ui-prompt-content" ref="content">
      <div class="ui-prompt-text">{{msg}}</div>
      <div class="ui-prompt-text-field" :class="{'focus-state': focus, 'not-empty-state': input}">
        <input type="text" ref="input" @focus="focus = true" @blur="focus = false"
          class="ui-prompt-input" v-model="input">
      </div>
    </div>
    <Button slot="footer" text="取消" @click.native="cancel"></Button>
    <Button slot="footer" text="确定" @click.native="sure"></Button>
  </modal>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    onSure: {
      type: Function
    }
  },
  data () {
    return {
      input: '',
      focus: false
    }
  },
  methods: {
    open () {
      this.$refs.modal.open()
    },
    close () {
      this.$refs.modal.close()
    },
    cancel () {
      // this.show = false
      this.$refs.modal.close()
      this.$emit('cancel')
    },
    sure () {
      // this.show = false
      // if (this.onSure) this.onSure(this.input)
      this.$refs.modal.close()
      this.$emit('sure', this.input)
    }
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-prompt-content{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.ui-prompt-text-field{
  width: 100%;
  display: block;
  position: relative;
  .hairline(bottom, #d3d6db);
  &:after {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
    transform: translate3d(0, 0, 0);
    transition-duration: 200ms;
  }
  &.focus-state:after,
  &.not-empty-state:after {
    background: @red;
    transform: scaleY(2) !important;
  }
}
.ui-prompt-input{
  appearance: none;
  outline: none;
  box-sizing: border-box;
  border: none;
  background: none;
  border-radius: 0 0 0 0;
  box-shadow: none;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 36px;
  color: @color;
  font-size: 16px;
  font-family: inherit;
}
</style>
