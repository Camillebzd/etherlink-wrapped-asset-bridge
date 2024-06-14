const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const REMOTE_CHAIN_IDS = require("../constants/remoteChainIds.json")
const WETHS = require("../constants/weths.json")

module.exports = async function ({ deployments, getNamedAccounts, network }) {
	const { deploy } = deployments
	const { deployer } = await getNamedAccounts()
	console.log(`Deployer address: ${deployer}`)

	const lzEndpointAddress = LZ_ENDPOINTS[network.name]
	console.log(`[${network.name}] Endpoint Address: ${lzEndpointAddress}`)

	const remoteChainId = REMOTE_CHAIN_IDS[network.name]
	console.log(`[${network.name}] Remote Chain Id: ${remoteChainId}`)

	const weth = WETHS[network.name]
	console.log(`[${network.name}] WETH Address: ${weth}`)

	const contract = await deploy("OriginalTokenBridge", {
		from: deployer,
		args: [lzEndpointAddress, remoteChainId, weth],
		log: true,
		waitConfirmations: 1,
		skipIfAlreadyDeployed: true
	})

	console.log(`\n\n    To verify it, run npx hardhat verify ${contract.address} --network ${network.name} ${lzEndpointAddress} ${remoteChainId} ${weth}\n\n`);
}

module.exports.tags = ["OriginalTokenBridge"]