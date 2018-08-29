<template>
	<b-navbar toggleable="md" type="dark" variant="dark">
		<b-container>
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand href="#">Github API Test</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item href="https://github.com/AwrminKhodaei/GithubFinder">
						<i class="fab fa-github fa-lg"></i>
						GitHub Repo
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>
<style scoped>
nav {
	font-family: 'Francois One', sans-serif;
}
</style>
