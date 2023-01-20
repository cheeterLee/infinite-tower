// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.7.0 < 0.9.0;

contract InfiniteTower {
    struct Floor {
        string ownerName;
        string message;
        string link;
        uint color;
        uint windowsTint;
    }
    
    event NewFloor(uint floor, string ownerName, string message, string link, uint color, uint windowsTint);

    Floor[] public floors;
    uint public numberOfFloors;

    function createFloor(string memory _ownerName, string memory _message, string memory _link, uint _color, uint _windowsTint) public {
        floors.push(Floor(_ownerName, _message, _link, _color, _windowsTint));
        emit NewFloor(numberOfFloors, _ownerName, _message, _link, _color, _windowsTint);
        numberOfFloors++;
    }
}