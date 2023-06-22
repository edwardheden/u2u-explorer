
export const TransactionTypes = [
	{
		name: "TYPES: ALL",
		value: ""
	}, {
		name: "CONTRACT CALL",
		value: "CONTRACT_CALL"
	}, {
		name: "CONTRACT CREATE",
		value: "CONTRACT_CREATE"
	}, {
		name: "CONTRACT DELETE",
		value: "CONTRACT_DELETE"
	}, {
		name: "CONTRACT UPDATE",
		value: "CONTRACT_UPDATE"
	}, {
		name: "CRYPTO ADD LIVE HASH",
		value: "CRYPTO_ADD_LIVE_HASH"
	}, {
		name: "CRYPTO APPROVE ALLOWANCE",
		value: "CRYPTO_APPROVE_ALLOWANCE"
	}, {
		name: "CRYPTO CREATE ACCOUNT",
		value: "CRYPTO_CREATE_ACCOUNT"
	}, {
		name: "CRYPTO DELETE ACCOUNT",
		value: "CRYPTO_DELETE_ACCOUNT"
	}, {
		name: "CRYPTO DELETE ALLOWANCE",
		value: "CRYPTO_DELETE_ALLOWANCE"
	}, {
		name: "CRYPTO DELETE LIVE HASH",
		value: "CRYPTO_DELETE_LIVE_HASH"
	}, {
		name: "CRYPTO TRANSFER",
		value: "CRYPTO_TRANSFER"
	}, {
		name: "CRYPTO UPDATE ACCOUNT",
		value: "CRYPTO_UPDATE_ACCOUNT"
	}, {
		name: "ETHEREUM TRANSACTION",
		value: "ETHEREUM_TRANSACTION"
	}, {
		name: "FILE APPEND",
		value: "FILE_APPEND"
	}, {
		name: "FILE CREATE",
		value: "FILE_CREATE"
	}, {
		name: "FILE DELETE",
		value: "FILE_DELETE"
	}, {
		name: "FILE UPDATE",
		value: "FILE_UPDATE"
	}, {
		name: "FREEZE",
		value: "FREEZE"
	}, {
		name: "HCS CREATE TOPIC",
		value: "HCS_CREATE_TOPIC"
	}, {
		name: "HCS DELETE TOPIC",
		value: "HCS_DELETE_TOPIC"
	}, {
		name: "HCS SUBMIT MESSAGE",
		value: "HCS_SUBMIT_MESSAGE"
	}, {
		name: "HCS UPDATE TOPIC",
		value: "HCS_UPDATE_TOPIC"
	}, {
		name: "NODE STAKE UPDATE",
		value: "NODE_STAKE_UPDATE"
	}, {
		name: "PSEUDORANDOM NUMBER GENERATE",
		value: "PSEUDORANDOM_NUMBER_GENERATE"
	}, {
		name: "SCHEDULE CREATE",
		value: "SCHEDULE_CREATE"
	}, {
		name: "SCHEDULE DELETE",
		value: "SCHEDULE_DELETE"
	}, {
		name: "SCHEDULE SIGN",
		value: "SCHEDULE_SIGN"
	}, {
		name: "SYSTEM DELETE",
		value: "SYSTEM_DELETE"
	}, {
		name: "SYSTEM UNDELETE",
		value: "SYSTEM_UNDELETE"
	}, {
		name: "TOKEN ASSOCIATE",
		value: "TOKEN_ASSOCIATE"
	}, {
		name: "TOKEN BURN",
		value: "TOKEN_BURN"
	}, {
		name: "TOKEN CREATE",
		value: "TOKEN_CREATE"
	}, {
		name: "TOKEN DELETE",
		value: "TOKEN_DELETE"
	}, {
		name: "TOKEN DISSOCIATE",
		value: "TOKEN_DISSOCIATE"
	}, {
		name: "TOKEN FEE SCHEDULE UPDATE",
		value: "TOKEN_FEE_SCHEDULE_UPDATE"
	}, {
		name: "TOKEN FREEZE",
		value: "TOKEN_FREEZE"
	}, {
		name: "TOKEN KYC GRANT",
		value: "TOKEN_KYC_GRANT"
	}, {
		name: "TOKEN KYC REVOKE",
		value: "TOKEN_KYC_REVOKE"
	}, {
		name: "TOKEN MINT",
		value: "TOKEN_MINT"
	}, {
		name: "TOKEN PAUSE",
		value: "TOKEN_PAUSE"
	}, {
		name: "TOKEN UNFREEZE",
		value: "TOKEN_UNFREEZE"
	}, {
		name: "TOKEN UNPAUSE",
		value: "TOKEN_UNPAUSE"
	}, {
		name: "TOKEN UPDATE",
		value: "TOKEN_UPDATE"
	}, {
		name: "TOKEN WIPE",
		value: "TOKEN_WIPE"
	}, {
		name: "UNCHECKED SUBMIT",
		value: "UNCHECKED_SUBMIT"
	},
]

