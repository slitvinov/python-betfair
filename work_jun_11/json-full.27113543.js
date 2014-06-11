{
    "toggles": [], 
    "services": [
        {
            "services": [], 
            "config": {
                "loggedIn": false, 
                "requires": {
                    "js": [
                        "localstorage-service"
                    ]
                }
            }, 
            "moduleId": "localstorage", 
            "type": "localstorage", 
            "constructor": "LocalStorageService"
        }, 
        {
            "services": [
                "localstorage"
            ], 
            "config": {
                "loggedIn": false, 
                "locale": "en_GB", 
                "currencyCode": "GBP", 
                "jurisdiction": "INTERNATIONAL", 
                "enableGoogleAnalyticsDimensions": true, 
                "loginStatus": false, 
                "BET_STATUS_MAP": {
                    "M": "Matched", 
                    "C": "Cancelled", 
                    "SP": "Starting Price", 
                    "U": "Unmatched"
                }, 
                "requires": {
                    "js": [
                        "analytics-service"
                    ]
                }, 
                "BET_TYPE_MAP": {
                    "B": "Back", 
                    "M": "Multiple", 
                    "L": "Lay", 
                    "F": "Fixed"
                }
            }, 
            "moduleId": "analytics", 
            "type": "analytics", 
            "constructor": "AnalyticsService"
        }, 
        {
            "services": [], 
            "config": {
                "loggedIn": false, 
                "pushEnabled": true, 
                "servers": {
                    "aus-api": "//aus-api.betfair.com", 
                    "mantis": "", 
                    "sports": "//sports.betfair.com", 
                    "in-play": "", 
                    "web-messaging": "https://messaging.betfair.com", 
                    "uk-api": "//uk-api.betfair.com"
                }, 
                "push": {
                    "retry": 60000, 
                    "timeout": 4000, 
                    "server": "wss://push.betfair.com:443"
                }, 
                "timeout": 5000, 
                "services": {
                    "wsReadMessage": {
                        "path": "/services/ws/readMessage"
                    }, 
                    "getTime": {
                        "path": "/content/api/getTime.do"
                    }, 
                    "getEventsInPlay": {
                        "path": "/inplayservice/v1.1/eventsInPlay"
                    }, 
                    "wsRecordAction": {
                        "path": "/services/ws/recordAction"
                    }, 
                    "betslipPersistence": {
                        "path": "/exchange/oldBetslip"
                    }, 
                    "getCashoutMultiplesQuotes": {
                        "path": "/fcq-service/v0.1/getBetQuotes"
                    }, 
                    "getFullMarketData": {
                        "path": "/betting/api/json/getFullMarketData.do"
                    }, 
                    "allMarkets": {
                        "path": "/www/sports/exchange/readonly/v1.0/allmarkets"
                    }, 
                    "wsGetMessages": {
                        "path": "/services/ws/getMessages"
                    }, 
                    "getFobMarketData": {
                        "path": "/www/sports/fixedodds/readonly/v1.0/getMarketPrices", 
                        "schema": "FOB"
                    }, 
                    "getUserData": {
                        "path": "/account/api/getUser.do"
                    }, 
                    "getEventDetails": {
                        "path": "/inplayservice/v1.1/eventDetails"
                    }, 
                    "etxPlaceBetsLay": {
                        "path": "/www/etx-json-rpc?_ak=LeYuoXTNMDaxMQdG"
                    }, 
                    "fobImplyBetsSingles": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/implyBets?alt=json&locale=en_GB&scope=SINGLES"
                    }, 
                    "getMarketList": {
                        "path": "/www/rest/sports/global/v1.0/fastlinks"
                    }, 
                    "webMessagingService": {
                        "path": "/services/ws/"
                    }, 
                    "etxPlaceBetsBack": {
                        "path": "/www/etx-json-rpc?_ak=aGuTzYHcuKiymbnj"
                    }, 
                    "getCashoutQuotes": {
                        "path": "/cashout-service/readonly/v1.0/quote"
                    }, 
                    "etxCashout": {
                        "path": "/www/etx-json-rpc?_ak=KSYLXaLFPSSyvrdc"
                    }, 
                    "etxPlaceBetsEdit": {
                        "path": "/www/etx-json-rpc"
                    }, 
                    "wallets": {
                        "path": "/exchange/wallet"
                    }, 
                    "betslipapi": {
                        "placeFixedOddOrders": "/fixedOddOrders/v1.0/place", 
                        "placeMultiples": "/transactional/v1.1/multiples/place", 
                        "getBetsByCriteria": "/potential/v1.0/getBetsByCriteria", 
                        "removeOrdersByMarketId": "/transactional/v1.1/potential/removeByMarket", 
                        "placePotentialBets": "/transactional/v1.1/open/place", 
                        "createOrdersByMarketId": "/potential/v1.0/createByMarketId", 
                        "getOrders": "/readonly/v1.1/fetch", 
                        "removeAllOrders": "/transactional/v1.1/potential/removeAll", 
                        "getOpenBetsOrders": "/readonly/v1.1/fetchOpenBets", 
                        "cancelUnmatchedBetByMarketId": "/transactional/v1.1/open/cancel", 
                        "cancelUnmatchedBet": "/openBets/v1.0/cancelUnmatchedBets", 
                        "transfer": "/transactional/v1.1/potential/transfer", 
                        "editUnmatchedBets": "/transactional/v1.1/open/update", 
                        "storePotentialBets": "/transactional/v1.1/potential/store", 
                        "path": "/betslip-service", 
                        "implyMultiples": "/readonly/v1.1/imply", 
                        "removePotentialBets": "/transactional/v1.1/potential/remove"
                    }, 
                    "getNextStart": {
                        "path": "/www/rest/sports/global/v1.0/nextStart"
                    }, 
                    "getTimeline": {
                        "path": "/inplayservice/v1.1/eventTimeline"
                    }, 
                    "placeCashoutMultiples": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/cashoutBet?alt=json&_ak=aGuTzYHcuKiymbnj"
                    }, 
                    "placeCashout": {
                        "path": "/cashout-service/transactional/v1.0/cashout"
                    }, 
                    "getLiveInfo": {
                        "path": "/sportsservice/v1.0/liveRaceInfo"
                    }, 
                    "fobPlaceBets": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/placeBet?alt=json&_ak=aGuTzYHcuKiymbnj"
                    }, 
                    "getStaticMarketData": {
                        "path": "/www/sports/exchange/readonly/v1.0/bymarket", 
                        "schema": "ERO"
                    }, 
                    "getLiveResults": {
                        "path": "/sportsservice/v1.0/liveResults"
                    }, 
                    "getVolatileMarketData": {
                        "path": "/tournament/api/updateMarketList.do"
                    }, 
                    "getSportsWithZonePages": {
                        "path": "/www/rest/sports/global/v1.0/zonesEventTypeIds"
                    }, 
                    "getScores": {
                        "path": "/inplayservice/v1.1/scores"
                    }, 
                    "fobImplyBetsMultiples": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/implyBets?alt=json&locale=en_GB&scope=MULTIPLES"
                    }
                }, 
                "requires": {
                    "js": [
                        "transport-service"
                    ]
                }
            }, 
            "moduleId": "transport", 
            "type": "transport", 
            "constructor": "Transport"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "loggedIn": false, 
                "isEachwayEnabled": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }, 
                "requires": {
                    "js": [
                        "bets-persistence"
                    ]
                }
            }, 
            "moduleId": "bets-persistence", 
            "type": "bets", 
            "constructor": "BetsPersistence"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "loggedIn": false, 
                "requires": {
                    "js": [
                        "betslip-api"
                    ]
                }, 
                "projection": "MATCH", 
                "transport": "transport"
            }, 
            "moduleId": "betslip-api", 
            "type": "betslip-api", 
            "constructor": "BetslipAPI"
        }, 
        {
            "services": [], 
            "config": {
                "broadcastNamespace": "cashout:", 
                "loggedIn": false, 
                "isEachwayEnabled": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }
            }, 
            "moduleId": "cashout-potential-bets", 
            "type": "bets", 
            "constructor": "Bets"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "liquiditySliderEnabled": false, 
                "loggedIn": false, 
                "default": {
                    "action": "/exchange/retrieveBets", 
                    "params": {
                        "openBetsLimit": 200, 
                        "includeBSP": false, 
                        "projection": "MATCH", 
                        "includeSettledProfit": false
                    }, 
                    "keyParam": "marketIds"
                }, 
                "numberPerRequest": 70, 
                "servers": [
                    "1", 
                    "2", 
                    "924"
                ], 
                "1": {
                    "source": "mantis"
                }, 
                "frequency": 15000, 
                "errorThreshold": 5, 
                "autoStart": true, 
                "orderOpenBets": false, 
                "ignoreSequentialUpdateRequests": false, 
                "2": {
                    "source": "mantis"
                }, 
                "delayTimeout": 300, 
                "recurrent": true, 
                "requires": {
                    "js": [
                        "update-service"
                    ]
                }, 
                "isBetslipApi": true, 
                "transport": "transport"
            }, 
            "moduleId": "ebr", 
            "type": "update", 
            "constructor": "Update"
        }, 
        {
            "services": [], 
            "config": {
                "consumeServices": [
                    "timeline", 
                    "markets", 
                    "scores", 
                    "eventsInPlay", 
                    "eventDetails"
                ], 
                "loggedIn": false, 
                "pushEnabled": true, 
                "requires": {
                    "js": [
                        "event-service"
                    ]
                }, 
                "errorOnServices": [
                    "timeline", 
                    "scores", 
                    "eventsInPlay", 
                    "eventDetails"
                ]
            }, 
            "moduleId": "event-object", 
            "type": "event", 
            "constructor": "Event"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "liquiditySliderEnabled": false, 
                "loggedIn": false, 
                "default": {
                    "action": "getEventsInPlay", 
                    "source": "in-play", 
                    "keyParam": "eventTypeIds", 
                    "params": {
                        "locale": "en_GB", 
                        "regionCode": "UK", 
                        "alt": "json", 
                        "maxResults": 100
                    }
                }, 
                "numberPerRequest": 1, 
                "initialDelay": 15000, 
                "frequency": 15000, 
                "errorThreshold": 5, 
                "autoStart": true, 
                "ignoreSequentialUpdateRequests": false, 
                "orderOpenBets": false, 
                "delayTimeout": 300, 
                "requires": {
                    "js": [
                        "update-service"
                    ]
                }, 
                "recurrent": true, 
                "transport": "transport"
            }, 
            "moduleId": "eventsInPlay", 
            "type": "update", 
            "constructor": "Update"
        }, 
        {
            "services": [], 
            "config": {
                "consumeServices": [
                    "markets"
                ], 
                "loggedIn": false, 
                "requires": {
                    "js": [
                        "market-service"
                    ]
                }, 
                "eachwayEnabled": true
            }, 
            "moduleId": "market-object", 
            "type": "market", 
            "constructor": "Market"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "liquiditySliderEnabled": false, 
                "loggedIn": false, 
                "default": {
                    "action": "getStaticMarketData", 
                    "params": {
                        "locale": "en_GB", 
                        "currencyCode": "GBP", 
                        "alt": "json", 
                        "types": "MARKET_STATE,MARKET_RATES,RUNNER_STATE,RUNNER_EXCHANGE_PRICES_BEST,RUNNER_SP"
                    }, 
                    "keyParam": "marketIds"
                }, 
                "requires": {
                    "js": [
                        "update-service"
                    ]
                }, 
                "numberPerRequest": 20, 
                "initialDelay": 2000, 
                "servers": [
                    "1", 
                    "2", 
                    "924"
                ], 
                "1": {
                    "source": "uk-api", 
                    "timeout": 5000
                }, 
                "frequency": 15000, 
                "errorThreshold": 5, 
                "autoStart": true, 
                "orderOpenBets": false, 
                "ignoreSequentialUpdateRequests": false, 
                "2": {
                    "source": "aus-api", 
                    "timeout": 5000
                }, 
                "delayTimeout": 300, 
                "924": {
                    "source": "uk-api", 
                    "numberPerRequest": 9, 
                    "headers": {
                        "Content-Type": "application/json", 
                        "Accept": "application/json"
                    }, 
                    "params": {
                        "locale": "en_GB", 
                        "currencyCode": "GBP", 
                        "types": ""
                    }, 
                    "timeout": 5000, 
                    "action": "getFobMarketData", 
                    "method": "POST"
                }, 
                "recurrent": true, 
                "transport": "transport", 
                "initial": {
                    "params": {
                        "types": "MARKET_STATE,MARKET_RATES,MARKET_DESCRIPTION,EVENT,RUNNER_DESCRIPTION,RUNNER_STATE,RUNNER_EXCHANGE_PRICES_BEST,RUNNER_METADATA,RUNNER_SP"
                    }
                }
            }, 
            "moduleId": "markets", 
            "type": "update", 
            "constructor": "Update"
        }, 
        {
            "services": [
                "market-object", 
                "event-object", 
                "markets", 
                "betslip-api"
            ], 
            "config": {
                "loggedIn": false, 
                "isEachwayEnabled": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "-1", 
                    "E": "-1"
                }, 
                "requires": {
                    "js": [
                        "bets-betslipapi"
                    ]
                }
            }, 
            "moduleId": "placed-bets", 
            "type": "bets", 
            "constructor": "Bets"
        }, 
        {
            "services": [
                "placed-bets", 
                "markets", 
                "ebr", 
                "market-object", 
                "event-object", 
                "betslip-api"
            ], 
            "config": {
                "loggedIn": false, 
                "isEachwayEnabled": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }, 
                "requires": {
                    "js": [
                        "exchange-reporting-betslipapi"
                    ]
                }
            }, 
            "moduleId": "exchange-reporting", 
            "type": "bets", 
            "constructor": "ExchangeReporting"
        }, 
        {
            "services": [], 
            "config": {
                "services": {
                    "wsReadMessage": {
                        "path": "/services/ws/readMessage"
                    }, 
                    "getTime": {
                        "path": "/content/api/getTime.do"
                    }, 
                    "getEventsInPlay": {
                        "path": "/inplayservice/v1.1/eventsInPlay"
                    }, 
                    "wsRecordAction": {
                        "path": "/services/ws/recordAction"
                    }, 
                    "betslipPersistence": {
                        "path": "/exchange/oldBetslip"
                    }, 
                    "getCashoutMultiplesQuotes": {
                        "path": "/fcq-service/v0.1/getBetQuotes"
                    }, 
                    "getFullMarketData": {
                        "path": "/betting/api/json/getFullMarketData.do"
                    }, 
                    "allMarkets": {
                        "path": "/www/sports/exchange/readonly/v1.0/allmarkets"
                    }, 
                    "wsGetMessages": {
                        "path": "/services/ws/getMessages"
                    }, 
                    "getFobMarketData": {
                        "path": "/www/sports/fixedodds/readonly/v1.0/getMarketPrices", 
                        "schema": "FOB"
                    }, 
                    "getUserData": {
                        "path": "/account/api/getUser.do"
                    }, 
                    "getEventDetails": {
                        "path": "/inplayservice/v1.1/eventDetails"
                    }, 
                    "etxPlaceBetsLay": {
                        "path": "/www/etx-json-rpc?_ak=LeYuoXTNMDaxMQdG"
                    }, 
                    "fobImplyBetsSingles": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/implyBets?alt=json&locale=en_GB&scope=SINGLES"
                    }, 
                    "getMarketList": {
                        "path": "/www/rest/sports/global/v1.0/fastlinks"
                    }, 
                    "webMessagingService": {
                        "path": "/services/ws/"
                    }, 
                    "etxPlaceBetsBack": {
                        "path": "/www/etx-json-rpc?_ak=aGuTzYHcuKiymbnj"
                    }, 
                    "getCashoutQuotes": {
                        "path": "/cashout-service/readonly/v1.0/quote"
                    }, 
                    "etxCashout": {
                        "path": "/www/etx-json-rpc?_ak=KSYLXaLFPSSyvrdc"
                    }, 
                    "etxPlaceBetsEdit": {
                        "path": "/www/etx-json-rpc"
                    }, 
                    "wallets": {
                        "path": "/exchange/wallet"
                    }, 
                    "betslipapi": {
                        "placeFixedOddOrders": "/fixedOddOrders/v1.0/place", 
                        "placeMultiples": "/transactional/v1.1/multiples/place", 
                        "getBetsByCriteria": "/potential/v1.0/getBetsByCriteria", 
                        "removeOrdersByMarketId": "/transactional/v1.1/potential/removeByMarket", 
                        "placePotentialBets": "/transactional/v1.1/open/place", 
                        "createOrdersByMarketId": "/potential/v1.0/createByMarketId", 
                        "getOrders": "/readonly/v1.1/fetch", 
                        "removeAllOrders": "/transactional/v1.1/potential/removeAll", 
                        "getOpenBetsOrders": "/readonly/v1.1/fetchOpenBets", 
                        "cancelUnmatchedBetByMarketId": "/transactional/v1.1/open/cancel", 
                        "cancelUnmatchedBet": "/openBets/v1.0/cancelUnmatchedBets", 
                        "transfer": "/transactional/v1.1/potential/transfer", 
                        "editUnmatchedBets": "/transactional/v1.1/open/update", 
                        "storePotentialBets": "/transactional/v1.1/potential/store", 
                        "path": "/betslip-service", 
                        "implyMultiples": "/readonly/v1.1/imply", 
                        "removePotentialBets": "/transactional/v1.1/potential/remove"
                    }, 
                    "getNextStart": {
                        "path": "/www/rest/sports/global/v1.0/nextStart"
                    }, 
                    "getTimeline": {
                        "path": "/inplayservice/v1.1/eventTimeline"
                    }, 
                    "placeCashoutMultiples": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/cashoutBet?alt=json&_ak=aGuTzYHcuKiymbnj"
                    }, 
                    "placeCashout": {
                        "path": "/cashout-service/transactional/v1.0/cashout"
                    }, 
                    "getLiveInfo": {
                        "path": "/sportsservice/v1.0/liveRaceInfo"
                    }, 
                    "fobPlaceBets": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/placeBet?alt=json&_ak=aGuTzYHcuKiymbnj"
                    }, 
                    "getStaticMarketData": {
                        "path": "/www/sports/exchange/readonly/v1.0/bymarket", 
                        "schema": "ERO"
                    }, 
                    "getLiveResults": {
                        "path": "/sportsservice/v1.0/liveResults"
                    }, 
                    "getVolatileMarketData": {
                        "path": "/tournament/api/updateMarketList.do"
                    }, 
                    "getSportsWithZonePages": {
                        "path": "/www/rest/sports/global/v1.0/zonesEventTypeIds"
                    }, 
                    "getScores": {
                        "path": "/inplayservice/v1.1/scores"
                    }, 
                    "fobImplyBetsMultiples": {
                        "path": "/www/sports/fixedodds/transactional/v1.0/implyBets?alt=json&locale=en_GB&scope=MULTIPLES"
                    }
                }, 
                "loggedIn": false, 
                "requires": {
                    "js": [
                        "transport-service"
                    ]
                }, 
                "timeout": 30000, 
                "servers": {
                    "aus-api": "//aus-api.betfair.com", 
                    "mantis": "", 
                    "sports": "//sports.betfair.com", 
                    "in-play": "", 
                    "web-messaging": "https://messaging.betfair.com", 
                    "uk-api": "//uk-api.betfair.com"
                }
            }, 
            "moduleId": "transport-etx", 
            "type": "transport", 
            "constructor": "Transport"
        }, 
        {
            "services": [
                "transport-etx"
            ], 
            "config": {
                "loggedIn": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "applicationKey": "app-key", 
                "isEachwayEnabled": false, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "marketServices": [
                    "markets"
                ], 
                "enablePersistence": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }, 
                "requires": {
                    "js": [
                        "exchange-transaction-betslipapi"
                    ]
                }
            }, 
            "moduleId": "exchange-transaction", 
            "type": "bets", 
            "constructor": "ExchangeTransaction"
        }, 
        {
            "services": [
                "market-object", 
                "event-object", 
                "markets", 
                "betslip-api"
            ], 
            "config": {
                "loggedIn": false, 
                "isEachwayEnabled": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }, 
                "requires": {
                    "js": [
                        "bets-betslipapi"
                    ]
                }
            }, 
            "moduleId": "indicative-singles", 
            "type": "bets", 
            "constructor": "Bets"
        }, 
        {
            "services": [
                "market-object", 
                "event-object", 
                "markets", 
                "betslip-api"
            ], 
            "config": {
                "loggedIn": false, 
                "isEachwayEnabled": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }, 
                "requires": {
                    "js": [
                        "bets-betslipapi"
                    ]
                }
            }, 
            "moduleId": "multiples-bets", 
            "type": "bets", 
            "constructor": "Bets"
        }, 
        {
            "services": [
                "market-object", 
                "event-object", 
                "markets", 
                "betslip-api"
            ], 
            "config": {
                "loggedIn": false, 
                "isEachwayEnabled": false, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": true, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }, 
                "requires": {
                    "js": [
                        "bets-betslipapi", 
                        "fixed-odds-betting-betslipapi"
                    ]
                }
            }, 
            "moduleId": "potential-bets", 
            "type": "bets", 
            "constructor": "Bets"
        }, 
        {
            "services": [
                "transport-etx", 
                "potential-bets", 
                "indicative-singles", 
                "multiples-bets", 
                "betslip-api"
            ], 
            "config": {
                "loggedIn": false, 
                "isEachwayEnabled": true, 
                "fetchBetsAcrossAllChannels": false, 
                "enablePromotions": true, 
                "enablePersistence": true, 
                "minIntervalBetweenPersistenceUpdates": 500, 
                "listenToExternal": false, 
                "enableMultiples": true, 
                "orderOpenBets": false, 
                "maxBetCount": {
                    "FS": "25", 
                    "E": "100"
                }, 
                "requires": {
                    "js": [
                        "fixed-odds-betting-betslipapi"
                    ]
                }
            }, 
            "moduleId": "fixed-odds-betting", 
            "type": "bets", 
            "constructor": "FixedOddsBetting"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "source": "mantis", 
                "loggedIn": false, 
                "requires": {
                    "js": [
                        "navigation"
                    ]
                }, 
                "transport": "transport"
            }, 
            "moduleId": "navigation", 
            "type": "navigation", 
            "constructor": "NavService"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "loggedIn": false, 
                "pageBucketKey": "modalPopup_-498868377", 
                "bucketKeyPrefix": "modalPopup_", 
                "path": "/exchange/promotionModalPopups/", 
                "requires": {
                    "js": [
                        "promotional-popups-service"
                    ]
                }, 
                "transport": "transport"
            }, 
            "moduleId": "promotional-popups", 
            "type": "promotional-popups", 
            "constructor": "PromotionalPopupsService"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "path": "/exchange/preferences", 
                "loggedIn": false, 
                "requires": {
                    "js": [
                        "save-preferences-service"
                    ]
                }, 
                "transport": "transport"
            }, 
            "moduleId": "save-preferences", 
            "type": "save-preferences", 
            "constructor": "SavePreferencesService"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "loggedIn": false, 
                "requires": {
                    "js": [
                        "search-ebs-service"
                    ]
                }, 
                "transport": "transport"
            }, 
            "moduleId": "search-ebs", 
            "type": "search-ebs", 
            "constructor": "SearchEBSService"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "liquiditySliderEnabled": false, 
                "loggedIn": false, 
                "default": {
                    "action": "getTimeline", 
                    "source": "in-play", 
                    "keyParam": "eventId", 
                    "params": {
                        "locale": "en_GB", 
                        "regionCode": "UK", 
                        "alt": "json"
                    }
                }, 
                "numberPerRequest": 1, 
                "initialDelay": 15000, 
                "frequency": 15000, 
                "errorThreshold": 5, 
                "autoStart": true, 
                "ignoreSequentialUpdateRequests": false, 
                "orderOpenBets": false, 
                "delayTimeout": 300, 
                "requires": {
                    "js": [
                        "update-service"
                    ]
                }, 
                "recurrent": true, 
                "transport": "transport"
            }, 
            "moduleId": "timeline", 
            "type": "update", 
            "constructor": "Update"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "default": {
                    "action": "wallets", 
                    "source": "mantis"
                }, 
                "requires": {
                    "js": [
                        "wallets-service"
                    ]
                }, 
                "loggedIn": false, 
                "enableRefreshWallets": true, 
                "transport": "transport"
            }, 
            "moduleId": "wallets", 
            "type": "wallets", 
            "constructor": "Wallets"
        }, 
        {
            "services": [
                "transport"
            ], 
            "config": {
                "loggedIn": false, 
                "default": {
                    "source": "web-messaging"
                }, 
                "initialDelay": 2000, 
                "servers": [
                    "default"
                ], 
                "frequency": 600000, 
                "autoStart": false, 
                "requires": {
                    "js": [
                        "web-messaging-service"
                    ]
                }, 
                "transport": "transport", 
                "autoRefreshEnabled": false
            }, 
            "moduleId": "web-messaging", 
            "type": "web-messaging", 
            "constructor": "WebMessagingService"
        }
    ], 
    "modules": [
        {
            "instanceId": "98965467", 
            "type": "footer", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Footer", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-footer-98965467", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "ltxt": "footer"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "#footer_Links a", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "newFooter": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 0
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "production": {
                    "ready": 0
                }, 
                "boundingBox": "#mod-footer-98965467-container", 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "showClock": false, 
                "requires": {
                    "css": [
                        "footer"
                    ], 
                    "js": [
                        "footer"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "footer"
        }, 
        {
            "instanceId": "98965468", 
            "type": "marketrules", 
            "translations": {}, 
            "modules": [], 
            "constructor": "MarketRules", 
            "services": [], 
            "config": {
                "showWallet": true, 
                "loggedIn": false, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "tennisLivescores": false, 
                "container": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "production": {
                    "ready": 0
                }, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-marketrules-98965468", 
                "bfPointsUrl": "https://accountservices.betfair.com/myaccount/account/OpenMyAccount.do?tabID=10", 
                "isAjax": false, 
                "ajax": {
                    "enabled": true
                }, 
                "reportIfLoaded": false, 
                "boundingBox": "#mod-marketrules-98965468-container", 
                "discountRatesUrl": "http://en.learning.betfair.com/app/answers/detail/a_id/2668", 
                "info": {
                    "enabled": null
                }, 
                "commissionRatesUrl": "http://en.learning.betfair.com/app/answers/detail/a_id/2486", 
                "showCommission": false, 
                "debug": {
                    "enabled": 1
                }, 
                "requires": {
                    "css": [
                        "marketrules"
                    ], 
                    "js": [
                        "marketrules"
                    ]
                }, 
                "showPointsStatement": false
            }, 
            "moduleId": "marketrules"
        }, 
        {
            "instanceId": "98965469", 
            "type": "cashout-help", 
            "translations": {}, 
            "modules": [], 
            "constructor": "CashoutHelp", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-cashout-help-98965469", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-cashout-help-98965469-container", 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "reportIfLoaded": false, 
                "usingCashoutService": false, 
                "defaultHeaderLevel": 2, 
                "requires": {
                    "css": [
                        "cashout-help"
                    ], 
                    "js": [
                        "cashout-help"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "cashout-help"
        }, 
        {
            "instanceId": "98965470", 
            "type": "readwebmessages", 
            "translations": {}, 
            "modules": [], 
            "constructor": "ReadWebMessages", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-readwebmessages-98965470", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-readwebmessages-98965470-container", 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": true
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "reportIfLoaded": false, 
                "defaultHeaderLevel": 2, 
                "requires": {
                    "css": [
                        "read-webmessages"
                    ], 
                    "js": [
                        "read-webmessages"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "readwebmessages"
        }, 
        {
            "instanceId": "98965471", 
            "type": "mediaplextag", 
            "translations": {}, 
            "modules": [], 
            "constructor": "MediaplexTag", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-mediaplextag-98965471", 
                "loadElementsLater": true, 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-mediaplextag-98965471-container", 
                "nodeId": null, 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "criteria": {
                    "jurisdiction": "ALL_BRANDS"
                }, 
                "defaultHeaderLevel": 2, 
                "requires": {
                    "css": [
                        "mediaplextag"
                    ], 
                    "js": [
                        "mediaplextag"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "mediaplextag"
        }, 
        {
            "instanceId": "98965448", 
            "type": "uservoice", 
            "translations": {}, 
            "modules": [], 
            "constructor": "", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-uservoice-98965448", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "url": "https://betfair1.uservoice.com/forums/192891-exchange", 
                "boundingBox": "#mod-uservoice-98965448-container", 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "requires": {
                    "css": [
                        "uservoice"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "uservoice"
        }, 
        {
            "instanceId": "98965449", 
            "type": "promotion-modal-popup", 
            "translations": {}, 
            "modules": [], 
            "constructor": "PromotionModalPopup", 
            "services": [
                "promotional-popups"
            ], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-promotion-modal-popup-98965449", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-promotion-modal-popup-98965449-container", 
                "enabled": false, 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "requires": {
                    "css": [
                        "promotion-modal-popup"
                    ], 
                    "js": [
                        "promotion-modal-popup"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "promotion-modal-popup"
        }, 
        {
            "instanceId": "98965450", 
            "type": "update-browser", 
            "translations": {
                "UPDATEBROWSER.MESSAGE": "We no longer support {0} {1}. We recommend an upgrade to a newer browser. If you choose to continue without upgrading your experience on Betfair will be degraded."
            }, 
            "modules": [], 
            "constructor": "UpdateBrowser", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-update-browser-98965450", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "chromeUrl": "http://www.google.com/chrome", 
                "debug": {
                    "enabled": 1
                }, 
                "boundingBox": "#mod-update-browser-98965450-container", 
                "ajax": {
                    "enabled": false
                }, 
                "pushEnabledSports": [
                    "1"
                ], 
                "locale": "en_GB", 
                "safariUrl": "http://www.apple.com/safari", 
                "production": {
                    "ready": 0
                }, 
                "firefoxUrl": "http://www.mozilla.org", 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "ieUrl": "http://www.microsoft.com/ie", 
                "requires": {
                    "css": [
                        "update-browser"
                    ], 
                    "js": [
                        "update-browser"
                    ]
                }, 
                "operaUrl": "http://www.opera.com", 
                "trusted": 0
            }, 
            "moduleId": "update-browser"
        }, 
        {
            "instanceId": "98965443", 
            "type": "login-lightbox", 
            "translations": {}, 
            "modules": [], 
            "constructor": "LoginLightbox", 
            "services": [], 
            "config": {
                "loggedIn": false, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "PO": "Login"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "a, .lightBox-input-submit, .login-lightbox-helpdesk", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "forgotUserAndPassword": true, 
                "cidOverridePresent": false, 
                "tennisLivescores": false, 
                "logoutRedirectUrl": "https://www.betfair.com/exchange", 
                "container": true, 
                "forgotUserNameUrl": "https://identitysso.betfair.com/view/recoverusername", 
                "pushEnabledSports": [
                    "1"
                ], 
                "production": {
                    "ready": 0
                }, 
                "logoutUrl": "https://identitysso.betfair.com/api/logout", 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "loginUrl": "https://identitysso.betfair.com/api/login", 
                "identitySSOLogin": true, 
                "requestId": "cf82fb00-f167-11e3-8f2e-001b21cd4c5c", 
                "srcNode": "#mod-login-lightbox-98965443", 
                "productName": "exchange", 
                "ajax": {
                    "enabled": true
                }, 
                "boundingBox": "#mod-login-lightbox-98965443-container", 
                "isInternalIP": false, 
                "info": {
                    "enabled": null
                }, 
                "loginRedirectUrl": "https://www.betfair.com/exchange", 
                "debug": {
                    "enabled": 1
                }, 
                "requires": {
                    "css": [
                        "login-lightbox"
                    ], 
                    "js": [
                        "login-lightbox"
                    ]
                }, 
                "contacturl": "http://sports.app.betfair/aboutUs/Contact.Us", 
                "loginObj": {
                    "invalidUserPassword": false, 
                    "loginUrl": "https://www.betfair.com/exchange/login", 
                    "loginStatusCode": null, 
                    "error": false
                }
            }, 
            "moduleId": "login-lightbox"
        }, 
        {
            "instanceId": "98965444", 
            "type": "favourites", 
            "translations": {
                "FAVOURITES.MANAGE": "Manage Favourites", 
                "FAVOURITES.NO.FAVOURITES.HELP": "Click on the star icon within the page you would like to add or go to", 
                "FAVOURITES.NO.FAVOURITES.ADD": "To add favourites:", 
                "BETSLIP.LOGIN_NEEDED_MSG": "Please log in below", 
                "FAVOURITES.NO.FAVOURITES": "You do not have any favourites", 
                "DIALOG.OK": "OK", 
                "BETSLIP.LOGIN_NEEDED_TITLE": "You are not logged in."
            }, 
            "modules": [], 
            "constructor": "Favourites", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-favourites-98965444", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "locale": "Europe/Berlin", 
                "boundingBox": "#mod-favourites-98965444-container", 
                "lightboxToggle": false, 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": true
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "requires": {
                    "css": [
                        "favourites"
                    ], 
                    "js": [
                        "favourites"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "favourites"
        }, 
        {
            "instanceId": "98965445", 
            "type": "nav", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Nav", 
            "services": [
                "navigation"
            ], 
            "config": {
                "boundingBox": "#mod-nav-98965445-container", 
                "loggedIn": false, 
                "displayInplayIcon": true, 
                "locale": "en_GB", 
                "competitionName": null, 
                "production": {
                    "ready": 0
                }, 
                "ajaxRequestType": null, 
                "redesign": true, 
                "sportId": 1, 
                "enableMarketViewViaAjax": false, 
                "tennisLivescores": false, 
                "accountId": null, 
                "marketIdParam": null, 
                "container": true, 
                "idParam": "27113543", 
                "showSportOnTv": true, 
                "showWhereIsTheMoney": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "eventName": "Spain v Netherlands", 
                "marketName": null, 
                "showResultsLink": false, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-nav-98965445", 
                "sportName": "SOCCER", 
                "jurisdiction": "INTERNATIONAL", 
                "showToteLinks": false, 
                "scrollcard": true, 
                "isAjax": false, 
                "ajax": {
                    "enabled": true
                }, 
                "nextEventUrl": "/exchange/horse-racing/next", 
                "showNextEvent": true, 
                "info": {
                    "enabled": null
                }, 
                "pagination": {}, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "sec": "LHN"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "a.has-content, a.persistent", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "raceConcept": false, 
                "loginStatus": false, 
                "debug": {
                    "enabled": 1
                }, 
                "showMultiples": true, 
                "requires": {
                    "css": [
                        "navredesign"
                    ], 
                    "js": [
                        "nav"
                    ]
                }
            }, 
            "moduleId": "nav"
        }, 
        {
            "instanceId": "98965446", 
            "type": "favmanager", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Favmanager", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-favmanager-98965446", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-favmanager-98965446-container", 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 0
                }, 
                "ajax": {
                    "enabled": true
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "path": "/exchange/favourite/", 
                "requires": {
                    "css": [
                        "favmanager"
                    ], 
                    "js": [
                        "favmanager"
                    ]
                }, 
                "trusted": 0, 
                "isAjax": false
            }, 
            "moduleId": "favmanager"
        }, 
        {
            "instanceId": "98965464", 
            "type": "login", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Login", 
            "services": [
                "wallets", 
                "exchange-reporting"
            ], 
            "config": {
                "loggedIn": false, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "sec": "login"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "a, input, button", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "showMessagingInfo": false, 
                "displayTransfer": true, 
                "forgotUserAndPassword": true, 
                "displayLatestPrices": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "tennisLivescores": false, 
                "logoutRedirectUrl": "https://www.betfair.com/exchange", 
                "container": true, 
                "forgotUserNameUrl": "https://identitysso.betfair.com/view/recoverusername", 
                "transferLinkUrl": "https://accountservices.betfair.com/myaccount/wallet/TransferView.do?sizeX=520&sizeY=520", 
                "production": {
                    "ready": 0
                }, 
                "logoutUrl": "https://identitysso.betfair.com/api/logout", 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "loginUrl": "https://identitysso.betfair.com/api/login", 
                "cidOverridePresent": false, 
                "identitySSOLogin": true, 
                "requestId": "cf82fb00-f167-11e3-8f2e-001b21cd4c5c", 
                "gamesLogoutUrl": "//service.gamesportal.betfair.com/api/logout", 
                "freeBetsLinkUrl": "https://myaccount.betfair.com/account/home?tabID=17", 
                "productName": "exchange", 
                "ajax": {
                    "enabled": false
                }, 
                "sessionTimeout": false, 
                "disableTransfer": false, 
                "isInternalIP": false, 
                "helpOpeningAccountLink": "http://www.betfair.com/help/Help.Opening.Account/", 
                "info": {
                    "enabled": null
                }, 
                "exchangeGamesLogoutUrl": "//site.games.betfair.com/account/login/GamesLogoutAction.do", 
                "gamesLogoutEnabled": true, 
                "loginRedirectUrl": "https://www.betfair.com/exchange", 
                "displayJoinNow": true, 
                "freeBetsLinkVisible": false, 
                "debug": {
                    "enabled": 0
                }, 
                "displayIndividualWallets": true, 
                "requires": {
                    "css": [], 
                    "js": []
                }
            }, 
            "moduleId": "login"
        }, 
        {
            "instanceId": "98965459", 
            "type": "livevideo", 
            "translations": {
                "USERPREFERENCES.LIVEVIDEOINFO": "You can bring back Live Video in your {0}Display Options{1}", 
                "FMP.PERIOD.STALE": "In-Play", 
                "FMP.PERIOD.FULLTIME": "FT", 
                "FMP.PERIOD.HALFTIME": "HT"
            }, 
            "modules": [], 
            "constructor": "Livevideo", 
            "services": [], 
            "config": {
                "loggedIn": false, 
                "competitionName": null, 
                "sportName": "SOCCER", 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "M": "LiveVideo"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "a", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "expandedByDefault": true, 
                "fullScheduleUrl": "//livevideo.betfair.com/", 
                "sportId": 1, 
                "pushEnabledSports": [
                    "1"
                ], 
                "tennisLivescores": false, 
                "sport": "SOCCER", 
                "container": true, 
                "dataVisPlayerHeight": 190, 
                "showHeader": true, 
                "dataVisUrlParams": "&contentOnly=true&statsToggle=hide", 
                "eventName": "Spain v Netherlands", 
                "production": {
                    "ready": 0
                }, 
                "dataVisualizationWithPopOutLink": false, 
                "autoPlayAllowed": true, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "playerHeight": 290, 
                "playerWidth": 334, 
                "srcNode": "#mod-livevideo-98965459", 
                "liveVideoUrl": "", 
                "optShowHideLiveVideo": false, 
                "enableGoogleAnalyticsDimensions": true, 
                "visibleState": "on", 
                "ajax": {
                    "enabled": false
                }, 
                "dataVisualizationUrl": "", 
                "articleId": "7244", 
                "dataVisualization": true, 
                "boundingBox": "#mod-livevideo-98965459-container", 
                "redesign": true, 
                "subDomain": "en", 
                "optAutoPlay": true, 
                "info": {
                    "enabled": null
                }, 
                "showFootballHeader": false, 
                "playerUrl": "https://videoplayer.betfair.com/GetPlayer.do?tr=1&eID=27113543&allowPopup=true&width=334&height=290&adjustWindow=false", 
                "liveVideoFooterUpdate": false, 
                "debug": {
                    "enabled": 1
                }, 
                "requires": {
                    "css": [
                        "livevideoredesign"
                    ], 
                    "js": [
                        "livevideo"
                    ]
                }, 
                "display": true
            }, 
            "moduleId": "livevideo"
        }, 
        {
            "instanceId": "98965460", 
            "type": "gaming-xsell-v2", 
            "translations": {}, 
            "modules": [], 
            "constructor": "GamingXSellV2", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-gaming-xsell-v2-98965460", 
                "container": true, 
                "loggedIn": false, 
                "imageBaseUrl": "//assets.cdnbf.net/ssw", 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "M": "XSell"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": ".tab a, .slide-container a, .promotionsWrapper a", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-gaming-xsell-v2-98965460-container", 
                "expanded": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "rememberCollapsedState": true, 
                "debug": {
                    "enabled": 0
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "isLoggedIn": false, 
                "defaultHeaderLevel": 2, 
                "helpFileUrl": "http://content-cache.betfair.com/minigames/content.asp?product=sports&sWhichKey=", 
                "requires": {
                    "css": [
                        "gaming-xsell-v2"
                    ], 
                    "js": [
                        "gaming-xsell-v2"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "gaming-xsell-v2"
        }, 
        {
            "instanceId": "98965461", 
            "type": "mediaplexbanner", 
            "translations": {}, 
            "modules": [], 
            "constructor": "MediaplexBanner", 
            "services": [], 
            "config": {
                "mediaplexWideBannerHeight": 160, 
                "loadElementsLater": true, 
                "loggedIn": false, 
                "mediaplexEnableJs": false, 
                "height": 130, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "mediaplexWideBannerId": "", 
                "mediaplexWideBannerWidth": 688, 
                "tennisLivescores": false, 
                "container": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "width": 336, 
                "production": {
                    "ready": 0
                }, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "isMediaplexInMiddleColumn": false, 
                "srcNode": "#mod-mediaplexbanner-98965461", 
                "ajax": {
                    "enabled": false
                }, 
                "boundingBox": "#mod-mediaplexbanner-98965461-container", 
                "mediaplexId": "7778-42351-16606-412", 
                "info": {
                    "enabled": null
                }, 
                "enabled": true, 
                "debug": {
                    "enabled": 1
                }, 
                "requires": {
                    "css": [
                        "mediaplexbanner"
                    ], 
                    "js": [
                        "mediaplexbanner"
                    ]
                }, 
                "isMediaplexWidget": false
            }, 
            "moduleId": "mediaplexbanner"
        }, 
        {
            "instanceId": "98965462", 
            "type": "forum", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Forum", 
            "services": [
                "transport"
            ], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-forum-98965462", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "M": "ForumChat"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "a", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-forum-98965462-container", 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": true
                }, 
                "production": {
                    "ready": 0
                }, 
                "tennisLivescores": false, 
                "expandedByDefault": false, 
                "defaultHeaderLevel": 2, 
                "reDesign": true, 
                "eventId": "27113543", 
                "requires": {
                    "css": [
                        "forumredesign"
                    ], 
                    "js": [
                        "forum"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "forum"
        }, 
        {
            "instanceId": "98965463", 
            "type": "miniplanner", 
            "translations": {
                "FMP.ABBR_HT": "HT", 
                "COUPON.PERIOD.HALFTIME": "HT", 
                "FMP.ABBR_PENS": "PENS", 
                "FMP.ELAPSED": "Elapsed {0}&prime;", 
                "FMP.ABBR_ET": "ET", 
                "FMP.ABBR_AET": "AET", 
                "COUPON.PERIOD.FULLTIME": "FT", 
                "FMP.ABBR_FT": "FT", 
                "FMP.INPLAY": "In-Play", 
                "FMP.STARTING.IN": "Starting in {0}&prime;"
            }, 
            "modules": [], 
            "constructor": "MiniPlanner", 
            "services": [
                "event-object", 
                "eventsInPlay"
            ], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-miniplanner-98965463", 
                "container": true, 
                "loggedIn": false, 
                "enableSportsbook": false, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "M": "NowNext"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "a", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "displayBook": "", 
                "periodicUpdates": {
                    "eventsInPlay": {
                        "keys": {
                            "default": [
                                1
                            ]
                        }
                    }
                }, 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": true
                }, 
                "production": {
                    "ready": 0
                }, 
                "boundingBox": "#mod-miniplanner-98965463-container", 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "reDesign": true, 
                "sportId": 1, 
                "registerServices": [
                    "eventsInPlay"
                ], 
                "requires": {
                    "css": [
                        "miniplannerredesign"
                    ], 
                    "js": [
                        "miniplanner"
                    ]
                }, 
                "trusted": 0, 
                "expandedPerDefault": true
            }, 
            "moduleId": "miniplanner"
        }, 
        {
            "instanceId": "98965433", 
            "type": "header", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "98965498", 
                    "type": "instantsearch-ebs", 
                    "translations": {}, 
                    "modules": [], 
                    "constructor": "InstantSearchEBS", 
                    "services": [
                        "search-ebs", 
                        "transport"
                    ], 
                    "config": {
                        "loggedIn": false, 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "P": "", 
                                    "Sp": "", 
                                    "sec": "Top"
                                }, 
                                "cfg": {
                                    "listenOn": "a, input"
                                }, 
                                "namespace": "i13n", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "sscintegration": true, 
                        "tennisLivescores": false, 
                        "container": true, 
                        "instantSearchEnabled": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "instance": "instantsearch-ebs", 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "searchTriggerThreshold": 3, 
                        "defaultHeaderLevel": 2, 
                        "srcNode": "#mod-instantsearch-ebs-98965498", 
                        "callDelay": 500, 
                        "labelClass": "label", 
                        "action": "/exchange/search", 
                        "ajax": {
                            "enabled": true
                        }, 
                        "boundingBox": "#mod-instantsearch-ebs-98965498-container", 
                        "isAjax": false, 
                        "info": {
                            "enabled": null
                        }, 
                        "debug": {
                            "enabled": 0
                        }, 
                        "requires": {
                            "css": [
                                "instantsearch-ebs"
                            ], 
                            "js": [
                                "instantsearch-ebs"
                            ]
                        }
                    }, 
                    "moduleId": "instantsearch-ebs"
                }, 
                {
                    "instanceId": "98965435", 
                    "type": "com-es-info", 
                    "translations": {}, 
                    "modules": [], 
                    "constructor": "Comesinfo", 
                    "services": [], 
                    "config": {
                        "info": {
                            "enabled": null
                        }, 
                        "redirectDomain": "betfair.com", 
                        "loggedIn": false, 
                        "container": true, 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": false, 
                                "bubbleToParent": false
                            }
                        }, 
                        "i13n": {
                            "listenOn": ".cancelButton", 
                            "enabled": true
                        }, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "spainRedirectNotification": false, 
                        "debug": {
                            "enabled": 0
                        }, 
                        "ajax": {
                            "enabled": false
                        }, 
                        "production": {
                            "ready": 0
                        }, 
                        "tennisLivescores": false, 
                        "defaultHeaderLevel": 2, 
                        "requires": {
                            "css": [
                                "com-es-info"
                            ], 
                            "js": [
                                "com-es-info", 
                                "page/js/oo_engine_c.js"
                            ]
                        }, 
                        "trusted": 0
                    }, 
                    "moduleId": "com-es-info"
                }
            ], 
            "constructor": "Header", 
            "services": [], 
            "config": {
                "domain": "betfair.com", 
                "loggedIn": false, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "sec": "header"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "#globalNavigation a.link", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "tennisLivescores": false, 
                "supportedRegions": [
                    "ASIA", 
                    "AUS_NZL", 
                    "GBR", 
                    "IRL", 
                    "NA", 
                    "ZAF"
                ], 
                "changeLocaleAction": "/exchange/changeLocale", 
                "container": true, 
                "instantSearchEnabled": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "production": {
                    "ready": 0
                }, 
                "defaultLocale": "en", 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-header-98965433", 
                "defaultRegion": "GBR", 
                "newHeader": true, 
                "ajax": {
                    "enabled": false
                }, 
                "boundingBox": "#mod-header-98965433-container", 
                "headerExperienceLink": true, 
                "info": {
                    "enabled": null
                }, 
                "language": "en", 
                "region": "GBR", 
                "footballPageUrl": "/exchange/football", 
                "debug": {
                    "enabled": 0
                }, 
                "requires": {
                    "css": [
                        "header"
                    ], 
                    "js": [
                        "header"
                    ]
                }, 
                "experienceCookie": true
            }, 
            "moduleId": "header"
        }, 
        {
            "instanceId": "98965436", 
            "type": "subnav", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "98965499", 
                    "type": "preferences", 
                    "translations": {}, 
                    "modules": [], 
                    "constructor": "Preferences", 
                    "services": [
                        "save-preferences"
                    ], 
                    "config": {
                        "loggedIn": false, 
                        "videoTutorialUrl": "//en.learning.betfair.com/app/answers/videos-home/a_id/11096/v/311", 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "listenOn": ".tag-i13n", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "enableLiquiditySlider": true, 
                        "thisPreferences": {
                            "displayMiniGames": true, 
                            "displayZoneVideo": true, 
                            "includeNetCommission": false, 
                            "autoPlay": true, 
                            "betslipPersistence": true, 
                            "marketViewDisplayType": "EXCHANGE", 
                            "flashUpdate": false, 
                            "displayProfitAndLoss": true, 
                            "fixedOddsSwitch": true, 
                            "displayMarketDepth": true, 
                            "displayLayPrices": true, 
                            "rollupLimit": 10, 
                            "includeSettledBets": false, 
                            "displayProjectedOdds": "NONE", 
                            "displayFutureProfitAndLoss": true, 
                            "displayStartingPrices": false
                        }, 
                        "tennisLivescores": false, 
                        "optOutVisible": false, 
                        "container": true, 
                        "preferences": {
                            "layColour": "RED", 
                            "displayRaceCardInfo": true, 
                            "autoRefresh": true, 
                            "marketViewDisplayType": "EXCHANGE", 
                            "showBetSummaryMessaging": true, 
                            "averageOdds": false, 
                            "consolidated": true, 
                            "rollupLimit": 0, 
                            "displayProjectedOdds": "NONE", 
                            "showRaceDetailsMouseOvers": true, 
                            "miniGamesEnabled": true, 
                            "uiView": "EXCHANGE", 
                            "displayZoneVideo": true, 
                            "includeNetCommission": false, 
                            "betslipPersistence": true, 
                            "displayStartingPrices": false, 
                            "userID": 0, 
                            "marketRefreshRate": 0, 
                            "preferenceGroupTitleStates": "PL1OO0HD0LM0SZ0PO1HR0CP0", 
                            "fixedOddsSwitch": true, 
                            "useFloatingBetSlip": true, 
                            "displayMyMarketsDefault": true, 
                            "displayLayPrices": true, 
                            "showDemoHelp": false, 
                            "showBspWarning": true, 
                            "includeSettledBets": false, 
                            "displayBetHelpTabDefault": false, 
                            "matchedBets": true, 
                            "priceTooltip": false, 
                            "singleClickBetting": false, 
                            "enhancedView": true, 
                            "displayMarketDepth": true, 
                            "displayMiniGames": true, 
                            "displayProfitAndLoss": true, 
                            "tournamentNavigation": true, 
                            "showMouseOverHelp": true, 
                            "displayBetStatusTitle": true, 
                            "percentageBook": false, 
                            "displayStakeLadder": false, 
                            "showHelp": true, 
                            "tournamentContent": true, 
                            "autoPlay": true, 
                            "displayFutureProfitAndLoss": true, 
                            "verifyBet": true, 
                            "betInfo": true, 
                            "liabilityView": "LIABILITY", 
                            "flashUpdate": false, 
                            "clusterUnmatchedBets": true, 
                            "couponStakeAmount4": 1000.0, 
                            "couponStakeAmount5": 5000.0, 
                            "couponStakeAmount2": 10.0, 
                            "couponStakeAmount3": 100.0, 
                            "couponStakeAmount1": 2.0, 
                            "displayLiveScores": true, 
                            "showFractionalOdds": true
                        }, 
                        "enableFractionalOddsTipsPref": false, 
                        "US54463": true, 
                        "slideRange": [
                            2, 
                            5, 
                            10, 
                            20, 
                            30, 
                            40, 
                            60, 
                            80, 
                            100
                        ], 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "hasCashoutMarketView": false, 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "displayFixedOddsPreference": true, 
                        "metadata": {
                            "preferences": {
                                "displayMiniGames": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "displayZoneVideo": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "includeNetCommission": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "autoPlay": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "betslipPersistence": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "marketViewDisplayType": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "flashUpdate": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "displayProfitAndLoss": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "fixedOddsSwitch": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "displayMarketDepth": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": true
                                }, 
                                "displayLayPrices": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": true
                                }, 
                                "rollupLimit": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "includeSettledBets": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "displayProjectedOdds": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": true
                                }, 
                                "displayFutureProfitAndLoss": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": false
                                }, 
                                "showFractionalOdds": {
                                    "refresh": true
                                }, 
                                "displayStartingPrices": {
                                    "refresh": true, 
                                    "availableForLoggedOutUsers": true
                                }
                            }
                        }, 
                        "displayStartingPricesPreference": true, 
                        "srcNode": "#mod-preferences-98965499", 
                        "enableFractionalOddsTips": true, 
                        "showModalPopup": false, 
                        "feedbackUrl": "https://betfair1.uservoice.com/forums/192891-general/suggestions/3762306-liquidity-slider", 
                        "ajax": {
                            "enabled": true
                        }, 
                        "boundingBox": "#mod-preferences-98965499-container", 
                        "info": {
                            "enabled": null
                        }, 
                        "displayHorseRacingModule": false, 
                        "enableSubNav": true, 
                        "showExperiencePreference": false, 
                        "displayInstantGamesModule": true, 
                        "debug": {
                            "enabled": 0
                        }, 
                        "requires": {
                            "css": [
                                "preferences"
                            ], 
                            "js": [
                                "preferences"
                            ]
                        }
                    }, 
                    "moduleId": "preferences"
                }
            ], 
            "constructor": "SubNav", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-subnav-98965436", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "enableSubNav": true, 
                "boundingBox": "#mod-subnav-98965436-container", 
                "pushEnabledSports": [
                    "1"
                ], 
                "optOutVisible": false, 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "production": {
                    "ready": 0
                }, 
                "loadPreferencesBetaOptOut": true, 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "requires": {
                    "css": [
                        "subnav"
                    ], 
                    "js": [
                        "subnav"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "subnav"
        }, 
        {
            "instanceId": "98965438", 
            "type": "tab-container", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "98965439", 
                    "type": "betslip", 
                    "translations": {
                        "BETSLIP.PROMOTIONS": "Use free bet:", 
                        "BETSLIP.BETSLIP_FULL_TITLE_E": "Maximum Selections Reached (Exchange Odds)", 
                        "BETSLIP.FIVEFOLD": "5 Folds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_NO_PROJECTED_ODDS": "You are betting {0}AGAINST{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.BETSLIP_FULL_TITLE_FS": "Maximum Selections Reached (Fixed Odds)", 
                        "BETSLIP.LOGIN_NEEDED_MSG": "Please log in below", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.PLACING_BETS_MESSAGE": "Placing bets", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED_MESSAGE": "Please Note: Stakes have not been entered for bets where the stake size is lower than the minimum of {0}{1}.", 
                        "DIALOG.OK": "OK", 
                        "BETSLIP.AT_IN_PLAY_KEEP": "Keep", 
                        "BETSLIP.PRICE_CHANGE_BODY": "The odds on {0} in {1} ({2}) have changed from {3} to {4}.", 
                        "BETSLIP.YOU_HAVE_NO_BETS": "You have no bets on this market", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_TITLE": "Multiples odds", 
                        "BETSLIP.PLEASE_CONFIRM_BETS": "Please confirm your bets.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "BETSLIP.ERR_ALL_STAKES_NEEDED": "Please stake all selections.", 
                        "BETSLIP.BACK": "Back (Bet For)", 
                        "BETSLIP.EDIT_BETS": "Edit bets", 
                        "BETSLIP.NOT_APPLICABLE_ACRONYM": "N/A", 
                        "BETSLIP.SHOW_PERCENTAGE_BOOK": "Show % Book", 
                        "BETSLIP.UPDATE_BUTTON": "Update", 
                        "BETSLIP.THIRTEENFOLD": "13 Folds", 
                        "BETSLIP.ERR_ODDS_NEEDED": "Please provide odds for at least one selection.", 
                        "BETSLIP.ERR_MIN_ODDS": "The minimum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.TO_BE_DETERMINED_ACRONYM": "TBD", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ALL_INFO": "At In-Play, all unmatched bets will be cancelled", 
                        "BETSLIP.BACKERS_STAKE": "Backer's stake", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_ODDS_LIMIT": "You are betting {0}FOR{1} {2}. At your minimum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.TRY_AGAIN": "Please click here to try again.", 
                        "BETSLIP.TWELVEFOLD": "12 Folds", 
                        "BETSLIP.STARTING_PRICE_ACRONYM": "SP", 
                        "BETSLIP.BET_PLACEMENT_PAUSE": "Placing bets in {0} second(s)", 
                        "BETSLIP.ACCOUNT_SUSPENDED_TITLE": "Your account has been suspended.", 
                        "BETSLIP.ERR_STAKE_TOO_HIGH": "One or more of your stakes exceeds the permitted maximum.", 
                        "BETSLIP.EIGHTEENFOLD": "18 Folds", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.BACK_WORD": "Back", 
                        "BETSLIP.ERR_BACK_GREATER_THAN_LAY": "Your back odds cannot be less than or the same as your lay odds for {0}, {1}, {2}.", 
                        "BETSLIP.TWENTYONEFOLD": "21 Folds", 
                        "BETSLIP.ERR_AUS_INSUFFICIENT_FUNDS": "You do not have sufficient available funds in the AUS Wallet to place this bet.", 
                        "BETSLIP.TWENTYTWOFOLD": "22 Folds", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_FIRST_PARAGRAPH": "The odds for Exchange bets are generally higher than for the same selections offered in Multiples.", 
                        "BETSLIP.YOUR_LIABILITY": "Your liability", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES": "Multiples odds may differ from Singles odds", 
                        "BETSLIP.LIABILITY": "Liability", 
                        "BETSLIP.TENFOLD": "10 Folds", 
                        "BETSLIP.ERR_STARTING_PRICE_NOT_AVAILABLE": "Starting price is not available.", 
                        "BETSLIP.MIN_PROFIT": "Min", 
                        "BETSLIP.MIN_ODDS": "Min Odds", 
                        "BETSLIP.ERR_MINIMUM_LAY_UPDATE": "The minimum change to a bet is 0.50\u20ac.", 
                        "BETSLIP.MAX_PAYOUT": "Max payout", 
                        "BETSLIP.ERR_MAX_WINNINGS": "The maximum winnings on a single bet must not exceed 10,000 Euros.", 
                        "BETSLIP.LAY_WORD": "Lay", 
                        "BETSLIP.PLACE_BETS_BUTTON": "Place bets", 
                        "BETSLIP.ERR_EXCHANGE_BANNED_JURISDICTION": "The following bet(s) could not be placed: Most likely this is due to you being located in a country where we currently can't offer our services. If you have questions please contact our Helpdesk at info@betfair.com.", 
                        "BETSLIP.UNKNOWN_BETS_TITLE": "There was a problem processing the following bet(s).", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ONE_INFO": "At In-Play, this unmatched bet will be kept", 
                        "BETSLIP.BETSLIP_FULL_MSG_FS": "You have reached the maximum number of selections for Fixed Odds. Please place your current Fixed Odds selections before adding any further ones. Alternatively you can remove some of your current selections first, and then add others.", 
                        "BETSLIP.ERR_MULTIPLE_OF": "The bet is accepted in multiples of \u20ac0.50.", 
                        "BETSLIP.BACKERS_ODDS": "Backer's odds", 
                        "BETSLIP.ERR_MAX_PAYOUT": "The maximum return from a single bet is 10.000\u20ac.", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_TITLE": "Selections not included in Multiples", 
                        "BETSLIP.UNKNOWN_BETS_TITLE_INFO": "Please go to {0}My Account > Current Bets{1} to check whether the bet(s) have been placed. Placement may take a few minutes.", 
                        "SPINNER.DECREMENT": "Decrement", 
                        "BETSLIP.PRICE_CHANGE_FOOTER": "Your odds have been updated accordingly.", 
                        "BETSLIP.MULTIPLE": "Multiple", 
                        "BETSLIP.MULTIPLES_TITLE": "Multiples", 
                        "BETSLIP.ERR_ACCOUNT_PENDING_AUTH": "Your account is suspended pending authorisation.", 
                        "BETSLIP.ELEVENFOLD": "11 Folds", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_HIGH": "Your Max Odds cannot be lower than the original limit you set.", 
                        "BETSLIP.BETREF": "Ref", 
                        "BETSLIP.GOLIATH": "Goliath", 
                        "BETSLIP.ERR_MAXIMUM_STAKE_WITH_AMOUNT": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.ERR_ACCOUNT_CLOSED": "Your account has been closed.", 
                        "BETSLIP.FOURFOLD": "4 Folds", 
                        "BETSLIP.ACCOUNT_SUSPENDED_MESSAGE": "You are able to change your account profile only. All other functionality has been disabled on your account.", 
                        "BETSLIP.ERR_REQUESTED_PRICE_NOT_AVAILABLE": "The Odds changed.", 
                        "BETSLIP.CONTINUE": "Continue", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ALL_INFO": "At In-Play, all unmatched bets will take SP", 
                        "BETSLIP.HEINZ": "Heinz", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY": "You are betting {0}AGAINST{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.EDIT_PERSISTENCE_ALL_BETS": "All bets", 
                        "BETSLIP.EACHWAY.CONFIRMATION.MESSAGE": "You are betting for {0} Each-Way. If {0} wins, the stake of {1} is returned to you together with a profit of {2} . If you lose, you lose your stake.", 
                        "BETSLIP.LUCKY_63": "Lucky 63", 
                        "BETSLIP.MAX_PROFIT": "Max", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP": "Take SP", 
                        "BETSLIP.LUCKY_15": "Lucky 15", 
                        "BETSLIP.PATENT": "Patent", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_ODDS_LIMIT": "You are betting {0}AGAINST{1} {2}. At your maximum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.ACCOUNT_SUSPENDED_CONTACT": "Please contact the Betfair helpdesk for more information (e-mail: info@betfair.com or telephone: 0844 871 0000 in the UK).", 
                        "BETSLIP.SIXTEENFOLD": "16 Folds", 
                        "BETSLIP.ERR_NOT_ENOUGH_SELECTIONS_FOR_MULTIPLES": "Please make two or more selections to create a Multiple.", 
                        "BETSLIP.ERR_STAKE_NEEDED": "Please stake at least one selection.", 
                        "BETSLIP.ERR_MAX_STAKE": "The maximum stake for a single bet is 10.000\u20ac.", 
                        "BETSLIP.ERR_REJECTED_BY_REGULATOR": "The regulator rejected the bet.", 
                        "BETSLIP.LIST_LOADING_MSG": "List is loading....", 
                        "BETSLIP.YANKEE": "Yankee", 
                        "BETSLIP.ERR_ACCOUNT_DUPLICATE_CARDS": "For reasons of financial security your account is suspended.", 
                        "BETSLIP.ERR_BETS_ABOVE_MAXIMUM_STAKE": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.GO_TO_MY_BETS": "Go to My Bets", 
                        "BETSLIP.ERR_INVALID_COUNTRY": "Users from your country of residence may not place this bet.", 
                        "BETSLIP.UNCOMBINABLE": "Some of your selections cannot be combined", 
                        "BETSLIP.ERR_CANCELLED_NOT_PLACED": "Your bet has been cancelled but the amended bet could not be placed.", 
                        "BETSLIP.SELECTION_WITHOUT_VAL": "Selection", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "BETSLIP.PRICES_CHANGED": "Please note that some of your odds have changed", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_SECOND_PARAGRAPH": "These include:{0}{1}Lay bets{2}{3}Bets on certain events{4}{5}Bets on certain markets{6}{7}Bets on certain selections (e.g. \"Any unquoted\"){8}{9}", 
                        "BETSLIP.PRICE_CHANGE_TITLE": "Updates to Betslip", 
                        "BETSLIP.ERR_MINIMUM_STAKE_WITH_AMOUNT": "The stake you have entered is below the minimum ({0}).", 
                        "BETSLIP.ERR_NO_SELECTIONS": "We experienced a problem loading your selections.", 
                        "BETSLIP.ERR_MIN_MAX_ODDS": "Odds between {0} and {1} must be in increments of {2}. Your odds have been updated accordingly.", 
                        "BETSLIP.SUPER_HEINZ": "Super Heinz", 
                        "BETSLIP.LIABILITY_WITH_VAL": "Liability: {0}", 
                        "SPINNER.INCREMENT": "Increment", 
                        "BETSLIP.RESET_BETSLIP": "Reset", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_SECOND_PARAGRAPH": "This is because Exchange bets are between Betfair customers and Multiples are placed with Betfair directly.", 
                        "BETSLIP.SELECTIONS_WITHOUT_VAL": "Selections:", 
                        "BETSLIP.INPLAY": "In-Play", 
                        "BETSLIP.PLEASE_SELECT": "Please select", 
                        "BETSLIP.ODDS": "Odds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_NO_PROJECTED_ODDS": "You are betting {0}FOR{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.PROMO_UNDER_VALUE": "You are not using your maximum free bet amount", 
                        "BETSLIP.ERR_OTHER_FAILURE": "Other issues in your betslip have prevented this from being placed.", 
                        "BETSLIP.BETSLIP_FULL_MSG_E": "You have reached the maximum number of selections for Exchange Odds. Please place your current Exchange selections before adding any further ones. Alternatively you can remove some of your current selections first, and then add others.", 
                        "BETSLIP.PROMO_UNDER_VALUE_POPUP_MSG": "The stake you have entered is less than the maximum amount for this free bet. We will use the stake you entered as the free bet stake.", 
                        "BETSLIP.STAKE": "Stake", 
                        "BETSLIP.TWENTYFOLD": "20 Folds", 
                        "MARKETVIEW.MARKET_TYPE.WIN": "WIN", 
                        "BETSLIP.MAX_LIABILITY": "Max liability", 
                        "BETSLIP.TRIXIE": "Trixie", 
                        "BETSLIP.ERR_BETS_BELOW_MINIMUM_STAKE": "The stake you have entered is below the minimum.", 
                        "BETSLIP.LAY_BET_EXPLANATION": "You are betting {0}against{1} {2}. If you win, your profit is the 'Backer's Stake' of {3}. The amount you stand to lose is 'Your Liability' of {4}.", 
                        "BETSLIP.MARKET_CLOSED": "Closed", 
                        "BETSLIP.DOUBLE": "Doubles", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ONE_INFO": "At In-Play, this unmatched bet will take SP", 
                        "BETSLIP.LAY_BET_SIMPLE_EXPLANATION": "The backer's stake is the amount you could win, your liability is the amount you could lose.", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ALL_INFO": "At In-Play, all unmatched bets will be kept", 
                        "BETSLIP.PROFIT": "Profit", 
                        "BETSLIP.SET_ODDS_LIMIT": "Odds limit", 
                        "BETSLIP.BETMATCHED": "Matched", 
                        "BETSLIP.SIXFOLD": "6 Folds", 
                        "BETSLIP.ERR_BACK_AND_LAY_SP": "Back and Lay SP bets on the same outcome are not allowed.", 
                        "BETSLIP.LUCKY_31": "Lucky 31", 
                        "BETSLIP.SEVENFOLD": "7 Folds", 
                        "BETSLIP.TREBLE": "Trebles", 
                        "BETSLIP.EDIT_PERSISTENCE_PER_BET": "Per bet", 
                        "BETSLIP.SP_SUBHEADER": "Odds and profit will show when event starts.", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_LOW": "Your Min Odds cannot be higher than the original limit you set.", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "BETSLIP.ERR_MAX_ODDS": "The maximum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.SELECTIONS_WITH_VAL": "Selections: {0}", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK": "You are betting {0}FOR{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.SEVENTEENFOLD": "17 Folds", 
                        "BETSLIP.ERR_INVALID_PROTECTION": "You have requested to be excluded from this area of the site.", 
                        "BETSLIP.NINETEENFOLD": "19 Folds", 
                        "BETSLIP.TWENTYFOURFOLD": "24 Folds", 
                        "BETSLIP.ERR_SUSPENDED_KYC": "Your account is suspended until we receive your personal identification information.", 
                        "BETSLIP.TWENTYFIVEFOLD": "25 Folds", 
                        "BETSLIP.LAY": "Lay (Bet Against)", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ONE_INFO": "At In-Play, this unmatched bet will be cancelled", 
                        "BETSLIP.FIFTEENFOLD": "15 Folds", 
                        "BETSLIP.TWENTYTHREEFOLD": "23 Folds", 
                        "BETSLIP.BACK_BET_EXPLANATION": "You are betting {0}for{1} {2}. If you win, the stake of {3} is returned to you together with a profit of {4}.  If you lose, you lose the stake.", 
                        "LOGIN.DEPOSIT.NOW": "Deposit Now", 
                        "BETSLIP.EACHWAY": "EW", 
                        "BETSLIP.ERR_NO_VALID_BETS": "You have no valid bets in your betslip", 
                        "BETSLIP.ERR_STAKE_TOO_LOW": "The stake(s) you have entered are below the minimum.", 
                        "BETSLIP.CANADIAN": "Canadian", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_CLOSED": "This market was closed at the time of bet submission.", 
                        "BETSLIP.RUNNER_REMOVED": "Removed selection", 
                        "BETSLIP.PROMO_UNDER_VALUE_POPUP_TITLE": "The free bet can only be used once on one bet", 
                        "BETSLIP.BETSLIP_EMPTY": "Make your selection(s) on the left by clicking on the odds.", 
                        "BETSLIP.ERR_MARKET_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.LOGIN_NEEDED_TITLE": "You are not logged in.", 
                        "BETSLIP.ERR_ACCOUNT_LOCK": "For security reasons your account has been locked.", 
                        "BETSLIP.AT_IN_PLAY": "At In-Play", 
                        "BETSLIP.EIGHTFOLD": "8 Folds", 
                        "BETSLIP.NOT_ELIGIBLE_FOR_MULTIPLES": "Some of your selections cannot be included in Multiples", 
                        "SPINNER.TOOLTIP": "Use the Up/Down arrow keys to increase/decrease the Odds.", 
                        "BETSLIP.ERR_BET_TAKEN_OR_LAPSED": "This bet may have lapsed or been matched.", 
                        "BETSLIP.AT_IN_PLAY_CANCEL": "Cancel", 
                        "BETSLIP.YOUR_PAYOUT": "Your payout", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED": "Some stakes not changed", 
                        "BETSLIP.STAKE_PER_BET": "Stake per bet", 
                        "BETSLIP.PARTIALLY_MATCHED": "Partially Matched", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_FIRST_PARAGRAPH": "Some selections are available for Singles, but not for Multiples.", 
                        "BETSLIP.NINEFOLD": "9 Folds", 
                        "BETSLIP.CONFIRM_BETS": "Confirm bets", 
                        "BETSLIP.MAX_ODDS": "Max Odds", 
                        "BETSLIP.FOURTEENFOLD": "14 Folds", 
                        "BETSLIP.COMMISSION_LINK": "A {0}commission{1} is charged on your net profit from each market.", 
                        "BETSLIP.PROMOTION_USED": "Free bet on {0}", 
                        "BETSLIP.MARKET_SUSPENDED": "Suspended", 
                        "BETSLIP.BET_PLACEMENT_WARNING": "Please wait whilst your bets are placed", 
                        "BETSLIP.BETSUBMITTED": "Submitted"
                    }, 
                    "modules": [], 
                    "constructor": "BetslipPotentialBets", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "potential-bets", 
                        "fixed-odds-betting", 
                        "exchange-transaction", 
                        "bets-persistence", 
                        "save-preferences"
                    ], 
                    "config": {
                        "loggedIn": false, 
                        "layMinimumUpdate": false, 
                        "srcNode": "#mod-betslip-98965439", 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [], 
                                    "2": [], 
                                    "924": []
                                }
                            }
                        }, 
                        "myAccountLink": "//accountservices.betfair.com/myaccount/account/MyAccount.do?tabID=6", 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "stakeIncrements50Cents": false, 
                        "showEmptyBetsMessage": true, 
                        "minimumBSPLayLiability": 10.0, 
                        "tennisLivescores": false, 
                        "commisionLink": "//www.betfair.com/en/aboutUs/Betfair.Charges/", 
                        "US42664": true, 
                        "container": true, 
                        "preferences": {
                            "verifyBet": true
                        }, 
                        "paneType": "potential-bets-pane", 
                        "US54463": true, 
                        "multipleOf": 0, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "enableGoogleAnalyticsDimensions": true, 
                        "production": {
                            "ready": 0
                        }, 
                        "italyMaxStake": false, 
                        "us40188": false, 
                        "trusted": 0, 
                        "enablePersistence": true, 
                        "defaultHeaderLevel": 2, 
                        "potentialBets": [], 
                        "betsLimit": 0, 
                        "eachwayEnabled": true, 
                        "templates": {
                            "selection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=2 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <label for=\"bet-odds-\">Odds</label> <span class=\"bf-spinner bf-spinner-content\"> <input tabindex=1 class=\"text odds\" type=\"text\" maxlength=\"6\" id=\"potential-bets--odds\" value=\"\" name=\"bet[][price]\" autocomplete=\"off\"> <button type=\"button\" class=\"bf-spinner-increment\" disabled=\"true\" tabindex=\"-1\"></button> <button type=\"button\" class=\"bf-spinner-decrement\" disabled=\"true\" tabindex=\"-1\"></button> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "group": "<tbody id=\"\" class=\"\" data-eventid=\"\" data-eventtypeid=\"\"> <tr class=\"event-name\"> <th colspan=\"5\"> <span class=\"event-name\"></span> </th> </tr> </tbody>", 
                            "persistenceEnabledMessage": "<p class=\"info-message betslip-persistence-enabled\">\nThe betslip currently remembers selections from previous pages. You can change this setting in your <a href=# class=display-options>Display Options</a>.\n    <button class=\"cta close-icon\">x</button>\n</p>\n", 
                            "section": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" colspan=\"2\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "fixedOddsSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=2 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"info-icon\"> <span class=\"hint\"> <div class=\"win-odds\">Win odds: <span class=\"price\"> </span> </div> <div class=\"place-odds\">Place odds: <span class=\"place-price\"></span></div> <div class=\"to-be-placed\">To be placed: <span class=\"number-of-places\"></span></div> <div class=\"min-stake\">Min stake: <span class=\"min-amount\"></span></div> <div class=\"max-stake\">Max stake: <span class=\"max-amount\"></span></div> </span> </span> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <span class=\"price\"> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "persistenceDisabledMessage": "<p class=\"info-message betslip-persistence-disabled\">\nThe betslip currently does not remembers selections from previous pages. You can change this setting in your <a href=# class=display-options>Display Options</a>.\n    <button class=\"cta close-icon\">x</button>\n</p>\n"
                        }, 
                        "us40199": false, 
                        "DE15418_1": false, 
                        "maxStake": 9999999, 
                        "minimumStake": 2.0, 
                        "enablePromotions": true, 
                        "maxWinnings": 0, 
                        "marketIds": null, 
                        "fsCssClass": "bet-FS", 
                        "ajax": {
                            "enabled": false
                        }, 
                        "tabKey": "BETSLIP.SINGLES_TITLE", 
                        "reportIfLoaded": false, 
                        "boundingBox": "#mod-betslip-98965439-container", 
                        "redesign": true, 
                        "analytics_config": {
                            "longCurrencySymbol": "GBP", 
                            "betslipTypeId": 16
                        }, 
                        "info": {
                            "enabled": null
                        }, 
                        "groupEventName": false, 
                        "syncUpdates": false, 
                        "name": "Place Bets", 
                        "fetchBetsAcrossAllChannels": false, 
                        "banned-jurisdiction": false, 
                        "hideTab": false, 
                        "experience": "exchange", 
                        "boundingBoxClass": "mod yui3-tab-panel-selected", 
                        "showPnLOnFMVReceipt": false, 
                        "debug": {
                            "enabled": 1
                        }, 
                        "orderOpenBets": false, 
                        "serverId": "", 
                        "requires": {
                            "css": [
                                "betslipredesign"
                            ], 
                            "js": [
                                "betslipapi"
                            ]
                        }
                    }, 
                    "moduleId": "potential-bets"
                }, 
                {
                    "instanceId": "98965440", 
                    "type": "betslip", 
                    "translations": {
                        "BETSLIP.PROMOTIONS": "Use free bet:", 
                        "BETSLIP.FIVEFOLD": "5 Folds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_NO_PROJECTED_ODDS": "You are betting {0}AGAINST{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.BET_PLACEMENT_WARNING": "Please wait whilst your bets are placed", 
                        "BETSLIP.LOGIN_NEEDED_MSG": "Please log in below", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.PLACING_BETS_MESSAGE": "Placing bets", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED_MESSAGE": "Please Note: Stakes have not been entered for bets where the stake size is lower than the minimum of {0}{1}.", 
                        "DIALOG.OK": "OK", 
                        "BETSLIP.AT_IN_PLAY_KEEP": "Keep", 
                        "BETSLIP.UNCOMBINABLE": "Some of your selections cannot be combined", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_TITLE": "Multiples odds", 
                        "BETSLIP.PLEASE_CONFIRM_BETS": "Please confirm your bets.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "BETSLIP.ERR_ALL_STAKES_NEEDED": "Please stake all selections.", 
                        "BETSLIP.BACK": "Back (Bet For)", 
                        "BETSLIP.EDIT_BETS": "Edit bets", 
                        "BETSLIP.STAKE": "Stake", 
                        "BETSLIP.ERR_BETS_ABOVE_MAXIMUM_STAKE": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.UPDATE_BUTTON": "Update", 
                        "BETSLIP.THIRTEENFOLD": "13 Folds", 
                        "BETSLIP.ERR_ODDS_NEEDED": "Please provide odds for at least one selection.", 
                        "BETSLIP.ERR_MIN_ODDS": "The minimum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.TO_BE_DETERMINED_ACRONYM": "TBD", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ALL_INFO": "At In-Play, all unmatched bets will be cancelled", 
                        "BETSLIP.BACKERS_STAKE": "Backer's stake", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_ODDS_LIMIT": "You are betting {0}FOR{1} {2}. At your minimum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.TRY_AGAIN": "Please click here to try again.", 
                        "BETSLIP.TWELVEFOLD": "12 Folds", 
                        "BETSLIP.STARTING_PRICE_ACRONYM": "SP", 
                        "BETSLIP.BET_PLACEMENT_PAUSE": "Placing bets in {0} second(s)", 
                        "BETSLIP.ACCOUNT_SUSPENDED_TITLE": "Your account has been suspended.", 
                        "BETSLIP.BETSLIP_EMPTY": "Make your selection(s) on the left by clicking on the odds.", 
                        "BETSLIP.EIGHTEENFOLD": "18 Folds", 
                        "BETSLIP.NOT_APPLICABLE_ACRONYM": "N/A", 
                        "BETSLIP.ERR_AUS_INSUFFICIENT_FUNDS": "You do not have sufficient available funds in the AUS Wallet to place this bet.", 
                        "BETSLIP.BACK_WORD": "Back", 
                        "BETSLIP.ERR_BACK_GREATER_THAN_LAY": "Your back odds cannot be less than or the same as your lay odds for {0}, {1}, {2}.", 
                        "BETSLIP.TWENTYONEFOLD": "21 Folds", 
                        "BETSLIP.ERR_NO_SELECTIONS": "We experienced a problem loading your selections.", 
                        "BETSLIP.TWENTYTWOFOLD": "22 Folds", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_FIRST_PARAGRAPH": "The odds for Exchange bets are generally higher than for the same selections offered in Multiples.", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_HIGH": "Your Max Odds cannot be lower than the original limit you set.", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES": "Multiples odds may differ from Singles odds", 
                        "BETSLIP.TWENTYFOURFOLD": "24 Folds", 
                        "BETSLIP.LIABILITY": "Liability", 
                        "BETSLIP.TENFOLD": "10 Folds", 
                        "BETSLIP.ERR_STARTING_PRICE_NOT_AVAILABLE": "Starting price is not available.", 
                        "BETSLIP.MIN_PROFIT": "Min", 
                        "BETSLIP.MIN_ODDS": "Min Odds", 
                        "BETSLIP.ERR_MINIMUM_LAY_UPDATE": "The minimum change to a bet is 0.50\u20ac.", 
                        "BETSLIP.MAX_PAYOUT": "Max payout", 
                        "BETSLIP.ERR_MAX_WINNINGS": "The maximum winnings on a single bet must not exceed 10,000 Euros.", 
                        "BETSLIP.LAY_WORD": "Lay", 
                        "BETSLIP.PLACE_BETS_BUTTON": "Place bets", 
                        "BETSLIP.ERR_EXCHANGE_BANNED_JURISDICTION": "The following bet(s) could not be placed: Most likely this is due to you being located in a country where we currently can't offer our services. If you have questions please contact our Helpdesk at info@betfair.com.", 
                        "BETSLIP.PROMO_UNDER_VALUE_POPUP_MSG": "The stake you have entered is less than the maximum amount for this free bet. We will use the stake you entered as the free bet stake.", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ONE_INFO": "At In-Play, this unmatched bet will be kept", 
                        "BETSLIP.ERR_MULTIPLE_OF": "The bet is accepted in multiples of \u20ac0.50.", 
                        "BETSLIP.YOU_HAVE_NO_BETS": "You have no bets on this market", 
                        "BETSLIP.NOT_ELIGIBLE_FOR_MULTIPLES": "Some of your selections cannot be included in Multiples", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_TITLE": "Selections not included in Multiples", 
                        "BETSLIP.UNKNOWN_BETS_TITLE_INFO": "Please go to {0}My Account > Current Bets{1} to check whether the bet(s) have been placed. Placement may take a few minutes.", 
                        "SPINNER.DECREMENT": "Decrement", 
                        "BETSLIP.PRICE_CHANGE_FOOTER": "Your odds have been updated accordingly.", 
                        "BETSLIP.MULTIPLE": "Multiple", 
                        "BETSLIP.MULTIPLES_TITLE": "Multiples", 
                        "BETSLIP.ERR_ACCOUNT_PENDING_AUTH": "Your account is suspended pending authorisation.", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.YOUR_LIABILITY": "Your liability", 
                        "BETSLIP.BETREF": "Ref", 
                        "BETSLIP.GOLIATH": "Goliath", 
                        "BETSLIP.ERR_MAXIMUM_STAKE_WITH_AMOUNT": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.ERR_ACCOUNT_CLOSED": "Your account has been closed.", 
                        "BETSLIP.FOURFOLD": "4 Folds", 
                        "BETSLIP.ACCOUNT_SUSPENDED_MESSAGE": "You are able to change your account profile only. All other functionality has been disabled on your account.", 
                        "BETSLIP.ERR_REQUESTED_PRICE_NOT_AVAILABLE": "The Odds changed.", 
                        "BETSLIP.CONTINUE": "Continue", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ALL_INFO": "At In-Play, all unmatched bets will take SP", 
                        "BETSLIP.HEINZ": "Heinz", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY": "You are betting {0}AGAINST{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.EDIT_PERSISTENCE_ALL_BETS": "All bets", 
                        "BETSLIP.LUCKY_63": "Lucky 63", 
                        "BETSLIP.MAX_PROFIT": "Max", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP": "Take SP", 
                        "BETSLIP.LUCKY_15": "Lucky 15", 
                        "BETSLIP.PATENT": "Patent", 
                        "BETSLIP.SHOW_PERCENTAGE_BOOK": "Show % Book", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_ODDS_LIMIT": "You are betting {0}AGAINST{1} {2}. At your maximum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.ACCOUNT_SUSPENDED_CONTACT": "Please contact the Betfair helpdesk for more information (e-mail: info@betfair.com or telephone: 0844 871 0000 in the UK).", 
                        "BETSLIP.SIXTEENFOLD": "16 Folds", 
                        "BETSLIP.ERR_NOT_ENOUGH_SELECTIONS_FOR_MULTIPLES": "Please make two or more selections to create a Multiple.", 
                        "BETSLIP.ERR_NO_VALID_BETS": "You have no valid bets in your betslip", 
                        "BETSLIP.ERR_MAX_STAKE": "The maximum stake for a single bet is 10.000\u20ac.", 
                        "BETSLIP.ERR_REJECTED_BY_REGULATOR": "The regulator rejected the bet.", 
                        "BETSLIP.LIST_LOADING_MSG": "List is loading....", 
                        "BETSLIP.YANKEE": "Yankee", 
                        "BETSLIP.ERR_ACCOUNT_DUPLICATE_CARDS": "For reasons of financial security your account is suspended.", 
                        "BETSLIP.EACHWAY.CONFIRMATION.MESSAGE": "You are betting for {0} Each-Way. If {0} wins, the stake of {1} is returned to you together with a profit of {2} . If you lose, you lose your stake.", 
                        "BETSLIP.GO_TO_MY_BETS": "Go to My Bets", 
                        "BETSLIP.ERR_STAKE_NEEDED": "Please stake at least one selection.", 
                        "BETSLIP.ERR_INVALID_COUNTRY": "Users from your country of residence may not place this bet.", 
                        "BETSLIP.ERR_CANCELLED_NOT_PLACED": "Your bet has been cancelled but the amended bet could not be placed.", 
                        "BETSLIP.SELECTION_WITHOUT_VAL": "Selection", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "BETSLIP.PRICES_CHANGED": "Please note that some of your odds have changed", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_SECOND_PARAGRAPH": "These include:{0}{1}Lay bets{2}{3}Bets on certain events{4}{5}Bets on certain markets{6}{7}Bets on certain selections (e.g. \"Any unquoted\"){8}{9}", 
                        "BETSLIP.PRICE_CHANGE_TITLE": "Updates to Betslip", 
                        "BETSLIP.ERR_MINIMUM_STAKE_WITH_AMOUNT": "The stake you have entered is below the minimum ({0}).", 
                        "BETSLIP.ELEVENFOLD": "11 Folds", 
                        "BETSLIP.ERR_MIN_MAX_ODDS": "Odds between {0} and {1} must be in increments of {2}. Your odds have been updated accordingly.", 
                        "BETSLIP.SUPER_HEINZ": "Super Heinz", 
                        "BETSLIP.LIABILITY_WITH_VAL": "Liability: {0}", 
                        "SPINNER.INCREMENT": "Increment", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_SECOND_PARAGRAPH": "This is because Exchange bets are between Betfair customers and Multiples are placed with Betfair directly.", 
                        "BETSLIP.SELECTIONS_WITHOUT_VAL": "Selections:", 
                        "BETSLIP.INPLAY": "In-Play", 
                        "BETSLIP.PRICE_CHANGE_BODY": "The odds on {0} in {1} ({2}) have changed from {3} to {4}.", 
                        "BETSLIP.ODDS": "Odds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_NO_PROJECTED_ODDS": "You are betting {0}FOR{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.PROMO_UNDER_VALUE": "You are not using your maximum free bet amount", 
                        "BETSLIP.ERR_OTHER_FAILURE": "Other issues in your betslip have prevented this from being placed.", 
                        "BETSLIP.UNKNOWN_BETS_TITLE": "There was a problem processing the following bet(s).", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_FIRST_PARAGRAPH": "Some selections are available for Singles, but not for Multiples.", 
                        "BETSLIP.TWENTYFOLD": "20 Folds", 
                        "MARKETVIEW.MARKET_TYPE.WIN": "WIN", 
                        "BETSLIP.MAX_LIABILITY": "Max liability", 
                        "BETSLIP.TRIXIE": "Trixie", 
                        "BETSLIP.ERR_BETS_BELOW_MINIMUM_STAKE": "The stake you have entered is below the minimum.", 
                        "BETSLIP.LAY_BET_EXPLANATION": "You are betting {0}against{1} {2}. If you win, your profit is the 'Backer's Stake' of {3}. The amount you stand to lose is 'Your Liability' of {4}.", 
                        "BETSLIP.RESET_BETSLIP": "Reset", 
                        "BETSLIP.DOUBLE": "Doubles", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ONE_INFO": "At In-Play, this unmatched bet will take SP", 
                        "BETSLIP.LAY_BET_SIMPLE_EXPLANATION": "The backer's stake is the amount you could win, your liability is the amount you could lose.", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ALL_INFO": "At In-Play, all unmatched bets will be kept", 
                        "BETSLIP.PROFIT": "Profit", 
                        "BETSLIP.SET_ODDS_LIMIT": "Odds limit", 
                        "BETSLIP.BETMATCHED": "Matched", 
                        "BETSLIP.SIXFOLD": "6 Folds", 
                        "BETSLIP.ERR_BACK_AND_LAY_SP": "Back and Lay SP bets on the same outcome are not allowed.", 
                        "BETSLIP.LUCKY_31": "Lucky 31", 
                        "BETSLIP.SEVENFOLD": "7 Folds", 
                        "BETSLIP.TREBLE": "Trebles", 
                        "BETSLIP.PLEASE_SELECT": "Please select", 
                        "BETSLIP.EDIT_PERSISTENCE_PER_BET": "Per bet", 
                        "BETSLIP.SP_SUBHEADER": "Odds and profit will show when event starts.", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_LOW": "Your Min Odds cannot be higher than the original limit you set.", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "BETSLIP.ERR_MAX_ODDS": "The maximum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.SELECTIONS_WITH_VAL": "Selections: {0}", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK": "You are betting {0}FOR{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.SEVENTEENFOLD": "17 Folds", 
                        "BETSLIP.ERR_INVALID_PROTECTION": "You have requested to be excluded from this area of the site.", 
                        "BETSLIP.NINETEENFOLD": "19 Folds", 
                        "BETSLIP.MARKET_CLOSED": "Closed", 
                        "BETSLIP.ERR_SUSPENDED_KYC": "Your account is suspended until we receive your personal identification information.", 
                        "BETSLIP.TWENTYFIVEFOLD": "25 Folds", 
                        "BETSLIP.LAY": "Lay (Bet Against)", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ONE_INFO": "At In-Play, this unmatched bet will be cancelled", 
                        "BETSLIP.FIFTEENFOLD": "15 Folds", 
                        "BETSLIP.TWENTYTHREEFOLD": "23 Folds", 
                        "BETSLIP.BACK_BET_EXPLANATION": "You are betting {0}for{1} {2}. If you win, the stake of {3} is returned to you together with a profit of {4}.  If you lose, you lose the stake.", 
                        "LOGIN.DEPOSIT.NOW": "Deposit Now", 
                        "BETSLIP.EACHWAY": "EW", 
                        "BETSLIP.ERR_STAKE_TOO_LOW": "The stake(s) you have entered are below the minimum.", 
                        "BETSLIP.CANADIAN": "Canadian", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_CLOSED": "This market was closed at the time of bet submission.", 
                        "BETSLIP.RUNNER_REMOVED": "Removed selection", 
                        "BETSLIP.PROMO_UNDER_VALUE_POPUP_TITLE": "The free bet can only be used once on one bet", 
                        "BETSLIP.ERR_STAKE_TOO_HIGH": "One or more of your stakes exceeds the permitted maximum.", 
                        "BETSLIP.BACKERS_ODDS": "Backer's odds", 
                        "BETSLIP.ERR_MARKET_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.LOGIN_NEEDED_TITLE": "You are not logged in.", 
                        "BETSLIP.ERR_ACCOUNT_LOCK": "For security reasons your account has been locked.", 
                        "BETSLIP.AT_IN_PLAY": "At In-Play", 
                        "BETSLIP.EIGHTFOLD": "8 Folds", 
                        "BETSLIP.ERR_MAX_PAYOUT": "The maximum return from a single bet is 10.000\u20ac.", 
                        "SPINNER.TOOLTIP": "Use the Up/Down arrow keys to increase/decrease the Odds.", 
                        "BETSLIP.ERR_BET_TAKEN_OR_LAPSED": "This bet may have lapsed or been matched.", 
                        "BETSLIP.AT_IN_PLAY_CANCEL": "Cancel", 
                        "BETSLIP.YOUR_PAYOUT": "Your payout", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED": "Some stakes not changed", 
                        "BETSLIP.STAKE_PER_BET": "Stake per bet", 
                        "BETSLIP.PARTIALLY_MATCHED": "Partially Matched", 
                        "BETSLIP.NINEFOLD": "9 Folds", 
                        "BETSLIP.CONFIRM_BETS": "Confirm bets", 
                        "BETSLIP.MAX_ODDS": "Max Odds", 
                        "BETSLIP.FOURTEENFOLD": "14 Folds", 
                        "BETSLIP.COMMISSION_LINK": "A {0}commission{1} is charged on your net profit from each market.", 
                        "BETSLIP.PROMOTION_USED": "Free bet on {0}", 
                        "BETSLIP.MARKET_SUSPENDED": "Suspended", 
                        "BETSLIP.BETSUBMITTED": "Submitted"
                    }, 
                    "modules": [], 
                    "constructor": "BetslipMultiplesBets", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "potential-bets", 
                        "multiples-bets", 
                        "fixed-odds-betting"
                    ], 
                    "config": {
                        "loggedIn": false, 
                        "layMinimumUpdate": false, 
                        "srcNode": "#mod-betslip-98965440", 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [], 
                                    "2": [], 
                                    "924": []
                                }
                            }
                        }, 
                        "myAccountLink": "//accountservices.betfair.com/myaccount/account/MyAccount.do?tabID=6", 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "stakeIncrements50Cents": false, 
                        "showEmptyBetsMessage": true, 
                        "minimumBSPLayLiability": 10.0, 
                        "tennisLivescores": false, 
                        "commisionLink": "//www.betfair.com/en/aboutUs/Betfair.Charges/", 
                        "US42664": true, 
                        "container": true, 
                        "preferences": {
                            "verifyBet": true
                        }, 
                        "paneType": "bets-pane", 
                        "US54463": true, 
                        "multipleOf": 0, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "enableGoogleAnalyticsDimensions": true, 
                        "production": {
                            "ready": 0
                        }, 
                        "italyMaxStake": false, 
                        "us40188": false, 
                        "trusted": 0, 
                        "enablePersistence": true, 
                        "defaultHeaderLevel": 2, 
                        "betsLimit": 0, 
                        "eachwayEnabled": true, 
                        "templates": {
                            "exchangeSection": "<table class=\"selections\" cellspacing=\"0\">\n    <colgroup span=\"1\" class=\"delete\"></colgroup>\n    <colgroup span=\"1\" class=\"runner\"></colgroup>\n    <colgroup span=\"1\" class=\"odds\"></colgroup>\n    <colgroup span=\"1\" class=\"multiples\"></colgroup>\n    <thead>\n        <tr>\n            <th scope=\"col\" class=\"delete\">Remove</th>\n            <th scope=\"col\" class=\"runner\">Selections</th>\n            <th scope=\"col\" class=\"odds\">Odds</th>\n            <th scope=\"col\" class=\"multiples\">Include in Multiples</th>\n        </tr>\n    </thead>\n\n</table>\n", 
                            "multiplesSection": "<table class=\"multiples\" cellspacing=\"0\">\n    <colgroup span=\"1\" class=\"runner\"></colgroup>\n    <colgroup span=\"1\" class=\"stake\"></colgroup>\n    <colgroup span=\"1\" class=\"profit\"></colgroup>\n    <thead>\n        <tr>\n            <th scope=\"col\" class=\"runner\"><span>Multiples</span></th>\n            <th scope=\"col\" class=\"stake\">Stake per bet</th>\n            <th scope=\"col\" class=\"profit\">Estimated Profit</th>\n        </tr>\n    </thead>\n    <tbody>\n    </tbody>\n</table>\n", 
                            "event": "<tbody id=\"{DOM_ID}\" data-eventid=\"{EVENT_ID}\">\n    <tr class=\"event\">\n        <th colspan=\"3\" class=\"event-name\"><span class=\"event-name\">{EVENT_NAME}</span></th>\n        <th class=\"multiples\"></th>\n    </tr>\n</tbody>\n", 
                            "exchangeSelection": "\n\n\n<tr class='bet bet-FS'\n    id=\"{DOM_ID}\"\n    data-rendered=\"server\"\n    data-marketid=\"{MARKET_ID}\"\n    data-selid=\"{SELECTION_ID}\"\n    data-categorytype=\"{CATEGORY_TYPE}\"\n    data-handicap=\"{HANDICAP}\"\n    data-bettype=\"{BET_TYPE}\"\n    data-entryId=\"{ENTRY_ID}\"\n    data-version=\"{VERSION}\"\n    data-eventTypeId=\"{EVENT_TYPE_ID}\"\n    data-ismultipleseligible=\"true\"\n    data-originalodds=\"{ORIGINAL_ODDS}\"\n    data-fractionalodds=\"{FRACTIONAL_ODDS}\"\n    data-decimalodds=\"{DECIMAL_ODDS}\"\n    data-ismultiplesselected=\"{MULTIPLES_SELECTED}\"\n    data-ordertype=\"{ORDER_TYPE}\"\n    data-hashadpriceupdate=\"{HAS_HAD_PRICE_UPDATE}\"\n    data-eachway=\"{EACHWAY}\">\n    <td class=\"delete\">\n        <input type=\"button\" name=\"remove[{BET_ID}]\" value=\"Remove\">\n    </td>\n    <th scope=\"row\" class=\"runner\">\n        <span class=\"info-icon\">\n            <span class=\"hint\">\n                <div class=\"win-odds\">Win odds: \n                    <span class=\"price\">\n                        {ODDS}\n                    </span>\n                </div>\n                <div class=\"place-odds\">Place odds:  <span class=\"place-price\"></span></div>\n                <div class=\"to-be-placed\">To be placed:  <span class=\"number-of-places\"></span></div>\n            </span>\n        </span>\n        <span class=\"runner-name\">{RUNNER_NAME}</span>\n            <span class=\"market-name\">{MARKET_NAME}</span>\n    </th>\n        <td class=\"odds\"><span class=\"price\">\n                {FRACTIONAL_ODDS}\n        </span></td>\n    <td class=\"multiples\">\n        <label for=\"{DOM_ID}-multiple\">Include in Multiples</label>\n        <input type=\"checkbox\" id=\"{DOM_ID}-multiple\" name=\"multiple[{BET_ID}]\" {MULTIPLES_SELECTED_CHECKED_STRING}>\n    </td>\n</tr>\n", 
                            "multiplesSelection": "<tr class=\"bet\" id=\"{DOM_ID}\" data-id=\"{BET_ID}\">\n    <th scope=\"row\">\n        <span class=\"runner-name\">{RUNNER_NAME}</span>\n        {ODDS}\n    </th>\n    <td class=\"stake-cell\">\n        <span class=\"stake\">\n            <label for=\"{DOM_ID}-stake\">Stake</label>\n            <input type=\"text\" class=\"text stake\" id=\"{DOM_ID}-stake\" name=\"stake[{BET_ID}]\" value=\"{STAKE}\" maxlength=\"7\" autocomplete=\"off\">\n        </span>\n        <span class=\"eachway\">\n            <label for=\"bet-eachway-\">EW</label>\n            <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" />\n        </span>\n    </td>\n    <td class=\"profit\">\n        <div class=\"wrapper\">\n            <span class=\"profit-value\">{PROFIT}</span>\n        </div>\n    </td>\n</tr>\n"
                        }, 
                        "us40199": false, 
                        "DE15418_1": false, 
                        "maxStake": 9999999, 
                        "minimumStake": 2.0, 
                        "enablePromotions": true, 
                        "maxWinnings": 0, 
                        "marketIds": null, 
                        "fsCssClass": "bet-FS", 
                        "ajax": {
                            "enabled": false
                        }, 
                        "tabKey": "BETSLIP.MULTIPLES_TITLE", 
                        "reportIfLoaded": false, 
                        "boundingBox": "#mod-betslip-98965440-container", 
                        "redesign": true, 
                        "analytics_config": {
                            "longCurrencySymbol": "GBP", 
                            "betslipTypeId": 16
                        }, 
                        "info": {
                            "enabled": null
                        }, 
                        "groupEventName": false, 
                        "syncUpdates": false, 
                        "name": "Multiples", 
                        "fetchBetsAcrossAllChannels": false, 
                        "banned-jurisdiction": false, 
                        "hideTab": false, 
                        "experience": "exchange", 
                        "showPnLOnFMVReceipt": false, 
                        "debug": {
                            "enabled": 1
                        }, 
                        "orderOpenBets": false, 
                        "serverId": "", 
                        "requires": {
                            "css": [
                                "betslipredesign"
                            ], 
                            "js": [
                                "betslipapi"
                            ]
                        }
                    }, 
                    "moduleId": "multiples-bets"
                }, 
                {
                    "instanceId": "98965441", 
                    "type": "betslip", 
                    "translations": {
                        "BETSLIP.FIVEFOLD": "5 Folds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_NO_PROJECTED_ODDS": "You are betting {0}AGAINST{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.BET_PLACEMENT_WARNING": "Please wait whilst your bets are placed", 
                        "BETSLIP.LOGIN_NEEDED_MSG": "Please log in below", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.PLACING_BETS_MESSAGE": "Placing bets", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED_MESSAGE": "Please Note: Stakes have not been entered for bets where the stake size is lower than the minimum of {0}{1}.", 
                        "DIALOG.OK": "OK", 
                        "BETSLIP.AT_IN_PLAY_KEEP": "Keep", 
                        "BETSLIP.UNCOMBINABLE": "Some of your selections cannot be combined", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_TITLE": "Multiples odds", 
                        "BETSLIP.PLEASE_CONFIRM_BETS": "Please confirm your bets.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "BETSLIP.ERR_ALL_STAKES_NEEDED": "Please stake all selections.", 
                        "BETSLIP.BACK": "Back (Bet For)", 
                        "BETSLIP.EDIT_BETS": "Edit bets", 
                        "BETSLIP.STAKE": "Stake", 
                        "BETSLIP.ERR_BETS_ABOVE_MAXIMUM_STAKE": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.UPDATE_BUTTON": "Update", 
                        "BETSLIP.THIRTEENFOLD": "13 Folds", 
                        "BETSLIP.ERR_ODDS_NEEDED": "Please provide odds for at least one selection.", 
                        "BETSLIP.ERR_MIN_ODDS": "The minimum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.TO_BE_DETERMINED_ACRONYM": "TBD", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ALL_INFO": "At In-Play, all unmatched bets will be cancelled", 
                        "BETSLIP.BACKERS_STAKE": "Backer's stake", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_ODDS_LIMIT": "You are betting {0}FOR{1} {2}. At your minimum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.TRY_AGAIN": "Please click here to try again.", 
                        "BETSLIP.TWELVEFOLD": "12 Folds", 
                        "BETSLIP.STARTING_PRICE_ACRONYM": "SP", 
                        "BETSLIP.BET_PLACEMENT_PAUSE": "Placing bets in {0} second(s)", 
                        "BETSLIP.ACCOUNT_SUSPENDED_TITLE": "Your account has been suspended.", 
                        "BETSLIP.BETSLIP_EMPTY": "Make your selection(s) on the left by clicking on the odds.", 
                        "BETSLIP.EIGHTEENFOLD": "18 Folds", 
                        "BETSLIP.NOT_APPLICABLE_ACRONYM": "N/A", 
                        "BETSLIP.ERR_AUS_INSUFFICIENT_FUNDS": "You do not have sufficient available funds in the AUS Wallet to place this bet.", 
                        "BETSLIP.BACK_WORD": "Back", 
                        "BETSLIP.ERR_BACK_GREATER_THAN_LAY": "Your back odds cannot be less than or the same as your lay odds for {0}, {1}, {2}.", 
                        "BETSLIP.TWENTYONEFOLD": "21 Folds", 
                        "BETSLIP.ERR_NO_SELECTIONS": "We experienced a problem loading your selections.", 
                        "BETSLIP.TWENTYTWOFOLD": "22 Folds", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_FIRST_PARAGRAPH": "The odds for Exchange bets are generally higher than for the same selections offered in Multiples.", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_HIGH": "Your Max Odds cannot be lower than the original limit you set.", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES": "Multiples odds may differ from Singles odds", 
                        "BETSLIP.TWENTYFOURFOLD": "24 Folds", 
                        "BETSLIP.LIABILITY": "Liability", 
                        "BETSLIP.TENFOLD": "10 Folds", 
                        "BETSLIP.ERR_STARTING_PRICE_NOT_AVAILABLE": "Starting price is not available.", 
                        "BETSLIP.MIN_PROFIT": "Min", 
                        "BETSLIP.MIN_ODDS": "Min Odds", 
                        "BETSLIP.ERR_MINIMUM_LAY_UPDATE": "The minimum change to a bet is 0.50\u20ac.", 
                        "BETSLIP.MAX_PAYOUT": "Max payout", 
                        "BETSLIP.ERR_MAX_WINNINGS": "The maximum winnings on a single bet must not exceed 10,000 Euros.", 
                        "BETSLIP.LAY_WORD": "Lay", 
                        "BETSLIP.PLACE_BETS_BUTTON": "Place bets", 
                        "BETSLIP.ERR_EXCHANGE_BANNED_JURISDICTION": "The following bet(s) could not be placed: Most likely this is due to you being located in a country where we currently can't offer our services. If you have questions please contact our Helpdesk at info@betfair.com.", 
                        "BETSLIP.UNKNOWN_BETS_TITLE": "There was a problem processing the following bet(s).", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ONE_INFO": "At In-Play, this unmatched bet will be kept", 
                        "BETSLIP.ERR_MULTIPLE_OF": "The bet is accepted in multiples of \u20ac0.50.", 
                        "BETSLIP.YOU_HAVE_NO_BETS": "You have no bets on this market", 
                        "BETSLIP.NOT_ELIGIBLE_FOR_MULTIPLES": "Some of your selections cannot be included in Multiples", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_TITLE": "Selections not included in Multiples", 
                        "BETSLIP.UNKNOWN_BETS_TITLE_INFO": "Please go to {0}My Account > Current Bets{1} to check whether the bet(s) have been placed. Placement may take a few minutes.", 
                        "SPINNER.DECREMENT": "Decrement", 
                        "BETSLIP.PRICE_CHANGE_FOOTER": "Your odds have been updated accordingly.", 
                        "BETSLIP.MULTIPLE": "Multiple", 
                        "BETSLIP.MULTIPLES_TITLE": "Multiples", 
                        "BETSLIP.ERR_ACCOUNT_PENDING_AUTH": "Your account is suspended pending authorisation.", 
                        "BETSLIP.YOUR_LIABILITY": "Your liability", 
                        "BETSLIP.BETREF": "Ref", 
                        "BETSLIP.GOLIATH": "Goliath", 
                        "BETSLIP.ERR_MAXIMUM_STAKE_WITH_AMOUNT": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.ERR_ACCOUNT_CLOSED": "Your account has been closed.", 
                        "BETSLIP.FOURFOLD": "4 Folds", 
                        "BETSLIP.ACCOUNT_SUSPENDED_MESSAGE": "You are able to change your account profile only. All other functionality has been disabled on your account.", 
                        "BETSLIP.ERR_REQUESTED_PRICE_NOT_AVAILABLE": "The Odds changed.", 
                        "BETSLIP.CONTINUE": "Continue", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ALL_INFO": "At In-Play, all unmatched bets will take SP", 
                        "BETSLIP.HEINZ": "Heinz", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY": "You are betting {0}AGAINST{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.EDIT_PERSISTENCE_ALL_BETS": "All bets", 
                        "BETSLIP.LUCKY_63": "Lucky 63", 
                        "BETSLIP.MAX_PROFIT": "Max", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP": "Take SP", 
                        "BETSLIP.LUCKY_15": "Lucky 15", 
                        "BETSLIP.PATENT": "Patent", 
                        "BETSLIP.SHOW_PERCENTAGE_BOOK": "Show % Book", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_ODDS_LIMIT": "You are betting {0}AGAINST{1} {2}. At your maximum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.ACCOUNT_SUSPENDED_CONTACT": "Please contact the Betfair helpdesk for more information (e-mail: info@betfair.com or telephone: 0844 871 0000 in the UK).", 
                        "BETSLIP.SIXTEENFOLD": "16 Folds", 
                        "BETSLIP.ERR_NOT_ENOUGH_SELECTIONS_FOR_MULTIPLES": "Please make two or more selections to create a Multiple.", 
                        "BETSLIP.ERR_NO_VALID_BETS": "You have no valid bets in your betslip", 
                        "BETSLIP.ERR_MAX_STAKE": "The maximum stake for a single bet is 10.000\u20ac.", 
                        "BETSLIP.ERR_REJECTED_BY_REGULATOR": "The regulator rejected the bet.", 
                        "BETSLIP.LIST_LOADING_MSG": "List is loading....", 
                        "BETSLIP.YANKEE": "Yankee", 
                        "BETSLIP.ERR_ACCOUNT_DUPLICATE_CARDS": "For reasons of financial security your account is suspended.", 
                        "BETSLIP.EACHWAY.CONFIRMATION.MESSAGE": "You are betting for {0} Each-Way. If {0} wins, the stake of {1} is returned to you together with a profit of {2} . If you lose, you lose your stake.", 
                        "BETSLIP.GO_TO_MY_BETS": "Go to My Bets", 
                        "BETSLIP.ERR_STAKE_NEEDED": "Please stake at least one selection.", 
                        "BETSLIP.ERR_INVALID_COUNTRY": "Users from your country of residence may not place this bet.", 
                        "BETSLIP.ERR_CANCELLED_NOT_PLACED": "Your bet has been cancelled but the amended bet could not be placed.", 
                        "BETSLIP.SELECTION_WITHOUT_VAL": "Selection", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "BETSLIP.PRICES_CHANGED": "Please note that some of your odds have changed", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_SECOND_PARAGRAPH": "These include:{0}{1}Lay bets{2}{3}Bets on certain events{4}{5}Bets on certain markets{6}{7}Bets on certain selections (e.g. \"Any unquoted\"){8}{9}", 
                        "BETSLIP.PRICE_CHANGE_TITLE": "Updates to Betslip", 
                        "BETSLIP.ERR_MINIMUM_STAKE_WITH_AMOUNT": "The stake you have entered is below the minimum ({0}).", 
                        "BETSLIP.ELEVENFOLD": "11 Folds", 
                        "BETSLIP.ERR_MIN_MAX_ODDS": "Odds between {0} and {1} must be in increments of {2}. Your odds have been updated accordingly.", 
                        "BETSLIP.SUPER_HEINZ": "Super Heinz", 
                        "BETSLIP.LIABILITY_WITH_VAL": "Liability: {0}", 
                        "SPINNER.INCREMENT": "Increment", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_SECOND_PARAGRAPH": "This is because Exchange bets are between Betfair customers and Multiples are placed with Betfair directly.", 
                        "BETSLIP.SELECTIONS_WITHOUT_VAL": "Selections:", 
                        "BETSLIP.INPLAY": "In-Play", 
                        "BETSLIP.PRICE_CHANGE_BODY": "The odds on {0} in {1} ({2}) have changed from {3} to {4}.", 
                        "BETSLIP.ODDS": "Odds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_NO_PROJECTED_ODDS": "You are betting {0}FOR{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_OTHER_FAILURE": "Other issues in your betslip have prevented this from being placed.", 
                        "BETSLIP.TWENTYFIVEFOLD": "25 Folds", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_FIRST_PARAGRAPH": "Some selections are available for Singles, but not for Multiples.", 
                        "BETSLIP.TWENTYFOLD": "20 Folds", 
                        "MARKETVIEW.MARKET_TYPE.WIN": "WIN", 
                        "BETSLIP.MAX_LIABILITY": "Max liability", 
                        "BETSLIP.TRIXIE": "Trixie", 
                        "BETSLIP.ERR_BETS_BELOW_MINIMUM_STAKE": "The stake you have entered is below the minimum.", 
                        "BETSLIP.LAY_BET_EXPLANATION": "You are betting {0}against{1} {2}. If you win, your profit is the 'Backer's Stake' of {3}. The amount you stand to lose is 'Your Liability' of {4}.", 
                        "BETSLIP.RESET_BETSLIP": "Reset", 
                        "BETSLIP.DOUBLE": "Doubles", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ONE_INFO": "At In-Play, this unmatched bet will take SP", 
                        "BETSLIP.LAY_BET_SIMPLE_EXPLANATION": "The backer's stake is the amount you could win, your liability is the amount you could lose.", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ALL_INFO": "At In-Play, all unmatched bets will be kept", 
                        "BETSLIP.PROFIT": "Profit", 
                        "BETSLIP.SET_ODDS_LIMIT": "Odds limit", 
                        "BETSLIP.BETMATCHED": "Matched", 
                        "BETSLIP.SIXFOLD": "6 Folds", 
                        "BETSLIP.ERR_BACK_AND_LAY_SP": "Back and Lay SP bets on the same outcome are not allowed.", 
                        "BETSLIP.LUCKY_31": "Lucky 31", 
                        "BETSLIP.SEVENFOLD": "7 Folds", 
                        "BETSLIP.TREBLE": "Trebles", 
                        "BETSLIP.EDIT_PERSISTENCE_PER_BET": "Per bet", 
                        "BETSLIP.SP_SUBHEADER": "Odds and profit will show when event starts.", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_LOW": "Your Min Odds cannot be higher than the original limit you set.", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "BETSLIP.ERR_MAX_ODDS": "The maximum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.SELECTIONS_WITH_VAL": "Selections: {0}", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK": "You are betting {0}FOR{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.SEVENTEENFOLD": "17 Folds", 
                        "BETSLIP.ERR_INVALID_PROTECTION": "You have requested to be excluded from this area of the site.", 
                        "BETSLIP.NINETEENFOLD": "19 Folds", 
                        "BETSLIP.MARKET_CLOSED": "Closed", 
                        "BETSLIP.ERR_SUSPENDED_KYC": "Your account is suspended until we receive your personal identification information.", 
                        "BETSLIP.LAY": "Lay (Bet Against)", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ONE_INFO": "At In-Play, this unmatched bet will be cancelled", 
                        "BETSLIP.FIFTEENFOLD": "15 Folds", 
                        "BETSLIP.TWENTYTHREEFOLD": "23 Folds", 
                        "BETSLIP.BACK_BET_EXPLANATION": "You are betting {0}for{1} {2}. If you win, the stake of {3} is returned to you together with a profit of {4}.  If you lose, you lose the stake.", 
                        "LOGIN.DEPOSIT.NOW": "Deposit Now", 
                        "BETSLIP.EACHWAY": "EW", 
                        "BETSLIP.ERR_STAKE_TOO_LOW": "The stake(s) you have entered are below the minimum.", 
                        "BETSLIP.CANADIAN": "Canadian", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_CLOSED": "This market was closed at the time of bet submission.", 
                        "BETSLIP.RUNNER_REMOVED": "Removed selection", 
                        "BETSLIP.ERR_STAKE_TOO_HIGH": "One or more of your stakes exceeds the permitted maximum.", 
                        "BETSLIP.BACKERS_ODDS": "Backer's odds", 
                        "BETSLIP.ERR_MARKET_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.LOGIN_NEEDED_TITLE": "You are not logged in.", 
                        "BETSLIP.ERR_ACCOUNT_LOCK": "For security reasons your account has been locked.", 
                        "BETSLIP.AT_IN_PLAY": "At In-Play", 
                        "BETSLIP.EIGHTFOLD": "8 Folds", 
                        "BETSLIP.ERR_MAX_PAYOUT": "The maximum return from a single bet is 10.000\u20ac.", 
                        "SPINNER.TOOLTIP": "Use the Up/Down arrow keys to increase/decrease the Odds.", 
                        "BETSLIP.ERR_BET_TAKEN_OR_LAPSED": "This bet may have lapsed or been matched.", 
                        "BETSLIP.AT_IN_PLAY_CANCEL": "Cancel", 
                        "BETSLIP.YOUR_PAYOUT": "Your payout", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED": "Some stakes not changed", 
                        "BETSLIP.STAKE_PER_BET": "Stake per bet", 
                        "BETSLIP.PARTIALLY_MATCHED": "Partially Matched", 
                        "BETSLIP.NINEFOLD": "9 Folds", 
                        "BETSLIP.CONFIRM_BETS": "Confirm bets", 
                        "BETSLIP.MAX_ODDS": "Max Odds", 
                        "BETSLIP.FOURTEENFOLD": "14 Folds", 
                        "BETSLIP.COMMISSION_LINK": "A {0}commission{1} is charged on your net profit from each market.", 
                        "BETSLIP.PROMOTION_USED": "Free bet on {0}", 
                        "BETSLIP.MARKET_SUSPENDED": "Suspended", 
                        "BETSLIP.BETSUBMITTED": "Submitted"
                    }, 
                    "modules": [], 
                    "constructor": "BetslipOpenBets", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "placed-bets", 
                        "save-preferences", 
                        "exchange-transaction", 
                        "exchange-reporting"
                    ], 
                    "config": {
                        "loggedIn": false, 
                        "layMinimumUpdate": false, 
                        "srcNode": "#mod-betslip-98965441", 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [], 
                                    "2": [], 
                                    "924": []
                                }
                            }
                        }, 
                        "myAccountLink": "//accountservices.betfair.com/myaccount/account/MyAccount.do?tabID=6", 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "stakeIncrements50Cents": false, 
                        "showEmptyBetsMessage": true, 
                        "minimumBSPLayLiability": 10.0, 
                        "maxStake": 9999999, 
                        "tennisLivescores": false, 
                        "commisionLink": "//www.betfair.com/en/aboutUs/Betfair.Charges/", 
                        "groupEventName": false, 
                        "US42664": true, 
                        "container": true, 
                        "preferences": {
                            "averageOdds": false, 
                            "consolidated": true, 
                            "betInfo": true
                        }, 
                        "paneType": "open-bets-pane", 
                        "US54463": true, 
                        "multipleOf": 0, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "enableGoogleAnalyticsDimensions": true, 
                        "production": {
                            "ready": 0
                        }, 
                        "italyMaxStake": false, 
                        "us40188": false, 
                        "trusted": 0, 
                        "enablePersistence": true, 
                        "defaultHeaderLevel": 2, 
                        "betsLimit": 0, 
                        "eachwayEnabled": true, 
                        "templates": {
                            "ineditableEvent": "<tbody id=\"sp\" class=\"\" data-eventid=\"\" data-eventtypeid=\"\"> <tr class=\"event-name\"> <th colspan=\"4\"> <span class=\"event-name\"></span> </th> </tr> </tbody>", 
                            "editableEvent": "<tbody id=\"sp\" class=\"\" data-eventid=\"\" data-eventtypeid=\"\"> <tr class=\"event-name\"> <th colspan=\"5\"> <span class=\"event-name\"></span> </th> </tr> </tbody>", 
                            "editableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" colspan=\"2\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "ineditableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <span class=\"price\"> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <span></span> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" disabled /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "sp": "<div class=\"header\"> <h3>Starting Price</h3> <p>Odds and profit will show when event starts.</p> </div> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>", 
                            "unmatched": "<h3 class=\"header\" id=\"m98965441-unmatched-title\"> <span class=\"title bold\"> Waiting (unmatched) </span> <div class=\"refreshButton\"></div> </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "ineditableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "loadingMessage": "<div>List is loading....</div>", 
                            "editableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=1 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <label for=\"bet-odds-\">Odds</label> <span class=\"bf-spinner bf-spinner-content\"> <input tabindex=1 class=\"text odds\" type=\"text\" maxlength=\"6\" id=\"potential-bets--odds\" value=\"\" name=\"bet[][price]\" autocomplete=\"off\"> <button type=\"button\" class=\"bf-spinner-increment\" disabled=\"true\" tabindex=\"-1\"></button> <button type=\"button\" class=\"bf-spinner-decrement\" disabled=\"true\" tabindex=\"-1\"></button> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "dropDownList": "<select> </select>", 
                            "matched": "<h3 class=\"header\"> <span>Placed (matched)</span> <label for=\"m98965441-orderMatchedByDate\">Order by Matched Date</label> <input tabindex=1 type=\"checkbox\" name=\"orderMatchedByDate\" value=\"1\" id=\"m98965441-orderMatchedByDate\" class=\"order-matched-by-date\" > </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>"
                        }, 
                        "us40199": false, 
                        "DE15418_1": false, 
                        "refreshButtonDelay": 5000, 
                        "minimumStake": 2.0, 
                        "enablePromotions": true, 
                        "maxWinnings": 0, 
                        "marketIds": null, 
                        "fsCssClass": "bet-FS", 
                        "ajax": {
                            "enabled": false
                        }, 
                        "tabKey": "BETSLIP.OPEN_BETS_TITLE", 
                        "reportIfLoaded": false, 
                        "betPreferences": true, 
                        "boundingBox": "#mod-betslip-98965441-container", 
                        "redesign": true, 
                        "analytics_config": {
                            "longCurrencySymbol": "GBP", 
                            "betslipTypeId": 16
                        }, 
                        "info": {
                            "enabled": null
                        }, 
                        "openBetsLimit": 200, 
                        "syncUpdates": false, 
                        "name": "Open Bets", 
                        "fetchBetsAcrossAllChannels": false, 
                        "banned-jurisdiction": false, 
                        "hideTab": false, 
                        "experience": "exchange", 
                        "showPnLOnFMVReceipt": false, 
                        "debug": {
                            "enabled": 1
                        }, 
                        "orderOpenBets": false, 
                        "serverId": "", 
                        "requires": {
                            "css": [
                                "betslipredesign"
                            ], 
                            "js": [
                                "betslipapi"
                            ]
                        }
                    }, 
                    "moduleId": "open-bets"
                }, 
                {
                    "instanceId": "98965442", 
                    "type": "betslip", 
                    "translations": {
                        "BETSLIP.PROMOTIONS": "Use free bet:", 
                        "BETSLIP.FIVEFOLD": "5 Folds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_NO_PROJECTED_ODDS": "You are betting {0}AGAINST{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.BET_PLACEMENT_WARNING": "Please wait whilst your bets are placed", 
                        "BETSLIP.LOGIN_NEEDED_MSG": "Please log in below", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.PLACING_BETS_MESSAGE": "Placing bets", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED_MESSAGE": "Please Note: Stakes have not been entered for bets where the stake size is lower than the minimum of {0}{1}.", 
                        "DIALOG.OK": "OK", 
                        "BETSLIP.AT_IN_PLAY_KEEP": "Keep", 
                        "BETSLIP.UNCOMBINABLE": "Some of your selections cannot be combined", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_TITLE": "Multiples odds", 
                        "BETSLIP.PLEASE_CONFIRM_BETS": "Please confirm your bets.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "BETSLIP.ERR_ALL_STAKES_NEEDED": "Please stake all selections.", 
                        "BETSLIP.BACK": "Back (Bet For)", 
                        "BETSLIP.EDIT_BETS": "Edit bets", 
                        "BETSLIP.STAKE": "Stake", 
                        "BETSLIP.ERR_BETS_ABOVE_MAXIMUM_STAKE": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.UPDATE_BUTTON": "Update", 
                        "BETSLIP.THIRTEENFOLD": "13 Folds", 
                        "BETSLIP.ERR_ODDS_NEEDED": "Please provide odds for at least one selection.", 
                        "BETSLIP.ERR_MIN_ODDS": "The minimum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.TO_BE_DETERMINED_ACRONYM": "TBD", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ALL_INFO": "At In-Play, all unmatched bets will be cancelled", 
                        "BETSLIP.BACKERS_STAKE": "Backer's stake", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_ODDS_LIMIT": "You are betting {0}FOR{1} {2}. At your minimum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.TRY_AGAIN": "Please click here to try again.", 
                        "BETSLIP.TWELVEFOLD": "12 Folds", 
                        "BETSLIP.STARTING_PRICE_ACRONYM": "SP", 
                        "BETSLIP.BET_PLACEMENT_PAUSE": "Placing bets in {0} second(s)", 
                        "BETSLIP.ACCOUNT_SUSPENDED_TITLE": "Your account has been suspended.", 
                        "BETSLIP.BETSLIP_EMPTY": "Make your selection(s) on the left by clicking on the odds.", 
                        "BETSLIP.EIGHTEENFOLD": "18 Folds", 
                        "BETSLIP.NOT_APPLICABLE_ACRONYM": "N/A", 
                        "BETSLIP.ERR_AUS_INSUFFICIENT_FUNDS": "You do not have sufficient available funds in the AUS Wallet to place this bet.", 
                        "BETSLIP.BACK_WORD": "Back", 
                        "BETSLIP.ERR_BACK_GREATER_THAN_LAY": "Your back odds cannot be less than or the same as your lay odds for {0}, {1}, {2}.", 
                        "BETSLIP.TWENTYONEFOLD": "21 Folds", 
                        "BETSLIP.ERR_NO_SELECTIONS": "We experienced a problem loading your selections.", 
                        "BETSLIP.TWENTYTWOFOLD": "22 Folds", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_FIRST_PARAGRAPH": "The odds for Exchange bets are generally higher than for the same selections offered in Multiples.", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_HIGH": "Your Max Odds cannot be lower than the original limit you set.", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES": "Multiples odds may differ from Singles odds", 
                        "BETSLIP.TWENTYFOURFOLD": "24 Folds", 
                        "BETSLIP.LIABILITY": "Liability", 
                        "BETSLIP.TENFOLD": "10 Folds", 
                        "BETSLIP.ERR_STARTING_PRICE_NOT_AVAILABLE": "Starting price is not available.", 
                        "BETSLIP.MIN_PROFIT": "Min", 
                        "BETSLIP.MIN_ODDS": "Min Odds", 
                        "BETSLIP.ERR_MINIMUM_LAY_UPDATE": "The minimum change to a bet is 0.50\u20ac.", 
                        "BETSLIP.MAX_PAYOUT": "Max payout", 
                        "BETSLIP.ERR_MAX_WINNINGS": "The maximum winnings on a single bet must not exceed 10,000 Euros.", 
                        "BETSLIP.LAY_WORD": "Lay", 
                        "BETSLIP.PLACE_BETS_BUTTON": "Place bets", 
                        "BETSLIP.ERR_EXCHANGE_BANNED_JURISDICTION": "The following bet(s) could not be placed: Most likely this is due to you being located in a country where we currently can't offer our services. If you have questions please contact our Helpdesk at info@betfair.com.", 
                        "BETSLIP.UNKNOWN_BETS_TITLE": "There was a problem processing the following bet(s).", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ONE_INFO": "At In-Play, this unmatched bet will be kept", 
                        "BETSLIP.ERR_MULTIPLE_OF": "The bet is accepted in multiples of \u20ac0.50.", 
                        "BETSLIP.YOU_HAVE_NO_BETS": "You have no bets on this market", 
                        "BETSLIP.NOT_ELIGIBLE_FOR_MULTIPLES": "Some of your selections cannot be included in Multiples", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_TITLE": "Selections not included in Multiples", 
                        "BETSLIP.UNKNOWN_BETS_TITLE_INFO": "Please go to {0}My Account > Current Bets{1} to check whether the bet(s) have been placed. Placement may take a few minutes.", 
                        "SPINNER.DECREMENT": "Decrement", 
                        "BETSLIP.PRICE_CHANGE_FOOTER": "Your odds have been updated accordingly.", 
                        "BETSLIP.MULTIPLE": "Multiple", 
                        "BETSLIP.MULTIPLES_TITLE": "Multiples", 
                        "BETSLIP.ERR_ACCOUNT_PENDING_AUTH": "Your account is suspended pending authorisation.", 
                        "BETSLIP.YOUR_LIABILITY": "Your liability", 
                        "BETSLIP.BETREF": "Ref", 
                        "BETSLIP.GOLIATH": "Goliath", 
                        "BETSLIP.ERR_MAXIMUM_STAKE_WITH_AMOUNT": "The stake exceeds the maximum for this selection.", 
                        "BETSLIP.ERR_ACCOUNT_CLOSED": "Your account has been closed.", 
                        "BETSLIP.FOURFOLD": "4 Folds", 
                        "BETSLIP.ACCOUNT_SUSPENDED_MESSAGE": "You are able to change your account profile only. All other functionality has been disabled on your account.", 
                        "BETSLIP.ERR_REQUESTED_PRICE_NOT_AVAILABLE": "The Odds changed.", 
                        "BETSLIP.CONTINUE": "Continue", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ALL_INFO": "At In-Play, all unmatched bets will take SP", 
                        "BETSLIP.HEINZ": "Heinz", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY": "You are betting {0}AGAINST{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.EDIT_PERSISTENCE_ALL_BETS": "All bets", 
                        "BETSLIP.LUCKY_63": "Lucky 63", 
                        "BETSLIP.MAX_PROFIT": "Max", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP": "Take SP", 
                        "BETSLIP.LUCKY_15": "Lucky 15", 
                        "BETSLIP.PATENT": "Patent", 
                        "BETSLIP.SHOW_PERCENTAGE_BOOK": "Show % Book", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_LAY_ODDS_LIMIT": "You are betting {0}AGAINST{1} {2}. At your maximum odds ({3}) your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.ACCOUNT_SUSPENDED_CONTACT": "Please contact the Betfair helpdesk for more information (e-mail: info@betfair.com or telephone: 0844 871 0000 in the UK).", 
                        "BETSLIP.SIXTEENFOLD": "16 Folds", 
                        "BETSLIP.ERR_NOT_ENOUGH_SELECTIONS_FOR_MULTIPLES": "Please make two or more selections to create a Multiple.", 
                        "BETSLIP.ERR_NO_VALID_BETS": "You have no valid bets in your betslip", 
                        "BETSLIP.ERR_MAX_STAKE": "The maximum stake for a single bet is 10.000\u20ac.", 
                        "BETSLIP.ERR_REJECTED_BY_REGULATOR": "The regulator rejected the bet.", 
                        "BETSLIP.LIST_LOADING_MSG": "List is loading....", 
                        "BETSLIP.YANKEE": "Yankee", 
                        "BETSLIP.ERR_ACCOUNT_DUPLICATE_CARDS": "For reasons of financial security your account is suspended.", 
                        "BETSLIP.EACHWAY.CONFIRMATION.MESSAGE": "You are betting for {0} Each-Way. If {0} wins, the stake of {1} is returned to you together with a profit of {2} . If you lose, you lose your stake.", 
                        "BETSLIP.GO_TO_MY_BETS": "Go to My Bets", 
                        "BETSLIP.ERR_STAKE_NEEDED": "Please stake at least one selection.", 
                        "BETSLIP.ERR_INVALID_COUNTRY": "Users from your country of residence may not place this bet.", 
                        "BETSLIP.ERR_CANCELLED_NOT_PLACED": "Your bet has been cancelled but the amended bet could not be placed.", 
                        "BETSLIP.SELECTION_WITHOUT_VAL": "Selection", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "BETSLIP.PRICES_CHANGED": "Please note that some of your odds have changed", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_SECOND_PARAGRAPH": "These include:{0}{1}Lay bets{2}{3}Bets on certain events{4}{5}Bets on certain markets{6}{7}Bets on certain selections (e.g. \"Any unquoted\"){8}{9}", 
                        "BETSLIP.PRICE_CHANGE_TITLE": "Updates to Betslip", 
                        "BETSLIP.ERR_MINIMUM_STAKE_WITH_AMOUNT": "The stake you have entered is below the minimum ({0}).", 
                        "BETSLIP.ELEVENFOLD": "11 Folds", 
                        "BETSLIP.ERR_MIN_MAX_ODDS": "Odds between {0} and {1} must be in increments of {2}. Your odds have been updated accordingly.", 
                        "BETSLIP.SUPER_HEINZ": "Super Heinz", 
                        "BETSLIP.LIABILITY_WITH_VAL": "Liability: {0}", 
                        "SPINNER.INCREMENT": "Increment", 
                        "BETSLIP.WARN_DIFFERENT_ODDS_FOR_MULTIPLES_POPUP_SECOND_PARAGRAPH": "This is because Exchange bets are between Betfair customers and Multiples are placed with Betfair directly.", 
                        "BETSLIP.SELECTIONS_WITHOUT_VAL": "Selections:", 
                        "BETSLIP.INPLAY": "In-Play", 
                        "BETSLIP.PRICE_CHANGE_BODY": "The odds on {0} in {1} ({2}) have changed from {3} to {4}.", 
                        "BETSLIP.ODDS": "Odds", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK_NO_PROJECTED_ODDS": "You are betting {0}FOR{1} {2}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_OTHER_FAILURE": "Other issues in your betslip have prevented this from being placed.", 
                        "BETSLIP.TWENTYFIVEFOLD": "25 Folds", 
                        "BETSLIP.WARN_MULTIPLES_UNELIGIBLE_POPUP_FIRST_PARAGRAPH": "Some selections are available for Singles, but not for Multiples.", 
                        "BETSLIP.TWENTYFOLD": "20 Folds", 
                        "MARKETVIEW.MARKET_TYPE.WIN": "WIN", 
                        "BETSLIP.MAX_LIABILITY": "Max liability", 
                        "BETSLIP.TRIXIE": "Trixie", 
                        "BETSLIP.ERR_BETS_BELOW_MINIMUM_STAKE": "The stake you have entered is below the minimum.", 
                        "BETSLIP.LAY_BET_EXPLANATION": "You are betting {0}against{1} {2}. If you win, your profit is the 'Backer's Stake' of {3}. The amount you stand to lose is 'Your Liability' of {4}.", 
                        "BETSLIP.RESET_BETSLIP": "Reset", 
                        "BETSLIP.DOUBLE": "Doubles", 
                        "BETSLIP.AT_IN_PLAY_TAKE_SP_ONE_INFO": "At In-Play, this unmatched bet will take SP", 
                        "BETSLIP.LAY_BET_SIMPLE_EXPLANATION": "The backer's stake is the amount you could win, your liability is the amount you could lose.", 
                        "BETSLIP.AT_IN_PLAY_KEEP_ALL_INFO": "At In-Play, all unmatched bets will be kept", 
                        "BETSLIP.PROFIT": "Profit", 
                        "BETSLIP.SET_ODDS_LIMIT": "Odds limit", 
                        "BETSLIP.BETMATCHED": "Matched", 
                        "BETSLIP.SIXFOLD": "6 Folds", 
                        "BETSLIP.ERR_BACK_AND_LAY_SP": "Back and Lay SP bets on the same outcome are not allowed.", 
                        "BETSLIP.LUCKY_31": "Lucky 31", 
                        "BETSLIP.SEVENFOLD": "7 Folds", 
                        "BETSLIP.TREBLE": "Trebles", 
                        "BETSLIP.PLEASE_SELECT": "Please select", 
                        "BETSLIP.EDIT_PERSISTENCE_PER_BET": "Per bet", 
                        "BETSLIP.SP_SUBHEADER": "Odds and profit will show when event starts.", 
                        "BETSLIP.STARTING_PRICE_ODDS_TOO_LOW": "Your Min Odds cannot be higher than the original limit you set.", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "BETSLIP.ERR_MAX_ODDS": "The maximum odds are {0}. Your odds have been updated accordingly.", 
                        "BETSLIP.SELECTIONS_WITH_VAL": "Selections: {0}", 
                        "BETSLIP.STARTING_PRICE_CONFIRM_BACK": "You are betting {0}FOR{1} {2}. At current projected odds ({3}), your profit would be {4}. The amount you stand to lose is {5}. The actual odds and profit will be calculated when the event starts.", 
                        "BETSLIP.SEVENTEENFOLD": "17 Folds", 
                        "BETSLIP.ERR_INVALID_PROTECTION": "You have requested to be excluded from this area of the site.", 
                        "BETSLIP.NINETEENFOLD": "19 Folds", 
                        "BETSLIP.MARKET_CLOSED": "Closed", 
                        "BETSLIP.ERR_SUSPENDED_KYC": "Your account is suspended until we receive your personal identification information.", 
                        "BETSLIP.LAY": "Lay (Bet Against)", 
                        "BETSLIP.AT_IN_PLAY_CANCEL_ONE_INFO": "At In-Play, this unmatched bet will be cancelled", 
                        "BETSLIP.FIFTEENFOLD": "15 Folds", 
                        "BETSLIP.TWENTYTHREEFOLD": "23 Folds", 
                        "BETSLIP.BACK_BET_EXPLANATION": "You are betting {0}for{1} {2}. If you win, the stake of {3} is returned to you together with a profit of {4}.  If you lose, you lose the stake.", 
                        "LOGIN.DEPOSIT.NOW": "Deposit Now", 
                        "BETSLIP.EACHWAY": "EW", 
                        "BETSLIP.ERR_STAKE_TOO_LOW": "The stake(s) you have entered are below the minimum.", 
                        "BETSLIP.CANADIAN": "Canadian", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING_CLOSED": "This market was closed at the time of bet submission.", 
                        "BETSLIP.RUNNER_REMOVED": "Removed selection", 
                        "BETSLIP.ERR_STAKE_TOO_HIGH": "One or more of your stakes exceeds the permitted maximum.", 
                        "BETSLIP.BACKERS_ODDS": "Backer's odds", 
                        "BETSLIP.ERR_MARKET_SUSPENDED": "This market was suspended at the time of bet submission.", 
                        "BETSLIP.LOGIN_NEEDED_TITLE": "You are not logged in.", 
                        "BETSLIP.ERR_ACCOUNT_LOCK": "For security reasons your account has been locked.", 
                        "BETSLIP.AT_IN_PLAY": "At In-Play", 
                        "BETSLIP.EIGHTFOLD": "8 Folds", 
                        "BETSLIP.ERR_MAX_PAYOUT": "The maximum return from a single bet is 10.000\u20ac.", 
                        "SPINNER.TOOLTIP": "Use the Up/Down arrow keys to increase/decrease the Odds.", 
                        "BETSLIP.ERR_BET_TAKEN_OR_LAPSED": "This bet may have lapsed or been matched.", 
                        "BETSLIP.AT_IN_PLAY_CANCEL": "Cancel", 
                        "BETSLIP.YOUR_PAYOUT": "Your payout", 
                        "BETSLIP.MAX_LIABILITY_SOME_STAKES_NOT_CHANGED": "Some stakes not changed", 
                        "BETSLIP.STAKE_PER_BET": "Stake per bet", 
                        "BETSLIP.PARTIALLY_MATCHED": "Partially Matched", 
                        "BETSLIP.NINEFOLD": "9 Folds", 
                        "BETSLIP.CONFIRM_BETS": "Confirm bets", 
                        "BETSLIP.MAX_ODDS": "Max Odds", 
                        "BETSLIP.FOURTEENFOLD": "14 Folds", 
                        "BETSLIP.COMMISSION_LINK": "A {0}commission{1} is charged on your net profit from each market.", 
                        "BETSLIP.PROMOTION_USED": "Free bet on {0}", 
                        "BETSLIP.MARKET_SUSPENDED": "Suspended", 
                        "BETSLIP.BETSUBMITTED": "Submitted"
                    }, 
                    "modules": [], 
                    "constructor": "BetslipBetReceipt", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "placed-bets", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "loggedIn": false, 
                        "layMinimumUpdate": false, 
                        "srcNode": "#mod-betslip-98965442", 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [], 
                                    "2": [], 
                                    "924": []
                                }
                            }
                        }, 
                        "myAccountLink": "//accountservices.betfair.com/myaccount/account/MyAccount.do?tabID=6", 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "stakeIncrements50Cents": false, 
                        "showEmptyBetsMessage": true, 
                        "minimumBSPLayLiability": 10.0, 
                        "tennisLivescores": false, 
                        "commisionLink": "//www.betfair.com/en/aboutUs/Betfair.Charges/", 
                        "US42664": true, 
                        "container": true, 
                        "paneType": "bet-receipt-pane", 
                        "US54463": true, 
                        "multipleOf": 0, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "enableGoogleAnalyticsDimensions": true, 
                        "production": {
                            "ready": 0
                        }, 
                        "italyMaxStake": false, 
                        "us40188": false, 
                        "trusted": 0, 
                        "enablePersistence": true, 
                        "defaultHeaderLevel": 2, 
                        "betsLimit": 0, 
                        "eachwayEnabled": true, 
                        "templates": {
                            "ineditableEvent": "<tbody id=\"sp\" class=\"\" data-eventid=\"\" data-eventtypeid=\"\"> <tr class=\"event-name\"> <th colspan=\"4\"> <span class=\"event-name\"></span> </th> </tr> </tbody>", 
                            "editableEvent": "<tbody id=\"sp\" class=\"\" data-eventid=\"\" data-eventtypeid=\"\"> <tr class=\"event-name\"> <th colspan=\"5\"> <span class=\"event-name\"></span> </th> </tr> </tbody>", 
                            "editableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" colspan=\"2\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "unknown": "<div class=\"header\"> <h3>There was a problem processing the following bet(s).</h3> <p>Please go to <a href=\"//accountservices.betfair.com/myaccount/account/MyAccount.do?tabID=6\" data-popup=\"height:600px,width:800px\">My Account > Current Bets</a> to check whether the bet(s) have been placed. Placement may take a few minutes.</p> </div> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>", 
                            "ineditableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <span class=\"price\"> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <span></span> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" disabled /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "sp": "<div class=\"header\"> <h3>Starting Price</h3> <p>Odds and profit will show when event starts.</p> </div> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>", 
                            "multiplesSelectionSection": "<table class=\"selections\" cellspacing=\"0\">\n    <colgroup span=\"1\" class=\"runner\"></colgroup>\n    <colgroup span=\"1\" class=\"odds\"></colgroup>\n    <thead>\n    <tr>\n        <th scope=\"col\" class=\"runner\">Selections</th>\n        <th scope=\"col\" class=\"odds\">Odds</th>\n    </tr>\n    </thead>\n</table>\n", 
                            "multiplesSinglesGroup": "    <tbody id=\"{DOM_ID}\" data-eventid=\"{EVENT_ID}\">\n    <tr class=\"event\">\n        <th class=\"event-name\">{EVENT_NAME}</th>\n        <th class=\"odds\"></th>\n    </tr>\n    </tbody>\n", 
                            "ineditableMultiplesSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "multiplesSinglesSelection": "<tr class=\"bet\" id=\"{DOM_ID}\" data-id=\"{ID}\">\n    <th scope=\"row\" class=\"runner\">\n        <span class=\"runner-name\"></span><span class=\"market-name\"></span>\n    </th>\n    <td class=\"odds\">{ODDS}</td>\n</tr>\n", 
                            "unmatched": "<h3 class=\"header\" id=\"m98965442-unmatched-title\"> <span class=\"title bold\"> Waiting (unmatched) </span> <div class=\"refreshButton\"></div> </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "unplaced": "<h3 class=\"header errorMessage\">The following bets could not be placed</h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>", 
                            "editableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=1 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <label for=\"bet-odds-\">Odds</label> <span class=\"bf-spinner bf-spinner-content\"> <input tabindex=1 class=\"text odds\" type=\"text\" maxlength=\"6\" id=\"potential-bets--odds\" value=\"\" name=\"bet[][price]\" autocomplete=\"off\"> <button type=\"button\" class=\"bf-spinner-increment\" disabled=\"true\" tabindex=\"-1\"></button> <button type=\"button\" class=\"bf-spinner-decrement\" disabled=\"true\" tabindex=\"-1\"></button> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "cancelled": "<h3 class=\"header errorMessage\">Cancelled</h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "ineditableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "ineditableMultiplesSelection": "<tr class=\"bet\" id=\"bet-\"> <th scope=\"row\" class=\"runner-name\"></th> <td class=\"stake-cell\"> <span class=\"stake\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" disabled /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\">\u00a30.00</span> </div> </td> </tr>\n", 
                            "matched": "<h3 class=\"header\"> <span>Placed (matched)</span> <label for=\"m98965442-orderMatchedByDate\">Order by Matched Date</label> <input tabindex=1 type=\"checkbox\" name=\"orderMatchedByDate\" value=\"1\" id=\"m98965442-orderMatchedByDate\" class=\"order-matched-by-date\" > </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>"
                        }, 
                        "us40199": false, 
                        "DE15418_1": false, 
                        "maxStake": 9999999, 
                        "minimumStake": 2.0, 
                        "enablePromotions": true, 
                        "maxWinnings": 0, 
                        "marketIds": null, 
                        "fsCssClass": "bet-FS", 
                        "ajax": {
                            "enabled": false
                        }, 
                        "tabKey": "", 
                        "reportIfLoaded": true, 
                        "boundingBox": "#mod-betslip-98965442-container", 
                        "redesign": true, 
                        "analytics_config": {
                            "longCurrencySymbol": "GBP", 
                            "betslipTypeId": 16
                        }, 
                        "info": {
                            "enabled": null
                        }, 
                        "groupEventName": false, 
                        "syncUpdates": false, 
                        "name": "Bet Receipt", 
                        "fetchBetsAcrossAllChannels": false, 
                        "banned-jurisdiction": false, 
                        "hideTab": true, 
                        "experience": "exchange", 
                        "showPnLOnFMVReceipt": false, 
                        "debug": {
                            "enabled": 1
                        }, 
                        "orderOpenBets": false, 
                        "serverId": "", 
                        "requires": {
                            "css": [
                                "betslipredesign"
                            ], 
                            "js": [
                                "betslipapi"
                            ]
                        }
                    }, 
                    "moduleId": "bet-receipt"
                }
            ], 
            "constructor": "TabContainer", 
            "services": [], 
            "config": {
                "collapsible": true, 
                "reportIfLoaded": false, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "listenOn": "a.betslipTab", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "loggedIn": false, 
                "titleKey": "BETSLIP.CONTAINER_TITLE", 
                "tennisLivescores": false, 
                "persistSelectedTab": true, 
                "container": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "production": {
                    "ready": 0
                }, 
                "trusted": 0, 
                "enablePersistence": true, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-tab-container-98965438", 
                "collapsed": true, 
                "ajax": {
                    "enabled": false
                }, 
                "highlightTabForEvent": {
                    "showOpenBets": 2, 
                    "betslipPlacingBets": 3, 
                    "showSinglesTab": 0, 
                    "betslipBetsTransacted": 3, 
                    "showMultiplesTab": 1, 
                    "betslipBetsAdded": {
                        "origin": "potential-bets", 
                        "exclude": 1, 
                        "target": 0
                    }
                }, 
                "boundingBox": "#mod-tab-container-98965438-container", 
                "info": {
                    "enabled": null
                }, 
                "tabWidth": "33.3%", 
                "debug": {
                    "enabled": 1
                }, 
                "requires": {
                    "css": [
                        "tab-container"
                    ], 
                    "js": [
                        "tab-container"
                    ]
                }
            }, 
            "moduleId": "betslip"
        }, 
        {
            "instanceId": "98965447", 
            "type": "google-analytics", 
            "translations": {}, 
            "modules": [], 
            "constructor": "", 
            "services": [], 
            "config": {
                "loggedIn": false, 
                "locale": "en_GB", 
                "jurisdiction": "INTERNATIONAL", 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "analyticsEnabled": true, 
                "sportId": 1, 
                "tennisLivescores": false, 
                "accountId": null, 
                "container": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "eventName": "Spain v Netherlands", 
                "production": {
                    "ready": 0
                }, 
                "marketName": null, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-google-analytics-98965447", 
                "sportName": "SOCCER", 
                "competitionName": null, 
                "enableGoogleAnalyticsDimensions": true, 
                "US65171": true, 
                "test_group": "ilp_sportshighlight|liquidity-slider", 
                "test_name": "ItalyLandingPage|liquidity-slider-cfg", 
                "boundingBox": "#mod-google-analytics-98965447-container", 
                "info": {
                    "enabled": null
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "experience": "EXCHANGE", 
                "bucket_id": 46, 
                "loginStatus": false, 
                "debug": {
                    "enabled": 1
                }, 
                "requires": {
                    "css": [
                        "google-analytics"
                    ]
                }
            }, 
            "moduleId": "google-analytics"
        }, 
        {
            "instanceId": "98965451", 
            "type": "starfavourites", 
            "translations": {
                "BETSLIP.LOGIN_NEEDED_MSG": "Please log in below", 
                "BETSLIP.LOGIN_NEEDED_TITLE": "You are not logged in.", 
                "DIALOG.OK": "OK", 
                "FAVOURITES.remove": "Remove", 
                "FAVOURITES.ADD": "Add"
            }, 
            "modules": [], 
            "constructor": "StarFavourites", 
            "services": [
                "transport"
            ], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-starfavourites-98965451", 
                "loggedIn": false, 
                "container": true, 
                "isCompetitionPage": false, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "raceConcept": false, 
                "lightboxToggle": false, 
                "pushEnabledSports": [
                    "1"
                ], 
                "debug": {
                    "enabled": 1
                }, 
                "ajax": {
                    "enabled": true
                }, 
                "production": {
                    "ready": 0
                }, 
                "boundingBox": "#mod-starfavourites-98965451-container", 
                "tennisLivescores": false, 
                "defaultHeaderLevel": 2, 
                "path": "/exchange/favourite/", 
                "showParentOptions": true, 
                "requires": {
                    "css": [
                        "starfavourites"
                    ], 
                    "js": [
                        "starfavourites"
                    ]
                }, 
                "trusted": 0
            }, 
            "moduleId": "starfavourites"
        }, 
        {
            "instanceId": "98965452", 
            "type": "matchheader", 
            "translations": {
                "FMP.ABBR_HT": "HT", 
                "FMP.STARTING.SOON": "Starting soon", 
                "FMP.FT": "FT", 
                "FMP.ABBR_PENS": "PENS", 
                "FMP.ELAPSED": "Elapsed {0}&prime;", 
                "FMP.ABBR_ET": "ET", 
                "FMP.ABBR_AET": "AET", 
                "FMP.ABBR_FT": "FT", 
                "FMP.INPLAY": "In-Play", 
                "FMP.STARTING.IN": "Starting in {0}&prime;"
            }, 
            "modules": [
                {
                    "instanceId": "98965500", 
                    "type": "timeline", 
                    "translations": {
                        "FMP.YELLOW.CARD": "Yellow card", 
                        "FMP.ABBR_HT": "HT", 
                        "FMP.RED.CARD": "Red card", 
                        "FMP.GOAL": "Goal"
                    }, 
                    "modules": [], 
                    "constructor": "FMPTimeline", 
                    "services": [
                        "event-object", 
                        "timeline"
                    ], 
                    "config": {
                        "info": {
                            "enabled": null
                        }, 
                        "srcNode": "#mod-timeline-98965500", 
                        "loggedIn": false, 
                        "container": true, 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": false, 
                                "bubbleToParent": false
                            }
                        }, 
                        "boundingBox": "#mod-timeline-98965500-container", 
                        "ajax": {
                            "enabled": false
                        }, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "debug": {
                            "enabled": 1
                        }, 
                        "toggle": "darker", 
                        "production": {
                            "ready": 0
                        }, 
                        "tennisLivescores": false, 
                        "dynamicMarketOrderingWithFootballGamesEvents": false, 
                        "defaultHeaderLevel": 2, 
                        "isSubModule": true, 
                        "registerServices": [
                            "timeline"
                        ], 
                        "requires": {
                            "css": [
                                "timelineredesign"
                            ], 
                            "js": [
                                "timeline"
                            ]
                        }, 
                        "trusted": 0
                    }, 
                    "moduleId": "timeline"
                }, 
                {
                    "instanceId": "98965501", 
                    "type": "headtohead", 
                    "translations": {}, 
                    "modules": [], 
                    "constructor": "FMPHeadToHead", 
                    "services": [], 
                    "config": {
                        "info": {
                            "enabled": null
                        }, 
                        "srcNode": "#mod-headtohead-98965501", 
                        "loggedIn": false, 
                        "container": true, 
                        "landingPageEventId": "0", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "M": "MPHeader"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "div.toggle-headtohead", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "boundingBox": "#mod-headtohead-98965501-container", 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "debug": {
                            "enabled": 1
                        }, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "production": {
                            "ready": 0
                        }, 
                        "deferredLoadingEnabled": true, 
                        "tennisLivescores": false, 
                        "defaultHeaderLevel": 2, 
                        "landingPageHeadToHead": false, 
                        "requires": {
                            "css": [
                                "headtohead"
                            ], 
                            "js": [
                                "headtohead"
                            ]
                        }, 
                        "displayType": "football", 
                        "trusted": 0
                    }, 
                    "moduleId": "headtohead"
                }
            ], 
            "constructor": "FMPMatchHeader", 
            "services": [
                "event-object", 
                "timeline"
            ], 
            "config": {
                "enableUpdates": true, 
                "loggedIn": false, 
                "noUppercase": false, 
                "displayTimeline": true, 
                "matchStatus": "Fri 13 Jun 9PM", 
                "periodicUpdates": {
                    "timeline": {
                        "keys": {
                            "default": [
                                "27113543"
                            ]
                        }
                    }
                }, 
                "isInplay": false, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "M": "MVhead"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": ".tag-i13n", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "plugins": {
                    "eventupdates": {
                        "registerServices": [
                            "timeline"
                        ]
                    }
                }, 
                "displayHeadToHead": false, 
                "registerServices": [
                    "timeline"
                ], 
                "tennisLivescores": false, 
                "showRaceInfo": false, 
                "showStartingInBlackList": "ANTEPOST_WIN,SPECIAL,DAILY_WIN_DIST,STEWARDS", 
                "pushEnabledSports": [
                    "1"
                ], 
                "displayType": "football", 
                "production": {
                    "ready": 0
                }, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-matchheader-98965452", 
                "showTimeElapsed": true, 
                "ajax": {
                    "enabled": false
                }, 
                "startTime": 1402686000000, 
                "boundingBox": "#mod-matchheader-98965452-container", 
                "container": true, 
                "landingPage": false, 
                "info": {
                    "enabled": null
                }, 
                "raceConcept": false, 
                "showStartingIn": true, 
                "debug": {
                    "enabled": 1
                }, 
                "requires": {
                    "css": [
                        "matchheaderredesign"
                    ], 
                    "js": [
                        "matchheader"
                    ]
                }
            }, 
            "moduleId": "matchheader"
        }, 
        {
            "instanceId": "98965455", 
            "type": "toggle", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Toggle", 
            "services": [], 
            "config": {
                "loggedIn": false, 
                "periodicUpdates": {
                    "markets": {
                        "keys": {
                            "1": []
                        }
                    }
                }, 
                "analytics": {
                    "i13n": {
                        "defaultKeys": {
                            "M": "SBtoggle"
                        }, 
                        "listenOn": ".intro a, .cta-fixed-odds a, .cta-exchange-view a, input", 
                        "namespace": "i13n", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "enableMarketViewViaAjax": true, 
                "tennisLivescores": false, 
                "container": true, 
                "toggleHasSubModule": false, 
                "pushEnabledSports": [
                    "1"
                ], 
                "production": {
                    "ready": 0
                }, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "templates": {
                    "infoMessage": "    <div class=\"module-wrapper info-message\">\n        You can bring back Multiples Toggle in your <a href=# class=fixed-odds-switch-display-options>Display Options</a>\n        <button class=\"info-message-close-button bf-close-icon clearfix\" title=\"Close\">Close</button>\n    </div>\n"
                }, 
                "srcNode": "#mod-toggle-98965455", 
                "ajax": {
                    "enabled": true
                }, 
                "boundingBox": "#mod-toggle-98965455-container", 
                "redesign": true, 
                "info": {
                    "enabled": null
                }, 
                "alwayShowToggle": false, 
                "cms": true, 
                "disableOnInplay": {
                    "eventId": "27113543"
                }, 
                "exp": "e", 
                "debug": {
                    "enabled": 0
                }, 
                "requires": {
                    "css": [
                        "toggleredesign"
                    ], 
                    "js": [
                        "toggle"
                    ]
                }, 
                "display": true
            }, 
            "moduleId": "toggle"
        }, 
        {
            "instanceId": "98965456", 
            "type": "marketgroups", 
            "translations": {
                "FMP.TAB.EMPTY": "There are no markets available"
            }, 
            "modules": [
                {
                    "instanceId": "98965502", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "MATCH_ODDS", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.112173612"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.112173612", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965502", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965502-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965503", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "OVER_UNDER_25", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.112173613"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.112173613", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965503", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965503-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965504", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "HALF_TIME", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436648"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436648", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965504", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965504-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965505", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "HALF_TIME_FULL_TIME", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436652"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436652", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965505", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965505-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965506", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "OVER_UNDER_35", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436637"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436637", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965506", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": true, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965506-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965507", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "PENALTY_TAKEN", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436669"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436669", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965507", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": true, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965507-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965508", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "OVER_UNDER_75", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436738"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436738", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965508", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": true, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965508-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965509", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "CORRECT_SCORE", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436647"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436647", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965509", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965509-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965510", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "OVER_UNDER_15", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436635"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436635", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965510", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965510-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965511", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "HALF_TIME_SCORE", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436651"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436651", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965511", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965511-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965512", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "NEXT_GOAL", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436656"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436656", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965512", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": false, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965512-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965513", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "OVER_UNDER_45", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436638"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436638", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965513", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": true, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965513-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965514", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "OVER_UNDER_05", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436737"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436737", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965514", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": true, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965514-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }, 
                {
                    "instanceId": "98965515", 
                    "type": "minimarketview", 
                    "translations": {
                        "FMP.CASH.OUT.PARTIALLY.ACCEPTED": "Cash out was partially accepted", 
                        "MARKETVIEW.STATUS.SUSPENDED": "Suspended", 
                        "BETSLIP.ERR_DEFAULT": "This may be a temporary problem. Please wait and try again.", 
                        "BETSLIP.ERR_INSUFFICIENT_FUNDS": "You do not have sufficient available funds to place these bets.", 
                        "FMP.CASH.OUT.UNSUCCESSFUL.ODDS": "Cash out was unsuccessful due to odds movement", 
                        "FMP.LIABILITY": "Your current liability", 
                        "FMP.CASH.OUT.UNSUCCESSFUL": "Cash out was unsuccessful", 
                        "MARKETVIEW.STATUS.OPEN": "??MARKETVIEW.STATUS.OPEN??", 
                        "BETSLIP.ERR_LOSS_LIMIT_EXCEEDED": "You have exceeded your loss limit.", 
                        "FMP.CASH.OUT.ACCEPTED": "Your cash out has been accepted", 
                        "FMP.TAKE.PROFIT": "Take {0}", 
                        "BETSLIP.ERR_MARKET_NOT_OPEN_FOR_BETTING": "This market was not open at the time of bet submission.", 
                        "FMP.SECONDS.REMAINING": "{0} seconds remaining ... ", 
                        "FMP.PROFIT.LOSS": "Profit/Loss", 
                        "MARKETVIEW.STATUS.CLOSED": "Closed"
                    }, 
                    "modules": [], 
                    "constructor": "MiniMarketView", 
                    "services": [
                        "market-object", 
                        "markets", 
                        "cashout-potential-bets", 
                        "potential-bets", 
                        "exchange-reporting", 
                        "exchange-transaction"
                    ], 
                    "config": {
                        "displayHours": true, 
                        "linearView": true, 
                        "marketType": "OVER_UNDER_85", 
                        "competitionName": null, 
                        "periodicUpdates": {
                            "markets": {
                                "keys": {
                                    "1": [
                                        "1.113436739"
                                    ]
                                }
                            }
                        }, 
                        "sportName": "SOCCER", 
                        "analytics": {
                            "i13n": {
                                "containerKeys": {
                                    "module": "Markets"
                                }, 
                                "namespace": "i13n", 
                                "listenOn": "span.rules-icon", 
                                "enabled": true, 
                                "bubbleToParent": false
                            }
                        }, 
                        "graphMiniMarketUrl": "", 
                        "loggedIn": false, 
                        "showChartIcon": true, 
                        "showRunnerPnl": true, 
                        "enableFractionalOddsTips": true, 
                        "moduleType": "minimarketview", 
                        "marketId": "1.113436739", 
                        "sportId": 1, 
                        "tennisLivescores": false, 
                        "includeNetCommission": false, 
                        "sport": "SOCCER", 
                        "allowExpand": true, 
                        "currencyCode": "GBP", 
                        "layColour": "RED", 
                        "enableFractionalOdds": true, 
                        "pushEnabledSports": [
                            "1"
                        ], 
                        "production": {
                            "ready": 0
                        }, 
                        "trusted": 0, 
                        "defaultHeaderLevel": 2, 
                        "showRunnerInformation": true, 
                        "gaModuleArea": "Main", 
                        "eachwayEnabled": false, 
                        "includeSettledBets": false, 
                        "srcNode": "#mod-minimarketview-98965515", 
                        "displayProfitAndLoss": true, 
                        "setTopMargin": false, 
                        "refreshButtonDelay": 0, 
                        "displayMultiplesIcon": true, 
                        "enableGoogleAnalyticsDimensions": true, 
                        "collapsed": true, 
                        "hasCashout": true, 
                        "discount": 0.0, 
                        "ajax": {
                            "enabled": true
                        }, 
                        "tabName": "Popular", 
                        "lazyLoad": true, 
                        "markupRendered": true, 
                        "boundingBox": "#mod-minimarketview-98965515-container", 
                        "container": true, 
                        "showFullMarketLink": true, 
                        "enableRefreshButton": true, 
                        "minStakeSize": 2.0, 
                        "displayFutureProfitAndLoss": true, 
                        "info": {
                            "enabled": null
                        }, 
                        "hasCashoutMiniMarketView": false, 
                        "halfView": true, 
                        "flashUpdate": false, 
                        "toggle": "darker", 
                        "deferRender": false, 
                        "willGoInPlay": true, 
                        "showLay": true, 
                        "exp": "e", 
                        "debug": {
                            "enabled": 1
                        }, 
                        "gaModuleName": "marketgroups", 
                        "showRulesIcon": true, 
                        "requires": {
                            "css": [
                                "minimarketviewredesign"
                            ], 
                            "js": [
                                "minimarketview"
                            ]
                        }
                    }, 
                    "moduleId": "cashout-minimarketview"
                }
            ], 
            "constructor": "MarketGroups", 
            "services": [
                "market-object", 
                "markets", 
                "analytics"
            ], 
            "config": {
                "loggedIn": false, 
                "competitionName": null, 
                "periodicUpdates": {
                    "markets": {
                        "keys": {
                            "1": [
                                "1.112173612", 
                                "1.112173613", 
                                "1.113436637", 
                                "1.113436638", 
                                "1.113436647", 
                                "1.113436648", 
                                "1.113436651", 
                                "1.113436652", 
                                "1.113436656", 
                                "1.113436739", 
                                "1.113436635", 
                                "1.113436669", 
                                "1.113436737", 
                                "1.113436738"
                            ], 
                            "2": [], 
                            "924": []
                        }
                    }
                }, 
                "removeMarketTimeout": 60000, 
                "analytics": {
                    "i13n": {
                        "containerKeys": {
                            "module": "Markets"
                        }, 
                        "namespace": "i13n", 
                        "listenOn": "a, button.changeLayout", 
                        "enabled": true, 
                        "bubbleToParent": false
                    }
                }, 
                "container": true, 
                "sportId": 1, 
                "groupOrder": [
                    "popular", 
                    "team", 
                    "goal", 
                    "score", 
                    "player"
                ], 
                "tennisLivescores": false, 
                "eventId": "27113543", 
                "allowExpand": true, 
                "isSportsbook": false, 
                "isLinearViewActive": false, 
                "currencyCode": "GBP", 
                "marketModules": {
                    "0": {
                        "98965510": "1.113436635", 
                        "98965502": "1.112173612", 
                        "98965508": "1.113436738", 
                        "98965509": "1.113436647", 
                        "98965514": "1.113436737", 
                        "98965515": "1.113436739", 
                        "98965513": "1.113436638", 
                        "98965512": "1.113436656", 
                        "98965511": "1.113436651", 
                        "98965503": "1.112173613", 
                        "98965504": "1.113436648", 
                        "98965505": "1.113436652", 
                        "98965506": "1.113436637", 
                        "98965507": "1.113436669"
                    }
                }, 
                "pushEnabledSports": [
                    "1"
                ], 
                "cashoutEnabledForExchange": [
                    "1"
                ], 
                "production": {
                    "ready": 0
                }, 
                "trusted": 0, 
                "dynamicMarketOrderingWithFootballGamesEvents": false, 
                "defaultHeaderLevel": 2, 
                "gaModuleArea": "Main", 
                "templates": {
                    "columnViewHelper": "<div class='column first'></div> <div class=column></div> <div class=clear-both></div>\n"
                }, 
                "srcNode": "#mod-marketgroups-98965456", 
                "sportName": "SOCCER", 
                "selectedTabCookie": "1", 
                "enableGoogleAnalyticsDimensions": true, 
                "cashoutEnabled": true, 
                "isAjax": false, 
                "ajax": {
                    "enabled": true
                }, 
                "numberOfMarketsToExpandByDefault": 8, 
                "boundingBox": "#mod-marketgroups-98965456-container", 
                "analyticsAlreadyFired": false, 
                "info": {
                    "enabled": null
                }, 
                "hasCashoutMiniMarketView": false, 
                "multiMarketView": false, 
                "cashoutMarkets": [
                    "MATCH_ODDS", 
                    "CORRECT_SCORE", 
                    "TO_QUALIFY", 
                    "OVER_UNDER_05", 
                    "OVER_UNDER_15", 
                    "OVER_UNDER_25", 
                    "OVER_UNDER_35", 
                    "OVER_UNDER_45", 
                    "OVER_UNDER_55", 
                    "OVER_UNDER_65", 
                    "OVER_UNDER_75", 
                    "OVER_UNDER_85", 
                    "OVER_UNDER"
                ], 
                "hasCashoutPlusMiniMarketView": false, 
                "filterOutMarketTypes": false, 
                "showLinearViewSwitch": false, 
                "lazyLoadEnabled": true, 
                "debug": {
                    "enabled": 1
                }, 
                "gaModuleName": "marketgroups", 
                "requires": {
                    "css": [
                        "marketgroups"
                    ], 
                    "js": [
                        "marketgroups"
                    ]
                }
            }, 
            "moduleId": "marketgroups"
        }
    ], 
    "preferences": [
        "autoRefresh", 
        "averageOdds", 
        "betInfo", 
        "clusterUnmatchedBets", 
        "consolidated", 
        "couponStakeAmount1", 
        "couponStakeAmount2", 
        "couponStakeAmount3", 
        "couponStakeAmount4", 
        "couponStakeAmount5", 
        "displayBetHelpTabDefault", 
        "displayBetStatusTitle", 
        "displayFutureProfitAndLoss", 
        "displayLayPrices", 
        "displayLiveScores", 
        "displayMarketDepth", 
        "displayMiniGames", 
        "displayMyMarketsDefault", 
        "displayProfitAndLoss", 
        "displayProjectedOdds", 
        "displayRaceCardInfo", 
        "displayStakeLadder", 
        "displayStartingPrices", 
        "displayZoneVideo", 
        "enhancedView", 
        "flashUpdate", 
        "includeNetCommission", 
        "includeSettledBets", 
        "layColour", 
        "liabilityView", 
        "marketViewDisplayType", 
        "matchedBets", 
        "miniGamesEnabled", 
        "percentageBook", 
        "preferenceGroupTitleStates", 
        "showBetSummaryMessaging", 
        "showBspWarning", 
        "showDemoHelp", 
        "showFractionalOdds", 
        "showHelp", 
        "showMouseOverHelp", 
        "showRaceDetailsMouseOvers", 
        "singleClickBetting", 
        "tournamentContent", 
        "tournamentNavigation", 
        "uiView", 
        "useFloatingBetSlip", 
        "userID", 
        "verifyBet"
    ], 
    "page": {
        "layout": {
            "footer": [
                "footer", 
                "marketrules", 
                "cashout-help", 
                "readwebmessages", 
                "mediaplextag"
            ], 
            "uservoice": [
                "uservoice"
            ], 
            "nagbar": [], 
            "update-browser": [
                "update-browser"
            ], 
            "promotionmodalpopup": [
                "promotion-modal-popup"
            ], 
            "betslip": [
                "betslip"
            ], 
            "aside": [
                "livevideo", 
                "gaming-xsell-v2", 
                "mediaplexbanner", 
                "forum", 
                "miniplanner"
            ], 
            "header": [
                "header", 
                "subnav"
            ], 
            "nav": [
                "login-lightbox", 
                "favourites", 
                "nav", 
                "favmanager"
            ], 
            "login": [
                "login"
            ], 
            "main": [
                "starfavourites", 
                "matchheader", 
                "toggle", 
                "marketgroups"
            ], 
            "google-analytics": [
                "google-analytics"
            ]
        }, 
        "config": {
            "yuiUpdate": false, 
            "transition": {
                "neutral": {
                    "class": "cta-depth", 
                    "backgroundColor": "#FFFFFF"
                }, 
                "layPriceChange": {
                    "duration": 0.5, 
                    "to": {
                        "backgroundColor": "#faa9ba"
                    }, 
                    "from": {
                        "backgroundColor": "#ffff00"
                    }
                }, 
                "defaultHide": {
                    "duration": 0.3, 
                    "height": "0px"
                }, 
                "backPriceChange": {
                    "duration": 0.5, 
                    "to": {
                        "backgroundColor": "#72bbef"
                    }, 
                    "from": {
                        "backgroundColor": "#ffff00"
                    }
                }, 
                "defaultShow": {
                    "duration": 0.3
                }
            }, 
            "uservoice": true, 
            "blockJSProcessingOnSiteLoadedInIframe": true, 
            "intl": {
                "currencyFormat": {
                    "suffix": "", 
                    "decimalSeparator": ".", 
                    "currencyCode": "GBP", 
                    "thousandsSeparator": ",", 
                    "prefix": "\u00a3", 
                    "decimalPlaces": 2
                }, 
                "oddsconverter": {
                    "convertToType": "fractional"
                }
            }, 
            "userTimezoneDSTSavings": 3600000, 
            "analytics": {
                "i13n": {
                    "enabled": true, 
                    "defaultKeys": {
                        "loc": "en_GB", 
                        "product": "Sports", 
                        "dr": "@ref", 
                        "platform": "mnts", 
                        "test_group": "ilp_sportshighlight|liquidity-slider", 
                        "bucket_id": 46, 
                        "pkg": "27113543", 
                        "test_name": "ItalyLandingPage|liquidity-slider-cfg", 
                        "sport": 1, 
                        "evt": "27113543", 
                        "page": "match"
                    }, 
                    "server": "wat.betfair.com", 
                    "requestId": "cf82fb00-f167-11e3-8f2e-001b21cd4c5c", 
                    "timeout": 8000, 
                    "pageLoadBeaconFilename": "1x1", 
                    "pageLoadBeaconFolder": "analytics"
                }, 
                "mediaplex": {
                    "createTransportNode": "BF.I13N.Transport.Iframe.Node", 
                    "doCall": "BF.I13N.Transport.Iframe.Call", 
                    "file": "/0/16689/universal.html", 
                    "server": "secure.img-cdn.mediaplex.com"
                }
            }, 
            "subnav": "subnav", 
            "pageLoadTimeout": 8000, 
            "trusted": 1, 
            "dateFormat": "EEE HH:mm", 
            "lka": {
                "active": false, 
                "interval": "120", 
                "cookie": null
            }, 
            "angularLocation": "lib/angularjs/angular-1.2.1.min", 
            "nav": {
                "context": {
                    "eventId": "27113543", 
                    "competitionId": null, 
                    "eventTypeId": 1, 
                    "marketId": null
                }
            }, 
            "reDesign": "darker", 
            "isMarketViewByAjax": false, 
            "testTypes": null, 
            "depositNow": false, 
            "requestURI": "%252Ffootball%252Fevent", 
            "marketActivityPopup": {
                "width": 920, 
                "reducedWidth": 812, 
                "reducedHeight": 500, 
                "height": 600
            }, 
            "userTimezoneOffset": 7200000, 
            "naturalSeachCookies": true, 
            "yellow-accent": true, 
            "italyExchange": false, 
            "marketData": [
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_35", 
                    "marketId": "924.6533038", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 3.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222345, 
                            "marketId": "924.6533038", 
                            "runnerName": "Over 3.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222344, 
                            "marketId": "924.6533038", 
                            "runnerName": "Under 3.5 Goals"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_45", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 62415.50500764852, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436638", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 2218.468725257804, 
                    "marketName": "Over/Under 4.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1222347, 
                            "marketId": "1.113436638", 
                            "runnerName": "Under 4.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.08, 
                                        "size": 1728.2645807114286
                                    }, 
                                    {
                                        "price": 1.07, 
                                        "size": 7687.830733695823
                                    }, 
                                    {
                                        "price": 1.06, 
                                        "size": 7205.751248502473
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.09, 
                                        "size": 8.22
                                    }, 
                                    {
                                        "price": 1.1, 
                                        "size": 421.0850960762151
                                    }, 
                                    {
                                        "price": 1.11, 
                                        "size": 713.8077180459514
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1222346, 
                            "marketId": "1.113436638", 
                            "runnerName": "Over 4.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 11.0, 
                                        "size": 42.855159607621516
                                    }, 
                                    {
                                        "price": 10.0, 
                                        "size": 79.23265670310062
                                    }, 
                                    {
                                        "price": 8.8, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 13.5, 
                                        "size": 138.33472621075825
                                    }, 
                                    {
                                        "price": 15.5, 
                                        "size": 530.7083151648085
                                    }, 
                                    {
                                        "price": 18.0, 
                                        "size": 424.3386846340345
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27213879", 
                    "marketTime": 1402502400000, 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402502400000, 
                    "numberOfActiveRunners": 3, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Wednesday", 
                        "localizedDate": "11 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketId": "924.11518598", 
                    "eventName": "Cesena v Modena", 
                    "status": "OPEN", 
                    "marketName": "Match Odds", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 501219, 
                            "marketId": "924.11518598", 
                            "runnerName": "Cesena"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "924.11518598", 
                            "runnerName": "The Draw"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 60293, 
                            "marketId": "924.11518598", 
                            "runnerName": "Modena"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 34, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 34, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "CORRECT_SCORE", 
                    "marketId": "924.6533015", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Correct Score", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "924.6533015", 
                            "runnerName": "0 - 0"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "924.6533015", 
                            "runnerName": "0 - 1"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "924.6533015", 
                            "runnerName": "0 - 2"
                        }, 
                        {
                            "sortPriority": 4, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 16, 
                            "marketId": "924.6533015", 
                            "runnerName": "0 - 3"
                        }, 
                        {
                            "sortPriority": 5, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "924.6533015", 
                            "runnerName": "1 - 0"
                        }, 
                        {
                            "sortPriority": 6, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "924.6533015", 
                            "runnerName": "1 - 1"
                        }, 
                        {
                            "sortPriority": 7, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "924.6533015", 
                            "runnerName": "1 - 2"
                        }, 
                        {
                            "sortPriority": 8, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 15, 
                            "marketId": "924.6533015", 
                            "runnerName": "1 - 3"
                        }, 
                        {
                            "sortPriority": 9, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "924.6533015", 
                            "runnerName": "2 - 0"
                        }, 
                        {
                            "sortPriority": 10, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "924.6533015", 
                            "runnerName": "2 - 1"
                        }, 
                        {
                            "sortPriority": 11, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "924.6533015", 
                            "runnerName": "2 - 2"
                        }, 
                        {
                            "sortPriority": 12, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 14, 
                            "marketId": "924.6533015", 
                            "runnerName": "2 - 3"
                        }, 
                        {
                            "sortPriority": 13, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 10, 
                            "marketId": "924.6533015", 
                            "runnerName": "3 - 0"
                        }, 
                        {
                            "sortPriority": 14, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 11, 
                            "marketId": "924.6533015", 
                            "runnerName": "3 - 1"
                        }, 
                        {
                            "sortPriority": 15, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 12, 
                            "marketId": "924.6533015", 
                            "runnerName": "3 - 2"
                        }, 
                        {
                            "sortPriority": 16, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 13, 
                            "marketId": "924.6533015", 
                            "runnerName": "3 - 3"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 1, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_75", 
                    "marketId": "924.6533042", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 7.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1485573, 
                            "marketId": "924.6533042", 
                            "runnerName": "Over 7.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "REMOVED", 
                            "handicap": 0.0, 
                            "selectionId": 1485572, 
                            "marketId": "924.6533042", 
                            "runnerName": "Under 7.5 Goals"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_05", 
                    "marketId": "924.6533035", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 0.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5851483, 
                            "marketId": "924.6533035", 
                            "runnerName": "Over 0.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5851482, 
                            "marketId": "924.6533035", 
                            "runnerName": "Under 0.5 Goals"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 3, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketId": "924.6533032", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Match Odds", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 22, 
                            "marketId": "924.6533032", 
                            "runnerName": "Spain"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "924.6533032", 
                            "runnerName": "The Draw"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 231787, 
                            "marketId": "924.6533032", 
                            "runnerName": "Netherlands"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "eventId": "27213878", 
                    "marketTime": 1402511400000, 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402511400000, 
                    "numberOfActiveRunners": 3, 
                    "localizedTime": {
                        "localizedTime": "20:30", 
                        "localizedDay": "Wednesday", 
                        "localizedDate": "11 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketId": "924.11518684", 
                    "eventName": "Latina v Bari", 
                    "status": "OPEN", 
                    "marketName": "Match Odds", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5287538, 
                            "marketId": "924.11518684", 
                            "runnerName": "Latina"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "924.11518684", 
                            "runnerName": "The Draw"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 676466, 
                            "marketId": "924.11518684", 
                            "runnerName": "Bari"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": true, 
                    "totalAvailable": 645427.1714999493, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.112173612", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 107778.83103970805, 
                    "marketName": "Match Odds", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 22, 
                            "marketId": "1.112173612", 
                            "runnerName": "Spain", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.89, 
                                        "size": 2028.8467515633179
                                    }, 
                                    {
                                        "price": 1.88, 
                                        "size": 2371.3508331871312
                                    }, 
                                    {
                                        "price": 1.87, 
                                        "size": 1635.6199813858004
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.91, 
                                        "size": 4492.407957029155
                                    }, 
                                    {
                                        "price": 1.92, 
                                        "size": 633.8538577884248
                                    }, 
                                    {
                                        "price": 1.93, 
                                        "size": 557.6643810440063
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 231787, 
                            "marketId": "1.112173612", 
                            "runnerName": "Netherlands", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.4, 
                                        "size": 305.0318374421173
                                    }, 
                                    {
                                        "price": 5.3, 
                                        "size": 483.8477467257711
                                    }, 
                                    {
                                        "price": 5.2, 
                                        "size": 1705.4311856316826
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 5.5, 
                                        "size": 479.9415269869339
                                    }, 
                                    {
                                        "price": 5.6, 
                                        "size": 568.6197730992353
                                    }, 
                                    {
                                        "price": 5.7, 
                                        "size": 536.2100410277341
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "1.112173612", 
                            "runnerName": "The Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.45, 
                                        "size": 226.0881526366918
                                    }, 
                                    {
                                        "price": 3.4, 
                                        "size": 1795.486144725507
                                    }, 
                                    {
                                        "price": 3.35, 
                                        "size": 3633.350672321554
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.5, 
                                        "size": 3224.7222832767743
                                    }, 
                                    {
                                        "price": 3.55, 
                                        "size": 3796.9992311909737
                                    }, 
                                    {
                                        "price": 3.6, 
                                        "size": 2062.8519069835256
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "HALF_TIME", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 4235.276739274919, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436648", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 212.13120419141762, 
                    "marketName": "Half Time", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 918411, 
                            "marketId": "1.113436648", 
                            "runnerName": "Spain (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.6, 
                                        "size": 223.8010657193606
                                    }, 
                                    {
                                        "price": 2.56, 
                                        "size": 104.07415630550621
                                    }, 
                                    {
                                        "price": 1.25, 
                                        "size": 32.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.8, 
                                        "size": 3.302890636894189
                                    }, 
                                    {
                                        "price": 2.88, 
                                        "size": 60.062580242926614
                                    }, 
                                    {
                                        "price": 3.0, 
                                        "size": 243.82367188761506
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1057347, 
                            "marketId": "1.113436648", 
                            "runnerName": "Netherlands (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 6.0, 
                                        "size": 84.41443513417315
                                    }, 
                                    {
                                        "price": 5.9, 
                                        "size": 16.147263038914904
                                    }, 
                                    {
                                        "price": 4.7, 
                                        "size": 56.687200030233164
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 6.4, 
                                        "size": 44.40497335701599
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 3.823332589783627
                                    }, 
                                    {
                                        "price": 7.8, 
                                        "size": 23.408978240548596
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 2004841, 
                            "marketId": "1.113436648", 
                            "runnerName": "The Draw (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.08, 
                                        "size": 4.446198934280639
                                    }, 
                                    {
                                        "price": 2.06, 
                                        "size": 83.96576780235752
                                    }, 
                                    {
                                        "price": 1.95, 
                                        "size": 145.73939973584737
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.2, 
                                        "size": 123.21976424995964
                                    }, 
                                    {
                                        "price": 2.22, 
                                        "size": 2.41336120554593
                                    }, 
                                    {
                                        "price": 2.24, 
                                        "size": 221.7849343668258
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "PENALTY_TAKEN", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 581.8716663975456, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436669", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 59.63444934922623, 
                    "marketName": "Penalty Taken?", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 30246, 
                            "marketId": "1.113436669", 
                            "runnerName": "Yes", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.8, 
                                        "size": 100.1130308412724
                                    }, 
                                    {
                                        "price": 3.45, 
                                        "size": 26.776198934280636
                                    }, 
                                    {
                                        "price": 3.4, 
                                        "size": 75.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 4.3, 
                                        "size": 12.707
                                    }, 
                                    {
                                        "price": 4.4, 
                                        "size": 88.63636363636363
                                    }, 
                                    {
                                        "price": 5.4, 
                                        "size": 29.872436621992573
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 30247, 
                            "marketId": "1.113436669", 
                            "runnerName": "No", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.31, 
                                        "size": 41.71
                                    }, 
                                    {
                                        "price": 1.3, 
                                        "size": 300.0
                                    }, 
                                    {
                                        "price": 1.22, 
                                        "size": 131.94528827205824
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.36, 
                                        "size": 279.14162764686915
                                    }, 
                                    {
                                        "price": 1.38, 
                                        "size": 4.752296748821851
                                    }, 
                                    {
                                        "price": 1.41, 
                                        "size": 61.17021276595745
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_25", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 71902.21268753681, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.112173613", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 5955.816177251172, 
                    "marketName": "Over/Under 2.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 47972, 
                            "marketId": "1.112173613", 
                            "runnerName": "Under 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.58, 
                                        "size": 127.14580970942076
                                    }, 
                                    {
                                        "price": 1.57, 
                                        "size": 145.21233650896173
                                    }, 
                                    {
                                        "price": 1.56, 
                                        "size": 208.12147747456802
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.6, 
                                        "size": 244.17083804295171
                                    }, 
                                    {
                                        "price": 1.61, 
                                        "size": 732.8194610450141
                                    }, 
                                    {
                                        "price": 1.62, 
                                        "size": 531.3934290606878
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 47973, 
                            "marketId": "1.112173613", 
                            "runnerName": "Over 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.66, 
                                        "size": 146.86967701831682
                                    }, 
                                    {
                                        "price": 2.64, 
                                        "size": 173.67263038914905
                                    }, 
                                    {
                                        "price": 2.62, 
                                        "size": 510.57629956657263
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.7, 
                                        "size": 18.869770126253627
                                    }, 
                                    {
                                        "price": 2.74, 
                                        "size": 54.723357664233575
                                    }, 
                                    {
                                        "price": 2.76, 
                                        "size": 200.2365482534044
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_15", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 19897.429558949025, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436635", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 5065.591777484458, 
                    "marketName": "Over/Under 1.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1221385, 
                            "marketId": "1.113436635", 
                            "runnerName": "Under 1.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.76, 
                                        "size": 27.991488885155945
                                    }, 
                                    {
                                        "price": 2.74, 
                                        "size": 11.47992700729927
                                    }, 
                                    {
                                        "price": 2.7, 
                                        "size": 225.25431939286293
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.82, 
                                        "size": 229.17136303045183
                                    }, 
                                    {
                                        "price": 2.84, 
                                        "size": 319.6491016931914
                                    }, 
                                    {
                                        "price": 2.86, 
                                        "size": 25.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1221386, 
                            "marketId": "1.113436635", 
                            "runnerName": "Over 1.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.55, 
                                        "size": 416.9440282231446
                                    }, 
                                    {
                                        "price": 1.54, 
                                        "size": 589.4827589666646
                                    }, 
                                    {
                                        "price": 1.53, 
                                        "size": 46.73202614379085
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.57, 
                                        "size": 59.207967721675416
                                    }, 
                                    {
                                        "price": 1.58, 
                                        "size": 9.971518987341772
                                    }, 
                                    {
                                        "price": 1.59, 
                                        "size": 798.2993580701279
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "NEXT_GOAL", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 709.7519535249, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436656", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 0.0, 
                    "marketName": "Next Goal", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 22, 
                            "marketId": "1.113436656", 
                            "runnerName": "Spain", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.31, 
                                        "size": 437.4253645610477
                                    }, 
                                    {
                                        "price": 1.11, 
                                        "size": 21.852382783818747
                                    }, 
                                    {
                                        "price": 1.04, 
                                        "size": 440.34232261916617
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 14.0, 
                                        "size": 17.840461717291607
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 231787, 
                            "marketId": "1.113436656", 
                            "runnerName": "Netherlands", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.02, 
                                        "size": 137.42536456104773
                                    }, 
                                    {
                                        "price": 1.11, 
                                        "size": 21.852382783818747
                                    }, 
                                    {
                                        "price": 1.04, 
                                        "size": 440.34232261916617
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 69852, 
                            "marketId": "1.113436656", 
                            "runnerName": "No Goal", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.32, 
                                        "size": 107.42536456104772
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 2.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 10.0, 
                                        "size": 2.4220894558372357
                                    }, 
                                    {
                                        "price": 24.0, 
                                        "size": 19.053770385919588
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_15", 
                    "marketId": "924.6533036", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 1.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1221386, 
                            "marketId": "924.6533036", 
                            "runnerName": "Over 1.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1221385, 
                            "marketId": "924.6533036", 
                            "runnerName": "Under 1.5 Goals"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "CORRECT_SCORE", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 21865.957516689374, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436647", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 8973.28460864863, 
                    "marketName": "Correct Score", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "1.113436647", 
                            "runnerName": "0 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.8, 
                                        "size": 257.6279188299094
                                    }, 
                                    {
                                        "price": 7.6, 
                                        "size": 65.79
                                    }, 
                                    {
                                        "price": 7.4, 
                                        "size": 185.71226061682543
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 8.0, 
                                        "size": 745.3334409817537
                                    }, 
                                    {
                                        "price": 8.2, 
                                        "size": 750.51
                                    }, 
                                    {
                                        "price": 8.4, 
                                        "size": 140.9
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "1.113436647", 
                            "runnerName": "0 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 12.5, 
                                        "size": 94.81970883028163
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 128.6157678023575
                                    }, 
                                    {
                                        "price": 11.0, 
                                        "size": 2.1
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 13.0, 
                                        "size": 80.73631519457453
                                    }, 
                                    {
                                        "price": 13.5, 
                                        "size": 98.92895204262877
                                    }, 
                                    {
                                        "price": 14.0, 
                                        "size": 20.52
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "1.113436647", 
                            "runnerName": "0 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 34.0, 
                                        "size": 6.96
                                    }, 
                                    {
                                        "price": 32.0, 
                                        "size": 57.9212417245277
                                    }, 
                                    {
                                        "price": 30.0, 
                                        "size": 2.7369610850960764
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 36.0, 
                                        "size": 5.403681575972872
                                    }, 
                                    {
                                        "price": 38.0, 
                                        "size": 46.82706281285322
                                    }, 
                                    {
                                        "price": 40.0, 
                                        "size": 29.04682059226598
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 16, 
                            "marketId": "1.113436647", 
                            "runnerName": "0 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 140.0, 
                                        "size": 12.585223738645004
                                    }, 
                                    {
                                        "price": 110.0, 
                                        "size": 7.641109677928316
                                    }, 
                                    {
                                        "price": 95.0, 
                                        "size": 3.19
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 160.0, 
                                        "size": 10.167495374653019
                                    }, 
                                    {
                                        "price": 170.0, 
                                        "size": 11.14363151945745
                                    }, 
                                    {
                                        "price": 180.0, 
                                        "size": 9.688357823348943
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "1.113436647", 
                            "runnerName": "1 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 6.2, 
                                        "size": 285.61970883028164
                                    }, 
                                    {
                                        "price": 6.0, 
                                        "size": 935.7258194735992
                                    }, 
                                    {
                                        "price": 5.9, 
                                        "size": 2.074923300500565
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 6.6, 
                                        "size": 679.2563720288106
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 2.0
                                    }, 
                                    {
                                        "price": 7.0, 
                                        "size": 50.156000000000006
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "1.113436647", 
                            "runnerName": "1 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.6, 
                                        "size": 320.5697088302816
                                    }, 
                                    {
                                        "price": 7.4, 
                                        "size": 217.35104149846603
                                    }, 
                                    {
                                        "price": 7.2, 
                                        "size": 1040.9575326982076
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 8.0, 
                                        "size": 418.1000468270628
                                    }, 
                                    {
                                        "price": 8.2, 
                                        "size": 258.809946714032
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 2.4220894558372357
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "1.113436647", 
                            "runnerName": "1 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 23.0, 
                                        "size": 16.19970883028165
                                    }, 
                                    {
                                        "price": 22.0, 
                                        "size": 66.23
                                    }, 
                                    {
                                        "price": 21.0, 
                                        "size": 65.0565154206362
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 24.0, 
                                        "size": 56.89304001064658
                                    }, 
                                    {
                                        "price": 25.0, 
                                        "size": 6.0
                                    }, 
                                    {
                                        "price": 26.0, 
                                        "size": 24.47
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 15, 
                            "marketId": "1.113436647", 
                            "runnerName": "1 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 85.0, 
                                        "size": 39.431989342806396
                                    }, 
                                    {
                                        "price": 80.0, 
                                        "size": 28.818830509171143
                                    }, 
                                    {
                                        "price": 75.0, 
                                        "size": 10.716038367164845
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 95.0, 
                                        "size": 20.0
                                    }, 
                                    {
                                        "price": 100.0, 
                                        "size": 9.688357823348943
                                    }, 
                                    {
                                        "price": 140.0, 
                                        "size": 5.958410296132992
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "1.113436647", 
                            "runnerName": "2 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 9.2, 
                                        "size": 560.119271758437
                                    }, 
                                    {
                                        "price": 8.8, 
                                        "size": 82.35104149846602
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 40.70146455675763
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 9.4, 
                                        "size": 141.28855159050542
                                    }, 
                                    {
                                        "price": 9.6, 
                                        "size": 45.58995588340615
                                    }, 
                                    {
                                        "price": 9.8, 
                                        "size": 9.12
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 10, 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "1.113436647", 
                            "runnerName": "2 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 10.5, 
                                        "size": 336.43472630389147
                                    }, 
                                    {
                                        "price": 10.0, 
                                        "size": 1271.2877442273534
                                    }, 
                                    {
                                        "price": 9.4, 
                                        "size": 109.01017277571452
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 11.0, 
                                        "size": 735.4286544140051
                                    }, 
                                    {
                                        "price": 11.5, 
                                        "size": 1014.282577103181
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 171.06263038914906
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 11, 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "1.113436647", 
                            "runnerName": "2 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 28.0, 
                                        "size": 3.2698207653802682
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 53.728490046056216
                                    }, 
                                    {
                                        "price": 26.0, 
                                        "size": 12.51
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 29.0, 
                                        "size": 97.0
                                    }, 
                                    {
                                        "price": 30.0, 
                                        "size": 79.6742338123688
                                    }, 
                                    {
                                        "price": 32.0, 
                                        "size": 49.36565297194029
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 12, 
                            "handicap": 0.0, 
                            "selectionId": 14, 
                            "marketId": "1.113436647", 
                            "runnerName": "2 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 100.0, 
                                        "size": 83.62572097529468
                                    }, 
                                    {
                                        "price": 95.0, 
                                        "size": 18.80195169767598
                                    }, 
                                    {
                                        "price": 90.0, 
                                        "size": 8.910104840508588
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 110.0, 
                                        "size": 2.481227007141311
                                    }, 
                                    {
                                        "price": 120.0, 
                                        "size": 32.40835782334894
                                    }, 
                                    {
                                        "price": 190.0, 
                                        "size": 3.4624540142826223
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 13, 
                            "handicap": 0.0, 
                            "selectionId": 10, 
                            "marketId": "1.113436647", 
                            "runnerName": "3 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 23.0, 
                                        "size": 46.039708830281654
                                    }, 
                                    {
                                        "price": 22.0, 
                                        "size": 86.83761020507025
                                    }, 
                                    {
                                        "price": 21.0, 
                                        "size": 9.688357823348943
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 24.0, 
                                        "size": 90.56
                                    }, 
                                    {
                                        "price": 25.0, 
                                        "size": 30.0
                                    }, 
                                    {
                                        "price": 26.0, 
                                        "size": 42.790247053124496
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 14, 
                            "handicap": 0.0, 
                            "selectionId": 11, 
                            "marketId": "1.113436647", 
                            "runnerName": "3 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 22.0, 
                                        "size": 107.6812417245277
                                    }, 
                                    {
                                        "price": 19.5, 
                                        "size": 4.392055546584855
                                    }, 
                                    {
                                        "price": 17.0, 
                                        "size": 33.9092523817213
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 23.0, 
                                        "size": 13.99
                                    }, 
                                    {
                                        "price": 25.0, 
                                        "size": 58.13014694009367
                                    }, 
                                    {
                                        "price": 26.0, 
                                        "size": 65.03099467140319
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 15, 
                            "handicap": 0.0, 
                            "selectionId": 12, 
                            "marketId": "1.113436647", 
                            "runnerName": "3 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 46.0, 
                                        "size": 10.86
                                    }, 
                                    {
                                        "price": 44.0, 
                                        "size": 16.95462619086065
                                    }, 
                                    {
                                        "price": 42.0, 
                                        "size": 11.99
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 55.0, 
                                        "size": 56.51542063620216
                                    }, 
                                    {
                                        "price": 60.0, 
                                        "size": 32.68
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 16, 
                            "handicap": 0.0, 
                            "selectionId": 13, 
                            "marketId": "1.113436647", 
                            "runnerName": "3 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 180.0, 
                                        "size": 18.94472630389149
                                    }, 
                                    {
                                        "price": 170.0, 
                                        "size": 18.18862616363038
                                    }, 
                                    {
                                        "price": 160.0, 
                                        "size": 4.986839170198528
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 200.0, 
                                        "size": 13.034311134381745
                                    }, 
                                    {
                                        "price": 210.0, 
                                        "size": 37.61013222270728
                                    }, 
                                    {
                                        "price": 400.0, 
                                        "size": 11.73122700714131
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 17, 
                            "handicap": 0.0, 
                            "selectionId": 4506345, 
                            "marketId": "1.113436647", 
                            "runnerName": "Any Unquoted ", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 16.5, 
                                        "size": 3.53
                                    }, 
                                    {
                                        "price": 16.0, 
                                        "size": 163.92
                                    }, 
                                    {
                                        "price": 15.5, 
                                        "size": 109.6665154206362
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 17.0, 
                                        "size": 100.58
                                    }, 
                                    {
                                        "price": 17.5, 
                                        "size": 41.17552074923301
                                    }, 
                                    {
                                        "price": 21.0, 
                                        "size": 3.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 17, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 17, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_05", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 224275.34905822677, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436737", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 28.11968113404703, 
                    "marketName": "Over/Under 0.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 5851482, 
                            "marketId": "1.113436737", 
                            "runnerName": "Under 0.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.2, 
                                        "size": 1330.0057553733832
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 1720.5882352941178
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 3.600839657678024
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 8.4, 
                                        "size": 2.799708830281651
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 16.147263038914904
                                    }, 
                                    {
                                        "price": 8.8, 
                                        "size": 13462.056859837
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 5851483, 
                            "marketId": "1.113436737", 
                            "runnerName": "Over 0.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.13, 
                                        "size": 104988.55574941538
                                    }, 
                                    {
                                        "price": 1.12, 
                                        "size": 59998.8
                                    }, 
                                    {
                                        "price": 1.11, 
                                        "size": 40000.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.16, 
                                        "size": 8255.21652459001
                                    }, 
                                    {
                                        "price": 1.17, 
                                        "size": 10000.0
                                    }, 
                                    {
                                        "price": 1.18, 
                                        "size": 20.107820983285837
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 9, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 9, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "HALF_TIME_FULL_TIME", 
                    "marketId": "924.6533031", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Half Time/Full Time", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 103846, 
                            "marketId": "924.6533031", 
                            "runnerName": "Spain/Spain"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 103847, 
                            "marketId": "924.6533031", 
                            "runnerName": "Spain/Draw"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 4835539, 
                            "marketId": "924.6533031", 
                            "runnerName": "Spain/Netherlands"
                        }, 
                        {
                            "sortPriority": 4, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 103849, 
                            "marketId": "924.6533031", 
                            "runnerName": "Draw/Spain"
                        }, 
                        {
                            "sortPriority": 5, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 3710152, 
                            "marketId": "924.6533031", 
                            "runnerName": "Draw/Draw"
                        }, 
                        {
                            "sortPriority": 6, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 257203, 
                            "marketId": "924.6533031", 
                            "runnerName": "Draw/Netherlands"
                        }, 
                        {
                            "sortPriority": 7, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 949980, 
                            "marketId": "924.6533031", 
                            "runnerName": "Netherlands/Spain"
                        }, 
                        {
                            "sortPriority": 8, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 257205, 
                            "marketId": "924.6533031", 
                            "runnerName": "Netherlands/Draw"
                        }, 
                        {
                            "sortPriority": 9, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 257206, 
                            "marketId": "924.6533031", 
                            "runnerName": "Netherlands/Netherlands"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_25", 
                    "marketId": "924.6533037", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 2.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 47973, 
                            "marketId": "924.6533037", 
                            "runnerName": "Over 2.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 47972, 
                            "marketId": "924.6533037", 
                            "runnerName": "Under 2.5 Goals"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_35", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 83579.8264645012, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436637", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 1615.3947349695359, 
                    "marketName": "Over/Under 3.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1222344, 
                            "marketId": "1.113436637", 
                            "runnerName": "Under 3.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.21, 
                                        "size": 206.71726142418862
                                    }, 
                                    {
                                        "price": 1.2, 
                                        "size": 913.375906160791
                                    }, 
                                    {
                                        "price": 1.19, 
                                        "size": 865.1542063620217
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.23, 
                                        "size": 1660.8389986424957
                                    }, 
                                    {
                                        "price": 1.24, 
                                        "size": 1019.4246413060206
                                    }, 
                                    {
                                        "price": 1.25, 
                                        "size": 1007.8885184289056
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1222345, 
                            "marketId": "1.113436637", 
                            "runnerName": "Over 3.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.4, 
                                        "size": 7.5894467775351355
                                    }, 
                                    {
                                        "price": 5.3, 
                                        "size": 379.64578268890165
                                    }, 
                                    {
                                        "price": 5.1, 
                                        "size": 245.1557392571815
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 5.8, 
                                        "size": 43.08028178023255
                                    }, 
                                    {
                                        "price": 6.0, 
                                        "size": 182.6345493580704
                                    }, 
                                    {
                                        "price": 6.4, 
                                        "size": 160.75443332123555
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_45", 
                    "marketId": "924.6533039", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 4.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222346, 
                            "marketId": "924.6533039", 
                            "runnerName": "Over 4.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222347, 
                            "marketId": "924.6533039", 
                            "runnerName": "Under 4.5 Goals"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_85", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 722.6147263038915, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436739", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 0.0, 
                    "marketName": "Over/Under 8.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 2407528, 
                            "marketId": "1.113436739", 
                            "runnerName": "Under 8.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "lay": [
                                    {
                                        "price": 1.01, 
                                        "size": 719.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 2407529, 
                            "marketId": "1.113436739", 
                            "runnerName": "Over 8.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 100.0, 
                                        "size": 7.261900000000001
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1000.0, 
                                        "size": 2.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_75", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 744.5927660261585, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436738", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 9.96, 
                    "marketName": "Over/Under 7.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1485572, 
                            "marketId": "1.113436738", 
                            "runnerName": "Under 7.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "lay": [
                                    {
                                        "price": 1.01, 
                                        "size": 724.02
                                    }, 
                                    {
                                        "price": 1.02, 
                                        "size": 10.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1485573, 
                            "marketId": "1.113436738", 
                            "runnerName": "Over 7.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 100.0, 
                                        "size": 9.290641722267075
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 6.798726303891491
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 320.0, 
                                        "size": 2.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402686000000, 
                    "numberOfActiveRunners": 1, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "OVER_UNDER_85", 
                    "marketId": "924.6533043", 
                    "eventName": "Spain v Netherlands", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 8.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 2407529, 
                            "marketId": "924.6533043", 
                            "runnerName": "Over 8.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "REMOVED", 
                            "handicap": 0.0, 
                            "selectionId": 2407528, 
                            "marketId": "924.6533043", 
                            "runnerName": "Under 8.5 Goals"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "HALF_TIME_SCORE", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 4288.177199674417, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436651", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 367.46245694957156, 
                    "marketName": "Half Time Score", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "1.113436651", 
                            "runnerName": "0 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.44, 
                                        "size": 262.4091716454061
                                    }, 
                                    {
                                        "price": 2.42, 
                                        "size": 126.76
                                    }, 
                                    {
                                        "price": 2.12, 
                                        "size": 56.60377358490566
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.72, 
                                        "size": 207.9525270466656
                                    }, 
                                    {
                                        "price": 2.74, 
                                        "size": 15.0
                                    }, 
                                    {
                                        "price": 3.25, 
                                        "size": 89.88810913224705
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "1.113436651", 
                            "runnerName": "1 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 11.0, 
                                        "size": 52.47860487647344
                                    }, 
                                    {
                                        "price": 10.5, 
                                        "size": 18.95
                                    }, 
                                    {
                                        "price": 5.4, 
                                        "size": 22.22222222222222
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 12.0, 
                                        "size": 12.530536852767684
                                    }, 
                                    {
                                        "price": 13.0, 
                                        "size": 49.24915226869046
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "1.113436651", 
                            "runnerName": "2 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 130.0, 
                                        "size": 15.33989988696916
                                    }, 
                                    {
                                        "price": 120.0, 
                                        "size": 2.0
                                    }, 
                                    {
                                        "price": 9.6, 
                                        "size": 12.5
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 240.0, 
                                        "size": 9.688357823348943
                                    }, 
                                    {
                                        "price": 250.0, 
                                        "size": 2.0
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "1.113436651", 
                            "runnerName": "1 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.95, 
                                        "size": 260.7782980784757
                                    }, 
                                    {
                                        "price": 3.9, 
                                        "size": 62.07
                                    }, 
                                    {
                                        "price": 3.2, 
                                        "size": 37.5
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 4.8, 
                                        "size": 219.6027773292427
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 44.28206009618172
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "1.113436651", 
                            "runnerName": "2 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 13.0, 
                                        "size": 52.47860487647344
                                    }, 
                                    {
                                        "price": 12.5, 
                                        "size": 15.65
                                    }, 
                                    {
                                        "price": 6.4, 
                                        "size": 18.75
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 18.0, 
                                        "size": 87.19522041014051
                                    }, 
                                    {
                                        "price": 18.5, 
                                        "size": 88.80994671403198
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "1.113436651", 
                            "runnerName": "2 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 28.0, 
                                        "size": 52.47860487647344
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 6.92
                                    }, 
                                    {
                                        "price": 7.6, 
                                        "size": 15.789473684210527
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 34.0, 
                                        "size": 20.0
                                    }, 
                                    {
                                        "price": 38.0, 
                                        "size": 16.95462619086065
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "1.113436651", 
                            "runnerName": "0 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.4, 
                                        "size": 84.77313095430326
                                    }, 
                                    {
                                        "price": 7.2, 
                                        "size": 29.03
                                    }, 
                                    {
                                        "price": 4.9, 
                                        "size": 24.489795918367346
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 9.6, 
                                        "size": 81.54367834652027
                                    }, 
                                    {
                                        "price": 28.0, 
                                        "size": 10.444451520322314
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "1.113436651", 
                            "runnerName": "0 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 38.0, 
                                        "size": 16.95462619086065
                                    }, 
                                    {
                                        "price": 36.0, 
                                        "size": 5.14
                                    }, 
                                    {
                                        "price": 8.4, 
                                        "size": 14.285714285714285
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 60.0, 
                                        "size": 50.86387857258195
                                    }, 
                                    {
                                        "price": 65.0, 
                                        "size": 2.0
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "1.113436651", 
                            "runnerName": "1 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 55.0, 
                                        "size": 16.95462619086065
                                    }, 
                                    {
                                        "price": 50.0, 
                                        "size": 3.67
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 13.953488372093023
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 70.0, 
                                        "size": 20.0
                                    }, 
                                    {
                                        "price": 75.0, 
                                        "size": 9.688357823348943
                                    }, 
                                    {
                                        "price": 80.0, 
                                        "size": 16.95462619086065
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 10, 
                            "handicap": 0.0, 
                            "selectionId": 4506345, 
                            "marketId": "1.113436651", 
                            "runnerName": "Any Unquoted ", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 22.0, 
                                        "size": 13.279708830281653
                                    }, 
                                    {
                                        "price": 8.4, 
                                        "size": 17.90610152751052
                                    }, 
                                    {
                                        "price": 8.0, 
                                        "size": 51.82832160000137
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 60.0, 
                                        "size": 2.0
                                    }, 
                                    {
                                        "price": 1000.0, 
                                        "size": 4.4
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 10, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 10, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "21:00", 
                        "localizedDay": "Friday", 
                        "localizedDate": "13 June"
                    }, 
                    "marketType": "HALF_TIME_FULL_TIME", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 6622.264815754885, 
                    "eventId": "27113543", 
                    "marketTime": 1402686000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113436652", 
                    "eventName": "Spain v Netherlands", 
                    "totalMatched": 1637.6936483558557, 
                    "marketName": "Half Time/Full Time", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 103846, 
                            "marketId": "1.113436652", 
                            "runnerName": "Spain/Spain", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.25, 
                                        "size": 5.024615384615384
                                    }, 
                                    {
                                        "price": 3.2, 
                                        "size": 227.92356780470197
                                    }, 
                                    {
                                        "price": 3.1, 
                                        "size": 65.93110864354212
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.35, 
                                        "size": 4.280667525525699
                                    }, 
                                    {
                                        "price": 3.45, 
                                        "size": 270.46665590182465
                                    }, 
                                    {
                                        "price": 3.65, 
                                        "size": 4.036815759728726
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 103847, 
                            "marketId": "1.113436652", 
                            "runnerName": "Spain/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 18.0, 
                                        "size": 79.12158889068303
                                    }, 
                                    {
                                        "price": 15.5, 
                                        "size": 62.90354330650065
                                    }, 
                                    {
                                        "price": 14.0, 
                                        "size": 70.15730499102149
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 20.0, 
                                        "size": 20.51674051115464
                                    }, 
                                    {
                                        "price": 22.0, 
                                        "size": 46.019699660907484
                                    }, 
                                    {
                                        "price": 210.0, 
                                        "size": 2.0609611767009133
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 4835539, 
                            "marketId": "1.113436652", 
                            "runnerName": "Spain/Netherlands", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 60.0, 
                                        "size": 7.213364118453197
                                    }, 
                                    {
                                        "price": 55.0, 
                                        "size": 102.53512029710964
                                    }, 
                                    {
                                        "price": 38.0, 
                                        "size": 24.6459144593298
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 65.0, 
                                        "size": 56.76515323519791
                                    }, 
                                    {
                                        "price": 70.0, 
                                        "size": 40.98982722428549
                                    }, 
                                    {
                                        "price": 75.0, 
                                        "size": 25.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 103849, 
                            "marketId": "1.113436652", 
                            "runnerName": "Draw/Spain", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.9, 
                                        "size": 2.9265788184716515
                                    }, 
                                    {
                                        "price": 4.8, 
                                        "size": 215.21356263043592
                                    }, 
                                    {
                                        "price": 4.6, 
                                        "size": 3.3498869283429373
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 5.1, 
                                        "size": 5.383364118453198
                                    }, 
                                    {
                                        "price": 5.2, 
                                        "size": 10.0
                                    }, 
                                    {
                                        "price": 5.3, 
                                        "size": 79.12158889068303
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 3710152, 
                            "marketId": "1.113436652", 
                            "runnerName": "Draw/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.0, 
                                        "size": 1443.2665913127726
                                    }, 
                                    {
                                        "price": 4.9, 
                                        "size": 83.66289401304618
                                    }, 
                                    {
                                        "price": 4.8, 
                                        "size": 79.12158889068303
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 5.1, 
                                        "size": 84.78058678921052
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 105.62209705454929
                                    }, 
                                    {
                                        "price": 8.0, 
                                        "size": 5.625
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 257203, 
                            "marketId": "1.113436652", 
                            "runnerName": "Draw/Netherlands", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 11.5, 
                                        "size": 77.50686258679154
                                    }, 
                                    {
                                        "price": 11.0, 
                                        "size": 4.103366667600841
                                    }, 
                                    {
                                        "price": 9.4, 
                                        "size": 6.866111375026249
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 12.5, 
                                        "size": 2.383364118453197
                                    }, 
                                    {
                                        "price": 13.0, 
                                        "size": 81.92895204262877
                                    }, 
                                    {
                                        "price": 28.0, 
                                        "size": 15.457208825256851
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 949980, 
                            "marketId": "1.113436652", 
                            "runnerName": "Netherlands/Spain", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 36.0, 
                                        "size": 227.8
                                    }, 
                                    {
                                        "price": 34.0, 
                                        "size": 153.5386726949782
                                    }, 
                                    {
                                        "price": 22.0, 
                                        "size": 43.43100237291894
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 38.0, 
                                        "size": 135.567890196283
                                    }, 
                                    {
                                        "price": 40.0, 
                                        "size": 51.441789116744715
                                    }, 
                                    {
                                        "price": 42.0, 
                                        "size": 32.29452607782981
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 257205, 
                            "marketId": "1.113436652", 
                            "runnerName": "Netherlands/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 21.0, 
                                        "size": 77.50686258679154
                                    }, 
                                    {
                                        "price": 17.5, 
                                        "size": 55.27539672874416
                                    }, 
                                    {
                                        "price": 16.0, 
                                        "size": 60.79484368446062
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 26.0, 
                                        "size": 49.11306377936067
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 79.12158889068303
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 257206, 
                            "marketId": "1.113436652", 
                            "runnerName": "Netherlands/Netherlands", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 10.5, 
                                        "size": 78.87259936874497
                                    }, 
                                    {
                                        "price": 10.0, 
                                        "size": 47.0
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 7.456859160050255
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 11.5, 
                                        "size": 20.1633641184532
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 79.12158889068303
                                    }, 
                                    {
                                        "price": 23.0, 
                                        "size": 18.817471613356165
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 9, 
                    "suspendTime": 1402686000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 9, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Spain", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }
            ], 
            "productMap": {
                "1": "E", 
                "2": "E", 
                "FS": [
                    "924"
                ], 
                "E": [
                    "1", 
                    "2"
                ], 
                "924": "FS"
            }, 
            "hideHeader": true, 
            "name": "event", 
            "language": "en", 
            "mobileXsell": false, 
            "density": "condensed", 
            "userTimezone": "Europe/Berlin", 
            "optimizelogin": "", 
            "marketMap": [
                [
                    "1.114310544", 
                    "924.11518598"
                ], 
                [
                    "1.113436638", 
                    "924.6533039"
                ], 
                [
                    "1.112173612", 
                    "924.6533032"
                ], 
                [
                    "1.112173613", 
                    "924.6533037"
                ], 
                [
                    "1.113436647", 
                    "924.6533015"
                ], 
                [
                    "1.113436635", 
                    "924.6533036"
                ], 
                [
                    "1.113436737", 
                    "924.6533035"
                ], 
                [
                    "1.114310450", 
                    "924.11518684"
                ], 
                [
                    "1.113436637", 
                    "924.6533038"
                ], 
                [
                    "1.113436652", 
                    "924.6533031"
                ], 
                [
                    "1.113436739", 
                    "924.6533043"
                ], 
                [
                    "1.113436738", 
                    "924.6533042"
                ]
            ], 
            "lazyload": {
                "css": {
                    "uri": "//sn4.cdnbf.net//resources/bundles/{0}/all_TAG_.css", 
                    "sep": "_"
                }, 
                "script": {
                    "uri": "//sn4.cdnbf.net//resources/bundles/{0}/all_TAG_.js", 
                    "sep": "_"
                }
            }, 
            "title": {
                "default": "PAGETITLE.BETFAIR", 
                "sport": "SPORT.SOCCER", 
                "type": "PAGETITLE.EVENT"
            }
        }
    }
}