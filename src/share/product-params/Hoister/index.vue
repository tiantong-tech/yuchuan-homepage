<template>
  <div id="hoister-params">
    <h1>垂直输送机设计图基本参数表</h1>

    <h2>搬送物</h2>
    <SelectableButtons
      :options="['托盘', '台车（笼车）']"
      v-model="$data['搬送物']"
    ></SelectableButtons>

    <h2>装卸方式</h2>
    <SelectableButtons
      :options="['托盘', '人力叉车', '手推车']"
      v-model="$data['装卸方式']"
    ></SelectableButtons>
    <section>
      <RadioList
        :options="['正面装卸', '侧面装卸', '正面 + 侧面']"
        v-model="$data['装卸面']"
      ></RadioList>
    </section>

    <h2>托盘尺寸</h2>
    <section
      v-for="bound in ['最大', '最小']" :key="bound + '托盘尺寸'"
      class="field is-flex is-vcentered"
    >
      <h3>{{bound}}：</h3>
      <template v-for="side in ['长', '宽', '高']">
        <label :key="side + 'a'">长</label>
        <input
          :key="side + 'b'"
          v-model="$data['托盘尺寸'][bound][side]"
          type="text" class="input" style="width: 80px"
        >
        <label :key="side + 'c'" style="margin-right: 2rem">mm</label>
      </template>
    </section>

    <section>
      <RadioList
        :options="['木质', '塑料']"
        v-model="$data['托盘材质']"
      ></RadioList>
      <RadioList
        :options="['两方进叉', '四方进叉']"
        v-model="$data['进叉方式']"
      ></RadioList>
    </section>

    <h2>搬送物尺寸、重量</h2>
    <section
      v-for="bound in ['最大', '最小']" :key="bound + '搬送物尺寸、重量'"
      class="field is-flex is-vcentered"
    >
      <h3>{{bound}}：</h3>

      <template v-for="side in ['长', '宽', '高']">
        <label :key="side + 'a'">{{side}}</label>
        <input
          :key="side + 'b'"
          v-model="$data['搬送物尺寸、重量'][bound][side]"
          type="text" class="input" style="width: 80px"
        >
        <label :key="side + 'c'" style="margin-right: 1.5rem">mm</label>
      </template>

      <label>（含托盘）重量</label>
      <input
        v-model="$data['搬送物尺寸、重量'][bound]['重量']"
        type="text" class="input" style="width: 80px"
      >
      <label>Kg</label>
    </section>

    <h2>搬送能力</h2>
    <section class="field is-flex is-vcentered">
      <template v-for="key in ['1~2F', '1~3F', '1~4F', '1~5F']">
        <label :key="key + 'a'">{{key}}</label>
        <input
          :key="key + 'b'"
          type="text" class="input"
          v-model="$data['搬送能力'][key]"
          style="width: 80px; margin-right: 1.5rem"
        >
      </template>

      <label>托盘（台车）个 / 小时</label>
    </section>

    <section class="is-flex is-vcentered">
      <p style="margin-right: 1rem">升降速度：</p>

      <RadioList
        :options="['30m/min', '40m/min', '50m/min', '60m/min', '依设计']"
        v-model="$data['搬送能力']['升降速度']"
      ></RadioList>
    </section>
    <section class="is-flex is-vcentered">
      <p style="margin-right: 1rem">水平速度：</p>

      <RadioList
        :options="['13m/min', '24m/min', '依设计']"
        v-model="$data['搬送能力']['水平速度']"
      ></RadioList>
    </section>

    <h2>搬送路径</h2>
    <TransplotRoutes v-model="$data['搬送路径']"></TransplotRoutes>

    <h2>楼层高度</h2>
    <section class="field is-flex is-vcentered">
      <template v-for="floor in ['1F', '2F', '3F', '4F', '5F', '6F']">
        <label :key="floor + 'a'" >{{floor}}</label>
        <input
          :key="floor + 'b'"
          v-model="$data['楼层高度'][floor]"
          type="text" class="input"
          style="margin-right: 1.5rem; width: 80px"
        >
      </template>

      <label>顶部</label>
      <input
        v-model="$data['楼层高度']['顶部']"
        type="text" class="input"
        style="width: 80px"
      >
      <label>mm</label>
    </section>
    <section class="field is-flex is-vcentered">
      <template v-for="type in ['井道地坑深度', '楼面深坑深度', '楼面开口']">
        <label :key="type + 'a'">{{type}}</label>
        <input
          :key="type + 'b'"
          v-model="$data['楼层高度'][type]"
          type="text" class="input"
          style="width: 80px"
        >
        <label :key="type + 'c'" style="margin-right: 2rem">mm</label>
      </template>
    </section>

    <h2>滚筒组数</h2>
    <section
      v-for="type in ['正向', '反向']" :key="type"
      class="field is-flex is-vcentered"
    >
      <label>{{type}}：</label>
      <template v-for="floor in ['1F', '2F', '3F', '4F', '5F', '6F']">
        <p :key="floor + 'a'">{{floor}}</p>
        <input
          :key="floor + 'b'"
          type="text" class="input"
          v-model="$data['滚筒组数'][type][floor]"
          style="margin-right: 1.5rem; width: 80px"
        >
      </template>
    </section>

    <h2>设置场所</h2>
    <!-- {{$data['设置场所']}} -->
    <section class="field is-flex is-vcentered">
      <RadioPair
        :options="['新建', '已建']"
        v-model="$data['设置场所']['新建']"
      ></RadioPair>

      <span style="width: 2rem"></span>
      <RadioPair
        :options="['室内', '室外']"
        v-model="$data['设置场所']['室内']"
      ></RadioPair>

      <span style="width: 2rem"></span>
      <RadioPair
        :options="['单层', '双层']"
        v-model="$data['设置场所']['单层']"
      ></RadioPair>

      <span style="width: 2rem"></span>
      <Checkbox v-model="$data['设置场所']['有防火卷帘门']">
        有防火卷帘门
      </Checkbox>
    </section>
    <section class="field is-flex is-vcentered">
      <RadioPair
        :options="['物流仓库', '工厂']"
        v-model="$data['设置场所']['物流仓库']"
      ></RadioPair>

      <span style="width: 2rem"></span>
      <RadioPair
        :options="['常温', '冷库']"
        v-model="$data['设置场所']['常温']"
      ></RadioPair>

      <span style="width: 1rem"></span>
      <input
        v-model="$data['设置场所']['冷库温度'][0]"
        type="text" class="input" style="width: 70px"
      >
      <label>℃ ~ </label>
      <input
        v-model="$data['设置场所']['冷库温度'][1]"
        type="text" class="input" style="width: 70px"
      >
      <label>℃</label>
    </section>
    <section class="field is-flex is-vcentered">
      <RadioPair
        :options="['整面式自动门', '半面式自动门']"
        v-model="$data['设置场所']['整面式自动门']"
      ></RadioPair>

      <span style="width: 2rem"></span>
      <Checkbox v-model="$data['设置场所']['有建筑井道']">
        有建筑井道
      </Checkbox>

      <span style="width: 2rem"></span>
      <Checkbox v-model="$data['设置场所']['有井道地坑']">
        有井道地坑
      </Checkbox>
    </section>
  </div>
