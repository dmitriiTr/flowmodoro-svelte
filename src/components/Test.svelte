<script  lang="ts">
  import type { TaskWithDay } from "../types";

	let obj: TaskWithDay[] = $state([
		{day: '', activity: 'reading', time: 2}
	])
	
	const foo = obj[0]
	
	function updateFoo() {
		foo.time = foo.time + 10
    	console.log($state.snapshot(obj));
	}
</script>

<h2>
	Hello {obj[0].time}
</h2>

<button onclick={updateFoo}>
	Update Ref
</button>

<pre>
	{JSON.stringify(obj)}
</pre>