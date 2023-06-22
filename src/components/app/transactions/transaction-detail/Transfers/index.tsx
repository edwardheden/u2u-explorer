import AppCard from "@/components/shared/AppCard";
import {Typography} from "antd";
import styles from "./Transfers.module.css"
import Link from "next/link";

const Transfers = () => {
  return (
    <AppCard
      title={"Transfers"}
    >
      <div className={styles.transferTable}>
        <Typography.Text className={styles.title}>
          U2U Transfer
        </Typography.Text>
        <div className={styles.tableTransfer}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text> Account</Typography.Text></td>
              <td><Typography.Text>U2U Amount</Typography.Text></td>
              <td><Typography.Text>Account</Typography.Text></td>
            </tr>
            <tr>
              <td><Link href={"/accounts/0.0.3229"}><Typography.Text className="textGreen"> 0.0.3229</Typography.Text></Link></td>
              <td>
                <Typography.Text className="textRed">-0.00193929</Typography.Text>
                <Typography.Text className="textGreen" style={{fontSize: "11px !important"}}> -$0.0015</Typography.Text>
              </td>
              <td>
                <ul className={styles.transfer}>
                  <li>
                    <Link href={"/accounts/0.0.3229"}><Typography.Text className="textGreen" style={{marginRight: 26}}>0.0.3229</Typography.Text></Link>
                    <Typography.Text>
                      0.00000001 U2U
                    </Typography.Text>
                    <Typography.Text style={{fontSize: "11.5px !important", margin: "0 18px"}} className={"textGreen"}>
                      $0.0015
                    </Typography.Text>
                    <Typography.Text style={{fontSize: "11.5px !important"}}>
                      Transfer
                    </Typography.Text>
                  </li>

                  <li>
                    <Link href={"/accounts/0.0.196"}><Typography.Text className="textGreen" style={{marginRight: 26}}>0.0.196</Typography.Text></Link>
                    <Typography.Text>
                      0.00007865 U2U
                    </Typography.Text>
                    <Typography.Text style={{fontSize: "11.5px !important", margin: "0 18px"}} className={"textGreen"}>
                      $0.0015
                    </Typography.Text>
                    <Typography.Text style={{fontSize: "11.5px !important"}}>
                      Hosted for Standard Bank | Warsaw, Poland
                    </Typography.Text>
                  </li>

                  <li>
                    <Link href={"/accounts/0.0.98"}><Typography.Text className="textGreen" style={{marginRight: 26}}>0.0.98</Typography.Text></Link>
                    <Typography.Text>
                      0.00186063 U2U
                    </Typography.Text>
                    <Typography.Text style={{fontSize: "11.5px !important", margin: "0 18px"}} className={"textGreen"}>
                      $0.0015
                    </Typography.Text>
                    <Typography.Text style={{fontSize: "11.5px !important"}}>
                      Hedera fee collection account
                    </Typography.Text>
                  </li>
                </ul>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{marginTop: 25}} className={styles.transferTable}>
        <Typography.Text className={styles.title}>
          NFT Transfer
        </Typography.Text>
        <div>
          <Typography.Text >
            None
          </Typography.Text>
        </div>
      </div>

      <div style={{marginTop: 25}} className={styles.transferTable}>
        <Typography.Text className={styles.title}>
          Token Transfer
        </Typography.Text>
       <div>
         <Typography.Text >
           None
         </Typography.Text>
       </div>
      </div>
    </AppCard>
  )
}

export default Transfers