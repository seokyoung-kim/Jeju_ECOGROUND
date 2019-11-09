import caver from "klaytn/caver";

// const fs = require("fs");

/**
 * 1. Create contract instance
 * ex:) new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
 * You can call contract method through this instance.
 * Now you can access the instance by `this.countContract` variable.
 */

// const DEPLOYED_ABI = fs.readFileSync("deployedABI", "utf8");

// const DEPLOYED_ADDRESS = JSON.stringify(
//   fs.readFileSync("deployedAddress", "utf8").replace(/\n|\r/g, "")
// );

const DEPLOYED_ABI = JSON.parse(
    '[{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x01ffc9a7"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_MyMakers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x037ea16c"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x081812fc"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_MyMakersList","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x1b1a140e"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"_totalKlayList","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x23ac1c48"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2f745c59"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4f6ccce7"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6352211e"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"_investMakersList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x66a8d975"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc87b56dd"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"_MakersList","outputs":[{"name":"tokenId","type":"uint256"},{"name":"photo","type":"string"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"targetKlay","type":"int256"},{"name":"D_day","type":"string"},{"name":"status","type":"int256"},{"name":"timestamp","type":"uint256"},{"name":"count","type":"uint256"},{"name":"price","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd6b165a8"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe985e9c5"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"photo","type":"string"},{"indexed":false,"name":"title","type":"string"},{"indexed":false,"name":"description","type":"string"},{"indexed":false,"name":"targetKlay","type":"int256"},{"indexed":false,"name":"D_day","type":"string"},{"indexed":false,"name":"price","type":"int256"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"MakersUploaded","type":"event","signature":"0xf47708954d9f0fc965a8318f3912dc4ad3f8772aa3eec63d07a3121d51e53c88"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"constant":false,"inputs":[{"name":"photo","type":"string"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"targetKlay","type":"int256"},{"name":"D_day","type":"string"},{"name":"price","type":"int256"}],"name":"uploadMakers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x1368f911"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"showTargetKlay","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x04faa829"},{"constant":true,"inputs":[],"name":"getTotalMakersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc767c4d3"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"parentStateMakers","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb5488900"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getMakers","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"int256"},{"name":"","type":"string"},{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xffb0360a"},{"constant":false,"inputs":[{"name":"addressID","type":"address"}],"name":"returnklay","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x4e78eb28"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"prohibitOverlap","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4010a406"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"investMakers","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x75082add"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"showInvestor","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0105db3d"},{"constant":false,"inputs":[{"name":"walletAddress","type":"address"},{"name":"price","type":"uint256"}],"name":"purchaseToken","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function","signature":"0x1cc2c911"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"checkMakersStatus","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc16e6b85"},{"constant":true,"inputs":[{"name":"Id","type":"address"}],"name":"showMyMakers_cutsomer","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa7c3ee74"},{"constant":true,"inputs":[{"name":"Id","type":"address"}],"name":"showMyMakers","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x318e5884"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"showMakersPrice","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2165e16f"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"showMakersState","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0cc328f9"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"forcedClosure","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x3d5cd679"}]'
);

const DEPLOYED_ADDRESS = "80C2754AeD1bEB6fd7ea74266Bd129B30d8013aA";

const MakersContract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);

console.log("MakersContract: ", MakersContract);

export default MakersContract;