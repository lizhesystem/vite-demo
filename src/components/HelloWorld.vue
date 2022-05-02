<template>
	<!-- <h1>{{ count }}</h1>
  <button @click="update">更新</button> -->

	<div>
		<ul>
			<li>{{ status.name }}</li>
			<li>{{ status.wife.age }}</li>
			<li>{{ status.wife.name }}</li>
		</ul>
		<button @click="updateObj">更新</button>
		<button @click="fn()">更新111</button>
	</div>
</template>

<script lang="ts">
import {ref, defineComponent, reactive} from "vue";

export default defineComponent({
	name: "HelloWorld",
	props: {
		msg: {
			type: String,
			required: true,
		},
	},
	setup: (props, {attrs, emit, slots}) => {
		const count = ref(0);
		const age = ref(0);
		const status = reactive({
			name: "lizhe",
			age: 20,
			wife: {
				name: "xj",
				age: 18,
			},
		});

		const updateObj = () => {
			status.age++;
			status.wife.name = "meinv";
		};

		function update() {
			count.value = count.value + 1;
		}

		const fn = (content: string) => {
			count.value += 1
			if (count.value % 2 === 0) {
				content = 'QQ'
			} else {
				content = 'VV'
			}
			status.name = content;
		};

		return {
			age,
			count,
			status,
			updateObj,
			fn,
		};
	},
});
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
