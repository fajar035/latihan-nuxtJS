<template>
  <div>
    <button :class="`btn ${width} ${height} ${color} ${border} ${rounded}`">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["width", "height", "color", "border", "title", "rounded"],
};
</script>
