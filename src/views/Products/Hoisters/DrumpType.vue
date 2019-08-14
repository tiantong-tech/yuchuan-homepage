<template>
  <div>
    <Description
      :title="title"
      :sub-title="subTitle"
      image="hoisters/drum/animation.gif"
      :features="features"
    ></Description>
    <div style="height: 2rem"></div>
    <Device image="hoisters/drum/structure.jpg"></Device>
    <Cases :images="[
      'hoisters/drum/case-1.jpeg',
      'hoisters/drum/case-2.jpg'
    ]"></Cases>
  </div>
</template>

<script>
import Cases from './Cases'
import Device from './Device'
import Description from './Description'

export default {
  name: 'DrumpTypeHoister',
  components: {
    Cases,
    Device,
    Description
  },
  data: () => ({
    title: '滚筒型托盘专用型',
    subTitle: `
      本设备采用独立变频控制技术，使运输途中的加速和减速非常流畅，
      不需担心货物散落、倾倒的问题。同时，由于产品框架设计为立式塔形，具有较强的抗震能力，在新老建筑均可安装。
    `,
    features: [
      [
        ['自主检验即可', '该机器是作为非载人电梯类以外机械设备得以认定的，每年4次自主点检即可，从而削减了运行成本。'],
        ['加速减速流畅', '采用独立变频控制，加速和减速非常流畅，不必担心货物散落、倾倒问题。']
      ],
      [
        ['独立塔式框架结构', '产品采用立式塔型框架，具有较强抗震能力，设备在新老建筑内均可设置。'],
        ['安全装置万无一失', '采用了完善的安全装置，体现了为客户提供“安心”运行保证的设计理念。']
      ]
    ]
  })
}
</script>
