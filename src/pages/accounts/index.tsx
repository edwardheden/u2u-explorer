import DashboardLayout from "@/components/layouts/DashboardLayout";
import {Col, Row} from "antd";
import RecentTransactions from "@/components/app/transactions/RecentTransactions";
import RecentStakingRewards from "@/components/app/accounts/RecentStakingRewards";
import Account from "@/components/app/accounts/Account";
import Allowances from "@/components/app/accounts/Allowances";
import Head from "next/head";

export default function AccountsPage () {
  return (
    <>
      <Head>
        <title>Accounts | Unicorn Ultra (U2U)</title>
      </Head>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Account />
        </Col>
        <Col span={24}>
          <RecentTransactions />
        </Col>
        <Col span={24}>
          <Allowances />
        </Col>
        <Col span={24}>
          <RecentStakingRewards />
        </Col>
      </Row>
    </>
    
  )
}

AccountsPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