export const StakeTypes = [
	{
		value: 0,
		name: "0 - Hosted by LG | Seoul, South Korea - Rewarding (staked for reward is 33.2% of max)"
	},
	{
		value: 1,
		name: "1 - Hosted by Swirlds | North Carolina, USA - Rewarding (staked for reward is 59.7% of max)"
	},
	{
		value: 2,
		name: "2 - Hosted by FIS | Florida, USA - Rewarding (staked for reward is 26.5% of max)"
	},
	{
		value: 3,
		name: "3 - Hosted by Wipro | Mumbai, India - Rewarding (staked for reward is 1.6% of max)"
	},
	{
		value: 4,
		name: "4 - Hosted by Nomura | Tokyo, Japan - Rewarding (staked for reward is 2.3% of max)"
	},
	{
		value: 5,
		name: "5 - Hosted by Google | Helsinki, Finland - Rewarding (staked for reward is 58.2% of max)"
	},
	{
		value: 6,
		name: "6 - Hosted by Zain Group | Kuwait City, Kuwait - Rewarding (staked for reward is 0.6% of max)"
	},
	{
		value: 7,
		name: "7 - Hosted by Magalu | São Paulo, Brazil - Rewarding (staked for reward is 26.9% of max)"
	},
	{
		value: 8,
		name: "8 - Hosted by Boeing | Toronto, Canada - Rewarding (staked for reward is 5.4% of max)"
	},
	{
		value: 9,
		name: "9 - Hosted by DLA Piper | London, UK - Rewarding (staked for reward is 6.8% of max)"
	},
	{
		value: 10,
		name: "10 - Hosted by Tata Communications | California, USA - Rewarding (staked for reward is 2.9% of max)"
	},
	{
		value: 11,
		name: "11 - Hosted by IBM | Washington, USA - Rewarding (staked for reward is 6.9% of max)"
	},
	{
		value: 12,
		name: "12 - Hosted by Deutsche Telekom | Berlin, Germany - Rewarding (staked for reward is 2.2% of max)"
	},
	{
		value: 13,
		name: "13 - Hosted by UCL | London, UK - Rewarding (staked for reward is 1.1% of max)"
	},
	{
		value: 14,
		name: "14 - Hosted by Avery Dennison | Pennsylvania, USA - Rewarding (staked for reward is 9.5% of max)"
	},
	{
		value: 15,
		name: "15 - Hosted for Dentons | Frankfurt, DE - Rewarding (staked for reward is 14.6% of max)"
	},
	{
		value: 16,
		name: "16 - Hosted for Standard Bank | Warsaw, Poland - Rewarding (staked for reward is 6.1% of max)"
	},
	{
		value: 17,
		name: "17 - Hosted by eftpos | Sydney, Australia - Rewarding (staked for reward is 4% of max)"
	},
	{
		value: 18,
		name: "18 - Hosted by EDF | Paris, France - Rewarding (staked for reward is 8.9% of max)"
	},
	{
		value: 19,
		name: "19 - Hosted for Shinhan Bank | Seoul, South Korea - Rewarding (staked for reward is 0.9% of max)"
	},
	{
		value: 20,
		name: "20 - Hosted for Chainlink Labs | Michigan, USA - Rewarding (staked for reward is 19.7% of max)"
	},
	{
		value: 21,
		name: "21 - Hosted for LSE | Virginia, USA - Rewarding (staked for reward is 1.4% of max)"
	},
	{
		value: 22,
		name: "22 - Hosted for IIT Madras | Georgia, USA - Rewarding (staked for reward is 1% of max)"
	},
	{
		value: 23,
		name: "23 - Hosted for DBS | Singapore, Republic of Singapore - Rewarding (staked for reward is 4% of max)"
	},
	{
		value: 24,
		name: "24 - Hosted by ServiceNow | Ogden, Utah - Rewarding (staked for reward is 3.4% of max)"
	},
	{
		value: 25,
		name: "25 - Hosted for Ubisoft | Singapore, Republic of Singapore - Rewarding (staked for reward is 3.2% of max)"
	},
	{
		value: 26,
		name: "26 - Hosted for abrdn | Madrid, Spain - Rewarding (staked for reward is 0.5% of max)"
	},
	{
		value: 27,
		name: "27 - Hosted for Dell | New Jersey, USA - Rewarding (staked for reward is 0.7% of max)"
	},

]