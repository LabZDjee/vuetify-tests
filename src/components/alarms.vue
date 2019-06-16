<template>
  <v-container pa-0>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-container pa-0>
          <v-layout column>
            <v-flex pa-0>
              <vyw-alarm :title="alarm1.title" :params="alarm1.params"/>
              <vyw-alarm :title="alarm2.title" :params="alarm2.params"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md6>
        <v-container pa-0>
          <v-layout>
            <v-flex>
              <vyw-alarm :title="alarm10.title" :params="alarm10.params"/>
              <vyw-alarm :title="alarm11.title" :params="alarm11.params"/>
              <vyw-alarm :title="alarm20.title" :params="alarm20.params" :isCommonAlarm="true"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VywAlarm from "./alarm";

export default {
  components: {
    VywAlarm,
  },
  computed: {
    alarm1() {
      return {
        title: "Mains alarm",
        params: {
          enabledId: "alarm1Enabled",
          relayNbId: "alarm1RelayNumber",
          delayId: "alarm1Delay",
          latch: { displayId: "alarm1DisplayLatch", relayId: "alarm1RelayLatch" },
          th1: {
            id: "alarm1Min",
            title: "Minimum",
            unit: "Vac",
            hint: "threshold",
            min: "90",
            max: "900",
            scale: "0.1",
          },
          th2: {
            id: "alarm1Max",
            title: "Maximum",
            unit: "Vac",
            hint: "threshold",
            min: "90",
            max: "900",
            scale: "0.1",
          },
        },
      };
    },
    alarm2() {
      return {
        title: "High DC alarm",
        params: {
          enabledId: "alarm2Enabled",
          relayNbId: "alarm2RelayNumber",
          delayId: "alarm2Delay",
          latch: { displayId: "alarm2DisplayLatch", relayId: "alarm2RelayLatch" },
          th1: {
            id: "alarm2Th",
            title: "Minimum",
            unit: "Vdc",
            hint: "threshold",
            min: "16",
            max: "900",
            scale: "0.1",
          },
        },
      };
    },
    alarm10() {
      return {
        title: "Spare 1",
        params: {
          enabledId: "alarm10Enabled",
          relayNbId: "alarm10RelayNumber",
          delayId: "alarm10Delay",
          latch: { displayId: "alarm10DisplayLatch", relayId: "alarm10RelayLatch" },
          text: "alarm10Text",
        },
      };
    },
    alarm11() {
      return {
        title: "Spare 2",
        params: {
          enabledId: "alarm11Enabled",
          relayNbId: "alarm11RelayNumber",
          delayId: "alarm11Delay",
          latch: { displayId: "alarm11DisplayLatch", relayId: "alarm11RelayLatch" },
          text: "alarm11Text",
        },
      };
    },
    alarm20() {
      return {
        title: "Common alarm",
        params: {
          enabledId: "alarm20Enabled",
          latch: { relayId: "alarm20RelayLatch" },
        },
      };
    },
  },
};
</script>

<style scoped>
</style>
