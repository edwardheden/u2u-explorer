import {Button, Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "./LatestBlocks.module.scss"
import moment from "moment";
import Link from "next/link";
import styled from "styled-components";

interface LatestBlocks {
  number: string,
  createdAt: string,
  transactions: number,
  time: string,
  coin: string,
  validator: string
}

const columns: ColumnsType<LatestBlocks> = [
  {
    render: (_, param) => (
      <div className={styles.numberWrapper}>
        <Typography.Text className={styles.block}>BK</Typography.Text>
        <div>
          <Link style={{width: "max-content"}} href={`https://u2uscan.io/block/${param.number}`} target="_blank">
            <Typography.Text className={styles.greenText}>
              {param.number}
            </Typography.Text>
          </Link>
          <Typography.Text className={styles.time}>
            {moment(param.createdAt).fromNow()}
          </Typography.Text>
        </div>
      </div>
    )
  },
  {
    render: (_, param) => (
      <>
        <Typography.Text className={styles.text}>
          Validated by
          <Link href={`https://u2uscan.io//address/0xea0a6e3c511bbd10f4519ece37dc24887e11b55d`} target="_blank">
            <Typography.Text className={styles.greenText}> Validator:{param.validator}
            </Typography.Text>
          </Link>
        </Typography.Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            flexWrap: "wrap"
          }}
        >
          <Link href={"/"} target="_blank">
            <Typography.Text
              style={{display: "block", width: "max-content"}}
              className={styles.greenText}
            >
              {param.transactions} transactions
            </Typography.Text>
          </Link>
          <Typography.Text
            onClick={(e) => e.preventDefault()}
            className={styles.time}>
            {""} in {param.time} secs
          </Typography.Text>
        </div>
      </>
    )
  },
  {
    dataIndex: 'coin',
    render: (text, param_) => (
      <Typography.Text className={styles.coinU2u}>
        {text} U2U
      </Typography.Text>
    )
  },
];

const data: LatestBlocks[] = [
  {
    number: "3023166",
    createdAt: "2023-06-18T14:10:30.000Z",
    transactions: 125,
    time: "3",
    coin: "10.0593",
    validator: " Defibit"
  },
  {
    number: "3023166",
    createdAt: "2023-06-18T14:10:30.000Z",
    transactions: 125,
    time: "3",
    coin: "10.0593",
    validator: " Defibit"
  },
  {
    number: "3023166",
    createdAt: "2023-06-18T14:10:30.000Z",
    transactions: 125,
    time: "3",
    coin: "10.0593",
    validator: " Defibit"
  },
  {
    number: "3023166",
    createdAt: "2023-06-18T14:10:30.000Z",
    transactions: 125,
    time: "3",
    coin: "10.0593",
    validator: " Defibit"
  },
  {
    number: "3023166",
    createdAt: "2023-06-18T14:10:30.000Z",
    transactions: 125,
    time: "3",
    coin: "10.0593",
    validator: " Defibit"
  },

];

const LatestBlocks = () => {
  return (
    <Card title={"Latest Blocks"}>
      <Table
        columns={columns}
        dataSource={data as any}
        scroll={{x: 514}}
        pagination={false}
        showHeader={false}
      />
      <div className={styles.button}>
        <Button type={"primary"}>View all blocks</Button>
      </div>
    </Card>
  )
}
export default LatestBlocks