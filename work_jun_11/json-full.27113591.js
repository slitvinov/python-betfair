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
            "instanceId": "14574974", 
            "type": "footer", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Footer", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-footer-14574974", 
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
                "boundingBox": "#mod-footer-14574974-container", 
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
            "instanceId": "14574975", 
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
                "srcNode": "#mod-marketrules-14574975", 
                "bfPointsUrl": "https://accountservices.betfair.com/myaccount/account/OpenMyAccount.do?tabID=10", 
                "isAjax": false, 
                "ajax": {
                    "enabled": true
                }, 
                "reportIfLoaded": false, 
                "boundingBox": "#mod-marketrules-14574975-container", 
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
            "instanceId": "14574976", 
            "type": "cashout-help", 
            "translations": {}, 
            "modules": [], 
            "constructor": "CashoutHelp", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-cashout-help-14574976", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-cashout-help-14574976-container", 
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
            "instanceId": "14574977", 
            "type": "readwebmessages", 
            "translations": {}, 
            "modules": [], 
            "constructor": "ReadWebMessages", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-readwebmessages-14574977", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-readwebmessages-14574977-container", 
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
            "instanceId": "14574978", 
            "type": "mediaplextag", 
            "translations": {}, 
            "modules": [], 
            "constructor": "MediaplexTag", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-mediaplextag-14574978", 
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
                "boundingBox": "#mod-mediaplextag-14574978-container", 
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
            "instanceId": "14574955", 
            "type": "uservoice", 
            "translations": {}, 
            "modules": [], 
            "constructor": "", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-uservoice-14574955", 
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
                "boundingBox": "#mod-uservoice-14574955-container", 
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
            "instanceId": "14574956", 
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
                "srcNode": "#mod-promotion-modal-popup-14574956", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-promotion-modal-popup-14574956-container", 
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
            "instanceId": "14574957", 
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
                "srcNode": "#mod-update-browser-14574957", 
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
                "boundingBox": "#mod-update-browser-14574957-container", 
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
            "instanceId": "14574950", 
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
                "requestId": "4aaa1480-f168-11e3-bf9b-90e2ba0f94a0", 
                "srcNode": "#mod-login-lightbox-14574950", 
                "productName": "exchange", 
                "ajax": {
                    "enabled": true
                }, 
                "boundingBox": "#mod-login-lightbox-14574950-container", 
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
            "instanceId": "14574951", 
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
                "srcNode": "#mod-favourites-14574951", 
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
                "boundingBox": "#mod-favourites-14574951-container", 
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
            "instanceId": "14574952", 
            "type": "nav", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Nav", 
            "services": [
                "navigation"
            ], 
            "config": {
                "boundingBox": "#mod-nav-14574952-container", 
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
                "idParam": "27113591", 
                "showSportOnTv": true, 
                "showWhereIsTheMoney": true, 
                "pushEnabledSports": [
                    "1"
                ], 
                "eventName": "Belgium v Russia", 
                "marketName": null, 
                "showResultsLink": false, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-nav-14574952", 
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
            "instanceId": "14574953", 
            "type": "favmanager", 
            "translations": {}, 
            "modules": [], 
            "constructor": "Favmanager", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-favmanager-14574953", 
                "loggedIn": false, 
                "container": true, 
                "analytics": {
                    "i13n": {
                        "namespace": "i13n", 
                        "enabled": false, 
                        "bubbleToParent": false
                    }
                }, 
                "boundingBox": "#mod-favmanager-14574953-container", 
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
            "instanceId": "14574971", 
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
                "requestId": "4aaa1480-f168-11e3-bf9b-90e2ba0f94a0", 
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
            "instanceId": "14574966", 
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
                "eventName": "Belgium v Russia", 
                "production": {
                    "ready": 0
                }, 
                "dataVisualizationWithPopOutLink": false, 
                "autoPlayAllowed": true, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "playerHeight": 290, 
                "playerWidth": 334, 
                "srcNode": "#mod-livevideo-14574966", 
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
                "boundingBox": "#mod-livevideo-14574966-container", 
                "redesign": true, 
                "subDomain": "en", 
                "optAutoPlay": true, 
                "info": {
                    "enabled": null
                }, 
                "showFootballHeader": false, 
                "playerUrl": "https://videoplayer.betfair.com/GetPlayer.do?tr=1&eID=27113591&allowPopup=true&width=334&height=290&adjustWindow=false", 
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
            "instanceId": "14574967", 
            "type": "gaming-xsell-v2", 
            "translations": {}, 
            "modules": [], 
            "constructor": "GamingXSellV2", 
            "services": [], 
            "config": {
                "info": {
                    "enabled": null
                }, 
                "srcNode": "#mod-gaming-xsell-v2-14574967", 
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
                "boundingBox": "#mod-gaming-xsell-v2-14574967-container", 
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
            "instanceId": "14574968", 
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
                "srcNode": "#mod-mediaplexbanner-14574968", 
                "ajax": {
                    "enabled": false
                }, 
                "boundingBox": "#mod-mediaplexbanner-14574968-container", 
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
            "instanceId": "14574969", 
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
                "srcNode": "#mod-forum-14574969", 
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
                "boundingBox": "#mod-forum-14574969-container", 
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
                "eventId": "27113591", 
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
            "instanceId": "14574970", 
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
                "srcNode": "#mod-miniplanner-14574970", 
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
                "boundingBox": "#mod-miniplanner-14574970-container", 
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
            "instanceId": "14574940", 
            "type": "header", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "14575005", 
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
                        "srcNode": "#mod-instantsearch-ebs-14575005", 
                        "callDelay": 500, 
                        "labelClass": "label", 
                        "action": "/exchange/search", 
                        "ajax": {
                            "enabled": true
                        }, 
                        "boundingBox": "#mod-instantsearch-ebs-14575005-container", 
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
                    "instanceId": "14574942", 
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
                "srcNode": "#mod-header-14574940", 
                "defaultRegion": "GBR", 
                "newHeader": true, 
                "ajax": {
                    "enabled": false
                }, 
                "boundingBox": "#mod-header-14574940-container", 
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
            "instanceId": "14574943", 
            "type": "subnav", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "14575006", 
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
                        "srcNode": "#mod-preferences-14575006", 
                        "enableFractionalOddsTips": true, 
                        "showModalPopup": false, 
                        "feedbackUrl": "https://betfair1.uservoice.com/forums/192891-general/suggestions/3762306-liquidity-slider", 
                        "ajax": {
                            "enabled": true
                        }, 
                        "boundingBox": "#mod-preferences-14575006-container", 
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
                "srcNode": "#mod-subnav-14574943", 
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
                "boundingBox": "#mod-subnav-14574943-container", 
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
            "instanceId": "14574945", 
            "type": "tab-container", 
            "translations": {}, 
            "modules": [
                {
                    "instanceId": "14574946", 
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
                        "srcNode": "#mod-betslip-14574946", 
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
                        "boundingBox": "#mod-betslip-14574946-container", 
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
                    "instanceId": "14574947", 
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
                        "srcNode": "#mod-betslip-14574947", 
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
                        "boundingBox": "#mod-betslip-14574947-container", 
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
                    "instanceId": "14574948", 
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
                        "srcNode": "#mod-betslip-14574948", 
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
                            "unmatched": "<h3 class=\"header\" id=\"m14574948-unmatched-title\"> <span class=\"title bold\"> Waiting (unmatched) </span> <div class=\"refreshButton\"></div> </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "ineditableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "loadingMessage": "<div>List is loading....</div>", 
                            "editableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=1 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <label for=\"bet-odds-\">Odds</label> <span class=\"bf-spinner bf-spinner-content\"> <input tabindex=1 class=\"text odds\" type=\"text\" maxlength=\"6\" id=\"potential-bets--odds\" value=\"\" name=\"bet[][price]\" autocomplete=\"off\"> <button type=\"button\" class=\"bf-spinner-increment\" disabled=\"true\" tabindex=\"-1\"></button> <button type=\"button\" class=\"bf-spinner-decrement\" disabled=\"true\" tabindex=\"-1\"></button> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "dropDownList": "<select> </select>", 
                            "matched": "<h3 class=\"header\"> <span>Placed (matched)</span> <label for=\"m14574948-orderMatchedByDate\">Order by Matched Date</label> <input tabindex=1 type=\"checkbox\" name=\"orderMatchedByDate\" value=\"1\" id=\"m14574948-orderMatchedByDate\" class=\"order-matched-by-date\" > </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>"
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
                        "boundingBox": "#mod-betslip-14574948-container", 
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
                    "instanceId": "14574949", 
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
                        "srcNode": "#mod-betslip-14574949", 
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
                            "unmatched": "<h3 class=\"header\" id=\"m14574949-unmatched-title\"> <span class=\"title bold\"> Waiting (unmatched) </span> <div class=\"refreshButton\"></div> </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "unplaced": "<h3 class=\"header errorMessage\">The following bets could not be placed</h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>", 
                            "editableSelection": "<tr class=\"bet open \" id=\"bet-\" data-categorytype=\"\" data-entryId=\"\" data-version=\"\" data-eventTypeId=\"\" data-originalodds=\"\" data-ordertype=\"\" data-runnerorder=\"\" data-marketid=\"\" data-marketname=\"\" data-markettype=\"\" data-decimalodds=\"\" data-fractionalodds=\"\" data-hashadpriceupdate=\"\" data-eachway=\"\"> <td class=\"delete\"> <input tabindex=1 type=\"button\" name=\"remove[]\" value='Remove'> </td> <th scope=\"row\" class=\"runner\"> <span class=\"runner-name\"> </span> <span class=\"market-name\"></span> <input type=\"hidden\" name=\"bet[][selectionId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][marketId]\" value=\"\"> <input type=\"hidden\" name=\"bet[][type]\" value=\"\"> </th> <td class=\"odds\" id=\"potential-bets--odds\"> <label for=\"bet-odds-\">Odds</label> <span class=\"bf-spinner bf-spinner-content\"> <input tabindex=1 class=\"text odds\" type=\"text\" maxlength=\"6\" id=\"potential-bets--odds\" value=\"\" name=\"bet[][price]\" autocomplete=\"off\"> <button type=\"button\" class=\"bf-spinner-increment\" disabled=\"true\" tabindex=\"-1\"></button> <button type=\"button\" class=\"bf-spinner-decrement\" disabled=\"true\" tabindex=\"-1\"></button> </span> </td> <td class=\"stake-cell\"> <span class=\"stake\"> <label for=\"bet-stake-\">Stake</label> <input tabindex=1 class=\"text stake\" type=\"text\" maxlength=\"7\" id=\"potential-bets--stake\" value=\"\" name=\"bet[][size]\" autocomplete=\"off\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\"> \u00a30.00 </span> </div> </td> </tr>", 
                            "cancelled": "<h3 class=\"header errorMessage\">Cancelled</h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div>", 
                            "ineditableSection": "<table class=\"\" cellspacing=\"0\"> <colgroup span=\"1\" class=\"runner\"> <colgroup span=\"1\" class=\"odds\"> <colgroup span=\"1\" class=\"stake\"> <colgroup span=\"1\" class=\"profit\"> <thead> <tr> <th scope=\"col\" class=\"runner\"> <span> </span> </th> <th scope=\"col\" class=\"odds\"> </th> <th scope=\"col\" class=\"stake\"> </th> <th scope=\"col\" class=\"profit\"> </th> </tr> </thead> <tbody></tbody> </table>", 
                            "ineditableMultiplesSelection": "<tr class=\"bet\" id=\"bet-\"> <th scope=\"row\" class=\"runner-name\"></th> <td class=\"stake-cell\"> <span class=\"stake\"> </span> <span class=\"eachway\"> <label for=\"bet-eachway-\">EW</label> <input type=\"checkbox\" id=\"bet-eachway-\" name=\"eachway\" disabled /> </span> </td> <td class=\"profit\"> <div class=\"wrapper\"> <span class=\"profit-value\">\u00a30.00</span> </div> </td> </tr>\n", 
                            "matched": "<h3 class=\"header\"> <span>Placed (matched)</span> <label for=\"m14574949-orderMatchedByDate\">Order by Matched Date</label> <input tabindex=1 type=\"checkbox\" name=\"orderMatchedByDate\" value=\"1\" id=\"m14574949-orderMatchedByDate\" class=\"order-matched-by-date\" > </h3> <div class=\"back\"> </div> <div class=\"lay\"> </div> <div class=\"orderedByMatchedDate\"> </div> <div class=\"selections\"></div> <div class=\"multiples\"> </div>"
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
                        "boundingBox": "#mod-betslip-14574949-container", 
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
                "srcNode": "#mod-tab-container-14574945", 
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
                "boundingBox": "#mod-tab-container-14574945-container", 
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
            "instanceId": "14574954", 
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
                "eventName": "Belgium v Russia", 
                "production": {
                    "ready": 0
                }, 
                "marketName": null, 
                "trusted": 0, 
                "defaultHeaderLevel": 2, 
                "srcNode": "#mod-google-analytics-14574954", 
                "sportName": "SOCCER", 
                "competitionName": null, 
                "enableGoogleAnalyticsDimensions": true, 
                "US65171": true, 
                "test_group": "ilp_sportshighlight|liquidity-slider", 
                "test_name": "ItalyLandingPage|liquidity-slider-cfg", 
                "boundingBox": "#mod-google-analytics-14574954-container", 
                "info": {
                    "enabled": null
                }, 
                "ajax": {
                    "enabled": false
                }, 
                "experience": "EXCHANGE", 
                "bucket_id": 28, 
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
            "instanceId": "14574958", 
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
                "srcNode": "#mod-starfavourites-14574958", 
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
                "boundingBox": "#mod-starfavourites-14574958-container", 
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
            "instanceId": "14574959", 
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
                    "instanceId": "14575007", 
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
                        "srcNode": "#mod-timeline-14575007", 
                        "loggedIn": false, 
                        "container": true, 
                        "analytics": {
                            "i13n": {
                                "namespace": "i13n", 
                                "enabled": false, 
                                "bubbleToParent": false
                            }
                        }, 
                        "boundingBox": "#mod-timeline-14575007-container", 
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
                    "instanceId": "14575008", 
                    "type": "headtohead", 
                    "translations": {}, 
                    "modules": [], 
                    "constructor": "FMPHeadToHead", 
                    "services": [], 
                    "config": {
                        "info": {
                            "enabled": null
                        }, 
                        "srcNode": "#mod-headtohead-14575008", 
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
                        "boundingBox": "#mod-headtohead-14575008-container", 
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
                "matchStatus": "Sun 22 Jun 6PM", 
                "periodicUpdates": {
                    "timeline": {
                        "keys": {
                            "default": [
                                "27113591"
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
                "srcNode": "#mod-matchheader-14574959", 
                "showTimeElapsed": true, 
                "ajax": {
                    "enabled": false
                }, 
                "startTime": 1403452800000, 
                "boundingBox": "#mod-matchheader-14574959-container", 
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
            "instanceId": "14574962", 
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
                "srcNode": "#mod-toggle-14574962", 
                "ajax": {
                    "enabled": true
                }, 
                "boundingBox": "#mod-toggle-14574962-container", 
                "redesign": true, 
                "info": {
                    "enabled": null
                }, 
                "alwayShowToggle": false, 
                "cms": true, 
                "disableOnInplay": {
                    "eventId": "27113591"
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
            "instanceId": "14574963", 
            "type": "marketgroups", 
            "translations": {
                "FMP.TAB.EMPTY": "There are no markets available"
            }, 
            "modules": [
                {
                    "instanceId": "14575009", 
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
                                        "1.112173866"
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
                        "marketId": "1.112173866", 
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
                        "srcNode": "#mod-minimarketview-14575009", 
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
                        "boundingBox": "#mod-minimarketview-14575009-container", 
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
                    "instanceId": "14575010", 
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
                                        "1.113439195"
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
                        "marketId": "1.113439195", 
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
                        "srcNode": "#mod-minimarketview-14575010", 
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
                        "boundingBox": "#mod-minimarketview-14575010-container", 
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
                    "instanceId": "14575011", 
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
                                        "1.113439194"
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
                        "marketId": "1.113439194", 
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
                        "srcNode": "#mod-minimarketview-14575011", 
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
                        "boundingBox": "#mod-minimarketview-14575011-container", 
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
                    "instanceId": "14575012", 
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
                                        "1.113439210"
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
                        "marketId": "1.113439210", 
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
                        "srcNode": "#mod-minimarketview-14575012", 
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
                        "boundingBox": "#mod-minimarketview-14575012-container", 
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
                    "instanceId": "14575013", 
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
                                        "1.113439216"
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
                        "marketId": "1.113439216", 
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
                        "srcNode": "#mod-minimarketview-14575013", 
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
                        "boundingBox": "#mod-minimarketview-14575013-container", 
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
                    "instanceId": "14575014", 
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
                                        "1.113439197"
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
                        "marketId": "1.113439197", 
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
                        "srcNode": "#mod-minimarketview-14575014", 
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
                        "boundingBox": "#mod-minimarketview-14575014-container", 
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
                    "instanceId": "14575015", 
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
                                        "1.113439297"
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
                        "marketId": "1.113439297", 
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
                        "srcNode": "#mod-minimarketview-14575015", 
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
                        "boundingBox": "#mod-minimarketview-14575015-container", 
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
                    "instanceId": "14575016", 
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
                                        "1.113439299"
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
                        "marketId": "1.113439299", 
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
                        "srcNode": "#mod-minimarketview-14575016", 
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
                        "boundingBox": "#mod-minimarketview-14575016-container", 
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
                    "instanceId": "14575017", 
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
                                        "1.113439206"
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
                        "marketId": "1.113439206", 
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
                        "srcNode": "#mod-minimarketview-14575017", 
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
                        "boundingBox": "#mod-minimarketview-14575017-container", 
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
                    "instanceId": "14575018", 
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
                                        "1.112173867"
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
                        "marketId": "1.112173867", 
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
                        "srcNode": "#mod-minimarketview-14575018", 
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
                        "boundingBox": "#mod-minimarketview-14575018-container", 
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
                    "instanceId": "14575019", 
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
                                        "1.113439207"
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
                        "marketId": "1.113439207", 
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
                        "srcNode": "#mod-minimarketview-14575019", 
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
                        "boundingBox": "#mod-minimarketview-14575019-container", 
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
                    "instanceId": "14575020", 
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
                                        "1.113439211"
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
                        "marketId": "1.113439211", 
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
                        "srcNode": "#mod-minimarketview-14575020", 
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
                        "boundingBox": "#mod-minimarketview-14575020-container", 
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
                    "instanceId": "14575021", 
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
                                        "1.113439196"
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
                        "marketId": "1.113439196", 
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
                        "srcNode": "#mod-minimarketview-14575021", 
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
                        "boundingBox": "#mod-minimarketview-14575021-container", 
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
                    "instanceId": "14575022", 
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
                                        "1.113439229"
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
                        "marketId": "1.113439229", 
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
                        "srcNode": "#mod-minimarketview-14575022", 
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
                        "boundingBox": "#mod-minimarketview-14575022-container", 
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
                    "instanceId": "14575023", 
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
                                        "1.113439298"
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
                        "marketId": "1.113439298", 
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
                        "srcNode": "#mod-minimarketview-14575023", 
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
                        "boundingBox": "#mod-minimarketview-14575023-container", 
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
                                "1.112173866", 
                                "1.113439194", 
                                "1.113439195", 
                                "1.113439196", 
                                "1.113439197", 
                                "1.113439207", 
                                "1.113439229", 
                                "1.113439297", 
                                "1.113439298", 
                                "1.113439299", 
                                "1.112173867", 
                                "1.113439206", 
                                "1.113439210", 
                                "1.113439211", 
                                "1.113439216"
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
                "eventId": "27113591", 
                "allowExpand": true, 
                "isSportsbook": false, 
                "isLinearViewActive": false, 
                "currencyCode": "GBP", 
                "marketModules": {
                    "0": {
                        "14575009": "1.112173866", 
                        "14575019": "1.113439207", 
                        "14575018": "1.112173867", 
                        "14575023": "1.113439298", 
                        "14575013": "1.113439216", 
                        "14575022": "1.113439229", 
                        "14575011": "1.113439194", 
                        "14575010": "1.113439195", 
                        "14575017": "1.113439206", 
                        "14575016": "1.113439299", 
                        "14575020": "1.113439211", 
                        "14575021": "1.113439196", 
                        "14575015": "1.113439297", 
                        "14575012": "1.113439210", 
                        "14575014": "1.113439197"
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
                "srcNode": "#mod-marketgroups-14574963", 
                "sportName": "SOCCER", 
                "selectedTabCookie": "1", 
                "enableGoogleAnalyticsDimensions": true, 
                "cashoutEnabled": true, 
                "isAjax": false, 
                "ajax": {
                    "enabled": true
                }, 
                "numberOfMarketsToExpandByDefault": 8, 
                "boundingBox": "#mod-marketgroups-14574963-container", 
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
                        "bucket_id": 28, 
                        "pkg": "27113591", 
                        "test_name": "ItalyLandingPage|liquidity-slider-cfg", 
                        "sport": 1, 
                        "evt": "27113591", 
                        "page": "match"
                    }, 
                    "server": "wat.betfair.com", 
                    "requestId": "4aaa1480-f168-11e3-bf9b-90e2ba0f94a0", 
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
                    "eventId": "27113591", 
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
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 9, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 9, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "HALF_TIME_FULL_TIME", 
                    "marketId": "924.6533201", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Half Time/Full Time", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 147464, 
                            "marketId": "924.6533201", 
                            "runnerName": "Belgium/Belgium"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 147463, 
                            "marketId": "924.6533201", 
                            "runnerName": "Belgium/Draw"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 153210, 
                            "marketId": "924.6533201", 
                            "runnerName": "Belgium/Russia"
                        }, 
                        {
                            "sortPriority": 4, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 147469, 
                            "marketId": "924.6533201", 
                            "runnerName": "Draw/Belgium"
                        }, 
                        {
                            "sortPriority": 5, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 3710152, 
                            "marketId": "924.6533201", 
                            "runnerName": "Draw/Draw"
                        }, 
                        {
                            "sortPriority": 6, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 103827, 
                            "marketId": "924.6533201", 
                            "runnerName": "Draw/Russia"
                        }, 
                        {
                            "sortPriority": 7, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 153212, 
                            "marketId": "924.6533201", 
                            "runnerName": "Russia/Belgium"
                        }, 
                        {
                            "sortPriority": 8, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 103829, 
                            "marketId": "924.6533201", 
                            "runnerName": "Russia/Draw"
                        }, 
                        {
                            "sortPriority": 9, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 103830, 
                            "marketId": "924.6533201", 
                            "runnerName": "Russia/Russia"
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
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_15", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 1037.1498128336295, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439194", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 4.765085416693145, 
                    "marketName": "Over/Under 1.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1221385, 
                            "marketId": "1.113439194", 
                            "runnerName": "Under 1.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.66, 
                                        "size": 9.532874701523617
                                    }, 
                                    {
                                        "price": 2.58, 
                                        "size": 3.872966692486445
                                    }, 
                                    {
                                        "price": 2.56, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.25, 
                                        "size": 3.4993417030706673
                                    }, 
                                    {
                                        "price": 3.3, 
                                        "size": 43.63636363636364
                                    }, 
                                    {
                                        "price": 3.45, 
                                        "size": 40.869565217391305
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1221386, 
                            "marketId": "1.113439194", 
                            "runnerName": "Over 1.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.45, 
                                        "size": 7.843352093089427
                                    }, 
                                    {
                                        "price": 1.44, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 1.41, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.6, 
                                        "size": 4.9612465687066045
                                    }, 
                                    {
                                        "price": 1.61, 
                                        "size": 10.841600108576316
                                    }, 
                                    {
                                        "price": 1.64, 
                                        "size": 6.09283784549697
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_25", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 1330.7224548831139, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.112173867", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 41.72041165473328, 
                    "marketName": "Over/Under 2.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 47972, 
                            "marketId": "1.112173867", 
                            "runnerName": "Under 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.52, 
                                        "size": 8.34629368414892
                                    }, 
                                    {
                                        "price": 1.51, 
                                        "size": 3.872966692486445
                                    }, 
                                    {
                                        "price": 1.5, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.73, 
                                        "size": 2.4435569153687413
                                    }, 
                                    {
                                        "price": 1.74, 
                                        "size": 9.900406651187566
                                    }, 
                                    {
                                        "price": 1.75, 
                                        "size": 133.71428571428572
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 47973, 
                            "marketId": "1.112173867", 
                            "runnerName": "Over 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.36, 
                                        "size": 7.60536089132892
                                    }, 
                                    {
                                        "price": 2.34, 
                                        "size": 101.48285698907368
                                    }, 
                                    {
                                        "price": 2.28, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.94, 
                                        "size": 4.335100802071604
                                    }, 
                                    {
                                        "price": 3.0, 
                                        "size": 51.962476411293466
                                    }, 
                                    {
                                        "price": 3.15, 
                                        "size": 46.66666666666667
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_45", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 2855.197922959747, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439197", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Over/Under 4.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1222347, 
                            "marketId": "1.113439197", 
                            "runnerName": "Under 4.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.1, 
                                        "size": 8.065557887937995
                                    }, 
                                    {
                                        "price": 1.09, 
                                        "size": 8.969804618117228
                                    }, 
                                    {
                                        "price": 1.08, 
                                        "size": 115.04117552074926
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.12, 
                                        "size": 839.2857142857142
                                    }, 
                                    {
                                        "price": 1.13, 
                                        "size": 778.7610619469028
                                    }, 
                                    {
                                        "price": 1.14, 
                                        "size": 719.2982456140351
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1222346, 
                            "marketId": "1.113439197", 
                            "runnerName": "Over 4.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 9.4, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 8.8, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 8.2, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 13.5, 
                                        "size": 10.800736910148679
                                    }, 
                                    {
                                        "price": 15.5, 
                                        "size": 9.933452041636349
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
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
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": true, 
                    "totalAvailable": 220641.2844718031, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.112173866", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 786.8754657272267, 
                    "marketName": "Match Odds", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 29578, 
                            "marketId": "1.112173866", 
                            "runnerName": "Belgium", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.32, 
                                        "size": 2.7
                                    }, 
                                    {
                                        "price": 2.3, 
                                        "size": 10.259375451947852
                                    }, 
                                    {
                                        "price": 2.28, 
                                        "size": 6.452603533701039
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.42, 
                                        "size": 24.037190082644628
                                    }, 
                                    {
                                        "price": 2.44, 
                                        "size": 45.64487704918032
                                    }, 
                                    {
                                        "price": 2.46, 
                                        "size": 133.27439024390242
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 25907, 
                            "marketId": "1.112173866", 
                            "runnerName": "Russia", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.5, 
                                        "size": 16.62
                                    }, 
                                    {
                                        "price": 3.45, 
                                        "size": 240.33
                                    }, 
                                    {
                                        "price": 3.4, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.65, 
                                        "size": 3.4031680930082353
                                    }, 
                                    {
                                        "price": 3.7, 
                                        "size": 3.9761989342806396
                                    }, 
                                    {
                                        "price": 3.75, 
                                        "size": 4.6735999999999995
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "1.112173866", 
                            "runnerName": "The Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.35, 
                                        "size": 50.61
                                    }, 
                                    {
                                        "price": 3.3, 
                                        "size": 99.35
                                    }, 
                                    {
                                        "price": 3.25, 
                                        "size": 620.9999999999999
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.4, 
                                        "size": 96.1861544419949
                                    }, 
                                    {
                                        "price": 3.45, 
                                        "size": 95.49
                                    }, 
                                    {
                                        "price": 3.6, 
                                        "size": 4.868333333333333
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 36, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 36, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "CORRECT_SCORE", 
                    "marketId": "924.6533195", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Correct Score", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "924.6533195", 
                            "runnerName": "0 - 0"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "924.6533195", 
                            "runnerName": "0 - 1"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "924.6533195", 
                            "runnerName": "0 - 2"
                        }, 
                        {
                            "sortPriority": 4, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 16, 
                            "marketId": "924.6533195", 
                            "runnerName": "0 - 3"
                        }, 
                        {
                            "sortPriority": 5, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "924.6533195", 
                            "runnerName": "1 - 0"
                        }, 
                        {
                            "sortPriority": 6, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "924.6533195", 
                            "runnerName": "1 - 1"
                        }, 
                        {
                            "sortPriority": 7, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "924.6533195", 
                            "runnerName": "1 - 2"
                        }, 
                        {
                            "sortPriority": 8, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 15, 
                            "marketId": "924.6533195", 
                            "runnerName": "1 - 3"
                        }, 
                        {
                            "sortPriority": 9, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "924.6533195", 
                            "runnerName": "2 - 0"
                        }, 
                        {
                            "sortPriority": 10, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "924.6533195", 
                            "runnerName": "2 - 1"
                        }, 
                        {
                            "sortPriority": 11, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "924.6533195", 
                            "runnerName": "2 - 2"
                        }, 
                        {
                            "sortPriority": 12, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 14, 
                            "marketId": "924.6533195", 
                            "runnerName": "2 - 3"
                        }, 
                        {
                            "sortPriority": 13, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 10, 
                            "marketId": "924.6533195", 
                            "runnerName": "3 - 0"
                        }, 
                        {
                            "sortPriority": 14, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 11, 
                            "marketId": "924.6533195", 
                            "runnerName": "3 - 1"
                        }, 
                        {
                            "sortPriority": 15, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 12, 
                            "marketId": "924.6533195", 
                            "runnerName": "3 - 2"
                        }, 
                        {
                            "sortPriority": 16, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 13, 
                            "marketId": "924.6533195", 
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
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_85", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 1.6147263038914905, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439299", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Over/Under 8.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 2407528, 
                            "marketId": "1.113439299", 
                            "runnerName": "Under 8.5 Goals", 
                            "prices": {}
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 2407529, 
                            "marketId": "1.113439299", 
                            "runnerName": "Over 8.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {}
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_25", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 379.9814336906914, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439195", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Over/Under 2.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 47972, 
                            "marketId": "1.113439195", 
                            "runnerName": "Under 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.08, 
                                        "size": 23.833641184531967
                                    }, 
                                    {
                                        "price": 1.07, 
                                        "size": 35.944088463718145
                                    }, 
                                    {
                                        "price": 1.06, 
                                        "size": 37.55881476760963
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 47973, 
                            "marketId": "1.113439195", 
                            "runnerName": "Over 2.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.03, 
                                        "size": 2.16
                                    }, 
                                    {
                                        "price": 1.02, 
                                        "size": 6.72
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 7.47
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 15.5, 
                                        "size": 4.389263189362972
                                    }, 
                                    {
                                        "price": 18.0, 
                                        "size": 2.212298819930367
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
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
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 1, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_85", 
                    "marketId": "924.6533221", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 8.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 2407529, 
                            "marketId": "924.6533221", 
                            "runnerName": "Over 8.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "REMOVED", 
                            "handicap": 0.0, 
                            "selectionId": 2407528, 
                            "marketId": "924.6533221", 
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
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_45", 
                    "marketId": "924.6533215", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 4.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222346, 
                            "marketId": "924.6533215", 
                            "runnerName": "Over 4.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222347, 
                            "marketId": "924.6533215", 
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
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_25", 
                    "marketId": "924.6533212", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 2.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 47973, 
                            "marketId": "924.6533212", 
                            "runnerName": "Over 2.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 47972, 
                            "marketId": "924.6533212", 
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
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "HALF_TIME_FULL_TIME", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 2217.36, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439211", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 8.0, 
                    "marketName": "Half Time/Full Time", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 147464, 
                            "marketId": "1.113439211", 
                            "runnerName": "Belgium/Belgium", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 3.35, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 3.2, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 3.05, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 36.0, 
                                        "size": 11.944444444444446
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 147463, 
                            "marketId": "1.113439211", 
                            "runnerName": "Belgium/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 13.5, 
                                        "size": 72.0
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 81.81
                                    }, 
                                    {
                                        "price": 10.5, 
                                        "size": 94.73
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 153210, 
                            "marketId": "1.113439211", 
                            "runnerName": "Belgium/Russia", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 34.0, 
                                        "size": 27.27
                                    }, 
                                    {
                                        "price": 29.0, 
                                        "size": 32.14
                                    }, 
                                    {
                                        "price": 26.0, 
                                        "size": 36.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 147469, 
                            "marketId": "1.113439211", 
                            "runnerName": "Draw/Belgium", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.2, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 4.9, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 4.6, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 3710152, 
                            "marketId": "1.113439211", 
                            "runnerName": "Draw/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.3, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 4.0, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 3.85, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 103827, 
                            "marketId": "1.113439211", 
                            "runnerName": "Draw/Russia", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 6.8, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 6.2, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 5.8, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 153212, 
                            "marketId": "1.113439211", 
                            "runnerName": "Russia/Belgium", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 26.0, 
                                        "size": 36.0
                                    }, 
                                    {
                                        "price": 23.0, 
                                        "size": 40.9
                                    }, 
                                    {
                                        "price": 20.0, 
                                        "size": 47.36
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 103829, 
                            "marketId": "1.113439211", 
                            "runnerName": "Russia/Draw", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 15.5, 
                                        "size": 62.06
                                    }, 
                                    {
                                        "price": 14.0, 
                                        "size": 69.23
                                    }, 
                                    {
                                        "price": 12.5, 
                                        "size": 78.26
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 103830, 
                            "marketId": "1.113439211", 
                            "runnerName": "Russia/Russia", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.2, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 4.9, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 4.6, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 9, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 9, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_35", 
                    "marketId": "924.6533213", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 3.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222345, 
                            "marketId": "924.6533213", 
                            "runnerName": "Over 3.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1222344, 
                            "marketId": "924.6533213", 
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
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 3, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 3, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "MATCH_ODDS", 
                    "marketId": "924.6533206", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Match Odds", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 29578, 
                            "marketId": "924.6533206", 
                            "runnerName": "Belgium"
                        }, 
                        {
                            "sortPriority": 3, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 58805, 
                            "marketId": "924.6533206", 
                            "runnerName": "The Draw"
                        }, 
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 25907, 
                            "marketId": "924.6533206", 
                            "runnerName": "Russia"
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
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "CORRECT_SCORE", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 7524.142151865399, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439206", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 41.23080574842564, 
                    "marketName": "Correct Score", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "1.113439206", 
                            "runnerName": "0 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.4, 
                                        "size": 101.99418698530599
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 6.2, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "1.113439206", 
                            "runnerName": "0 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.8, 
                                        "size": 146.10611335378653
                                    }, 
                                    {
                                        "price": 7.2, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "1.113439206", 
                            "runnerName": "0 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 16.5, 
                                        "size": 21.336113353786537
                                    }, 
                                    {
                                        "price": 13.5, 
                                        "size": 72.0
                                    }, 
                                    {
                                        "price": 12.0, 
                                        "size": 81.81
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 16, 
                            "marketId": "1.113439206", 
                            "runnerName": "0 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 30.0, 
                                        "size": 31.03
                                    }, 
                                    {
                                        "price": 29.0, 
                                        "size": 10.71
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 34.61
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "1.113439206", 
                            "runnerName": "1 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 5.9, 
                                        "size": 101.99418698530599
                                    }, 
                                    {
                                        "price": 5.6, 
                                        "size": 165.22
                                    }, 
                                    {
                                        "price": 5.3, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "1.113439206", 
                            "runnerName": "1 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 6.6, 
                                        "size": 55.54803972226708
                                    }, 
                                    {
                                        "price": 5.9, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 5.6, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "1.113439206", 
                            "runnerName": "1 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 11.5, 
                                        "size": 87.70418698530598
                                    }, 
                                    {
                                        "price": 10.0, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 9.4, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 15, 
                            "marketId": "1.113439206", 
                            "runnerName": "1 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 29.0, 
                                        "size": 32.14
                                    }, 
                                    {
                                        "price": 28.0, 
                                        "size": 11.11
                                    }, 
                                    {
                                        "price": 26.0, 
                                        "size": 36.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "1.113439206", 
                            "runnerName": "2 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 8.2, 
                                        "size": 143.63611335378653
                                    }, 
                                    {
                                        "price": 7.6, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 7.0, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 10, 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "1.113439206", 
                            "runnerName": "2 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.8, 
                                        "size": 146.0980397222671
                                    }, 
                                    {
                                        "price": 7.2, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 6.6, 
                                        "size": 100.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 11, 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "1.113439206", 
                            "runnerName": "2 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 16.0, 
                                        "size": 61.98611335378653
                                    }, 
                                    {
                                        "price": 15.5, 
                                        "size": 20.69
                                    }, 
                                    {
                                        "price": 14.5, 
                                        "size": 66.66
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 12, 
                            "handicap": 0.0, 
                            "selectionId": 14, 
                            "marketId": "1.113439206", 
                            "runnerName": "2 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 40.0, 
                                        "size": 23.07
                                    }, 
                                    {
                                        "price": 34.0, 
                                        "size": 27.27
                                    }, 
                                    {
                                        "price": 29.0, 
                                        "size": 42.85
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 13, 
                            "handicap": 0.0, 
                            "selectionId": 10, 
                            "marketId": "1.113439206", 
                            "runnerName": "3 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 19.5, 
                                        "size": 18.206113353786535
                                    }, 
                                    {
                                        "price": 19.0, 
                                        "size": 50.0
                                    }, 
                                    {
                                        "price": 17.5, 
                                        "size": 54.54
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 14, 
                            "handicap": 0.0, 
                            "selectionId": 11, 
                            "marketId": "1.113439206", 
                            "runnerName": "3 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 19.0, 
                                        "size": 51.99418698530599
                                    }, 
                                    {
                                        "price": 17.5, 
                                        "size": 54.54
                                    }, 
                                    {
                                        "price": 16.5, 
                                        "size": 19.35
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 15, 
                            "handicap": 0.0, 
                            "selectionId": 12, 
                            "marketId": "1.113439206", 
                            "runnerName": "3 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 30.0, 
                                        "size": 31.03
                                    }, 
                                    {
                                        "price": 29.0, 
                                        "size": 10.71
                                    }, 
                                    {
                                        "price": 27.0, 
                                        "size": 34.61
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 16, 
                            "handicap": 0.0, 
                            "selectionId": 13, 
                            "marketId": "1.113439206", 
                            "runnerName": "3 - 3", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 70.0, 
                                        "size": 20.0
                                    }, 
                                    {
                                        "price": 55.0, 
                                        "size": 20.0
                                    }, 
                                    {
                                        "price": 46.0, 
                                        "size": 20.0
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 17, 
                            "handicap": 0.0, 
                            "selectionId": 4506345, 
                            "marketId": "1.113439206", 
                            "runnerName": "Any Unquoted ", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.9, 
                                        "size": 78.89803972226707
                                    }, 
                                    {
                                        "price": 1.05, 
                                        "size": 2.0
                                    }, 
                                    {
                                        "price": 1.02, 
                                        "size": 92.1
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 85.0, 
                                        "size": 3.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 17, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 17, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "HALF_TIME_SCORE", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 1999.428528868498, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439210", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Half Time Score", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1, 
                            "marketId": "1.113439210", 
                            "runnerName": "0 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 3, 
                            "marketId": "1.113439210", 
                            "runnerName": "1 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 7, 
                            "marketId": "1.113439210", 
                            "runnerName": "2 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 4, 
                            "handicap": 0.0, 
                            "selectionId": 2, 
                            "marketId": "1.113439210", 
                            "runnerName": "1 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 5, 
                            "handicap": 0.0, 
                            "selectionId": 5, 
                            "marketId": "1.113439210", 
                            "runnerName": "2 - 0", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 6, 
                            "handicap": 0.0, 
                            "selectionId": 6, 
                            "marketId": "1.113439210", 
                            "runnerName": "2 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 7, 
                            "handicap": 0.0, 
                            "selectionId": 4, 
                            "marketId": "1.113439210", 
                            "runnerName": "0 - 1", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 8, 
                            "handicap": 0.0, 
                            "selectionId": 9, 
                            "marketId": "1.113439210", 
                            "runnerName": "0 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 9, 
                            "handicap": 0.0, 
                            "selectionId": 8, 
                            "marketId": "1.113439210", 
                            "runnerName": "1 - 2", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 151.8271048084371
                                    }, 
                                    {
                                        "price": 1.01, 
                                        "size": 178.68794625395924
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 10, 
                            "handicap": 0.0, 
                            "selectionId": 4506345, 
                            "marketId": "1.113439210", 
                            "runnerName": "Any Unquoted ", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.02, 
                                        "size": 92.1
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 60.0, 
                                        "size": 2.0
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 10, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 10, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_05", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 775.6452069601814, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439297", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 4.765085416693145, 
                    "marketName": "Over/Under 0.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 5851482, 
                            "marketId": "1.113439297", 
                            "runnerName": "Under 0.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 7.4, 
                                        "size": 101.98611335378654
                                    }, 
                                    {
                                        "price": 6.8, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 6.2, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 11.0, 
                                        "size": 2.570741933220394
                                    }, 
                                    {
                                        "price": 12.5, 
                                        "size": 2.133683456672237
                                    }, 
                                    {
                                        "price": 26.0, 
                                        "size": 4.3786
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 5851483, 
                            "marketId": "1.113439297", 
                            "runnerName": "Over 0.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.1, 
                                        "size": 25.600158784466597
                                    }, 
                                    {
                                        "price": 1.09, 
                                        "size": 24.429482214145267
                                    }, 
                                    {
                                        "price": 1.05, 
                                        "size": 4.18
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.16, 
                                        "size": 650.9540155584781
                                    }, 
                                    {
                                        "price": 1.18, 
                                        "size": 576.271186440678
                                    }, 
                                    {
                                        "price": 1.2, 
                                        "size": 516.6666666666667
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_15", 
                    "marketId": "924.6533210", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 1.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1221386, 
                            "marketId": "924.6533210", 
                            "runnerName": "Over 1.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1221385, 
                            "marketId": "924.6533210", 
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
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_35", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 2905.3985429126465, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439196", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Over/Under 3.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1222344, 
                            "marketId": "1.113439196", 
                            "runnerName": "Under 3.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.16, 
                                        "size": 7.425364561047724
                                    }, 
                                    {
                                        "price": 1.15, 
                                        "size": 101.77619893428064
                                    }, 
                                    {
                                        "price": 1.12, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 1.3, 
                                        "size": 6.016607826562579
                                    }, 
                                    {
                                        "price": 1.31, 
                                        "size": 343.2763507882122
                                    }, 
                                    {
                                        "price": 1.34, 
                                        "size": 298.5074626865671
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1222345, 
                            "marketId": "1.113439196", 
                            "runnerName": "Over 3.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.3, 
                                        "size": 106.35210669884293
                                    }, 
                                    {
                                        "price": 4.0, 
                                        "size": 100.0
                                    }, 
                                    {
                                        "price": 3.85, 
                                        "size": 100.0
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 7.8, 
                                        "size": 16.18954381383932
                                    }, 
                                    {
                                        "price": 9.4, 
                                        "size": 11.914893617021278
                                    }, 
                                    {
                                        "price": 12.5, 
                                        "size": 14.889838396897222
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 2, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_05", 
                    "marketId": "924.6533208", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 0.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5851483, 
                            "marketId": "924.6533208", 
                            "runnerName": "Over 0.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 5851482, 
                            "marketId": "924.6533208", 
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
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "numberOfActiveRunners": 1, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_75", 
                    "marketId": "924.6533220", 
                    "eventName": "Belgium v Russia", 
                    "status": "OPEN", 
                    "marketName": "Over/Under 7.5 Goals", 
                    "eventTypeId": "1", 
                    "runners": [
                        {
                            "sortPriority": 2, 
                            "status": "ACTIVE", 
                            "handicap": 0.0, 
                            "selectionId": 1485573, 
                            "marketId": "924.6533220", 
                            "runnerName": "Over 7.5 Goals"
                        }, 
                        {
                            "sortPriority": 1, 
                            "status": "REMOVED", 
                            "handicap": 0.0, 
                            "selectionId": 1485572, 
                            "marketId": "924.6533220", 
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
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "PENALTY_TAKEN", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 0.0, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439229", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Penalty Taken?", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 30246, 
                            "marketId": "1.113439229", 
                            "runnerName": "Yes", 
                            "prices": {}
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 30247, 
                            "marketId": "1.113439229", 
                            "runnerName": "No", 
                            "prices": {}
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "HALF_TIME", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 23.122880671726147, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439207", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Half Time", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 900012, 
                            "marketId": "1.113439207", 
                            "runnerName": "Belgium (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.9, 
                                        "size": 3.5523978685612794
                                    }, 
                                    {
                                        "price": 1.02, 
                                        "size": 3.6169869207169385
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 3.65, 
                                        "size": 2.00222638054701
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1155358, 
                            "marketId": "1.113439207", 
                            "runnerName": "Russia (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 4.3, 
                                        "size": 3.5523978685612794
                                    }, 
                                    {
                                        "price": 1.02, 
                                        "size": 3.6169869207169385
                                    }
                                ]
                            }
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 2004841, 
                            "marketId": "1.113439207", 
                            "runnerName": "The Draw (HT)", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 2.02, 
                                        "size": 3.5523978685612794
                                    }, 
                                    {
                                        "price": 1.02, 
                                        "size": 5.23171322460843
                                    }
                                ], 
                                "lay": [
                                    {
                                        "price": 2.34, 
                                        "size": 3.3374361732570694
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "NEXT_GOAL", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 0.0, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439216", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 0.0, 
                    "marketName": "Next Goal", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 29578, 
                            "marketId": "1.113439216", 
                            "runnerName": "Belgium", 
                            "prices": {}
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 25907, 
                            "marketId": "1.113439216", 
                            "runnerName": "Russia", 
                            "prices": {}
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 3, 
                            "handicap": 0.0, 
                            "selectionId": 69852, 
                            "marketId": "1.113439216", 
                            "runnerName": "No Goal", 
                            "prices": {}
                        }
                    ], 
                    "numberOfRunners": 3, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 3, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
                    "eventTypeId": "1", 
                    "numberOfWinners": 1
                }, 
                {
                    "discountAllowed": true, 
                    "localizedTime": {
                        "localizedTime": "18:00", 
                        "localizedDay": "Sunday", 
                        "localizedDate": "22 June"
                    }, 
                    "marketType": "OVER_UNDER_75", 
                    "marketBaseRate": 5.0, 
                    "turnInPlayEnabled": true, 
                    "inplay": false, 
                    "bspMarket": false, 
                    "totalAvailable": 6.7947263038914905, 
                    "eventId": "27113591", 
                    "marketTime": 1403452800000, 
                    "marketDataDelayed": true, 
                    "persistenceEnabled": true, 
                    "marketId": "1.113439298", 
                    "eventName": "Belgium v Russia", 
                    "totalMatched": 9.546728236906393, 
                    "marketName": "Over/Under 7.5 Goals", 
                    "runners": [
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 1, 
                            "handicap": 0.0, 
                            "selectionId": 1485572, 
                            "marketId": "1.113439298", 
                            "runnerName": "Under 7.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {}
                        }, 
                        {
                            "status": "ACTIVE", 
                            "sortPriority": 2, 
                            "handicap": 0.0, 
                            "selectionId": 1485573, 
                            "marketId": "1.113439298", 
                            "runnerName": "Over 7.5 Goals", 
                            "totalMatched": 0.0, 
                            "prices": {
                                "back": [
                                    {
                                        "price": 1.01, 
                                        "size": 6.594726303891491
                                    }
                                ]
                            }
                        }
                    ], 
                    "numberOfRunners": 2, 
                    "suspendTime": 1403452800000, 
                    "complete": true, 
                    "numberOfActiveRunners": 2, 
                    "betDelay": 0, 
                    "bettingType": "ODDS", 
                    "bspReconciled": false, 
                    "venue": "Belgium", 
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
                    "1.113439194", 
                    "924.6533210"
                ], 
                [
                    "1.112173867", 
                    "924.6533212"
                ], 
                [
                    "1.113439197", 
                    "924.6533215"
                ], 
                [
                    "1.112173866", 
                    "924.6533206"
                ], 
                [
                    "1.113439299", 
                    "924.6533221"
                ], 
                [
                    "1.113439211", 
                    "924.6533201"
                ], 
                [
                    "1.113439206", 
                    "924.6533195"
                ], 
                [
                    "1.113439297", 
                    "924.6533208"
                ], 
                [
                    "1.113439196", 
                    "924.6533213"
                ], 
                [
                    "1.114310450", 
                    "924.11518684"
                ], 
                [
                    "1.113439298", 
                    "924.6533220"
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