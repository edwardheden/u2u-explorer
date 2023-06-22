import AppCard from "@/components/shared/AppCard";
import {useWindowSize} from "@/hooks/useWindowSize";
import {Col, Row, Typography} from "antd";

export default function Account() {
	const {width} = useWindowSize()
	const isDesktop = width < 768
	return (
		<AppCard
			title={"Account"}
			subtitle={{
				id: "0.0.2554440",
				name: "Account",
				subKey: "rkpys",
				evmAddress: "0x000000000000000000000000000000000026fa48"
			}}
		>
			<Row gutter={24}>
				<Col xs={24} md={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
					<table className={"customTable"}>
						<tbody>
							<tr>
								<td><Typography.Text>Balance</Typography.Text></td>
								<td>
									<Typography.Text>0.00000000 U2U</Typography.Text>
									<Typography.Text className={"textGreen"}> $0.0015</Typography.Text>
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Staked to</Typography.Text></td>
								<td>
									<Typography.Text className={"textGray"}>None</Typography.Text>
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Pending Reward</Typography.Text></td>
								<td>
									<Typography.Text>0.00000000 U2U</Typography.Text>
									<Typography.Text className={"textGreen"}> $0.0015</Typography.Text>
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Memo</Typography.Text></td>
								<td><Typography.Text className={"textGray"}>	None</Typography.Text></td>
							</tr>
							<tr>
								<td><Typography.Text>Create Transaction</Typography.Text></td>
								<td><Typography.Text>0.0.2316634@1684234586.360741015</Typography.Text></td>
							</tr>
							<tr>
								<td><Typography.Text>Expires at</Typography.Text></td>
								<td>
									<Typography >6:45:
										<Typography.Text className={"textGray"}>38.9546 PM  </Typography.Text>
										- May 16, 2023, GMT+7
									</Typography>
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Auto Renew Period</Typography.Text></td>
								<td><Typography.Text className={"textGray"} >Not yet enabled</Typography.Text></td>
							</tr>
							<tr>
								<td><Typography.Text>Max. Auto. Association</Typography.Text></td>
								<td><Typography.Text >0</Typography.Text></td>
							</tr>
							<tr>
								<td><Typography.Text>Receiver Sig. Required</Typography.Text></td>
								<td><Typography.Text className={"textRed"}>False</Typography.Text></td>
							</tr>
						</tbody>
					</table>
				</Col>
				<Col xs={24} md={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
					<table className={"customTable"}>
						<tbody>
						<tr>
							<td><Typography.Text>Admin Key</Typography.Text></td>
							<td>
								<Typography.Text style={{fontFamily: "var(--font_code)", display: "block", }}>
									2c90 0917 8c96 8d54 2f02 e7c9 8418 be74 93fa 7b8e 04ec f656 d9ce b928 7065 1cc3 5ced 5ca6 aad1 4a91 3372 34ce afb1 e4d4
								</Typography.Text>
								<Typography.Text className={"textGreen"}>ED25519</Typography.Text>
							</td>
						</tr>
						<tr>
							<td><Typography.Text>Ethereum Nonce</Typography.Text></td>
							<td>
								<Typography.Text>0</Typography.Text>
							</td>
						</tr>
						</tbody>
					</table>
				</Col>
			</Row>
		</AppCard>

	)
}