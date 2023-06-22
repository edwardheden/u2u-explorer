import AppCard from "@/components/shared/AppCard";
import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import Link from "next/link";

interface NonFungibleTokensProps {
  index : string,
  accountId: string,
  deleted: number,
  modificationTime: string,
  metaData: string
}

const columns: ColumnsType<NonFungibleTokensProps> = [
  {
    title: 'Serial #',
    dataIndex: 'index',
  },
  {
    title: 'Account ID',
    dataIndex: 'accountId',
    render:(_, param) => (
      <Link href={`/accounts/${param.accountId}`}><Typography.Text className={"textGreen"}>{param.accountId}</Typography.Text></Link>
    )
  },
  {
    title: 'Deleted',
    dataIndex: 'deleted',
    render:(_, param) => (
      <Typography.Text className={"textRed"}>False</Typography.Text>
    )
  },
  {
    title: 'Modification Time',
    dataIndex: 'modificationTime',
    render: (time, _) => {
      const regex = /(\d+:\d+:)(\d+\.\d+ [APM]+)(.+)/;
      const [, firstString, secondString, thirdString] = time.match(regex);

      return (
        <Typography.Text className={"textSize"}>
          {firstString}
          <Typography.Text className={"textGray textSize"}>
            {secondString} {" "}
          </Typography.Text>
          {thirdString}
        </Typography.Text>
      )
    }
  },
  {
    title: 'Metadata',
    dataIndex: 'metaData',
    render:(_, param) => (
      <Typography.Text className={"textGray"}>{param.metaData}</Typography.Text>
    )
  },
];

const data: NonFungibleTokensProps[] = [
  {
    index: "1",
    accountId: "0.0.1715440",
    deleted: 0,
    modificationTime: "6:45:38.9546 AM - May 16, 2023, GMT+7",
    metaData: "ipfs://bafkreiegpdixzb4bgjwcwa5ogzcogz3bh54ic2tnjuessplogbmmzodye4"
  },
  {
    index: "2",
    accountId: "0.0.1715440",
    deleted: 0,
    modificationTime: "6:45:38.9546 AM - May 16, 2023, GMT+7",
    metaData: "ipfs://bafkreiegpdixzb4bgjwcwa5ogzcogz3bh54ic2tnjuessplogbmmzodye4"
  },
  {
    index: "3",
    accountId: "0.0.1715440",
    deleted: 0,
    modificationTime: "6:45:38.9546 AM - May 16, 2023, GMT+7",
    metaData: "ipfs://bafkreiegpdixzb4bgjwcwa5ogzcogz3bh54ic2tnjuessplogbmmzodye4"
  }
]

const NFTHolders =() => {
  return (
    <Card
      title={"NFT Holders"}
    >
      <Table
        dataSource={data as any}
        columns={columns}
        pagination={{
          pageSize: 10,
        }}
        scroll={{ x: 992 }}
      />
    </Card>
  )
}

export default NFTHolders