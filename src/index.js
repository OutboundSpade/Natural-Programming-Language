const Listr = require('listr');
const tasks = new Listr([
	{
		title: 'Success',
		task: () => {
      return Promise.reject(new Error('err'))
    }
	}
]);
tasks.run().catch(e => {
  console.log(e);
});