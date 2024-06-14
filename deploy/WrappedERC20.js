module.exports = async function ({ deployments, getNamedAccounts, network }) {
	const { deploy } = deployments
	const { deployer } = await getNamedAccounts()
	console.log(`Deployer address: ${deployer}`)

	const wrappedTokenBridge = await ethers.getContract("WrappedTokenBridge")
	const wrappedTokens = ["WETH", "USDC", "USDT"]

	for (let i = 0; i < wrappedTokens.length; i++) {
		const contract = await deploy(wrappedTokens[i], {
			from: deployer,
			args: [wrappedTokenBridge.address],
			log: true,
			waitConfirmations: 1,
			skipIfAlreadyDeployed: true
		})

		console.log(`\n\n    To verify it, run npx hardhat verify ${contract.address} --contract contracts/wrappedTokens/${wrappedTokens[i]}.sol:${wrappedTokens[i]} --network ${network.name} ${wrappedTokenBridge.address}\n\n`);
	}
}

module.exports.tags = ["WrappedERC20"]