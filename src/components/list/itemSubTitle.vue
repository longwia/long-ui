<template>
<div class="ui-item-sub-title">
  <slot></slot>
</div>
</template>

<style lang="less">
@import "~utils/_vars.less";
.ui-item-sub-title{
  color: @color;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  display: block;
  position: relative;
  max-width: 100%;
  font-size: 14px;
}
</style>
