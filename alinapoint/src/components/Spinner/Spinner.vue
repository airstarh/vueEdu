<template>
  <div id="spinner">
    <div id="spinner-image-container">
      <b-spinner label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: ["preloader"]
};
</script>
<style>
#spinner {
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
}

#spinner #spinner-image-container {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
