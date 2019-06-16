/* jshint esversion: 6 */

import ReacTer from "@labzdjee/reac-ter";
import Vue from "vue";

const _data = {
  mainsVoltage: "4400",
  batteryVoltage: "542",
  batteryCurrent: "203",
  language: "Spanish",
  roomTemperature: "25",
  altitude: "125",
  acMeter: "0",
  baMeter: "1",
  notes: "line 1\nline 2\nline 3",
  name: "John Doe",
  origin: "Shell",
  project: "PT127-X3S",
  order: "12XU",
  alarm1Enabled: "1",
  alarm1Min: "3800",
  alarm1Max: "5000",
  alarm1Delay: "5",
  alarm1RelayLatch: "0",
  alarm1DisplayLatch: "1",
  alarm1RelayNumber: "5",
  alarm2Enabled: "1",
  alarm2Th: "600",
  alarm2Delay: "7",
  alarm2RelayLatch: "1",
  alarm2DisplayLatch: "1",
  alarm2RelayNumber: "5",
  alarm10Enabled: "1",
  alarm10Text: "MCCB TRIP",
  alarm10Delay: "58",
  alarm10RelayLatch: "0",
  alarm10DisplayLatch: "1",
  alarm10RelayNumber: "12",
  alarm11Enabled: "1",
  alarm11Text: "FUSE BLOWN",
  alarm11Delay: "14",
  alarm11RelayLatch: "1",
  alarm11DisplayLatch: "0",
  alarm11RelayNumber: "15",
  alarm20Enabled: "1",
  alarm20RelayLatch: "1",
};

const _metaData = {
  testKey: "mainsVoltage",
  testValue: "230",
};

export const reactiveData = new ReacTer();
export const dataKeys = Object.keys(_data);
export const eventBus = new Vue({
  methods: {
    dataChanged(item) {
      this.$emit("item-should-update", item);
    },
  },
});

Object.keys(_data).forEach((key) => {
  reactiveData.addProperty(_data, key);
});

Object.keys(_metaData).forEach((key) => {
  reactiveData.addProperty(_metaData, key, `meta_${key}`);
});

export const selectChoices = {
  languages: ["Dutch", "English", "French", "German", "Spanish"],
  relayNumbers: [...Array(17)].map((_, i) => i.toString()),
};
