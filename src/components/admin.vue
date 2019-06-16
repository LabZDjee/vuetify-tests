<template>
  <div>
    <v-card>
      <v-container pt-3>
        <v-layout text-xs-center align-content-center wrap>
          <v-flex px-1>
            <v-container pa-0>
              <v-layout column>
                <v-flex>
                  <vyw-text-input
                    data-key="project"
                    label="Project"
                    hint="Main reference"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex>
                  <vyw-text-input
                    data-key="name"
                    label="Name"
                    hint="Person in charge of project"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex>
                  <vyw-text-input data-key="order" label="Order" :on-changed="valueChanged"/>
                </v-flex>
                <v-flex>
                  <vyw-text-input data-key="origin" label="Origin" :on-changed="valueChanged"/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm6 px-1>
            <v-container pa-0>
              <v-layout column>
                <v-flex>
                  <vyw-text-area
                    data-key="notes"
                    label="Notes"
                    hint="project notes"
                    :on-changed="valueChanged"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import VywTextArea from "./basics/vyw-text-area";
import VywTextInput from "./basics/vyw-text-input";
import { implementValueChanged } from "../mixins";

export default {
  components: {
    VywTextArea,
    VywTextInput,
  },
  mixins: [implementValueChanged],
};
</script>

<style scoped>
</style>
