import {Button, Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import Link from "next/link";
import {useRouter} from "next/router";

interface BlocksProps {
  number: number,
  startTime: string,
  transactions: number,
  gasUsed: string
}

const columns: ColumnsType<BlocksProps> = [
  {
    title: 'Number',
    dataIndex: 'number',
    render: (number, _) => (
      <Link href={`/blocks/${number}`}>
        <Typography.Text className={"textGreen"}>
          {number}
        </Typography.Text>
      </Link>
    )
  },
  {
    title: 'Start Time',
    dataIndex: 'startTime',
    render: (time, _) => {
      const regex = /(\d+:\d+:)(\d+\.\d+ [APM]+)(.+)/;
      const [, firstString, secondString, thirdString] = time.match(regex);
      return (
        <Typography.Text className={"textSize"}>
          {firstString}
          <Typography.Text  className={"textSize textGray"}>
            {secondString} {" "}
          </Typography.Text>
          {thirdString}
        </Typography.Text>
      )
    }
  },
  {
    title: 'Transactions',
    dataIndex: 'transactions',
  },
  {
    title: 'Gas Used',
    dataIndex: 'gasUsed',
  },
];

const data: BlocksProps[] = [
  {
    number: 48144940,
    startTime: "3:31:50.3813 PM May 16, 2023, GMT+7",
    transactions: 988,
    gasUsed: "15,000"
  }, {
    number: 48144940,
    startTime: "3:31:50.3813 PM May 16, 2023, GMT+7",
    transactions: 988,
    gasUsed: "15,000"
  }, {
    number: 48144940,
    startTime: "3:31:50.3813 PM May 16, 2023, GMT+7",
    transactions: 988,
    gasUsed: "15,000"
  }, {
    number: 48144940,
    startTime: "3:31:50.3813 PM May 16, 2023, GMT+7",
    transactions: 988,
    gasUsed: "15,000"
  }, {
    number: 48144940,
    startTime: "3:31:50.3813 PM May 16, 2023, GMT+7",
    transactions: 988,
    gasUsed: "15,000"
  },
]

export default function Blocks() {
  const router = useRouter()
  return (
    <div>
      <Card title={"Blocks"}>
        <Table
          dataSource={data as any}
          columns={columns}
          scroll={{ x: 992 }}
          pagination={{
            pageSize: 10,
          }}
          onRow={(param) => ({
            onClick: () => router.push(`/blocks/${param.number}`),
          })}
        />
      </Card>
    </div>
  )
}

