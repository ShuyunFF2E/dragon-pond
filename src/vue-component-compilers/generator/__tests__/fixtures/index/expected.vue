<template>
<section>
	<el-form :inline="true">
		<el-form-item label="审批人">
			<el-input placeholder="审批人" v-model="query.name"></el-input>
		</el-form-item>
		<el-form-item label="地址">
			<el-input placeholder="地址" v-model="query.address"></el-input>
		</el-form-item>
		<el-form-item label="日期">
			<el-date-picker placeholder="日期" v-model="query.date"></el-date-picker>
		</el-form-item>
		<el-form-item label="日期">
			<el-select placeholder="日期" v-model="query.date"></el-select>
		</el-form-item>
		<el-form-item label="搜索">
			<el-button type="primary" @click="search(query)">查询</el-button>
		</el-form-item>
	</el-form>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="date" label="日期"></el-table-column>
		<el-table-column prop="name" label="姓名"></el-table-column>
		<el-table-column prop="address" label="地址"></el-table-column>
	</el-table>
</section>

</template>
<script>
	import http from 'axios';
	export default {
		data() {
			return {
				query: {
					name: null,
					address: null,
					date: null
				},
				userData: {
					name: null,
					age: 10
				}
			};
		},

		methods: {
			async getUserData(id) {
				this.userData = await http.get(`/users/${id}`);
				return this.userData;
			},

			async search(query) {
				this.userData = await http.get('/resources/', {
					params: {
						...query
					}
				});
				return this.userData;
			}

		}
	};

</script>
