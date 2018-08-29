<template>
  <div>
    <b-container>
      <user-repos :repoName="repo_name" :username="username" :limit="5"/>
    </b-container>
  </div>
</template>
<script>
import config from '../../config/config.js'
import UserRepos from './UserRepos.vue'
export default {
	data() {
		return {
      // Nothing to show
      username: 'vuejs',
      repo_name: 'vue'
		}
	},
  components: {
    UserRepos
  },
}
</script>

<style scoped>
.user-form-container{
	font-family: 'Francois One', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:not(i){
  font-family: 'Francois One', sans-serif;
}
</style>
