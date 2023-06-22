import AppCard from "@/components/shared/AppCard";
import {Col, Row, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import Link from "next/link";

const TokenDetail = () => {
  const {width} = useWindowSize()
  const isDesktop = width < 768
  return (
    <AppCard
      title={"Fungible Token"}
      subtitle={{
        id: "0.0.2371395",
        name: "Token",
        subKey: "xosbo",
        evmAddress: "0x0000000000000000000000000000000000242f43"
      }}
    >
      <Row gutter={24} >
        <Col xs={24} md={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Name</Typography.Text></td>
              <td><Typography.Text>Pepper Tes</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Symbol</Typography.Text></td>
              <td>
                <Typography.Text >Pep</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Memo</Typography.Text></td>
              <td><Typography.Text>None</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Expires at</Typography.Text></td>
              <td>
                <Typography.Text >2:37:
                  <Typography.Text className={"textGray"}>:34.0867 AM</Typography.Text>
                  -  Aug 13, 2023, GMT+7
                </Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Auto Renew Period</Typography.Text></td>
              <td><Typography.Text className={"textGray"}>Not yet enabled</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Auto Renew Account</Typography.Text></td>
              <td><Typography.Text className={"textGray"}>Not yet enabled</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Freeze Default</Typography.Text></td>
              <td><Typography.Text className={"textRed"}>False</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Pause Status</Typography.Text></td>
              <td><Typography.Text className={"textGray"}>Not applicable</Typography.Text></td>
            </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={24} md={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Treasury Account</Typography.Text></td>
              <td><Typography.Text>Pepper Tes</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Created at</Typography.Text></td>
              <td>
                <Typography.Text >2:37:
                  <Typography.Text className={"textGray"}>:34.0867 AM</Typography.Text>
                  -  Aug 13, 2023, GMT+7
                </Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Modified at</Typography.Text></td>
              <td>
                <Typography.Text >2:37:
                  <Typography.Text className={"textGray"}>:34.0867 AM</Typography.Text>
                  -  Aug 13, 2023, GMT+7
                </Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Total Supply</Typography.Text></td>
              <td><Typography.Text >9,223,372,036,854,775,807</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Initial Supply</Typography.Text></td>
              <td><Typography.Text>9,223,372,036,854,775,807</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Max Supply</Typography.Text></td>
              <td><Typography.Text className={"textGray"}>Infinite</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Decimals</Typography.Text></td>
              <td><Typography.Text >0</Typography.Text></td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default TokenDetail