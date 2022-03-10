export const CA = "0x2f78b6bab566fe444f4fed307a53cec8fd8216b5";

export const abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "check_Personal_Proposal_amount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "done_Proposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_types",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			}
		],
		"name": "make_proposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_proposal_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "upgrade_proposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "view_Proposal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Starter_user",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "aggred_User",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "types",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "end_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "enum Voting.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Voting.Proposal",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "view_address_Proposal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Starter_user",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "aggred_User",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "types",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "end_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "enum Voting.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Voting.Proposal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "view_total_Proposal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Starter_user",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "aggred_User",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "types",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "end_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "enum Voting.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Voting.Proposal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]