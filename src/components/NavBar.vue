<template>
  <div class="nav-bar">
    <a-menu mode="horizontal">
      <a-menu-item key="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="" width="150" />
        </router-link>
      </a-menu-item>
      <a-menu-item key="episodes">
        <router-link to="/episodes">Episodes</router-link>
      </a-menu-item>
      <a-menu-item key="characters">
        <router-link to="/characters">Characters</router-link>
      </a-menu-item>
      <a-menu-item key="locations">
        <router-link to="/locations">Locations</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {};
</script>

<style>
.nav-bar .ant-menu {
  background: #81d107;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.ant-menu-submenu > .ant-menu {
  background-color: #81d107;
}

.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected,
.ant-menu-item > a,
.nav-bar .ant-menu-item > a {
  color: #131418 !important;
  font-size: 14px;
  font-weight: 500;
}

.ant-menu-item.ant-menu-item-selected a {
  color: #115666 !important;
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #81d107;
}

.nav-bar .ant-menu-item,
.ant-menu-submenu-title {
  font-size: 30px;
}

.ant-menu-submenu-popup {
  background: #81d107;
}
</style>
