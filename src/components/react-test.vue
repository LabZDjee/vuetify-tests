<template>
  <v-content>
    <v-layout justify-center>
      <v-flex xs12 md8 pt-3>
        <v-card>
          <v-container pb-0>
            <v-layout justify-center>
              <v-flex pt-2>
                <v-chip color="red" text-color="white">Test</v-chip>
              </v-flex>
              <v-flex xs4 sm4 px-1>
                <vyw-select-input
                  data-key="meta_testKey"
                  label="data key"
                  :item-list="dataKeys"
                  :on-changed="valueChanged"
                  class="overflow-hidden"
                />
              </v-flex>
              <v-flex xs4>
                <vyw-text-input
                  data-key="meta_testValue"
                  label="data value"
                  :on-changed="valueChanged"
                />
              </v-flex>
              <v-flex px-1>
                <v-btn @click="applyTest">Apply</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import VywTextInput from "./basics/vyw-text-input";
import VywSelectInput from "./basics/vyw-default-select";
import { dataKeys, eventBus, reactiveData } from "../test-data";
import { implementValueChanged } from "../mixins";

export default {
  components: {
    VywTextInput,
    VywSelectInput,
  },
  data: () => ({
    dataKeys,
  }),
  mixins: [implementValueChanged],
  methods: {
    applyTest() {
      reactiveData[reactiveData.meta_testKey] = reactiveData.meta_testValue;
      // eslint-disable-next-line no-console
      console.log(`new value for ${reactiveData.meta_testKey}=> ${reactiveData.meta_testValue}`);
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
};
</script>

<style scoped>
</style>
