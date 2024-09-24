import { useEffect, useState } from "react";

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
    DST_QUEST_PAGE: {
        "id": "userId",
        "element": {
            "questInfo": {
                "type": "QUEST_INFO_CARD",
                "content": {
                    "topRowText": "한달동안 평균 소비 금액 줄이기",
                    "bottomRowText": "6월 15일 까지"
                },
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
        }
    }
}

export const useApi = (reqFunc, mockKey = undefined) => {
    const [state, setState] = useState(null);

    const loadData = () => {
        if (MOCK_DATA[mockKey]) {
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
