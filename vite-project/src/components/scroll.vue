<template>
  <div class="scrollable-container">
    <slot></slot>
  </div>
</template>

<style>
.scrollable-container {
  overflow-y: scroll;
  max-height: 200px;
}


</style>
