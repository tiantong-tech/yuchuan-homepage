<template>
  <span>
    <template v-for="option in options">
      <Radio
        :key="option + '1'"
        @click="handleClick(option)"
        style="margin-right: 2rem"
        :value="value === option"
      >
        {{option}}
      </Radio>
    </template>
  </span>
</template>

<script>
export default {
  props: {
    value: String,
    options: Array
  },
  methods: {
    handleClick (option) {
      this.$emit('input', option)
    }
  }
}
</script>
