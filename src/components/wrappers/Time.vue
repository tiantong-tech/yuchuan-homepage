<template>
  <component :is="tag">
    {{value.substr(0, 10)}}
  </component>
</template>

<script>
export default {
  name: 'TimeWrapper',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    value: String
  }
}
</script>
