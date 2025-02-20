```javascript
// Solution: Use more specific selectors or the `!important` flag (use cautiously)

// MyComponent.vue
<template>
  <div class="text-white !important">
    This is a child component.
  </div>
</template>

// Alternative Solution (better practice): Use a more specific selector
<template>
  <div class="bg-red-500 p-4">
     <MyComponent/>
  </div>
</template>

//MyComponent.vue
<template>
 <div class="text-white">
  This is a child component.
 </div>
</template>

<style scoped>
  .text-white{
    color: white !important;
  }
</style>
```