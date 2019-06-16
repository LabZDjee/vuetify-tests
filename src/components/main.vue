<template>
  <v-container px-0 :class="{'py-0': isScrolledDown}">
    <v-layout justify-center>
      <v-flex xs12 lg11 xl7>
        <div ref="header" :class="{headerMargin: !isScrolledDown}">
          <v-toolbar>
            <v-toolbar-title class="headline text-uppercase">
              <span>Vuetify</span>
              <span class="font-weight-light">MATERIAL DESIGN</span>
              <span>&nbsp;+ ReacTer</span>
            </v-toolbar-title>
          </v-toolbar>
        </div>

        <div
          ref="tabBar"
          :class="{tabBarFixed: tabBarFixed}"
          :style="{left: `${tabBarDynamicLeftOffset}px`}"
        >
          <v-tabs @change="menuItemSelect">
            <v-tab>Admin</v-tab>
            <v-tab>System</v-tab>
            <v-tab>Alarms</v-tab>
          </v-tabs>
        </div>

        <div :class="{hide: !tabBarFixed}">
          <v-tabs>
            <v-tab/>
            <v-tab/>
            <v-tab/>
          </v-tabs>
        </div>

        <div ref="contentFrame">
          <v-tabs v-model="menuItemSelected" height="0">
            <v-tab/>
            <v-tab/>
            <v-tab/>
            <v-tab-item>
              <vyw-admin/>
            </v-tab-item>
            <v-tab-item>
              <vyw-system/>
            </v-tab-item>
            <v-tab-item>
              <vyw-alarms/>
            </v-tab-item>
          </v-tabs>
          <vyw-react-test/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VywAdmin from "./admin";
import VywSystem from "./system";
import VywAlarms from "./alarms";
import VywReactTest from "./react-test";
import { dataKeys, eventBus, reactiveData } from "../test-data";

export default {
  components: {
    VywAdmin,
    VywSystem,
    VywAlarms,
    VywReactTest,
  },
  data: () => ({
    menuItemSelected: undefined,
    dataKeys,
    headerHeight: undefined,
    tabBarHeight: undefined,
    tabBarInitialLeftOffset: undefined,
    contentInitialLeftOffset: undefined,
    tabBarDynamicLeftOffset: undefined,
    isScrolledDown: false,
    tabBarFixed: false,
  }),
  methods: {
    menuItemSelect(v) {
      this.menuItemSelected = v;
    },
    onWindowScroll() {
      this.tabBarFixed = window.scrollY > this.headerHeight;
      this.isScrolledDown = window.scrollY > 0;
    },
    updateTabBarPosition() {
      this.tabBarDynamicLeftOffset =
        this.tabBarInitialLeftOffset +
        this.$refs["contentFrame"].getBoundingClientRect().left -
        this.contentInitialLeftOffset;
    },
  },
  created() {
    eventBus.$on("item-should-update", (item) => {
      if (reactiveData[item.dataKey] !== item.value) {
        reactiveData[item.dataKey] = item.value;
      }
      if (item.dataKey.startsWith("meta_") === false) {
        reactiveData["meta_testKey"] = item.dataKey;
        reactiveData["meta_testValue"] = item.value;
      }
    });
  },
  mounted() {
    this.headerHeight = this.$refs["header"].offsetHeight;
    this.tabBarHeight = this.$refs["tabBar"].offsetHeight;
    this.tabBarInitialLeftOffset = this.$refs["tabBar"].getBoundingClientRect().left;
    this.tabBarDynamicLeftOffset = this.tabBarInitialLeftOffset;
    this.contentInitialLeftOffset = this.$refs["contentFrame"].getBoundingClientRect().left;
    this.updateTabBarPosition();
    window.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.updateTabBarPosition);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.updateTabBarPosition);
  },
};
</script>

<style scoped>
.tabBarFixed {
  position: fixed;
  top: 0;
  z-index: 1;
}

.hide {
  display: none;
}

.headerMargin {
  margin-bottom: 6px;
}
</style>
