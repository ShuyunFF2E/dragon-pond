/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-08
 */

export default class Model {

	query = {};
	tableData = [
		{
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		},
		{
			date: '2016-05-04',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1517 弄'
		},
		{
			date: '2016-05-01',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1519 弄'
		},
		{
			date: '2016-05-03',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1516 弄'
		}
	];

	search(query) {
		console.log(query);
	}

}
