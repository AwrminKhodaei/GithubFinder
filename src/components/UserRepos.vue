<template>
	<b-container>
		<b-row v-if="isLoading" class="loader-container">
			<ball-grid-pulse-loader class="loader" color="#56a900" size="100px"></ball-grid-pulse-loader>
		</b-row>
		<b-row>
			<b-col class="mx-auto mt-5 mb-3" md="12" sm="12">
				<h3>Showing Results Of <em class="text-primary">{{repoName}}</em> Repository For <span class="text-primary">{{username}}</span></h3>
				<div class="repository bg-light p-5 shadow rounded">
					<b-row class="my-3 py-3">
						<b-col class="my-4" md="3" v-for="(contributor, index) in contributors[0]" :key="index">
							<div class="text-center p-5">
								<a :href="contributor.author.url" target="_blank">
								<img :src="contributor.author.avatar_url" width="60px" height="60px">
								<p>{{contributor.author.login}}</p>
								</a>
								<b-btn v-b-tooltip.hover :title="contributor.total">commits</b-btn>
							</div>
						</b-col>
					</b-row>
				</div>
			</b-col>
			<h1 class="text-danger text-center">{{errorMassage}}</h1>
		</b-row>
	</b-container>
</template>
<script>
import config from '../../config/config.js'
import axios from 'axios'
export default {
	props: {
		username: {
			type: String,
			required: true
		},
		repoName: {
			type: String,
			required: true
		},
	},
	data() {
		return {
			isLoading: true,
			contributors: [],
			errorMassage: ''
		}
	},
	mounted () {
		let self = this
		axios.get(`https://api.github.com/repos/${this.username}/${this.repoName}/stats/contributors`, config)
		.then(function(response){
			self.contributors.push(response.data)
			self.isLoading = !self.isLoading
		}).catch(function(err){
			self.errorMassage = 'ops something went wrong :('
		})
	}
}
</script>
<style scoped>
img{
	border-radius: 50%;
}
.loader-container{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	z-index: 9999;
	background-color: #fff;
	width: 100vw;
	height: 100vh;
	transition: all 500ms ease;
}
.loader{
	text-align: center;
	margin: 0 auto;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
</style>
