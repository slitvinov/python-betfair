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
            "instanceId": "62807368", 
            "type": "footer", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Footer", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-footer-62807368", 
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
                "boundingBox": "#mod-footer-62807368-container", 
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
            "instanceId": "62807369", 
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
                "srcNode": "#mod-marketrules-62807369", 
                "bfPointsUrl": "https://accountservices.betfair.com/myaccount/account/OpenMyAccount.do?tabID=10", 
                "isAjax": false, 
                "ajax": {
                    "enabled": true
                }, 
                "reportIfLoaded": false, 
                "boundingBox": "#mod-marketrules-62807369-container", 
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
            "instanceId": "62807370", 
            "type": "cashout-help", 
            "translations": {}, 
            "modules": [], 
            "constructor": "CashoutHelp", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-cashout-help-62807370", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-cashout-help-62807370-container", 
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
            "instanceId": "62807371", 
            "type": "readwebmessages", 
            "translations": {}, 
            "modules": [], 
            "constructor": "ReadWebMessages", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-readwebmessages-62807371", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-readwebmessages-62807371-container", 
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
            "instanceId": "62807372", 
            "type": "mediaplextag", 
            "translations": {}, 
            "modules": [], 
            "constructor": "MediaplexTag", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-mediaplextag-62807372", 
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
                "boundingBox": "#mod-mediaplextag-62807372-container", 
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
            "instanceId": "62807349", 
            "type": "uservoice", 
            "translations": {}, 
            "modules": [], 
            "constructor": "", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-uservoice-62807349", 
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
                "boundingBox": "#mod-uservoice-62807349-container", 
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
            "instanceId": "62807350", 
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
                "srcNode": "#mod-promotion-modal-popup-62807350", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-promotion-modal-popup-62807350-container", 
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
            "instanceId": "62807351", 
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
                "srcNode": "#mod-update-browser-62807351", 
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
                "boundingBox": "#mod-update-browser-62807351-container", 
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
            "instanceId": "62807344", 
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
                "requestId": "ef8a2360-f167-11e3-b100-90e2ba0fa318", 
                "srcNode": "#mod-login-lightbox-62807344", 
                "productName": "exchange", 
                "ajax": {
                    "enabled": true
                }, 
                "boundingBox": "#mod-login-lightbox-62807344-container", 
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
            "instanceId": "62807345", 
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
                "srcNode": "#mod-favourites-62807345", 
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
                "boundingBox": "#mod-favourites-62807345-container", 
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
            "instanceId": "62807346", 
            "type": "nav", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Nav", 
            "services": [
                "navigation"
            ], 
            "config": {
                "boundingBox": "#mod-nav-62807346-container", 
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
                "idParam": "27113546", 
                "showSportOnTv": true, 
                "showWhereIsTheMoney": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "eventName": "Switzerland v Ecuador", 
                "marketName": null, 
                "showResultsLink": false, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-nav-62807346", 
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
            "instanceId": "62807347", 
            "type": "favmanager", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Favmanager", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-favmanager-62807347", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-favmanager-62807347-container", 
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
            "instanceId": "62807365", 
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
                "requestId": "ef8a2360-f167-11e3-b100-90e2ba0fa318", 
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
            "instanceId": "62807360", 
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
                "eventName": "Switzerland v Ecuador", 
                "production": {
                    "ready": 0
                }, 
                "dataVisualizationWithPopOutLink": false, 
                "autoPlayAllowed": true, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "playerHeight": 290, 
                "playerWidth": 334, 
                "srcNode": "#mod-livevideo-62807360", 
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
                "boundingBox": "#mod-livevideo-62807360-container", 
                "redesign": true, 
                "subDomain": "en", 
                "optAutoPlay": true, 
                "info": {
                    "enabled": null
                }, 
                "showFootballHeader": false, 
                "playerUrl": "https://videoplayer.betfair.com/GetPlayer.do?tr=1&eID=27113546&allowPopup=true&width=334&height=290&adjustWindow=false", 
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
            "instanceId": "62807361", 
            "type": "gaming-xsell-v2", 
            "translations": {}, 
            "modules": [], 
            "constructor": "GamingXSellV2", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-gaming-xsell-v2-62807361", 
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
                "boundingBox": "#mod-gaming-xsell-v2-62807361-container", 
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
            "instanceId": "62807362", 
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
                "srcNode": "#mod-mediaplexbanner-62807362", 
                "ajax": {
                    "enabled": false
                }, 
                "boundingBox": "#mod-mediaplexbanner-62807362-container", 
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
            "instanceId": "62807363", 
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
                "srcNode": "#mod-forum-62807363", 
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
                "boundingBox": "#mod-forum-62807363-container", 
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
                "eventId": "27113546", 
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
            "instanceId": "62807364", 
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
                "srcNode": "#mod-miniplanner-62807364", 
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
                "boundingBox": "#mod-miniplanner-62807364-container", 
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
            "instanceId": "62807334", 
            "type": "header", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "62807399", 
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
                        "srcNode": "#mod-instantsearch-ebs-62807399", 
                        "callDelay": 500, 
                        "labelClass": "label", 
                        "action": "/exchange/search", 
                        "ajax": {
                            "enabled": true
                        }, 
                        "boundingBox": "#mod-instantsearch-ebs-62807399-container", 
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
                    "instanceId": "62807336", 
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
                "srcNode": "#mod-header-62807334", 
                "defaultRegion": "GBR", 
                "newHeader": true, 
                "ajax": {
                    "enabled": false
                }, 
                "boundingBox": "#mod-header-62807334-container", 
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
            "instanceId": "62807337", 
            "type": "subnav", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "62807400", 
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
                        "srcNode": "#mod-preferences-62807400", 
                        "enableFractionalOddsTips": true, 
                        "showModalPopup": false, 
                        "feedbackUrl": "https://betfair1.uservoice.com/forums/192891-general/suggestions/3762306-liquidity-slider", 
                        "ajax": {
                            "enabled": true
                        }, 
                        "boundingBox": "#mod-preferences-62807400-container", 
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
                "srcNode": "#mod-subnav-62807337", 
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
                "boundingBox": "#mod-subnav-62807337-container", 
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
            "instanceId": "62807339", 
            "type": "tab-container", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "62807340", 
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
                        "srcNode": "#mod-betslip-62807340", 
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
                        "boundingBox": "#mod-betslip-62807340-container", 
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
                    "instanceId": "62807341", 
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
                        "srcNode": "#mod-betslip-62807341", 
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
                        "boundingBox": "#mod-betslip-62807341-container", 
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
                    "instanceId": "62807342", 
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
                        "srcNode": "#mod-betslip-62807342", 
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
                            "unmatched": "<h3 class=\"header\" id=\"m62807342-unmatched-title\"> <span class=\"title bold\"> Waiting (unmatched) </span> <div class=\"refreshButton\"></div> </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "ineditableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "loadingMessage": "<div>List is loading....</div>", 
                            "editableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=1 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <label for=\"bet-odds-\">Odds</label> <span class=\"bf-spinner bf-spinner-content\"> <input tabindex=1 class=\"text odds\" type=\"text\" maxlength=\"6\" id=\"potential-bets--odds\" value=\"\" name=\"bet[][price]\" autocomplete=\"off\"> <button type=\"button\" class=\"bf-spinner-increment\" disabled=\"true\" tabindex=\"-1\"></button> <button type=\"button\" class=\"bf-spinner-decrement\" disabled=\"true\" tabindex=\"-1\"></button> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "dropDownList": "<select> </select>", 
                            "matched": "<h3 class=\"header\"> <span>Placed (matched)</span> <label for=\"m62807342-orderMatchedByDate\">Order by Matched Date</label> <input tabindex=1 type=\"checkbox\" name=\"orderMatchedByDate\" value=\"1\" id=\"m62807342-orderMatchedByDate\" class=\"order-matched-by-date\" > </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>"
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
                        "boundingBox": "#mod-betslip-62807342-container", 
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
                    "instanceId": "62807343", 
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
                        "srcNode": "#mod-betslip-62807343", 
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
                            "unmatched": "<h3 class=\"header\" id=\"m62807343-unmatched-title\"> <span class=\"title bold\"> Waiting (unmatched) </span> <div class=\"refreshButton\"></div> </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "unplaced": "<h3 class=\"header errorMessage\">The following bets could not be placed</h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>", 
                            "editableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=1 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <label for=\"bet-odds-\">Odds</label> <span class=\"bf-spinner bf-spinner-content\"> <input tabindex=1 class=\"text odds\" type=\"text\" maxlength=\"6\" id=\"potential-bets--odds\" value=\"\" name=\"bet[][price]\" autocomplete=\"off\"> <button type=\"button\" class=\"bf-spinner-increment\" disabled=\"true\" tabindex=\"-1\"></button> <button type=\"button\" class=\"bf-spinner-decrement\" disabled=\"true\" tabindex=\"-1\"></button> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "cancelled": "<h3 class=\"header errorMessage\">Cancelled</h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "ineditableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "ineditableMultiplesSelection": "<tr class=\"bet\" id=\"bet-\"> <th scope=\"row\" class=\"runner-name\"></th> <td class=\"stake-cell\"> <span class=\"stake\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" disabled /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\">\u00a30.00</span> </div> </td> </tr>\n", 
                            "matched": "<h3 class=\"header\"> <span>Placed (matched)</span> <label for=\"m62807343-orderMatchedByDate\">Order by Matched Date</label> <input tabindex=1 type=\"checkbox\" name=\"orderMatchedByDate\" value=\"1\" id=\"m62807343-orderMatchedByDate\" class=\"order-matched-by-date\" > </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>"
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
                        "boundingBox": "#mod-betslip-62807343-container", 
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
                "srcNode": "#mod-tab-container-62807339", 
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
                "boundingBox": "#mod-tab-container-62807339-container", 
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
            "instanceId": "62807348", 
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
                "eventName": "Switzerland v Ecuador", 
                "production": {
                    "ready": 0
                }, 
                "marketName": null, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-google-analytics-62807348", 
                "sportName": "SOCCER", 
                "competitionName": null, 
                "enableGoogleAnalyticsDimensions": true, 
                "US65171": true, 
                "test_group": "ilp_sportshighlight|liquidity-slider", 
                "test_name": "ItalyLandingPage|liquidity-slider-cfg", 
                "boundingBox": "#mod-google-analytics-62807348-container", 
                "info": {
                    "enabled": null
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "experience": "EXCHANGE", 
                "bucket_id": 74, 
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
            "instanceId": "62807352", 
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
                "srcNode": "#mod-starfavourites-62807352", 
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
                "boundingBox": "#mod-starfavourites-62807352-container", 
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
            "instanceId": "62807353", 
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
                    "instanceId": "62807401", 
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
                        "srcNode": "#mod-timeline-62807401", 
                        "loggedIn": false, 
                        "container": true, 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": false, 
                                "bubbleToParent": false
                            }
                        }, 
                        "boundingBox": "#mod-timeline-62807401-container", 
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
                    "instanceId": "62807402", 
                    "type": "headtohead", 
                    "translations": {}, 
                    "modules": [], 
                    "constructor": "FMPHeadToHead", 
                    "services": [], 
                    "config": {
                        "info": {
                            "enabled": null
                        }, 
                        "srcNode": "#mod-headtohead-62807402", 
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
                        "boundingBox": "#mod-headtohead-62807402-container", 
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
                "matchStatus": "Sun 15 Jun 6PM", 
                "periodicUpdates": {
                    "timeline": {
                        "keys": {
                            "default": [
                                "27113546"
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
                "srcNode": "#mod-matchheader-62807353", 
                "showTimeElapsed": true, 
                "ajax": {
                    "enabled": false
                }, 
                "startTime": 1402848000000, 
                "boundingBox": "#mod-matchheader-62807353-container", 
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
            "instanceId": "62807356", 
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
                "srcNode": "#mod-toggle-62807356", 
                "ajax": {
                    "enabled": true
                }, 
                "boundingBox": "#mod-toggle-62807356-container", 
                "redesign": true, 
                "info": {
                    "enabled": null
                }, 
                "alwayShowToggle": false, 
                "cms": true, 
                "disableOnInplay": {
                    "eventId": "27113546"
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
            "instanceId": "62807357", 
            "type": "marketgroups", 
            "translations": {
                "FMP.TAB.EMPTY": "There are no markets available"
            }, 
            "modules": [
                {
                    "instanceId": "62807403", 
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
                                        "1.112173618"
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
                        "marketId": "1.112173618", 
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
                        "srcNode": "#mod-minimarketview-62807403", 
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
                        "boundingBox": "#mod-minimarketview-62807403-container", 
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
                    "instanceId": "62807404", 
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
                                        "1.112173619"
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
                        "marketId": "1.112173619", 
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
                        "srcNode": "#mod-minimarketview-62807404", 
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
                        "boundingBox": "#mod-minimarketview-62807404-container", 
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
                    "instanceId": "62807405", 
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
                                        "1.113441545"
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
                        "marketId": "1.113441545", 
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
                        "srcNode": "#mod-minimarketview-62807405", 
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
                        "boundingBox": "#mod-minimarketview-62807405-container", 
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
                    "instanceId": "62807406", 
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
                                        "1.113441549"
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
                        "marketId": "1.113441549", 
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
                        "srcNode": "#mod-minimarketview-62807406", 
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
                        "boundingBox": "#mod-minimarketview-62807406-container", 
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
                    "instanceId": "62807407", 
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
                                        "1.113441534"
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
                        "marketId": "1.113441534", 
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
                        "srcNode": "#mod-minimarketview-62807407", 
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
                        "boundingBox": "#mod-minimarketview-62807407-container", 
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
                    "instanceId": "62807408", 
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
                                        "1.113441566"
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
                        "marketId": "1.113441566", 
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
                        "srcNode": "#mod-minimarketview-62807408", 
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
                        "boundingBox": "#mod-minimarketview-62807408-container", 
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
                    "instanceId": "62807409", 
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
                                        "1.113441635"
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
                        "marketId": "1.113441635", 
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
                        "srcNode": "#mod-minimarketview-62807409", 
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
                        "boundingBox": "#mod-minimarketview-62807409-container", 
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
                    "instanceId": "62807410", 
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
                                        "1.113441544"
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
                        "marketId": "1.113441544", 
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
                        "srcNode": "#mod-minimarketview-62807410", 
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
                        "boundingBox": "#mod-minimarketview-62807410-container", 
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
                    "instanceId": "62807411", 
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
                                        "1.113441532"
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
                        "marketId": "1.113441532", 
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
                        "srcNode": "#mod-minimarketview-62807411", 
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
                        "boundingBox": "#mod-minimarketview-62807411-container", 
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
                    "instanceId": "62807412", 
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
                                        "1.113441548"
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
                        "marketId": "1.113441548", 
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
                        "srcNode": "#mod-minimarketview-62807412", 
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
                        "boundingBox": "#mod-minimarketview-62807412-container", 
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
                    "instanceId": "62807413", 
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
                                        "1.113441553"
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
                        "marketId": "1.113441553", 
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
                        "srcNode": "#mod-minimarketview-62807413", 
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
                        "boundingBox": "#mod-minimarketview-62807413-container", 
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
                    "instanceId": "62807414", 
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
                                        "1.113441535"
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
                        "marketId": "1.113441535", 
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
                        "srcNode": "#mod-minimarketview-62807414", 
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
                        "boundingBox": "#mod-minimarketview-62807414-container", 
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
                    "instanceId": "62807415", 
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
                                        "1.113441634"
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
                        "marketId": "1.113441634", 
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
                        "srcNode": "#mod-minimarketview-62807415", 
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
                        "boundingBox": "#mod-minimarketview-62807415-container", 
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
                    "instanceId": "62807416", 
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
                                        "1.113441636"
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
                        "marketId": "1.113441636", 
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
                        "srcNode": "#mod-minimarketview-62807416", 
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
                        "boundingBox": "#mod-minimarketview-62807416-container", 
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
                                "1.112173619", 
                                "1.113441532", 
                                "1.113441534", 
                                "1.113441535", 
                                "1.113441544", 
                                "1.113441545", 
                                "1.113441548", 
                                "1.113441549", 
                                "1.113441553", 
                                "1.113441566", 
                                "1.112173618", 
                                "1.113441634", 
                                "1.113441635", 
                                "1.113441636"
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
                "eventId": "27113546", 
                "allowExpand": true, 
                "isSportsbook": false, 
                "isLinearViewActive": false, 
                "currencyCode": "GBP", 
                "marketModules": {
                    "0": {
                        "62807409": "1.113441635", 
                        "62807408": "1.113441566", 
                        "62807403": "1.112173618", 
                        "62807405": "1.113441545", 
                        "62807404": "1.112173619", 
                        "62807407": "1.113441534", 
                        "62807406": "1.113441549", 
                        "62807416": "1.113441636", 
                        "62807414": "1.113441535", 
                        "62807415": "1.113441634", 
                        "62807412": "1.113441548", 
                        "62807413": "1.113441553", 
                        "62807410": "1.113441544", 
                        "62807411": "1.113441532"
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
                "srcNode": "#mod-marketgroups-62807357", 
                "sportName": "SOCCER", 
                "selectedTabCookie": "1", 
                "enableGoogleAnalyticsDimensions": true, 
                "cashoutEnabled": true, 
                "isAjax": false, 
                "ajax": {
                    "enabled": true
                }, 
                "numberOfMarketsToExpandByDefault": 8, 
                "boundingBox": "#mod-marketgroups-62807357-container", 
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
                        "bucket_id": 74, 
                        "pkg": "27113546", 
                        "test_name": "ItalyLandingPage|liquidity-slider-cfg", 
                        "sport": 1, 
                        "evt": "27113546", 
                        "page": "match"
                    }, 
                    "server": "wat.betfair.com", 
                    "requestId": "ef8a2360-f167-11e3-b100-90e2ba0fa318", 
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
                    "eventId": "27113546", 
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
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 1, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_85", 
                    "marketId": "924.6532923", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 8.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 2407529, 
                            "marketId": "924.6532923", 
                            "runnerName": "Over 8.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "REMOVED", 
                            "handicap": 0.0, 
                            "selectionId": 2407528, 
                            "marketId": "924.6532923", 
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
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 1, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_75", 
                    "marketId": "924.6532922", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 7.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1485573, 
                            "marketId": "924.6532922", 
                            "runnerName": "Over 7.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "REMOVED", 
                            "handicap": 0.0, 
                            "selectionId": 1485572, 
                            "marketId": "924.6532922", 
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
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_05", 
                    "marketId": "924.6532915", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 0.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5851483, 
                            "marketId": "924.6532915", 
                            "runnerName": "Over 0.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5851482, 
                            "marketId": "924.6532915", 
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
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "CORRECT_SCORE", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 10403.772625385627, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441544", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 443.7930588309357, 
                    "marketName": "Correct Score", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "1.113441544", 
                            "runnerName": "0 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.0, 
                                        "size": 283.3844663329566
                                    }, 
                                    {
                                        "price": 6.4, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 6.2, 
                                        "size": 3.4838709677419355
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 7.8, 
                                        "size": 24.96970883028165
                                    }, 
                                    {
                                        "price": 8.0, 
                                        "size": 87.58049410624899
                                    }, 
                                    {
                                        "price": 8.2, 
                                        "size": 18.95462619086065
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "1.113441544", 
                            "runnerName": "0 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 8.2, 
                                        "size": 17.07
                                    }, 
                                    {
                                        "price": 8.0, 
                                        "size": 80.41422573873729
                                    }, 
                                    {
                                        "price": 7.0, 
                                        "size": 2.0760766764319163
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 8.8, 
                                        "size": 93.28602402485618
                                    }, 
                                    {
                                        "price": 9.0, 
                                        "size": 25.23
                                    }, 
                                    {
                                        "price": 9.4, 
                                        "size": 46.79
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "1.113441544", 
                            "runnerName": "0 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 17.5, 
                                        "size": 78.65548591855861
                                    }, 
                                    {
                                        "price": 16.0, 
                                        "size": 20.0
                                    }, 
                                    {
                                        "price": 11.5, 
                                        "size": 87.46155821088325
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 20.0, 
                                        "size": 56.51542063620216
                                    }, 
                                    {
                                        "price": 21.0, 
                                        "size": 47.83970883028165
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 16, 
                            "marketId": "1.113441544", 
                            "runnerName": "0 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 55.0, 
                                        "size": 50.87706281285322
                                    }, 
                                    {
                                        "price": 48.0, 
                                        "size": 6.38
                                    }, 
                                    {
                                        "price": 29.0, 
                                        "size": 32.14
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 70.0, 
                                        "size": 29.03
                                    }, 
                                    {
                                        "price": 75.0, 
                                        "size": 17.761989342806395
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "1.113441544", 
                            "runnerName": "1 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.0, 
                                        "size": 125.24049410624899
                                    }, 
                                    {
                                        "price": 5.9, 
                                        "size": 102.73682424388387
                                    }, 
                                    {
                                        "price": 5.8, 
                                        "size": 5.060816717428466
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 7.2, 
                                        "size": 3.0
                                    }, 
                                    {
                                        "price": 7.6, 
                                        "size": 82.35104149846602
                                    }, 
                                    {
                                        "price": 8.0, 
                                        "size": 36.76
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "1.113441544", 
                            "runnerName": "1 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 6.8, 
                                        "size": 167.41687982979727
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 54.09333118036493
                                    }, 
                                    {
                                        "price": 5.9, 
                                        "size": 161.22
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 7.0, 
                                        "size": 12.62
                                    }, 
                                    {
                                        "price": 7.4, 
                                        "size": 73.47004682706282
                                    }, 
                                    {
                                        "price": 8.0, 
                                        "size": 59.74
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "1.113441544", 
                            "runnerName": "1 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 14.5, 
                                        "size": 21.579708830281653
                                    }, 
                                    {
                                        "price": 14.0, 
                                        "size": 53.285968028419184
                                    }, 
                                    {
                                        "price": 12.5, 
                                        "size": 26.09
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 15.5, 
                                        "size": 58.97522957951466
                                    }, 
                                    {
                                        "price": 17.0, 
                                        "size": 35.1
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 15, 
                            "marketId": "1.113441544", 
                            "runnerName": "1 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 42.0, 
                                        "size": 56.354973357016
                                    }, 
                                    {
                                        "price": 29.0, 
                                        "size": 32.14
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 11.54
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 50.0, 
                                        "size": 20.44
                                    }, 
                                    {
                                        "price": 55.0, 
                                        "size": 15.33989988696916
                                    }, 
                                    {
                                        "price": 60.0, 
                                        "size": 10.49572097529469
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "1.113441544", 
                            "runnerName": "2 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 13.5, 
                                        "size": 5.739708830281651
                                    }, 
                                    {
                                        "price": 13.0, 
                                        "size": 46.82706281285322
                                    }, 
                                    {
                                        "price": 11.0, 
                                        "size": 30.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 15.5, 
                                        "size": 103.35477313095431
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 10, 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "1.113441544", 
                            "runnerName": "2 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 12.5, 
                                        "size": 98.41004682706281
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 2.799708830281651
                                    }, 
                                    {
                                        "price": 9.8, 
                                        "size": 101.64767990193009
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 14.0, 
                                        "size": 54.09333118036493
                                    }, 
                                    {
                                        "price": 14.5, 
                                        "size": 25.81
                                    }, 
                                    {
                                        "price": 230.0, 
                                        "size": 2.0217672872629944
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 11, 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "1.113441544", 
                            "runnerName": "2 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 23.0, 
                                        "size": 61.035968028419184
                                    }, 
                                    {
                                        "price": 20.0, 
                                        "size": 2.799708830281651
                                    }, 
                                    {
                                        "price": 18.5, 
                                        "size": 17.14
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 26.0, 
                                        "size": 54.09333118036493
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 23.87
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 12, 
                            "handicap": 0.0, 
                            "selectionId": 14, 
                            "marketId": "1.113441544", 
                            "runnerName": "2 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 70.0, 
                                        "size": 17.761989342806395
                                    }, 
                                    {
                                        "price": 65.0, 
                                        "size": 10.03
                                    }, 
                                    {
                                        "price": 40.0, 
                                        "size": 23.07
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 80.0, 
                                        "size": 16.66
                                    }, 
                                    {
                                        "price": 85.0, 
                                        "size": 15.33989988696916
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 13, 
                            "handicap": 0.0, 
                            "selectionId": 10, 
                            "marketId": "1.113441544", 
                            "runnerName": "3 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 36.0, 
                                        "size": 72.97751009203941
                                    }, 
                                    {
                                        "price": 32.0, 
                                        "size": 2.799708830281651
                                    }, 
                                    {
                                        "price": 30.0, 
                                        "size": 10.34
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 44.0, 
                                        "size": 33.50358146294204
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 14, 
                            "handicap": 0.0, 
                            "selectionId": 11, 
                            "marketId": "1.113441544", 
                            "runnerName": "3 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 32.0, 
                                        "size": 69.97333118036494
                                    }, 
                                    {
                                        "price": 29.0, 
                                        "size": 2.799708830281651
                                    }, 
                                    {
                                        "price": 22.0, 
                                        "size": 14.29
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 38.0, 
                                        "size": 15.743581462942034
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 15, 
                            "handicap": 0.0, 
                            "selectionId": 12, 
                            "marketId": "1.113441544", 
                            "runnerName": "3 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 55.0, 
                                        "size": 46.43952849991927
                                    }, 
                                    {
                                        "price": 48.0, 
                                        "size": 6.38
                                    }, 
                                    {
                                        "price": 40.0, 
                                        "size": 23.07
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 70.0, 
                                        "size": 21.58
                                    }, 
                                    {
                                        "price": 75.0, 
                                        "size": 15.33989988696916
                                    }, 
                                    {
                                        "price": 80.0, 
                                        "size": 15.33989988696916
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 16, 
                            "handicap": 0.0, 
                            "selectionId": 13, 
                            "marketId": "1.113441544", 
                            "runnerName": "3 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 130.0, 
                                        "size": 16.95462619086065
                                    }, 
                                    {
                                        "price": 95.0, 
                                        "size": 3.19
                                    }, 
                                    {
                                        "price": 85.0, 
                                        "size": 20.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 180.0, 
                                        "size": 8.61
                                    }, 
                                    {
                                        "price": 190.0, 
                                        "size": 12.488066653630591
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 17, 
                            "handicap": 0.0, 
                            "selectionId": 4506345, 
                            "marketId": "1.113441544", 
                            "runnerName": "Any Unquoted ", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 20.0, 
                                        "size": 73.47004682706282
                                    }, 
                                    {
                                        "price": 18.5, 
                                        "size": 13.78
                                    }, 
                                    {
                                        "price": 12.5, 
                                        "size": 6.808877428592109
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 27.0, 
                                        "size": 88.80994671403198
                                    }, 
                                    {
                                        "price": 85.0, 
                                        "size": 3.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 17, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 17, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
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
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "PENALTY_TAKEN", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 8.4, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441566", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 0.0, 
                    "marketName": "Penalty Taken?", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 30246, 
                            "marketId": "1.113441566", 
                            "runnerName": "Yes", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.01, 
                                        "size": 2.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1000.0, 
                                        "size": 2.2
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 30247, 
                            "marketId": "1.113441566", 
                            "runnerName": "No", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.01, 
                                        "size": 2.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1000.0, 
                                        "size": 2.2
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_45", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 25200.66030979962, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441535", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 49.57198514218969, 
                    "marketName": "Over/Under 4.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1222347, 
                            "marketId": "1.113441535", 
                            "runnerName": "Under 4.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.08, 
                                        "size": 94.02551267560149
                                    }, 
                                    {
                                        "price": 1.07, 
                                        "size": 3338.4466332956567
                                    }, 
                                    {
                                        "price": 1.06, 
                                        "size": 3661.3918940739545
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.09, 
                                        "size": 15.0
                                    }, 
                                    {
                                        "price": 1.12, 
                                        "size": 875.0
                                    }, 
                                    {
                                        "price": 1.13, 
                                        "size": 814.1592920353982
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1222346, 
                            "marketId": "1.113441535", 
                            "runnerName": "Over 4.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 9.8, 
                                        "size": 101.3625
                                    }, 
                                    {
                                        "price": 9.2, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 13.5, 
                                        "size": 7.528118939883647
                                    }, 
                                    {
                                        "price": 15.5, 
                                        "size": 230.64672519131724
                                    }, 
                                    {
                                        "price": 18.0, 
                                        "size": 215.7895209365798
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_85", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 720.6147263038915, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441636", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 0.0, 
                    "marketName": "Over/Under 8.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 2407528, 
                            "marketId": "1.113441636", 
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
                            "marketId": "1.113441636", 
                            "runnerName": "Over 8.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {}
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_45", 
                    "marketId": "924.6532919", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 4.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222346, 
                            "marketId": "924.6532919", 
                            "runnerName": "Over 4.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222347, 
                            "marketId": "924.6532919", 
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
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_15", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 6973.458276378657, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441532", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 25.44997025890194, 
                    "marketName": "Over/Under 1.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1221385, 
                            "marketId": "1.113441532", 
                            "runnerName": "Under 1.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.54, 
                                        "size": 12.21967915336805
                                    }, 
                                    {
                                        "price": 2.52, 
                                        "size": 375.0009611466095
                                    }, 
                                    {
                                        "price": 2.5, 
                                        "size": 98.65970883028166
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.68, 
                                        "size": 457.0064160898068
                                    }, 
                                    {
                                        "price": 2.7, 
                                        "size": 84.80712207268873
                                    }, 
                                    {
                                        "price": 3.3, 
                                        "size": 43.63636363636364
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1221386, 
                            "marketId": "1.113441532", 
                            "runnerName": "Over 1.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.6, 
                                        "size": 398.3709157512596
                                    }, 
                                    {
                                        "price": 1.59, 
                                        "size": 372.22343833887714
                                    }, 
                                    {
                                        "price": 1.58, 
                                        "size": 142.10613452918466
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.64, 
                                        "size": 2.799708830281651
                                    }, 
                                    {
                                        "price": 1.65, 
                                        "size": 232.42322401678155
                                    }, 
                                    {
                                        "price": 1.66, 
                                        "size": 354.2086965656912
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_35", 
                    "marketId": "924.6532918", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 3.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222345, 
                            "marketId": "924.6532918", 
                            "runnerName": "Over 3.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222344, 
                            "marketId": "924.6532918", 
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
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 34, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 34, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "CORRECT_SCORE", 
                    "marketId": "924.6532895", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Correct Score", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "924.6532895", 
                            "runnerName": "0 - 0"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "924.6532895", 
                            "runnerName": "0 - 1"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "924.6532895", 
                            "runnerName": "0 - 2"
                        }, 
                        {
                            "sortPriority": 4, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 16, 
                            "marketId": "924.6532895", 
                            "runnerName": "0 - 3"
                        }, 
                        {
                            "sortPriority": 5, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "924.6532895", 
                            "runnerName": "1 - 0"
                        }, 
                        {
                            "sortPriority": 6, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "924.6532895", 
                            "runnerName": "1 - 1"
                        }, 
                        {
                            "sortPriority": 7, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "924.6532895", 
                            "runnerName": "1 - 2"
                        }, 
                        {
                            "sortPriority": 8, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 15, 
                            "marketId": "924.6532895", 
                            "runnerName": "1 - 3"
                        }, 
                        {
                            "sortPriority": 9, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "924.6532895", 
                            "runnerName": "2 - 0"
                        }, 
                        {
                            "sortPriority": 10, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "924.6532895", 
                            "runnerName": "2 - 1"
                        }, 
                        {
                            "sortPriority": 11, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "924.6532895", 
                            "runnerName": "2 - 2"
                        }, 
                        {
                            "sortPriority": 12, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 14, 
                            "marketId": "924.6532895", 
                            "runnerName": "2 - 3"
                        }, 
                        {
                            "sortPriority": 13, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 10, 
                            "marketId": "924.6532895", 
                            "runnerName": "3 - 0"
                        }, 
                        {
                            "sortPriority": 14, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 11, 
                            "marketId": "924.6532895", 
                            "runnerName": "3 - 1"
                        }, 
                        {
                            "sortPriority": 15, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 12, 
                            "marketId": "924.6532895", 
                            "runnerName": "3 - 2"
                        }, 
                        {
                            "sortPriority": 16, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 13, 
                            "marketId": "924.6532895", 
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
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_75", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 720.6147263038915, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441635", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 9.96, 
                    "marketName": "Over/Under 7.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1485572, 
                            "marketId": "1.113441635", 
                            "runnerName": "Under 7.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "lay": [
                                    {
                                        "price": 1.01, 
                                        "size": 714.02
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1485573, 
                            "marketId": "1.113441635", 
                            "runnerName": "Over 7.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 100.0, 
                                        "size": 7.211602
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 6.594726303891491
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "HALF_TIME", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 378.10460041301513, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441545", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 261.5309898272243, 
                    "marketName": "Half Time", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 919985, 
                            "marketId": "1.113441545", 
                            "runnerName": "Switzerland (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.35, 
                                        "size": 76.26975565734446
                                    }, 
                                    {
                                        "price": 3.0, 
                                        "size": 2.906038101388441
                                    }, 
                                    {
                                        "price": 1.25, 
                                        "size": 635.3245075879885
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.65, 
                                        "size": 3.363690641371713
                                    }, 
                                    {
                                        "price": 3.75, 
                                        "size": 28.232296773551283
                                    }, 
                                    {
                                        "price": 3.85, 
                                        "size": 4.036815759728726
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 923696, 
                            "marketId": "1.113441545", 
                            "runnerName": "Ecuador (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.4, 
                                        "size": 2.799708830281651
                                    }, 
                                    {
                                        "price": 4.2, 
                                        "size": 55.70805748425642
                                    }, 
                                    {
                                        "price": 3.6, 
                                        "size": 2.4216984178237007
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 4.9, 
                                        "size": 108.07772366803587
                                    }, 
                                    {
                                        "price": 5.0, 
                                        "size": 78.31422573873729
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 2004841, 
                            "marketId": "1.113441545", 
                            "runnerName": "The Draw (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.02, 
                                        "size": 58.507766314538074
                                    }, 
                                    {
                                        "price": 1.86, 
                                        "size": 8.35442554535954
                                    }, 
                                    {
                                        "price": 1.25, 
                                        "size": 631.4823401237173
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.12, 
                                        "size": 5.791259830663563
                                    }, 
                                    {
                                        "price": 2.16, 
                                        "size": 112.34055055684422
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_25", 
                    "marketId": "924.6532917", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 2.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 47973, 
                            "marketId": "924.6532917", 
                            "runnerName": "Over 2.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 47972, 
                            "marketId": "924.6532917", 
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
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_05", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 108019.3302094284, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441634", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 9.681646939957362, 
                    "marketName": "Over/Under 0.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 5851482, 
                            "marketId": "1.113441634", 
                            "runnerName": "Under 0.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 6.8, 
                                        "size": 965.25
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 4.414435134173141
                                    }, 
                                    {
                                        "price": 6.4, 
                                        "size": 1534.5848018360948
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 7.8, 
                                        "size": 5667.718974358973
                                    }, 
                                    {
                                        "price": 8.2, 
                                        "size": 6162.089118871037
                                    }, 
                                    {
                                        "price": 8.8, 
                                        "size": 1398.2465909090909
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 5851483, 
                            "marketId": "1.113441634", 
                            "runnerName": "Over 0.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.15, 
                                        "size": 38441.92
                                    }, 
                                    {
                                        "price": 1.14, 
                                        "size": 44323.79970883028
                                    }, 
                                    {
                                        "price": 1.13, 
                                        "size": 10889.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.17, 
                                        "size": 5610.0
                                    }, 
                                    {
                                        "price": 1.18, 
                                        "size": 7805.476764969477
                                    }, 
                                    {
                                        "price": 1.19, 
                                        "size": 537.8151260504202
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": true, 
                    "totalAvailable": 301252.46457107144, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.112173618", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 13318.717927835572, 
                    "marketName": "Match Odds", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 15293, 
                            "marketId": "1.112173618", 
                            "runnerName": "Switzerland", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.6, 
                                        "size": 24.366260136579854
                                    }, 
                                    {
                                        "price": 2.58, 
                                        "size": 169.56939851324915
                                    }, 
                                    {
                                        "price": 2.56, 
                                        "size": 55.34
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.64, 
                                        "size": 81.06249999999999
                                    }, 
                                    {
                                        "price": 2.66, 
                                        "size": 209.07417489714607
                                    }, 
                                    {
                                        "price": 2.68, 
                                        "size": 767.1708164853549
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 15303, 
                            "marketId": "1.112173618", 
                            "runnerName": "Ecuador", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.3, 
                                        "size": 64.85
                                    }, 
                                    {
                                        "price": 3.25, 
                                        "size": 778.4466217958285
                                    }, 
                                    {
                                        "price": 3.2, 
                                        "size": 173.79290788325267
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.4, 
                                        "size": 269.82142557886755
                                    }, 
                                    {
                                        "price": 3.45, 
                                        "size": 237.813884057971
                                    }, 
                                    {
                                        "price": 3.5, 
                                        "size": 2.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "1.112173618", 
                            "runnerName": "The Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.15, 
                                        "size": 499.19945260778303
                                    }, 
                                    {
                                        "price": 3.1, 
                                        "size": 1996.5658644531027
                                    }, 
                                    {
                                        "price": 3.05, 
                                        "size": 1710.832720580989
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.2, 
                                        "size": 1948.5912065307668
                                    }, 
                                    {
                                        "price": 3.25, 
                                        "size": 2901.465489355347
                                    }, 
                                    {
                                        "price": 3.3, 
                                        "size": 3261.048677947009
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "HALF_TIME_SCORE", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 3437.7096839745645, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441548", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 0.0, 
                    "marketName": "Half Time Score", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "1.113441548", 
                            "runnerName": "0 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.36, 
                                        "size": 268.0445664459874
                                    }, 
                                    {
                                        "price": 2.02, 
                                        "size": 59.40594059405941
                                    }, 
                                    {
                                        "price": 1.96, 
                                        "size": 185.93719321344832
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.52, 
                                        "size": 2.0
                                    }, 
                                    {
                                        "price": 2.56, 
                                        "size": 49.24915226869046
                                    }, 
                                    {
                                        "price": 2.58, 
                                        "size": 78.31422573873729
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "1.113441548", 
                            "runnerName": "1 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 10.0, 
                                        "size": 76.6994994348458
                                    }, 
                                    {
                                        "price": 5.8, 
                                        "size": 20.66068965517241
                                    }, 
                                    {
                                        "price": 5.3, 
                                        "size": 2.1303984245458465
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 14.5, 
                                        "size": 78.31422573873729
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
                            "marketId": "1.113441548", 
                            "runnerName": "2 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 120.0, 
                                        "size": 16.95462619086065
                                    }, 
                                    {
                                        "price": 9.4, 
                                        "size": 12.733787234042554
                                    }, 
                                    {
                                        "price": 8.0, 
                                        "size": 26.668015041537757
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 280.0, 
                                        "size": 9.688357823348943
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
                            "marketId": "1.113441548", 
                            "runnerName": "1 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.4, 
                                        "size": 243.82367188761506
                                    }, 
                                    {
                                        "price": 3.55, 
                                        "size": 33.76392050935752
                                    }, 
                                    {
                                        "price": 3.35, 
                                        "size": 3.3704810895799953
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 5.6, 
                                        "size": 86.38785725819474
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
                            "marketId": "1.113441548", 
                            "runnerName": "2 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 17.0, 
                                        "size": 76.6994994348458
                                    }, 
                                    {
                                        "price": 7.2, 
                                        "size": 16.647747747747747
                                    }, 
                                    {
                                        "price": 6.2, 
                                        "size": 34.39784936456646
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 27.0, 
                                        "size": 43.597610205070254
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
                            "marketId": "1.113441548", 
                            "runnerName": "2 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 32.0, 
                                        "size": 49.24915226869046
                                    }, 
                                    {
                                        "price": 8.4, 
                                        "size": 14.258441558441557
                                    }, 
                                    {
                                        "price": 7.2, 
                                        "size": 29.626992794395175
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 60.0, 
                                        "size": 54.09333118036493
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
                            "marketId": "1.113441548", 
                            "runnerName": "0 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.0, 
                                        "size": 29.969268292682926
                                    }, 
                                    {
                                        "price": 3.75, 
                                        "size": 3.010963106691463
                                    }, 
                                    {
                                        "price": 3.7, 
                                        "size": 54.68335179710392
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 6.8, 
                                        "size": 83.96576780235752
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
                            "marketId": "1.113441548", 
                            "runnerName": "0 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 24.0, 
                                        "size": 55.70805748425642
                                    }, 
                                    {
                                        "price": 7.8, 
                                        "size": 15.353095684803002
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 31.367192663143356
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 40.0, 
                                        "size": 43.597610205070254
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
                            "marketId": "1.113441548", 
                            "runnerName": "1 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 8.6, 
                                        "size": 13.927441860465114
                                    }, 
                                    {
                                        "price": 7.4, 
                                        "size": 28.827348484090507
                                    }, 
                                    {
                                        "price": 1.91, 
                                        "size": 78.96198188428338
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 70.0, 
                                        "size": 16.95462619086065
                                    }, 
                                    {
                                        "price": 75.0, 
                                        "size": 15.33989988696916
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
                            "sortPriority": 10, 
                            "handicap": 0.0, 
                            "selectionId": 4506345, 
                            "marketId": "1.113441548", 
                            "runnerName": "Any Unquoted ", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 8.4, 
                                        "size": 15.602621516785959
                                    }, 
                                    {
                                        "price": 8.2, 
                                        "size": 24.674195323083477
                                    }, 
                                    {
                                        "price": 1.96, 
                                        "size": 76.94764561172512
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
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 10, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_25", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 7265.335553220653, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.112173619", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 824.2184462248624, 
                    "marketName": "Over/Under 2.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 47972, 
                            "marketId": "1.112173619", 
                            "runnerName": "Under 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.51, 
                                        "size": 512.8749437251843
                                    }, 
                                    {
                                        "price": 1.5, 
                                        "size": 6.458905215565962
                                    }, 
                                    {
                                        "price": 1.48, 
                                        "size": 8.199833311923607
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.55, 
                                        "size": 252.86048313085553
                                    }, 
                                    {
                                        "price": 1.56, 
                                        "size": 389.84595511060877
                                    }, 
                                    {
                                        "price": 1.57, 
                                        "size": 442.37890603107246
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 47973, 
                            "marketId": "1.112173619", 
                            "runnerName": "Over 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.8, 
                                        "size": 139.97633887600932
                                    }, 
                                    {
                                        "price": 2.78, 
                                        "size": 465.81560290279003
                                    }, 
                                    {
                                        "price": 2.76, 
                                        "size": 2.799708830281651
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.94, 
                                        "size": 184.25
                                    }, 
                                    {
                                        "price": 2.96, 
                                        "size": 41.17552074923301
                                    }, 
                                    {
                                        "price": 2.98, 
                                        "size": 37.20356496889214
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "NEXT_GOAL", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 6.0, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441553", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 0.0, 
                    "marketName": "Next Goal", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 15293, 
                            "marketId": "1.113441553", 
                            "runnerName": "Switzerland", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.01, 
                                        "size": 2.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 15303, 
                            "marketId": "1.113441553", 
                            "runnerName": "Ecuador", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.01, 
                                        "size": 2.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 69852, 
                            "marketId": "1.113441553", 
                            "runnerName": "No Goal", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.01, 
                                        "size": 2.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 9, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 9, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "HALF_TIME_FULL_TIME", 
                    "marketId": "924.6532911", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Half Time/Full Time", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 147451, 
                            "marketId": "924.6532911", 
                            "runnerName": "Switzerland/Switzerland"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 147450, 
                            "marketId": "924.6532911", 
                            "runnerName": "Switzerland/Draw"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 8105081, 
                            "marketId": "924.6532911", 
                            "runnerName": "Switzerland/Ecuador"
                        }, 
                        {
                            "sortPriority": 4, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 147452, 
                            "marketId": "924.6532911", 
                            "runnerName": "Draw/Switzerland"
                        }, 
                        {
                            "sortPriority": 5, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 3710152, 
                            "marketId": "924.6532911", 
                            "runnerName": "Draw/Draw"
                        }, 
                        {
                            "sortPriority": 6, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 153177, 
                            "marketId": "924.6532911", 
                            "runnerName": "Draw/Ecuador"
                        }, 
                        {
                            "sortPriority": 7, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1486117, 
                            "marketId": "924.6532911", 
                            "runnerName": "Ecuador/Switzerland"
                        }, 
                        {
                            "sortPriority": 8, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 153180, 
                            "marketId": "924.6532911", 
                            "runnerName": "Ecuador/Draw"
                        }, 
                        {
                            "sortPriority": 9, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 153182, 
                            "marketId": "924.6532911", 
                            "runnerName": "Ecuador/Ecuador"
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
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_15", 
                    "marketId": "924.6532916", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 1.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1221386, 
                            "marketId": "924.6532916", 
                            "runnerName": "Over 1.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1221385, 
                            "marketId": "924.6532916", 
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
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "HALF_TIME_FULL_TIME", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 4722.451713975688, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441549", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 307.92563603736824, 
                    "marketName": "Half Time/Full Time", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 147451, 
                            "marketId": "1.113441549", 
                            "runnerName": "Switzerland/Switzerland", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.5, 
                                        "size": 78.68561278863234
                                    }, 
                                    {
                                        "price": 3.9, 
                                        "size": 16.923076923076923
                                    }, 
                                    {
                                        "price": 3.85, 
                                        "size": 181.88869293148318
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 5.2, 
                                        "size": 207.0563539480058
                                    }, 
                                    {
                                        "price": 5.3, 
                                        "size": 231.71322460842887
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 61.09817001357243
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 147450, 
                            "marketId": "1.113441549", 
                            "runnerName": "Switzerland/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 17.0, 
                                        "size": 79.12158889068303
                                    }, 
                                    {
                                        "price": 13.5, 
                                        "size": 72.0
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 81.81
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 22.0, 
                                        "size": 73.47004682706282
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 8105081, 
                            "marketId": "1.113441549", 
                            "runnerName": "Switzerland/Ecuador", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 46.0, 
                                        "size": 52.47860487647344
                                    }, 
                                    {
                                        "price": 42.0, 
                                        "size": 3.0
                                    }, 
                                    {
                                        "price": 34.0, 
                                        "size": 27.27
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 60.0, 
                                        "size": 18.946971869196556
                                    }, 
                                    {
                                        "price": 65.0, 
                                        "size": 46.82706281285322
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 147452, 
                            "marketId": "1.113441549", 
                            "runnerName": "Draw/Switzerland", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 6.0, 
                                        "size": 251.08994025512678
                                    }, 
                                    {
                                        "price": 5.5, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 5.2, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 6.6, 
                                        "size": 10.0
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 88.80994671403198
                                    }, 
                                    {
                                        "price": 10.5, 
                                        "size": 33.92199830294327
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 3710152, 
                            "marketId": "1.113441549", 
                            "runnerName": "Draw/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.4, 
                                        "size": 155.01372517358308
                                    }, 
                                    {
                                        "price": 3.95, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 3.8, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 4.7, 
                                        "size": 81.12158889068303
                                    }, 
                                    {
                                        "price": 6.4, 
                                        "size": 55.54681628583873
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 7.018436653998314
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 153177, 
                            "marketId": "1.113441549", 
                            "runnerName": "Draw/Ecuador", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.4, 
                                        "size": 261.56781596861515
                                    }, 
                                    {
                                        "price": 5.9, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 5.6, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 8.4, 
                                        "size": 81.12158889068303
                                    }, 
                                    {
                                        "price": 8.6, 
                                        "size": 48.441789116744715
                                    }, 
                                    {
                                        "price": 16.0, 
                                        "size": 22.238500841964438
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 1486117, 
                            "marketId": "1.113441549", 
                            "runnerName": "Ecuador/Switzerland", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 46.0, 
                                        "size": 40.368157597287265
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 35.61
                                    }, 
                                    {
                                        "price": 24.0, 
                                        "size": 39.13
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 55.0, 
                                        "size": 5.2217982861188865
                                    }, 
                                    {
                                        "price": 60.0, 
                                        "size": 16.147263038914904
                                    }, 
                                    {
                                        "price": 65.0, 
                                        "size": 10.49572097529469
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 153180, 
                            "marketId": "1.113441549", 
                            "runnerName": "Ecuador/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 21.0, 
                                        "size": 19.754335021142303
                                    }, 
                                    {
                                        "price": 13.5, 
                                        "size": 72.0
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 81.81
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 25.0, 
                                        "size": 79.12158889068303
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 153182, 
                            "marketId": "1.113441549", 
                            "runnerName": "Ecuador/Ecuador", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.9, 
                                        "size": 262.76441143226225
                                    }, 
                                    {
                                        "price": 4.9, 
                                        "size": 13.46938775510204
                                    }, 
                                    {
                                        "price": 4.7, 
                                        "size": 67.07903569919367
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 7.0, 
                                        "size": 250.28257710318104
                                    }, 
                                    {
                                        "price": 10.5, 
                                        "size": 33.946262193285435
                                    }, 
                                    {
                                        "price": 16.5, 
                                        "size": 3.6580942560233636
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 9, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 9, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "OVER_UNDER_35", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 16541.763138362177, 
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113441534", 
                    "eventName": "Switzerland v Ecuador", 
                    "totalMatched": 138.8843541924068, 
                    "marketName": "Over/Under 3.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1222344, 
                            "marketId": "1.113441534", 
                            "runnerName": "Under 3.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.2, 
                                        "size": 44.95
                                    }, 
                                    {
                                        "price": 1.19, 
                                        "size": 91.60965554431363
                                    }, 
                                    {
                                        "price": 1.18, 
                                        "size": 30.393548969231283
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.21, 
                                        "size": 735.0780876450726
                                    }, 
                                    {
                                        "price": 1.23, 
                                        "size": 1264.577125409263
                                    }, 
                                    {
                                        "price": 1.24, 
                                        "size": 419.35483870967744
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1222345, 
                            "marketId": "1.113441534", 
                            "runnerName": "Over 3.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.7, 
                                        "size": 156.16896341143317
                                    }, 
                                    {
                                        "price": 5.5, 
                                        "size": 282.57710318101084
                                    }, 
                                    {
                                        "price": 5.2, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 6.0, 
                                        "size": 8.99
                                    }, 
                                    {
                                        "price": 6.4, 
                                        "size": 22.646839234156417
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 43.597610205070254
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1402848000000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Switzerland", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113546", 
                    "marketTime": 1402848000000, 
                    "numberOfRunners": 3, 
                    "suspendTime": 1402848000000, 
                    "numberOfActiveRunners": 3, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "15 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketId": "924.6532914", 
                    "eventName": "Switzerland v Ecuador", 
                    "status": "OPEN", 
                    "marketName": "Match Odds", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 15293, 
                            "marketId": "924.6532914", 
                            "runnerName": "Switzerland"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "924.6532914", 
                            "runnerName": "The Draw"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 15303, 
                            "marketId": "924.6532914", 
                            "runnerName": "Ecuador"
                        }
                    ], 
                    "numberOfWinners": 1, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "betDelay": 7, 
                    "bettingType": "ODDS"
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
                    "1.113441535", 
                    "924.6532919"
                ], 
                [
                    "1.113441636", 
                    "924.6532923"
                ], 
                [
                    "1.113441544", 
                    "924.6532895"
                ], 
                [
                    "1.113441635", 
                    "924.6532922"
                ], 
                [
                    "1.113441532", 
                    "924.6532916"
                ], 
                [
                    "1.113441634", 
                    "924.6532915"
                ], 
                [
                    "1.112173618", 
                    "924.6532914"
                ], 
                [
                    "1.112173619", 
                    "924.6532917"
                ], 
                [
                    "1.113441534", 
                    "924.6532918"
                ], 
                [
                    "1.114310450", 
                    "924.11518684"
                ], 
                [
                    "1.113441549", 
                    "924.6532911"
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