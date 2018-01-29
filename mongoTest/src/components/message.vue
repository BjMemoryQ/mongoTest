<template>
	<div>
		this is message
		<div>
			<router-link to="/login" active-class="active">
				<button>login</button>
			</router-link>
			<router-link to="/logup">
				<button>logup</button>
			</router-link>
		</div>
		<div>
			<router-view></router-view>	
		</div>
	</div>
</template>
<script></script>
