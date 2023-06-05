// contracts/WasteMarket.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WasteMarket {

    // Define the structure of the waste object
    struct Waste {
        string wasteType;
        uint weight;
        address payable seller;
        bool isSold;
    }

    // Define a dynamic array of Waste objects
    Waste[] public wastes;

    // Function to sell waste, adds a new waste object to the array
    function sellWaste(string memory wasteType, uint weight) public {
        wastes.push(Waste({
            wasteType: wasteType,
            weight: weight,
            seller: payable(msg.sender), // the address of the sender becomes the seller
            isSold: false
        }));
    }

    // Function to buy waste, which transfers the funds to the seller
    // and marks the waste as sold
    function buyWaste(uint wasteId) public payable {
        Waste storage waste = wastes[wasteId]; // gets the waste object using its id
        require(!waste.isSold, "This waste is already sold!"); // checks if the waste is not sold
        waste.seller.transfer(msg.value); // transfers funds to the seller
        waste.isSold = true; // marks the waste as sold
    }
}