</template>

<script>
import RadioList from './RadioList'
import RadioPair from './RadioPair'
import TransplotRoutes from './TransplotRoutes'
import SelectableButtons from './SelectableButtons'

const getData = () => ({
  '搬送物': '托盘',
  '装卸方式': '托盘',
  '装卸面': '正面装卸',
  '托盘材质': '木质',
  '进叉方式': '两方进叉',
  '托盘尺寸': {
    '最大': { '长': '', '宽': '', '高': '' },
    '最小': { '长': '', '宽': '', '高': '' }
  },
  '搬送物尺寸、重量': {
    '最大': { '长': '', '宽': '', '高': '', '重量': '' },
    '最小': { '长': '', '宽': '', '高': '', '重量': '' }
  },
  '搬送能力': {
    '1~2F': '', '1~3F': '', '1~4F': '', '1~5F': '',
    '升降速度': '30m/min', '水平速度': '13m/min'
  },
  '搬送路径': 'Z型',
  '楼层高度': {
    '1F': '', '2F': '', '3F': '', '4F': '', '5F': '',
    '顶部': '', '井道地坑深度': '', '楼面深坑深度': '', '楼面开口': ''
  },
  '滚筒组数': {
    '正向': { '1F': '', '2F': '', '3F': '', '4F': '', '5F': '', '6F': '' },
    '反向': { '1F': '', '2F': '', '3F': '', '4F': '', '5F': '', '6F': '' }
  },
  '设置场所': {
    '新建': true, '室内': true, '单层': true, '有防火卷帘门': false,
    '物流仓库': true, '常温': true, '冷库温度': ['', ''],
    '整面式自动门': true, '有建筑井道': false, '有井道地坑': false
  }
})

export default {
  name: 'HositerDetails',
  components: {
    RadioList,
    RadioPair,
    TransplotRoutes,
    SelectableButtons
  },
  props: {
    data: [Object, undefined]
  },
  data: getData,
  methods: {
    reset () {
      Object.assign(this.$data, this.data || getData())
    }
  },
  created () {
    this.reset()
  }
}
</script>
