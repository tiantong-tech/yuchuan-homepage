<template>
  <div class="has-background-success is-flex" style="height: 5rem">
    <div class="container">
      <div class="is-flex" style="align-items: center; height: 100%">
        <p class="is-size-4 has-text-white">
          信息已提交
        </p>
        <div class="is-flex-auto"></div>
        <button
          class="delete is-medium"
          @click="$router.push('/prices/hoister')"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoisterCreated'
}
</script>
