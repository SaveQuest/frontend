import { useEffect, useState } from "react";

const USE_MOCK = false
const MOCK_DATA = {
    DST_QUEST: {
        "id": "userId",
        "element": [
            {
                "type": "QUEST_INFO_CARD",
                "top": {
                    "topRowText": "500",
                    "bottomRowText": "이름을 입력하세요"
                },
                "right": {
                    "topRowText": "오늘 사용한 금액",
                    "bottomRowText": "3,000"
                },
                "left": {
                    "topRowText": "한도 금액",
                    "bottomRowText": "5,000"
                },
                "bottom": {
                    "percent": 55,
                    "color": "Primary/300"
                }
            }
        ]
    },
    DST_HOME: {
        "id": "userId",
        "element": [
            {
                "type": "CAROUSEL_BASIC_CARD",
                "content": {
                    "topRowText": "SaveQuest 이벤트",
                    "bottomRowText": "홈 화면에서 친구 초대하기"
                },
                "right": {
                    "imageUri": "https://sqstatic.ychan.me/character/default0.png?key=wy6hk6y1sx3gcjvkmdhef"
                },
                "style": {},
                "handler": {
                    "type": "APP_SCHEME",
                    "uri": "savequest://screen/quest"
                }
            },
            {
                "type": "CAROUSEL_PERCENT_CARD",
                "content": {
                    "topRowText": "이번달 SaveQuest로",
                    "bottomRowColorText": "13만원",
                    "bottomRowText": "아꼈어요"
                },
                "right": {
                    "text": "+12*"
                },
                "style": {
                    "bottomRowColorText": {
                        "color": "Primary/300"
                    },
                    "rightText": {
                        "color": "Primary/400",
                        "backgroundColor": "Primary/100"
                    }
                },
                "handler": {
                    "type": "WEBLINK",
                    "uri": "https://ychan.me"
                }
            }
        ]
    },
    DST_QUEST_MODAL: {
        "quest": [
            { "id": "59195", "name": "편의점에서 총 5,000원 이하로 사용하기", "reward": "500" },
            { "id": "59196", "name": "편의점에서 총 5,000원 이하로 사용하기", "reward": "500" },
        ]
    },
    DST_CHALLENGE_PAGE: {
        "id": "challengeId",
        "questInfo": {
            "type": "QUEST_INFO_CARD",
            "content": {
                "topRowText": "한달동안 평균 소비 금액 줄이기",
                "bottomRowText": "6월 15일 까지"
            },
            "ranking": [
                { "name": "차호림", "level": 998, "totalSavedUsage": 5000 },
                { "name": "차호림", "level": 998, "totalSavedUsage": 5000 },
                { "name": "차호림", "level": 998, "totalSavedUsage": 5000 }
            ],
            "bottom": {
                "type": "LIST_ROW",
                "content": [
                    {
                        "type": "QUEST_DATA_CARD",
                        "content": {
                            "topRowText": "나의 한달 평균 소비 금액",
                            "bottomRowText": "₩45,500"
                        }
                    }, {
                        "type": "QUEST_DATA_CARD",
                        "content": {
                            "topRowText": "지금까지 줄인 소비금액",
                            "bottomRowText": "₩5,000"
                        }
                    }
                ]
            }
        }
    },
    DST_CHALLENGE_JOIN_HDR: {
        "id": "userId",
        "element": [
            {
                "name": "진행중인 챌린지 수",
                "value": "21"
            },
            {
                "name": "챌린지 플레이어",
                "value": "42,310"
            },
            {
                "name": "얻을 수 있는 포인트",
                "value": " +5,600"
            }
        ]
    },
    PUB_CHALLENGE: { "challenges": [{ "id": "1234", "name": "한달동안 평균 소비 금액 줄이기", "people": 100, "totalReward": 900, "entryFee": 100, "endsAt": "2021-08-01T00:00:00.000Z", joined: true }] },
    STORE_PRDS: {
        "products": [
            {
                "id": "1234",
                "name": "상품",
                "price": 1000,
                "image": "https://sqstatic.ychan.me/dstCarouselImage/70a3ceae-d5dc-463e-a98b-48d6243a6a80.png?key=qq3ruhu537pk9lyv3wfgx",
            }
        ]
    },
    PRD_DETAIL: {
        "id": "1234",
        "name": "상품",
        "price": 1000,
        "image": "https://sqstatic.ychan.me/dstCarouselImage/70a3ceae-d5dc-463e-a98b-48d6243a6a80.png?key=qq3ruhu537pk9lyv3wfgx",
        "description": "상품 설명",
        "isPurchasable": true,
    },
    USER_INV: {
        "inventory": [
            {
                "id": "1234",
                "name": "아이템",
                "imageUrl": "https://sqstatic.ychan.me/inventory/5gna1.jpg?key=fn1k661",
                "isEquipped": true,
            }
        ]
    },
    USER_EQUIPPED_DATA: {

    },
    DST_NOTI: {
        "id": "userId",
        "element": [
            {
                "type": "NOTIFICATION_CARD",
                "id": "591nfa01",
                "content": {
                    "leftRowTopText": "접속 보상",
                    "leftRowBottomText": "2021-08-01T00:00:00.000Z",
                    "descriptionText": "어쩌구저쩌구어쩌구저쩌구"
                },
                "right": {
                    "type": "NOTIFICATION_INTERACT_COLLECT",
                    "content": {
                        "rewardAmountText": "1000"
                    }
                },
                "handler": {
                    "type": "REQUEST",
                    "uri": "/user/collect",
                    "data": {
                        "id": "491nd91jfma01lla"
                    }
                }
            },
            {
                "type": "NOTIFICATION_CARD",
                "id": "591nfaaf01",
                "content": {
                    "leftRowTopText": "공지사항",
                    "leftRowBottomText": "2021-08-01T00:00:00.000Z",
                    "descriptionText": "어쩌구저쩌구어쩌구저쩌구"
                }
            }
        ]
    },
    PROFILE: {
        "name": "주현명",
        "level": 998,
        "tag": "절약의 신",
        "isProfilePublic": true,
        "profileImage": "https://sqstatic.ychan.me/character/default0.png?key=wy6hk6y1sx3gcjvkmdhef",
        "element": [
            { "name": "지금까지 줄인 소비금액", "value": "99,000" },
            { "name": "성공한 도전과제", "value": "321개" }
        ],
        "questLog": {
            "totalEarned": 1000,
            "totalCompleted": 100,
            "totalFailed": 10,
        }
    },
    CHALL_DETAIL: {
        "id": "1234",
        "endsAt": "2021-08-01T00:00:00.000Z",
        "ranking": [
            {
                "rank": 1, "name": "주현명", "level": "998", "element": [
                    {
                        "name": "지금까지 줄은 소비 금액",
                        "value": "5,500",
                    }
                ]
            }
        ],
        "people": 100,
        "totalReward": 900,
    }
}

export const useApi = (reqFunc, mockKey = undefined) => {
    const [state, setState] = useState(null);

    const loadData = () => {
        console.log("load", reqFunc, mockKey)
        if (USE_MOCK && MOCK_DATA[mockKey]) {
            timer = setTimeout(() => {
                setState(MOCK_DATA[mockKey])
            }, 1000)
        } else {
            reqFunc(state).then((res) => setState(res))
        }
    }

    useEffect(() => {
        loadData()
    }, [reqFunc, mockKey])

    return {
        state,
        refresh: loadData
    }
} 
