<template>
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column">
        <h1 class="is-size-3">
          {{title}}
        </h1>
        <div style="height: 1rem"></div>
        <p>
          {{subTitle}}
        </p>
        <div style="height: 3rem"></div>
        <div
          v-for="(feagureGroup, groupKey) in features"
          class="columns" :key="groupKey"
          style="margin-bottom: 1rem"
        >
          <div
            v-for="(feature, featureKey) in feagureGroup"
            class="column" :key="featureKey"
            style="margin-bottom: 1rem"
          >
            <div class="feature-top is-hidden-touch"></div>
            <p class="is-size-5 feature-title">
              {{feature[0]}}
            </p>
            <div style="height: 0.5rem"></div>
            <p class="is-size-6">
              {{feature[1]}}
            </p>
          </div>
        </div>
      </div>
      <div style="width: 2rem; height: 1rem"></div>
      <div class="column is-flex is-centered is-narrow">
        <figure
          class="image"
          style="width: 350px; height: 680px"
        >
          <VImage :path="image"></VImage>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'Description',
  components: {
    VImage
  },
  props: {
    image: {},
    title: {},
    subTitle: {},
    features: {}
  }
}
</script>
