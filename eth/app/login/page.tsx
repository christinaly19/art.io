"use client"

import { useCallback } from "react";
import { IDKitWidget } from "@worldcoin/idkit";
import "../Home.modules.css";
import type { ISuccessResult } from "@worldcoin/idkit";

export default function Home() {
	const handleProof = useCallback((result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
		});
	}, []);

	const onSuccess = (result: ISuccessResult) => {
		console.log(result);
	};

	return (
		<div className="container">
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
				<IDKitWidget
					action="my_action"
					signal="my_signal"
					onSuccess={onSuccess}
					handleVerify={handleProof}
					app_id="app_f0125cbd47bd047ec18c80603b7479a2"
					walletConnectProjectId="e17f404fcad13e2596e3971475c1dc37"
				>
					{({ open }) => <button onClick={open}>Click me</button>}
				</IDKitWidget>
			</div>
		</div>
	);