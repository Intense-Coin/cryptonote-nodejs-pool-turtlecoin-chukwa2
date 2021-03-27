/**
 * Cryptonote Node.JS Pool
 * https://github.com/dvandal/cryptonote-nodejs-pool
 *
 * Configuration Reader
 **/

// Load required modules
let fs = require('fs');

// Set pool software version
global.version = "v2.0.0";

/**
 * Load pool configuration
 **/

// Get configuration file path
let configFile = (function () {
	for (let i = 0; i < process.argv.length; i++) {
		if (process.argv[i].indexOf('-config=') === 0)
			return process.argv[i].split('=')[1];
	}
	return 'config.json';
})();

// Read configuration file data
try {
	global.config = JSON.parse(fs.readFileSync(configFile));
} catch (e) {
	console.error('Failed to read config file ' + configFile + '\n\n' + e);
	return;
}

/**
 * Developper donation addresses -- thanks for supporting my works!
 **/

let donationAddresses = {
	BTC: '3M3NTQkyFqfbTsmXi6yL1VyJzoFgRMUooN',
	BCH: 'qqz6jgchx5w2jgsq2rnx68z8l3eg9mql7gypccvv40',
	XMR: '48NXmBFRJGSYiZKnxpL5MwJxdpUT5yR3H3ZGpkaG2vymJdt5rZebXUFiZ3yMLak3vuesSCQy7S8yN12XXHbi6bJUPywBRr5',
	DASH: 'XnsMZBadX2RQvQjfCuG58bqSDagDfMCDSM',
	ETH: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	ETC: '0x60D922A8968fEC42A299f77F8CBBEE0b56ceEd8b',
	LTC: 'ltc1qk4rrn2xfmkadyay7rspkxdkd98dklva0mp9fn6',
	USDC: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	REP: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	BAT: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	LINK: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	DAI: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	OXT: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	ZRX: '0x86c61605B15B4a71520beD51d50403E5eAd01B91',
	TRTL: 'TRTLuzoc4NwfsXC7FUsNTefb43CFhi6ddhBWcTSUv37UB3eN2M5Yg4tCNCxReqvY5DQzLPz5t4McHY8CvRgF5uRMFecrtm3WMew'
};

global.donations = {};


global.devFee = config.blockUnlocker.devDonation || 0.5;
if (!config.blockUnlocker.devDonation || config.blockUnlocker.devDonation < 0.5) {
	global.devFee = 0.5;
}

let wallet = donationAddresses[config.symbol.toUpperCase()];
if (devFee && wallet) {
	global.donations[wallet] = devFee;
}
