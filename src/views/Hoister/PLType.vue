<template>
  <div style="padding: 0 0 3rem">
    <Description
      :title="title"
      :sub-title="subTitle"
      :image="image"
      :features="features"
    ></Description>
    <Device image="hoisters/pltype/structure.jpg"></Device>
    <Cases :images="[
      'hoisters/pltype/case-1.jpg',
      'hoisters/pltype/case-2.jpg'
    ]"></Cases>
  </div>
</template>

<script>
import Cases from './Cases'
import Device from './Device'
import Description from './Description'

export default {
  name: 'PLTypeHoister',
  components: {
    Cases,
    Device,
    Description
  },
  data: () => ({
    title: 'PL 专用托盘/物流车循环型',
    subTitle: '低成本专用托盘循环系统',
    image: 'hoisters/pltype/animation.gif',
    features: [
      [
        ['可降低运行成本', '一般电梯需要每年法定点检12次，但本机每年仅需4次主点检即可，能够大幅降低运行成本'],
        ['无需建筑确认申请', '采用本机时，无需办理所需电梯建筑确认申请手续']
      ],
      [
        ['作业效率高', '装载口有专用托盘处于待机状态, 可以灵活进行搬入、搬出作业。并且，专用托盘全自动运行，可确保作业安全'],
        ['能够同时实施搬运作业', '动力叉车及手动叉车可同时使用，能够同时实施搬运作业，无需进行物流车改造']
      ]
    ]
  })
}
</script>
