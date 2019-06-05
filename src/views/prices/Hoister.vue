<template>
  <div id="hoister-price">
    <div class="container">
      <h1>
        垂直输送机设计图基本参数表
      </h1>
      <h2>搬送物</h2>
      <section class="field has-addons">
        <p
          v-for="(text, key) in ['托盘', '台车（笼车）']"
          :key="text"
          class="control"
        >
          <a
            class="button"
            :class="!key && 'is-focused'"
          >
            <span>{{text}}</span>
          </a>
        </p>
        <p class="control">
          <input type="text" class="input" placeholder="其他">
        </p>
      </section>

      <h2>
        装卸方式
      </h2>
      <section class="field has-addons">
        <p
          v-for="(text, key) in ['托盘', '人力叉车', '手推车']"
          :key="text"
          class="control"
        >
          <a
            class="button"
            :class="!key && 'is-focused'"
          >
            <span>{{text}}</span>
          </a>
        </p>
        <p class="control">
          <input type="text" class="input" placeholder="其他">
        </p>
      </section>
      <section class="is-flex is-vcentered">
        <Radio :value="true"></Radio>
        <label>正面装卸</label>

        <Radio style="margin-left: 3.5rem"></Radio>
        <label>正面装卸</label>

        <Radio style="margin-left: 3.5rem"></Radio>
        <label>正面 + 侧面</label>
      </section>

      <h2>托盘尺寸</h2>
      <section class="field is-flex is-vcentered">
        <h3>最大：</h3>

        <label>长</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>宽</label>
        <input type="text" class="input is-inlined" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>高</label>
        <input type="text" class="input is-inlined" style="width: 80px">
        <label>mm</label>
      </section>

      <section class="field is-flex is-vcentered">
        <h3>最小：</h3>

        <label>长</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>宽</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <p>高</p>
        <input type="text" class="input" style="width: 80px">
        <p>mm</p>
      </section>

      <section class="is-flex is-vcentered">
        <Checkbox :value="true"></Checkbox>
        <label>木质</label>

        <span style="width: 2.5rem"></span>
        <Checkbox></Checkbox>
        <label>塑料</label>

        <span style="width: 2.5rem"></span>
        <Checkbox></Checkbox>
        <label>两方进叉</label>

        <span style="width: 2.5rem"></span>
        <Checkbox></Checkbox>
        <label>四方进叉</label>
      </section>

      <h2>搬送物尺寸、重量</h2>
      <section class="field is-flex is-vcentered">
        <h3>最大：</h3>

        <label>长</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>宽</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>高</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>（含托盘）重量</label>
        <input type="text" class="input" style="width: 80px">
        <label>Kg</label>
      </section>

      <section class="field is-flex is-vcentered">
        <h3>最小：</h3>

        <label>长</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>宽</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>高</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 1.5rem"></span>
        <label>（含托盘）重量</label>
        <input type="text" class="input" style="width: 80px">
        <label>Kg</label>
      </section>

      <h2>搬送能力</h2>
      <section class="field is-flex is-vcentered">
        <label>1F~2F</label>
        <input type="text" class="input" style="width: 80px">

        <span style="width: 1.5rem"></span>
        <label>1F~3F</label>
        <input type="text" class="input" style="width: 80px">

        <span style="width: 1.5rem"></span>
        <label>1F~4F</label>
        <input type="text" class="input" style="width: 80px">

        <span style="width: 1.5rem"></span>
        <label>1F~5F</label>
        <input type="text" class="input" style="width: 80px">

        <span style="width: 1.5rem"></span>
        <label>托盘（台车）个 / 小时</label>
      </section>

      <section class="is-flex is-vcentered">
        <p style="margin-right: 1rem">升降速度：</p>

        <Checkbox :value="true"></Checkbox>
        <label>30m/min</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>40m/min</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>50m/min</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>60m/min</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>依设计</label>
      </section>

      <section class="is-flex is-vcentered">
        <p style="margin-right: 1rem">水平速度：</p>

        <Checkbox :value="true"></Checkbox>
        <label>13m/min</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>24m/min</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>依设计</label>
      </section>

      <h2>搬送路径</h2>
      <section class="field has-addons">
        <p
          v-for="type in ['Z', 'C', 'CC', 'CZ', 'ZC', 'F', 'E', 'ZE', 'FE', 'EE', 'L', 'LF', 'LL']"
          :key="type"
          class="control"
        >
          <a
            class="button"
            :class="type === 'Z' && 'is-focused'"
          >
            <span>{{type}}型</span>
          </a>
        </p>
      </section>

      <h2>楼层高度</h2>
      <section class="field is-flex is-vcentered">
        <template v-for="floor in [1, 2, 3, 4, 5, 6]">
          <label :key="floor" >{{floor}}F</label>
          <input :key="floor" type="text" class="input" style="margin-right: 1.5rem; width: 80px">
        </template>

        <span style="width: 1.5rem"></span>
        <label>顶部</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>
      </section>
      <section class="field is-flex is-vcentered">
        <label>井道地坑深度</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 2rem"></span>
        <label>楼面深坑深度</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>

        <span style="width: 2rem"></span>
        <label>楼面开口</label>
        <input type="text" class="input" style="width: 80px">
        <label>mm</label>
      </section>

      <h2>滚筒组数</h2>
      <section class="field is-flex is-vcentered">
        <label>正向：</label>
        <template v-for="floor in [1, 2, 3, 4, 5, 6]">
          <p :key="floor">{{floor}}F</p>
          <input :key="floor" type="text" class="input" style="margin-right: 1.5rem; width: 80px">
        </template>
      </section>
      <section class="field is-flex is-vcentered">
        <label>反向：</label>
        <template v-for="floor in [1, 2, 3, 4, 5, 6]">
          <p :key="floor">{{floor}}F</p>
          <input :key="floor" type="text" class="input" style="margin-right: 1.5rem; width: 80px">
        </template>
      </section>

      <h2>设置场所</h2>
      <section class="field is-flex is-vcentered">
        <Radio :value="true"></Radio>
        <label>新建</label>
        <span style="margin: 0 0.5rem 0 0.5rem">/</span>
        <Radio></Radio>
        <label>新建</label>

        <span style="width: 2rem"></span>
        <Radio :value="true"></Radio>
        <label>室内</label>
        <span style="margin: 0 0.5rem 0 0.5rem">/</span>
        <Radio></Radio>
        <label>室外</label>

        <span style="width: 2rem"></span>
        <Radio :value="true"></Radio>
        <label>单层</label>
        <span style="margin: 0 0.5rem 0 0.5rem">/</span>
        <Radio></Radio>
        <label>双层</label>

        <span style="width: 2rem"></span>
        <Checkbox :value="true"></Checkbox>
        <label>有防火卷帘门</label>
      </section>
      <section class="field is-flex is-vcentered">
        <Radio :value="true"></Radio>
        <label>物流仓库</label>
        <span style="margin: 0 0.5rem 0 0.5rem">/</span>
        <Radio></Radio>
        <label>工厂</label>

        <span style="width: 2rem"></span>
        <Radio></Radio>
        <label>常温</label>
        <span style="margin: 0 0.5rem 0 0.5rem">/</span>
        <Radio :value="true"></Radio>
        <label>冷库</label>

        <span style="width: 1rem"></span>
        <input type="number" class="input" style="width: 70px">
        <label>℃ ~ </label>
        <input type="number" class="input" style="width: 70px">
        <label>℃</label>
      </section>
      <section class="field is-flex is-vcentered">
        <Radio :value="true"></Radio>
        <label>整面式自动门</label>
        <span style="margin: 0 0.5rem 0 0.5rem">/</span>
        <Radio></Radio>
        <label>半面式自动门</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>有建筑井道</label>

        <span style="width: 2rem"></span>
        <Checkbox></Checkbox>
        <label>有井道地坑</label>
      </section>
      <span style="width: 2rem"></span>

      <h2>留言</h2>
      <section style="max-width: 1000px">
        <textarea cols="20" rows="5" class="textarea"></textarea>
      </section>
      <a class="button is-link" style="width: 120px">提交</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoisterPrice'
}
</script>
