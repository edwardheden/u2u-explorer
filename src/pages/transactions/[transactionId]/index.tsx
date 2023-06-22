import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import TransactionDetail from "@/components/app/transactions/transaction-detail";
import Transfers from "@/components/app/transactions/transaction-detail/Transfers";
import Head from "next/head";

const TransactionDetailPage: NextPageWithLayout =() => {
  return(
    <>
      <Head>
        <title>Detail Transactions | Unicorn Ultra (U2U)</title>
      </Head>
      <TransactionDetail/>
      <Transfers/>
    </>
  )
}

TransactionDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default TransactionDetailPage
