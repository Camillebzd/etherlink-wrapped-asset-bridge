// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@layerzerolabs/solidity-examples/contracts/mocks/LZEndpointMock.sol";
import "@layerzerolabs/solidity-examples/contracts/interfaces/ILayerZeroEndpoint.sol";

contract LayerZeroEndpointStub is ILayerZeroEndpoint {
    function setConfig(uint16 _version, uint256 _chainId, uint _configType, bytes calldata _config) external {}

    function setSendVersion(uint16 _version) external {}

    function setReceiveVersion(uint16 _version) external {}

    function forceResumeReceive(uint256 _srcChainId, bytes calldata _srcAddress) external {}

    function send(uint256 _dstChainId, bytes calldata _destination, bytes calldata _payload, address payable _refundAddress, address _zroPaymentAddress, bytes calldata _adapterParams) external payable {}

    function receivePayload(uint256 _srcChainId, bytes calldata _srcAddress, address _dstAddress, uint64 _nonce, uint _gasLimit, bytes calldata _payload) external {}

    function getInboundNonce(uint256, bytes calldata) external pure returns (uint64) {
        return 0;
    }

    function getOutboundNonce(uint256, address) external pure returns (uint64) {
        return 0;
    }

    function estimateFees(uint256, address, bytes calldata, bool, bytes calldata) external pure returns (uint nativeFee, uint zroFee) {
        nativeFee = 10000;
        zroFee = 0;
    }

    function getChainId() external view returns (uint256) {}

    function retryPayload(uint256 _srcChainId, bytes calldata _srcAddress, bytes calldata _payload) external {}

    function hasStoredPayload(uint256, bytes calldata) external pure returns (bool) {
        return false;
    }

    function getSendLibraryAddress(address) external pure returns (address) {
        return address(0);
    }

    function getReceiveLibraryAddress(address) external pure returns (address) {
        return address(0);
    }

    function isSendingPayload() external pure returns (bool) {
        return false;
    }

    function isReceivingPayload() external pure returns (bool) {
        return false;
    }

    function getConfig(uint16, uint256, address, uint) external pure returns (bytes memory) {
        return "0x";
    }

    function getSendVersion(address) external pure returns (uint16) {
        return uint16(0);
    }

    function getReceiveVersion(address) external pure returns (uint16) {
        return uint16(0);
    }
}