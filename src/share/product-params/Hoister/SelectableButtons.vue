<template>
  <section class="field has-addons">
    <p
      v-for="option in options" :key="option"
      class="control"
    >
      <a
        class="button"
        @click="$emit('input', option)"
        :class="isValueIncluded && value === option && 'is-focused'"
      >
        <span>{{option}}</span>
      </a>
    </p>
    <p class="control">
      <input
        placeholder="其他"
        type="text" class="input"
        :value="isValueIncluded ? '' : value"
        :class="!isValueIncluded && 'is-focused'"
        @input="handleInput($event.target.value.trim())"
      >
    </p>
  </section>
</template>

<script>
export default {
  name: 'CustomerSelectableButtons',
  props: {
    value: String,
    options: Array
  },
  computed: {
    isValueIncluded () {
      return this.options.includes(this.value)
    }
  },
  methods: {
    handleInput (value) {
      if (value) {
        this.$emit('input', value)
      } else {
        this.$emit('input', this.options[0])
      }
    }
  }
}
</script>
