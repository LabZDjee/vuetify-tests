<template>
  <v-card>
    <v-container pt-3>
      <v-layout wrap>
        <v-flex xs12 sm6 px-1 align-content-center>
          <v-container pa-0>
            <v-layout column>
              <v-flex>
                <vyw-select-input
                  data-key="language"
                  label="Language"
                  :item-list="selectChoices.languages"
                  hint="local language"
                  :on-changed="valueChanged"
                />
              </v-flex>
              <v-flex>
                <vyw-numeric-input
                  data-key="roomTemperature"
                  label="Room temperature"
                  suffix="C"
                  :bottom="Number(-30)"
                  :top="Number(60)"
                  hint="[-30; +60]"
                  :on-changed="valueChanged"
                />
              </v-flex>
              <v-flex>
                <vyw-numeric-input
                  data-key="altitude"
                  label="Altitude"
                  suffix="m"
                  :bottom="Number(0)"
                  :top="Number(8000)"
                  hint="[0-8,000]"
                  :on-changed="valueChanged"
                />
              </v-flex>
              <v-flex>
                <v-container pa-0>
                  <v-layout pa-0 justify-center>
                    <v-flex xs5>
                      <vyw-switch
                        data-key="acMeter"
                        :labels="['No AC meter', 'AC meter present']"
                        :on-changed="valueChanged"
                      />
                    </v-flex>
                    <v-flex xs5>
                      <vyw-switch
                        data-key="baMeter"
                        :labels="['No batt. current meter', 'Batt. current meter present']"
                        :on-changed="valueChanged"
                      />
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm6 px-1>
          <v-container pa-0>
            <v-layout column>
              <v-flex>
                <vyw-numeric-input
                  data-key="mainsVoltage"
                  label="Mains voltage"
                  suffix="Vac"
                  :scale="Number(0.1)"
                  :bottom="Number(90)"
                  :top="Number(800)"
                  hint="[90-800]"
                  :on-changed="valueChanged"
                />
              </v-flex>
              <v-flex>
                <vyw-numeric-input
                  data-key="batteryVoltage"
                  label="Battery voltage"
                  suffix="Vdc"
                  :scale="Number(0.1)"
                  :bottom="Number(20)"
                  :top="Number(320)"
                  hint="[20-320]"
                  :on-changed="valueChanged"
                />
              </v-flex>
              <v-flex>
                <vyw-numeric-input
                  data-key="batteryCurrent"
                  label="Battery current"
                  suffix="Amps"
                  :scale="Number(0.1)"
                  :bottom="Number(0)"
                  :top="Number(10000)"
                  hint="[0-10,000]"
                  :on-changed="valueChanged"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import VywNumericInput from "./basics/vyw-numeric-input";
import VywSelectInput from "./basics/vyw-default-select";
import VywSwitch from "./basics/vyw-switch";
import { selectChoices } from "../test-data";
import { implementValueChanged } from "../mixins";

export default {
  components: {
    VywNumericInput,
    VywSelectInput,
    VywSwitch,
  },
  data: () => ({
    selectChoices,
  }),
  mixins: [implementValueChanged],
};
</script>

<style scoped>
</style>
