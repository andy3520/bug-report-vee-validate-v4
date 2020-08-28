<template>
  <div class="container mx-auto">
    <h1 class="text-xl">Vee validate v4 bug with built-in rules</h1>
    <a
      href="https://github.com/andy3520/vee-validate-v4-bug-report"
      target="_blank"
      class="flex items-center justify-center font-black"
    >
      Code:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        class="p-2"
      >
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
    </a>
    <a
      href="https://twitter.com/annguyenhieuduc"
      target="_blank"
      class="flex items-center justify-center font-black"
    >
      Contact:

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300.00006 244.18703"
        height="50"
        width="50"
        class="p-2"
      >
        <g style="" transform="translate(-539.18 -568.86)">
          <path
            d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464"
            fill="#1da1f2"
          />
        </g>
      </svg>
    </a>

    <p class="p-4 italic font-bold text-red-500 bg-indigo-200">
      Note: after bump verstion i18n to alpha 5 <br />
      Description: The placeholder for param like {length} is not replacing by
      real value
      <br />
      The confirmed rule with target not working
    </p>
    <div class="w-full p-4 bg-green-200">
      Field <br />
      <v-form>
        Text1:
        <v-field
          name="text1"
          v-slot="{ field, errorMessage }"
          rules="required|between:3,10"
        >
          <input
            placeholder="required|between:3,10"
            v-bind="field"
            type="text"
            class="p-2"
          />
          <div class="py-2 font-bold text-red-500">
            Error: {{ errorMessage }}
          </div>
        </v-field>
        Text2:
        <v-field
          name="text2"
          v-slot="{ field, errorMessage }"
          rules="required|confirmed:text1"
        >
          <input
            placeholder="required|confirmed:text1"
            v-bind="field"
            type="text"
            class="p-2"
          /><br />
          The confirmed rule with target not working
          <div class="py-2 font-bold text-red-500">
            Error: {{ errorMessage }}
          </div>
        </v-field>
      </v-form>
    </div>

    <div class="w-full p-4 bg-blue-200">
      useField
      <input
        v-model="validateValue"
        type="text"
        class="p-2"
        placeholder="required|between:3,10"
        @input="validationTracking"
      />
      <div class="py-2 font-bold text-red-500">Error: {{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Field, useField, Form } from "vee-validate";

export default defineComponent({
  components: {
    "v-field": Field,
    "v-form": Form,
  },
  name: "Home",
  setup() {
    const inputTest = ref("");

    const {
      value: validateValue,
      errorMessage,
      handleChange: validationTracking,
    } = useField("test", "required|between:3,10", {
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
