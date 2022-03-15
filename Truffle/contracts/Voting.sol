// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract Voting_modifier {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}

contract Voting is Voting_modifier {
    // 특정 사용자가 제안을 실행하고 이 제안에 동의하는 사람들을 표시하는 방식으로 동작

    mapping(uint256 => Proposal) proposal_list;
    mapping(address => uint256) my_proposal_list;
    uint256 public total_proposal_count = 0;
    uint256 require_count = 10; // 얼마만큼의 동의를 얻어야 수행이 가능한지를 표시, 일종의 목표값
    uint256 check_index = 0;

    constructor() {
        owner = msg.sender; // 특정 조건값을 바꾸는데에는 주인 계정만 사용이 가능하게 하기 위해
    }

    enum Status {
        end,
        playing
    }

    struct Proposal {
        address Starter_user;
        address[] aggred_User; // 동의한 주소값
        uint256 count;
        string title; // 어떤 제의인지
        string types;
        string content;
        uint256 end_time;
        uint256 id;
        Status status;
    }

    function make_proposal(
        string memory _title,
        string memory _types,
        string memory _content
    ) public {
        // 단순하게 제안서를 받고 제안을 하는 상황
        // 단순히 한 사용자당 최대 3개만을 다를수 있게 만들었음
        require(check_Personal_Proposal_amount() < 3, "only 3 proposal enable");
        address[] memory temp;
        proposal_list[total_proposal_count] = Proposal({
            Starter_user: msg.sender,
            count: 0,
            aggred_User: temp,
            title: _title,
            types: _types,
            content: _content,
            end_time: block.timestamp + 1 days,
            id: check_index,
            status: Status.playing
        });
        my_proposal_list[msg.sender]++;

        total_proposal_count++;
        check_index++;
    }

    function upgrade_proposal(uint256 index) public {
        // 투표 하는 함수
        Proposal storage pos = proposal_list[index];

        require(pos.status == Status.playing, "Not Playing!!");
        require(pos.Starter_user != msg.sender, "can't upgrade mySelf");
        require(pos.aggred_User.length < require_count, "already success!!");

        pos.aggred_User.push(msg.sender);
        pos.count++;
    }

    function done_Proposal(uint256 index) public onlyOwner {
        // 제안을 끝내는 함수
        // 반드시 요구되는 카운트 보다 많아야 종료가 가능
        Proposal storage pos = proposal_list[index];
        require(pos.count >= require_count, "Not Enough Count");
        my_proposal_list[msg.sender]--;
        pos.status = Status.end;
        total_proposal_count--;
    }

    function view_address_Proposal() public view returns (Proposal[] memory) {
        // 특정 주소에 해당 하는 데이터를 가져오는 함수
        // 마이 페이지 부분에 구현이 될 예정
        Proposal[] memory return_value = new Proposal[](
            my_proposal_list[msg.sender]
        );
        uint256 index = 0;
        for (uint256 i = 0; i < total_proposal_count; i++) {
            Proposal memory check = proposal_list[i];
            if (check.Starter_user == msg.sender) {
                return_value[index] = check;
            }
        }
        return return_value;
    }

    function view_Proposal(uint256 index)
        public
        view
        returns (Proposal memory)
    {
        // 특정 index에 해당하는 Proposal을 확인하는 함수
        Proposal memory pos = proposal_list[index];
        require(pos.status == Status.playing || pos.status == Status.end);
        return proposal_list[index];
    }

    function view_total_Proposal() public view returns (Proposal[] memory) {
        // 진행중인 제안을 보는 용도
        // voting_site부분에 적용
        Proposal[] memory return_value = new Proposal[](total_proposal_count);
        for (uint256 i = 0; i < total_proposal_count; i++) {
            Proposal memory check = proposal_list[i];
            if (check.status != Status.end) {
                return_value[i] = check;
            }
        }
        return return_value;
    }

    function check_Personal_Proposal_amount() public view returns (uint256) {
        // Voting을 만들수 있는지 확인하기 위한 함수
        return my_proposal_list[msg.sender];
    }
}
