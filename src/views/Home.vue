<template>
  <div class="home">
    <h1>Home</h1>
    <a-carousel autoplay>
      <div></div>
      <div></div>
      <div></div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  name: 'Home',
};
</script>
<style scoped>
.home {
  padding: 10px 10%;
  height: calc(100vh - 140px);
}
/* For demo */
.ant-carousel >>> .slick-slide {
  height: calc(100vh - 225px);
  overflow: hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.ant-carousel >>> .slick-slide:nth-child(2) {
  background: url("https://images6.alphacoders.com/909/thumb-1920-909641.png");
  background-size: cover;
}

.ant-carousel >>> .slick-slide:nth-child(3) {
  background: url("https://wallpapercave.com/wp/wp1822724.jpg");
  background-size: cover;
}

.ant-carousel >>> .slick-slide:nth-child(4) {
  background: url("https://images.hdqwalls.com/wallpapers/rick-and-morty-breaking-bad-4k-o0.jpg");
  background-size: cover;
}

</style>
