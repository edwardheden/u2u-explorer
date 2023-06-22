import AppCard from "@/components/shared/AppCard";
import {Col, Row, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import styles from "./NodeDetail.module.css"

const NodeDetail = () => {
  const {width} = useWindowSize()
  const isDesktop = width < 768

  return (
    <AppCard
      title={"Node 5"}
      subNode={"U2U Council Node"}
    >
      <Row gutter={24} >
        <Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Node Account</Typography.Text></td>
              <td><Typography.Text>0.0.8</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Description</Typography.Text></td>
              <td>
                <Typography.Text className={"textGray"}>Hosted by</Typography.Text>
                <Typography.Text>  Google | Helsinki, Finland</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Address Book File</Typography.Text></td>
              <td><Typography.Text>0.0.102</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Node existed since</Typography.Text></td>
              <td><Typography.Text >2:37:<Typography.Text className={"textGray"}>34.0867 AM </Typography.Text> - Aug 13, 2023, GMT+7</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Node expiry date</Typography.Text></td>
              <td><Typography.Text className={"textGray"}>None</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Service Endpoints</Typography.Text></td>
              <td><Typography.Text>35.183.66.150:50211 35.183.66.150:50212 35.236.5.219:50211 35.236.5.219:50212</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Public Key</Typography.Text></td>
              <td><Typography.Text className={"textGray"}>None</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Certificate Hash</Typography.Text></td>
              <td><Typography.Text className={"textGray"}>None</Typography.Text></td>
            </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={24} lg={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Last Period Reward Rate</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>6.5%</Typography.Text>
                <Typography.Text style={{textTransform: "uppercase", fontSize: "11px !important"}}> APPROX ANNUAL EQUIVALENT</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Stake for Consensus</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>1,785,714,285</Typography.Text>
                <Typography.Text style={{ fontSize: "11px !important"}}> U2U</Typography.Text>
                <p><Typography.Text className={"textGreen"}>5.59% of total</Typography.Text></p>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Min Stake</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>446,428,571</Typography.Text>
                <Typography.Text style={{ fontSize: "11px !important"}}> U2U</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Max Stake</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>1,785,714,285</Typography.Text>
                <Typography.Text style={{ fontSize: "11px !important"}}> U2U</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Staked for Reward</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>1,039,479,736</Typography.Text>
                <Typography.Text style={{ fontSize: "11px !important"}}> U2U</Typography.Text>
                <p><Typography.Text className={"textGreen"}>18.64% of total</Typography.Text></p>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Staked For No Reward</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>785,651,544 </Typography.Text>
                <Typography.Text style={{ fontSize: "11px !important"}}> U2U</Typography.Text>
                <p><Typography.Text className={"textGreen"}>2.98% of total</Typography.Text></p>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Stake for Consensus</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>24</Typography.Text>
                <Typography.Text style={{ fontSize: "11px !important"}}> hours</Typography.Text>
                <p><Typography.Text className={"textGreen"}>from 00:00 am today to 11:59 pm today UTC</Typography.Text></p>
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default NodeDetail