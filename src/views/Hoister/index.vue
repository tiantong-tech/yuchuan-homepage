<template>
  <div id="hoister">
    <div
      class="field has-addons has-addons-centered"
      style="margin-top: 64px; margin-bottom: 0"
    >
      <p
        v-for="(tab, key) in tabs" :key="key"
        class="control"
      >
        <a
          @click="currentTab = key"
          class="button is-outlined is-medium"
          style="height: 72px"
          :class="key === currentTab && 'is-focused'"
        >
          <span>{{tab.text}}</span>
        </a>
      </p>
    </div>

    <component
      v-if="tabs[currentTab].component"
      :is="tabs[currentTab].component"
    ></component>
  </div>
</template>

<script>
import PLType from './PLType'
import DrumpType from './DrumpType'
import SigmaType from './SigmaType'

export default {
  name: 'Hostier',
  data () {
    return {
      tabs: [
        { text: '滚筒输送型', component: DrumpType },
        { text: 'PL 专用循环型', component: PLType },
        { text: 'Σ 母托盘循环型', component: SigmaType }
      ],
      currentTab: 0
    }
  }
}
</script>
