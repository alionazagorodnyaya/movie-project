"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
	const x = useRef(0);
	const [tmp, setTmp] = useState(0);
	const p = useRef(null);

	console.log("render");
	console.log(p);

	useEffect(() => {
		console.log(p.current);
	}, []);

	return (
		<>
			<p ref={p}>hello</p>
			<p>x = {x.current}</p>
			<button onClick={() => x.current++}>upX</button>
			<button onClick={() => setTmp(tmp + 1)}>render</button>
		</>
	);
}
