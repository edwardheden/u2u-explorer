import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import TokenDetail from "@/components/app/tokens/token-detail";
import TokenKey from "@/components/app/tokens/token-detail/TokenKey";
import NFTHolders from "@/components/app/tokens/token-detail/NFTHolders";
import Head from "next/head";

const TokenDetailPage: NextPageWithLayout =() => {
  return(
    <>
      <Head>
        <title>Detail Tokens | Unicorn Ultra (U2U)</title>
      </Head>
      <TokenDetail/>
      <TokenKey/>
      <NFTHolders/>
    </>
  )
}

TokenDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default TokenDetailPage
