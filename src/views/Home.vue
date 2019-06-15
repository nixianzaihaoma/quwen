<template>
  <div class="home">
    <Nheader/>
    <div class="tages"><Ntages/></div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nheader from '../components/Nheader'
import Ntages from '../components/Ntags'
export default {
  name: 'home',
  components: {
    Nheader,Ntages
  }
}
</script>
<style>
.aaa{
  height: 19rem;
}
.tages{
  height: 0.9rem;
}
</style>
