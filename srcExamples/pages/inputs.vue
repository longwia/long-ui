<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Text Field</span>
  </header-bar>
  <scroll-view>
    <content-title>输入框</content-title>
    <form-list>
      <text-field label="用户名" placeholder="请输入你的姓名" icon="user"></text-field>
      <text-field label="电话" type="number" placeholder="请输入你的电话" icon="phone"></text-field>
      <text-field label="简介" type="textarea" :rows="3" icon="markunread" placeholder="newspaper"></text-field>
    </form-list>
    <content-title>浮动 label 的输入框</content-title>
    <form-list>
      <text-field label-float label="用户名" icon="user"></text-field>
      <text-field label-float label="电话" type="number" icon="phone"></text-field>
      <text-field label-float label="简介" type="textarea" :rows="3" icon="newspaper"></text-field>
    </form-list>
    <content-title>没有图标</content-title>
    <form-list>
      <text-field label="用户名"></text-field>
      <text-field label="电话" type="number"></text-field>
      <text-field label="简介" type="textarea" :rows="3"></text-field>
    </form-list>
  </scroll-view>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
