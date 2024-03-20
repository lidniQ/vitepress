<template>
  <div class="scrollable-container">
    <slot></slot>
  </div>
</template>

<style>
.scrollable-container {
  overflow-y: auto;
  z-index: 2
}


</style>
