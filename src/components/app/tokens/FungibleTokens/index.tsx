import {Card, Table} from "antd";
import {ColumnsType} from "antd/lib/table";

interface FungibleTokensProps {
	token: string,
	symbol: string
}

const columns: ColumnsType<FungibleTokensProps> = [
	{
		title: 'Token',
		dataIndex: 'token',
	},
	{
		title: 'Symbol',
		dataIndex: 'symbol',
	},
];

const data: FungibleTokensProps[] = [
	{
		token: "0.0.2542802",
		symbol: "PATCHES"
	}, {
		token: "0.0.2542802",
		symbol: "PATCHES"
	}, {
		token: "0.0.2542802",
		symbol: "CMX"
	}, {
		token: "0.0.2542802",
		symbol: "CMX"
	}, {
		token: "0.0.2542802",
		symbol: "DOLLS"
	}
]

export default function FungibleTokens() {
	return (
		<Card title={"Recent Fungible Tokens"}>
			<Table
				dataSource={data}
				columns={columns}
				pagination={{
					pageSize: 10,
				}}
			/>
		</Card>
	)
}