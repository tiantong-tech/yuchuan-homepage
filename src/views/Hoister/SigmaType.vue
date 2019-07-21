<template>
  <div style="padding: 0 0 3rem">
    <Description
      :title="title"
      :sub-title="subTitle"
      :image="image"
      :features="features"
    ></Description>
    <Device image="hoisters/sigma/structure.jpg"></Device>
    <Cases :images="[
      'hoisters/sigma/case-1.jpg',
      'hoisters/sigma/case-2.jpg'
    ]"></Cases>
  </div>
</template>

<script>
import Cases from './Cases'
import Device from './Device'
import Description from './Description'

export default {
  name: 'SigmaType',
  components: {
    Cases,
    Device,
    Description
  },
  data: () => ({
    title: '随机专用托盘循环型垂直输送系统',
    subTitle: `
      本机力求节省搬入·搬出口空间，该系统的设计基于在狭窄仓库内，在难以保证充足作业空间时发挥重要作用，
      同时兼具『PL专用托盘循环型』的优点。
    `,
    image: 'hoisters/sigma/animation.gif',
    features: [
      [
        ['节省空间型', '搬入、搬出口所需空间与标准型相比降低约40%。'],
        ['能够降低运行成本', '一般电梯需要每年法定点检12～24次，但本机平均仅需每年4次自主点检即可，能够大幅降低运行成本。']
      ],
      [
        ['无需相关建筑安全确认申请', '在采用本机时，无需类似于电梯的建筑安全确认申请手续。']
      ]
    ]
  })
}
</script>
