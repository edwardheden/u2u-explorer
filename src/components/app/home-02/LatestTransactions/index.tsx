import {Button, Card, Table, Tooltip, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "./LatestTransactions.module.scss"
import moment from "moment";
import Link from "next/link";
import styled from "styled-components";

const StyledTable = styled(Table)`
  td: hover {
    background-color: transparent !important;
    cursor: default !important;
  },
`;

interface LatestTransactions {
  id: string,
  createdAt: string,
  address: {
    from: string,
    to: string
  }
  coin: string
}

const columns: ColumnsType<LatestTransactions> = [
  {
    render: (_, param) => (
      <div className={styles.numberWrapper}>
        <Typography.Text className={styles.block}>TX</Typography.Text>
        <div>
          <Link href={`https://u2uscan.io/block/${param.id}`} target="_blank">
            <Tooltip placement="top" title={param.id}>
              <Typography.Text className={styles.greenText}>
                {param.id}
              </Typography.Text>
            </Tooltip>
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
          From
          <Link href={`https://u2uscan.io//address/0xea0a6e3c511bbd10f4519ece37dc24887e11b55d`} target="_blank">
            <Tooltip placement="top" title={param.address.from}>
              <Typography.Text className={styles.greenText}>{param.address.from}</Typography.Text>
            </Tooltip>
          </Link>
        </Typography.Text>

        <Typography.Text className={styles.text}>
          To {""}
          <Link href={"/"} target="_blank">
           <Tooltip placement="top" title={param.address.to}>
             <Typography.Text className={styles.greenText}>
               {param.address.to}
             </Typography.Text>
           </Tooltip>
          </Link>
        </Typography.Text>
      </>
    )
  },
  {
    dataIndex: 'coin',
    render: (text, _) => (
      <Typography.Text className={styles.coinU2u}>
        {text} U2U
      </Typography.Text>
    )
  },
];

const data: LatestTransactions[] = [
  {
    id: "0x9aadb60dab31b4917e813340672b813bea1de04a050cdfe9ada08e9e80f66dcc",
    createdAt: "2023-06-18T14:10:30.000Z",
    address: {
      from: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
      to: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
    },
    coin: "5.3527",
  },
  {
    id: "0x9aadb60dab31b4917e813340672b813bea1de04a050cdfe9ada08e9e80f66dcc",
    createdAt: "2023-06-18T14:10:30.000Z",
    address: {
      from: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
      to: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
    },
    coin: "5.3527",
  },
  {
    id: "0x9aadb60dab31b4917e813340672b813bea1de04a050cdfe9ada08e9e80f66dcc",
    createdAt: "2023-06-18T14:10:30.000Z",
    address: {
      from: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
      to: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
    },
    coin: "5.3527",
  },
  {
    id: "0x9aadb60dab31b4917e813340672b813bea1de04a050cdfe9ada08e9e80f66dcc",
    createdAt: "2023-06-18T14:10:30.000Z",
    address: {
      from: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
      to: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
    },
    coin: "5.3527",
  },
  {
    id: "0x9aadb60dab31b4917e813340672b813bea1de04a050cdfe9ada08e9e80f66dcc",
    createdAt: "2023-06-18T14:10:30.000Z",
    address: {
      from: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
      to: "0xea0a6e3c511bbd10f4519ece37dc24887e11b55d",
    },
    coin: "5.3527",
  },
];

const LatestTransactions = () => {
  return (
    <Card title={"Latest Transactions"}>
      <StyledTable
        className={styles.table}
        columns={columns}
        dataSource={data as any}
        scroll={{x: 514}}
        pagination={false}
        showHeader={false}
      />
      <div className={styles.button}>
        <Button type={"primary"}>View all transactions</Button>
      </div>
    </Card>
  )
}
export default LatestTransactions