<template>
  <div class="container mx-auto">
    <h1 class="text-xl">Vee validate v4 bug with built-in rules</h1>
    <p class="p-4 italic font-bold text-red-500 bg-indigo-200">
      Description: The placeholder for name {_field_} or param like {length} is
      not replacing by real value
    </p>
    <div class="w-full p-4 bg-green-200">
      Field
      <v-field
        name="text"
        v-slot="{ field, errorMessage }"
        rules="required|min:3"
      >
        <input
          placeholder="required|min:3"
          v-bind="field"
          type="text"
          class="p-2"
        />
        <div class="py-2 font-bold text-red-500">Error: {{ errorMessage }}</div>
      </v-field>
    </div>

    <div class="w-full p-4 bg-blue-200">
      useField
      <input
        v-model="validateValue"
        class="p-2"
        placeholder="required|min:3"
        @input="validationTracking"
      />
      <div class="py-2 font-bold text-red-500">Error: {{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Field, useField } from "vee-validate";

export default defineComponent({
  components: {
    "v-field": Field,
  },
  name: "Home",
  setup() {
    const inputTest = ref("");

    const {
      value: validateValue,
      errorMessage,
      handleChange: validationTracking,
    } = useField("test", "required|min:3", {
      initialValue: inputTest,
    });

    return {
      inputTest,
      validationTracking,
      errorMessage,
      validateValue,
    };
  },
});
</script>
