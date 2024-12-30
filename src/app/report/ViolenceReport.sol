// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ViolenceReport {
    struct Report {
        address reporter;
        string name;
        string location;
        string description;
        uint256 timestamp;
    }

    Report[] public reports;
    address public owner;

    event ReportSubmitted(
        address indexed reporter,
        string name,
        string location,
        string description,
        uint256 timestamp
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function submitReport(
        string memory _name,
        string memory _location,
        string memory _description
    ) public payable {
        require(msg.value >= 0.001 ether, "Insufficient gas fee.");

        reports.push(
            Report({
                reporter: msg.sender,
                name: _name,
                location: _location,
                description: _description,
                timestamp: block.timestamp
            })
        );

        emit ReportSubmitted(msg.sender, _name, _location, _description, block.timestamp);
    }

    function getReportsCount() public view returns (uint256) {
        return reports.length;
    }

    function withdrawFunds() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    receive() external payable {}
}
