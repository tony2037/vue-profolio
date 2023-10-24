<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Yu Chen (Tony) Liu is a software engineer with 3+ years of industrial experience.\
						He was a full-time software engineer at Amazon and passionate about tackling\
						complex technical challenges. With a diverse background and a solid dedication to his field,\
						he aspires to pursue a 2024 summer internship.',
				},
				{
					id: 2,
					bio:
						'He is pursuing a Master of Science degree in Computer Science at USC.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
