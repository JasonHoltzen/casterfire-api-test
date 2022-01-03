<script>
	import { en, de, genKey } from '$utils/crypt.js';
	const temp = 'babaganush';
	let k = genKey();
	let e = en(temp, k);
	let decKey = 'YvB6fEVx2XKUgw5gwAWQ+9phJDCw6JY50tIyjKPSiaM=';
	let badKey = 'YvB6fEVx2XKUgw5gwAWQ+3phJDCw6JY50tIyjKPSiaM=';
	let decVal = 'd9SBLBjF0OCA3aHzpp1YQvkZapXn6crH7x4jNmBEuO/0dRyOJyFBH9i4hOKYKMYvQY6BfA==';
	let d = de(decVal, decKey);
	let bzrt;
	try {
		bzrt = de(decVal, badKey);
	} catch (err) {
		bzrt = err.message;
	}
</script>

<pre>
  string: {temp}
  key: {k}
  enc: {e}
  decKey: {decKey},
  decVal
  dec: {d}
  err: {bzrt}
</pre>
