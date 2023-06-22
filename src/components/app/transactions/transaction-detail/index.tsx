import AppCard from "@/components/shared/AppCard";
import {Col, Row, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import Link from "next/link";

const TransactionDetail = () => {
  const {width} = useWindowSize()
  const isDesktop = width < 768
  return (
    <AppCard
      title={"Transaction 0.0.3229@1684221372.567081795"}
      state={'Success'}
    >
      <Row gutter={24}>
        <Col xs={24} md={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Type</Typography.Text></td>
              <td><Typography.Text style={{textTransform: "uppercase"}}>CRYPTO TRANSFER</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Consensus at</Typography.Text></td>
              <td>
                <Typography >2:16:
                  <Typography.Text className={"textGray"}>25.7139 PM  </Typography.Text>
                  - May 16, 2023, GMT+7
                </Typography>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Block</Typography.Text></td>
              <td><Link href={"/"}><Typography.Text className={"textGreen"}>48106885</Typography.Text></Link></td>
            </tr>
            <tr>
              <td><Typography.Text>Node Submitted To</Typography.Text></td>
              <td>
                <Typography.Text className={"textRed"}>0.0.19 {""}
                  <Typography.Text style={{color: "var(--green)", fontSize: "11.5px !important"}}>Hosted for Standard Bank | Warsaw, Poland</Typography.Text>
                </Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Memo</Typography.Text></td>
              <td><Typography.Text >DevOps Synthetic 2.0 Testing</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Transaction Hash</Typography.Text></td>
              <td>
                <Typography.Text style={{fontFamily: "var(--font_code)"}}>
                  2c90 0917 8c96 8d54 2f02 e7c9 8418 be74 93fa 7b8e 04ec f656 d9ce b928 7065 1cc3 5ced 5ca6 aad1 4a91 3372 34ce afb1 e4d4
                </Typography.Text>
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={24} md={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Payer Account</Typography.Text></td>
              <td><Link href={"/"}><Typography.Text className={"textGreen"}>0.0.3229</Typography.Text></Link></td>
            </tr>
            <tr>
              <td><Typography.Text>Charged Fee</Typography.Text></td>
              <td>
                <Typography.Text>0.00193928 U2U {""}
                  <Typography.Text style={{color: "var(--green)", fontSize: "11.5px !important"}}>$0.0015</Typography.Text>
                </Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Max fee</Typography.Text></td>
              <td>
                <Typography.Text>1.00000000 U2U {""}
                  <Typography.Text style={{color: "var(--green)", fontSize: "11.5px !important"}}>$0.1455</Typography.Text>
                </Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Valid Duration</Typography.Text></td>
              <td><Typography.Text >2 min</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Nonce</Typography.Text></td>
              <td><Typography.Text>0</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Scheduled</Typography.Text></td>
              <td><Typography.Text className={"textRed"}>False</Typography.Text></td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </AppCard>
  )
}

export default TransactionDetail