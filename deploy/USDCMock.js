module.exports = async function ({ deployments, getNamedAccounts, network }) {
	const { deploy } = deployments
	const { deployer } = await getNamedAccounts()
	console.log(`Deployer address: ${deployer}`)

	const name = "USDC Mock"
	const symbol = "USDC"
	const decimals = 6

	const contract = await deploy("USDCMock", {
		from: deployer,
		args: [name, symbol, decimals],
		log: true,
		waitConfirmations: 1,
		skipIfAlreadyDeployed: true
	})

	console.log(`\n\n    To verify it, run npx hardhat verify ${contract.address} --network ${network.name} '${name}' ${symbol} ${decimals}\n\n`);
}

module.exports.tags = ["USDCMock"]