<template>
  <section>
    <div
      v-for="(routes, key) in routeGroups" :key="key"
      class="field has-addons"
    >
      <p
        v-for="route in routes" :key="route"
        class="control"
      >
        <a
          class="button"
          @click="$emit('input', route)"
          style="width: 140px; height: 160px"
          :class="value === route && 'is-focused'"
        >
          <div>
            <span>{{route}}</span>
            <div style="height: 0.25rem"></div>
            <!-- BUG: 整个 Button 存在跳闪的情况 -->
            <div style="width: 100px; height: 100px;">
              <TransplotRouteType :type="route"></TransplotRouteType>
            </div>
          </div>
        </a>
      </p>
    </div>
  </section>
</template>

<script>
import TransplotRouteType from './TransplotRouteType.vue'

const routeGroups = [
  ['Z型', 'C型', 'CC型', 'CZ型', 'ZC型', 'F型', 'E型'],
  ['ZE型', 'FE型', 'EE型', 'L型', 'LF型', 'LL型']
]

export default {
  name: 'TransplotRoutes',
  components: {
    TransplotRouteType
  },
  props: {
    value: String
  },
  computed: {
    routeGroups: () => routeGroups
  }
}
</script>
