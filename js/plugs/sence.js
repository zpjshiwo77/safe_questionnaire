var roadSence = function (callback) {
    var _self = this;

    _self.animeFlag = false;

    var roadBox = $("#roadBox");
    var bgArr = [];
    var sence = [];
    var stair = roadBox.find(".stairBox");
    var people = roadBox.find(".peopleBox");
    var peopleDir = {};
    var trfTime = 0;
    var sence2door = [];
    var sence3door = [];
    var rocketAni;
    var type = icom.getQueryString('t') || "move";
    var peopleMove = type == "move";

    _self.sence1step1 = function (callback) {
        // console.log("sence1step1");
        _self.animeFlag = true;
        var box = sence[0].box;

        peopleDir.u.ele.gifResume();
        people.transition({ x: "3.9rem", y: "-2.7rem", opacity: 0 },0, function () {
            box.transition({ y: "2.5rem" }, trfTime, function () {
                peopleDir.u.ele.hide();
                peopleDir.u.ele.gifPause();
                peopleDir.ur.ele.show();
                people.css({ x: "2.7rem", y: "-2.8rem" })
                    .transition({ opacity: 1 }, 0,function () {
                        _self.animeFlag = false;
                        if(callback) callback();
                    });
            });
        });
    }

    _self.sence1step2 = function (callback) {
        // console.log("sence1step2");
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(5);

        peopleDir.ur.ele.gifResume();
        people.transition({ x: "4.3rem", y: "-3.4rem" }, 0, "linear")
            .transition({ x: "4.4rem", y: "-3.5rem", opacity: 0 },0);
        s.transition({ opacity: 1, delay: 0 },0);
        box.transition({ y: "4.5rem", delay: 0 }, trfTime, function () {
            peopleDir.ur.ele.hide();
            peopleDir.ur.ele.gifPause();
            peopleDir.ul.ele.show();
            peopleDir.ul.ele.gifResume();
            people.css({ x: "3.9rem", y: "-3.2rem" },0)
                .transition({ opacity: 1 },0)
                .transition({ x: "3.3rem", y: "-3.5rem" }, 0, "linear")
                .transition({ x: "3.2rem", y: "-3.55rem", opacity: 0 },0, function () {
                    peopleDir.ul.ele.hide();
                    peopleDir.ul.ele.gifPause();
                    peopleDir.r.ele.show();
                    peopleDir.r.ele.gifResume();
                    people.css({ x: "3.5rem", y: "-4.7rem" })
                        .transition({ opacity: 1 },0)
                        .transition({ x: "5rem", y: "-3.8rem" }, 0, "linear", function () {
                            peopleDir.r.ele.hide();
                            peopleDir.r.ele.gifPause();
                            peopleDir.ur.ele.show();
                            _self.animeFlag = false;
                            if(callback) callback();
                        });
                });
        });
    }

    _self.sence1step3 = function (callback) {
        // console.log("sence1step3");
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(4);
        var s2 = sence[0].children.eq(3);

        s.transition({ opacity: 1 },0);
        peopleDir.ur.ele.gifResume();
        people.transition({ x: "6.6rem", y: "-4.8rem" }, 0, "linear", function () {
            peopleDir.ur.ele.hide();
            peopleDir.ur.ele.gifPause();
            peopleDir.ul.ele.show();
            box.transition({ y: "8rem" }, trfTime);
            people.transition({ y: "-1.3rem" }, trfTime, function () {
                _self.animeFlag = false;
                if(callback) callback();
            });
            s2.transition({ opacity: 1 },0);
        })
    }

    _self.sence1step4 = function (callback) {
        // console.log("sence1step4");
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(2);
        var s2 = sence[0].children.eq(1);

        peopleDir.ul.ele.gifResume();
        people.transition({ x: "5.8rem", y: "-1.8rem" }, 0, "linear")
            .transition({ x: "5.65rem", y: "-1.85rem", opacity: 0 },0, function () {
                people.css({ x: "4.5rem", y: "-1.8rem" })
                    .transition({ opacity: 1 },0)
                    .transition({ x: "3.6rem", y: "-2.3rem" }, 0, "linear")
                    .transition({ x: "3.5rem", y: "-2.4rem", opacity: 0 },0, function () {
                        peopleDir.ul.ele.hide();
                        peopleDir.ul.ele.gifPause();
                        peopleDir.ur.ele.show();
                        peopleDir.ur.ele.gifResume();
                        people.css({ x: "3.9rem", y: "-3.5rem" })
                            .transition({ opacity: 1 },0)
                            .transition({ x: "4.8rem", y: "-4.7rem" }, 0, "linear", function () {
                                peopleDir.ur.ele.gifPause();
                                s.transition({ opacity: 1 },0);
                                s2.transition({ opacity: 1 },0);
                                box.transition({ y: "11rem" }, trfTime);
                                people.transition({ y: "-1.7rem" }, trfTime, function () {
                                    _self.animeFlag = false;
                                    if(callback) callback();
                                });
                            })
                    })
            })
    }

    _self.sence1step5 = function (callback) {
        // console.log("sence1step5");
        _self.animeFlag = true;
        var s = sence[0].children.eq(2);

        s.transition({ y: "-0.47rem" },0, function () {
            peopleDir.ur.ele.gifResume();
        });
        people.transition({ x: "5.4rem", y: "-2.1rem", delay: 0 }, 0, "linear", function () {
            peopleDir.ur.ele.gifPause();
            s.transition({ y: "0.33rem" }, 0);
            people.transition({ x: "5.4rem", y: "-1.3rem" }, 0, function () {
                peopleDir.ur.ele.gifResume();
                people.transition({ x: "6.1rem", y: "-1.7rem" }, 0, "linear", function () {
                    _self.animeFlag = false;
                    if(callback) callback();
                    peopleDir.ur.ele.hide();
                    peopleDir.ur.ele.gifPause();
                    peopleDir.u.ele.show();
                })
            })

        })
    }

    _self.sence1step6 = function (callback) {
        // console.log("sence1step6");
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(0);

        peopleDir.u.ele.gifResume();
        people.transition({ x: "6.1rem", y: "-2.7rem" }, 0, "linear", function () {
            peopleDir.u.ele.hide();
            peopleDir.u.ele.gifPause();
            peopleDir.l.ele.show();
            peopleDir.l.ele.gifResume();
            people.transition({ x: "4.5rem", y: "-2.8rem" }, 0, "linear")
                .transition({ x: "4.45rem", y: "-2.8rem", opacity: 0 },0, function () {
                    peopleDir.l.ele.hide();
                    peopleDir.l.ele.gifPause();
                    peopleDir.ur.ele.show();
                    s.transition({ opacity: 1 },0);
                    box.transition({ y: "12.5rem" }, trfTime, function () {
                        _self.animeFlag = false;
                        if(callback) callback();
                    });
                })
        })
    }

    _self.sence1step7 = function (callback) {
        // console.log("sence1step7");
        _self.animeFlag = true;
        peopleDir.ur.ele.gifResume();
        people.css({ x: "4.8rem", y: "-2.5rem" })
            .transition({ opacity: 1 },0)
            .transition({ x: "6.1rem", y: "-3.4rem" }, 0, "linear", function () {
                peopleDir.ur.ele.hide();
                peopleDir.ur.ele.gifPause();
                peopleDir.ul.ele.show();
                _self.animeFlag = false;
                if(callback) callback();
            });
    }

    _self.sence1step8 = function (callback) {
        // console.log("sence1step8");
        _self.animeFlag = true;
        var box = sence[0].box;

        peopleDir.ul.ele.gifResume();
        people.transition({ x: "6.05rem", y: "-3.45rem", opacity: 0 },0, function () {
            box.transition({ y: "15rem" }, trfTime, function () {
                people.css({ x: "3.6rem", y: "-2.6rem" })
                    .transition({ opacity: 1 },0)
                    .transition({ x: "3rem", y: "-3rem" }, 0, "linear", function () {
                        peopleDir.ul.ele.hide();
                        peopleDir.ul.ele.gifPause();
                        peopleDir.ur.ele.show();
                        _self.animeFlag = false;
                        if(callback) callback();
                    });
            });
        })
    }

    _self.sence1step9 = function (callback) {
        // console.log("sence1step9");
        _self.animeFlag = true;
        var box = sence[0].box;

        box.transition({ y: "17rem" }, trfTime);
        people.transition({ x: "3rem", y: "-1rem" }, trfTime, function () {
            peopleDir.ur.ele.gifResume();
            people.transition({ x: "4.9rem", y: "-2.2rem" }, 0, "linear", function () {
                peopleDir.ur.ele.gifPause();
                _self.animeFlag = false;
                if(callback) callback();
            });
        })

    }

    _self.sence1step10 = function (callback) {
        // console.log("sence1step10");
        _self.animeFlag = true;
        var box1 = sence[0].box;
        var box2 = sence[1].box;

        peopleDir.ur.ele.gifResume();
        stair.css({ y: "-2.2rem" })
            .transition({ opacity: 1 },0);
        people.transition({ x: "4.9rem", y: "-2.2rem", opacity: 0 },0, function () {
            peopleDir.ur.ele.gifPause();
            peopleDir.ur.ele.hide();
            peopleDir.u.ele.show();
            if(peopleMove) peopleDir.u.ele.gifResume();
            bgArr[0].transition({ y: "100%" }, 0, "linear");
            bgArr[1].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear");
            box1.css({ "z-index": 3 }).transition({ y: "20.5rem" }, 0, "linear");
            stair.transition({ y: "1.3rem" }, 0, "linear", function () {
                people.css({ x: "5.9rem", y: "-1rem" })
                    .transition({ opacity: 1 });
                bgArr[1].transition({ y: "100%" }, 0, "linear");
                bgArr[2].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear");
                box1.transition({ y: "26.1rem" }, 0, "linear");
                stair.css({ "z-index": 2 }).transition({ y: "6.9rem" }, 0, "linear");
                box2.show().css({ y: "-5.6rem" });
                _sence2doorInit();
                box2.transition({ y: "0" }, 0, "linear", function () {
                    box1.hide();
                    bgArr[0].hide();
                    bgArr[1].hide();
                    _self.animeFlag = false;
                    if(peopleMove) peopleDir.u.ele.gifPause();
                    if(callback) callback();
                });
            });
        });
    }

    _self.sence1step11 = function (callback) {
        // console.log("sence1step11");
        _self.animeFlag = true;
        var box = sence[0].box;
        var box2 = sence[2].box;
        var box3 = roadBox.find(".sence3sp");

        peopleDir.ur.ele.gifResume();
        people.transition({ x: "4.3rem", y: "-3.4rem" }, 0, "linear")
            .transition({ x: "4.4rem", y: "-3.5rem", opacity: 0 },0, function () {
                box.css({ "z-index": 3 }).transition({ y: "7.25rem" }, trfTime * 2, "linear", function () {
                    stair.css({ y: "0rem", "z-index": 2, opacity: 0 }).transition({ opacity: 1 },0, function () {
                        peopleDir.ur.ele.hide();
                        peopleDir.ur.ele.gifPause();
                        peopleDir.u.ele.show();
                        people.css({ x: "6rem", y: "-0.45rem" })
                            .transition({ opacity: 1 },0,function(){
                                if(peopleMove) peopleDir.u.ele.gifResume();
                            });
                        bgArr[0].transition({ y: "100%" }, 0, "linear");
                        bgArr[7].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear", function () {
                            bgArr[7].transition({ y: "100%" }, 0, "linear");
                            bgArr[4].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear");
                        });
                        box.transition({ y: "15.1rem" }, 0, "linear");
                        stair.transition({ y: "7.85rem" }, 0, "linear");
                        box2.show().css({ y: "-7.85rem" });
                        _sence3doorInit();
                        box2.transition({ y: "0" }, 0, "linear", function () {
                            box3.show().css({ opacity: 0 }).transition({ opacity: 1 },0);
                            box.hide();
                            bgArr[0].hide();
                            bgArr[7].hide();
                            if(peopleMove) peopleDir.u.ele.gifPause();
                            _self.animeFlag = false;
                            if (callback) callback();
                        });

                    });
                });
            });

    }

    _self.sence1step12 = function (callback) {
        var a = 1;
        var b = 2;

        function senceAni(){
            var func = _self["sence"+a+"step"+b];
            func(function(){
                b++;
                if(a == 1 && b > 10){
                    a = 2;
                    b = 1;
                    senceAni();
                }
                else if(a == 2 && b > 8){
                    if(callback) callback();
                }
                else senceAni();
            })
        }
        senceAni();
    }

    _self.sence2step1 = function (callback) {
        // console.log("sence2step1");
        _self.animeFlag = true;
        var box = sence[1].box;
        // _sence2doorInit();
        peopleDir.u.ele.hide();
        peopleDir.ul.ele.show();
        peopleDir.ul.ele.gifResume();
        people.css({ x: "5.9rem", y: "-1rem" })
            .transition({ x: "3.9rem", y: "-2.2rem" }, 0, "linear", function () {
                peopleDir.ul.ele.gifPause();
                sence2door[0].gifResume();
                // setTimeout(function () { peopleDir.ul.ele.gifResume() }, 500);
                people.transition({ x: "3.85rem", y: "-2.25rem", delay: 0, opacity: 0 },0, function () {
                    peopleDir.ul.ele.hide();
                    peopleDir.ul.ele.gifPause();
                    peopleDir.ur.ele.show();
                    stair.transition({ y: "8.9rem" }, trfTime);
                    box.transition({ y: "2rem" }, trfTime, function () {
                        people.css({ x: "4.5rem", y: "-1.45rem" })
                            .transition({ opacity: 1 },0, function () {
                                _self.animeFlag = false;
                                if(callback) callback();
                            });
                    });
                });
            })

    }

    _self.sence2step2 = function (callback) {
        // console.log("sence2step2");
        _self.animeFlag = true;
        var box = sence[1].box;

        peopleDir.ur.ele.gifResume();
        people.transition({ x: "5.2rem", y: "-1.8rem" }, 0, "linear")
            .transition({ x: "5.25rem", y: "-1.85rem", opacity: 0 }, 0,function () {
                peopleDir.ur.ele.hide();
                peopleDir.ur.ele.gifPause();
                peopleDir.ul.ele.show();
                box.transition({ y: "4rem" }, trfTime, function () {
                    people.css({ x: "4.6rem", y: "-1rem" })
                        .transition({ opacity: 1 },0);
                    _self.animeFlag = false;
                    if(callback) callback();
                });
            });
    }

    _self.sence2step3 = function (callback) {
        // console.log("sence2step3");
        _self.animeFlag = true;
        var box = sence[1].box;

        peopleDir.ul.ele.gifResume();
        people.transition({ x: "3.9rem", y: "-2rem" }, 0, "linear")
            .transition({ x: "3.85rem", y: "-2.05rem", opacity: 0 },0, function () {
                peopleDir.ul.ele.hide();
                peopleDir.ul.ele.gifPause();
                peopleDir.ur.ele.show();
                box.transition({ y: "6rem" }, trfTime, function () {
                    people.css({ x: "4.7rem", y: "-0.5rem" })
                        .transition({ opacity: 1 },0, function () {
                            peopleDir.ur.ele.gifResume();
                            people.transition({ x: "5.6rem", y: "-1rem" }, 0, "linear", function () {
                                peopleDir.ur.ele.gifPause();
                                _self.animeFlag = false;
                                if(callback) callback();
                            });
                        })

                });
            });
    }

    _self.sence2step4 = function (callback) {
        // console.log("sence2step4");
        _self.animeFlag = true;
        var box = sence[1].box;
        var s = sence[1].children.eq(5);

        peopleDir.ur.ele.gifResume();
        people.transition({ x: "5.9rem", y: "-1.3rem" },0, function () {
            peopleDir.ur.ele.hide();
            peopleDir.ur.ele.gifPause();
            peopleDir.ul.ele.show();
            s.transition({ x: "-1.9rem", y: "-1.4rem" }, 0);
            people.transition({ x: "4rem", y: "-2.7rem" }, 0, function () {
                peopleDir.ul.ele.hide();
                peopleDir.ur.ele.show();
                peopleDir.ur.ele.gifResume();
                people.transition({ x: "5.5rem", y: "-3.45rem" }, 0, "linear", function () {
                    peopleDir.ur.ele.gifPause();
                    people.transition({ x: "5.5rem", y: "-0.45rem" }, trfTime);
                    box.transition({ y: "9rem" }, trfTime, function () {
                        _self.animeFlag = false;
                        if(callback) callback();
                    });
                });
            });
        });
    }

    _self.sence2step5 = function (callback) {
        // console.log("sence2step5");
        _self.animeFlag = true;
        var box = sence[1].box;
        var s = sence[1].children.eq(3);

        peopleDir.ur.ele.gifResume();
        people.transition({ x: "5.8rem", y: "-0.8rem" },0, function () {
            peopleDir.ur.ele.hide();
            peopleDir.ur.ele.gifPause();
            peopleDir.ul.ele.show();
            s.transition({ y: "-1.5rem" }, 0);
            people.transition({ x: "5.8rem", y: "-2.3rem" }, 0, function () {
                peopleDir.ul.ele.hide();
                peopleDir.l.ele.show();
                peopleDir.l.ele.gifResume();
                people.transition({ x: "4.2rem", y: "-2.5rem" }, 0, "linear", function () {
                    peopleDir.l.ele.gifPause();
                    people.transition({ x: "4.2rem", y: "-0.5rem" }, trfTime);
                    box.transition({ y: "11rem" }, trfTime, function () {
                        _self.animeFlag = false;
                        if(callback) callback();
                    });
                });
            });
        });
    }

    _self.sence2step6 = function (callback) {
        // console.log("sence2step6");
        _self.animeFlag = true;
        var s = sence[1].children.eq(1);

        sence2door[1].gifResume();
        // setTimeout(function () { peopleDir.l.ele.gifResume() }, 500);
        people.transition({ x: "4.1rem", delay: 0, y: "-0.5rem", opacity: 0 },0, function () {
            peopleDir.l.ele.hide();
            peopleDir.l.ele.gifPause();
            peopleDir.ur.ele.show();
            people.css({ x: "4.5rem", y: "-1.75rem" })
                .transition({ opacity: 1 },0, function () {
                    peopleDir.ur.ele.gifResume();
                    people.transition({ x: "5.2rem", y: "-2.2rem" }, 0, "linear", function () {
                        peopleDir.ur.ele.gifPause();
                        s.transition({ opacity: 0 },0, function () {
                            peopleDir.ur.ele.gifResume();
                        })
                        people.transition({ x: "5.25rem", y: "-2.25rem", delay: 0, opacity: 0 },0, function () {
                            peopleDir.ur.ele.hide();
                            peopleDir.ur.ele.gifPause();
                            peopleDir.ul.ele.show();
                            people.css({ x: "4.8rem", y: "-3.2rem" })
                                .transition({ opacity: 1 },0, function () {
                                    peopleDir.ul.ele.gifResume();
                                    people.transition({ x: "4rem", y: "-3.7rem" }, 0, "linear", function () {
                                        peopleDir.ul.ele.gifPause();
                                        _self.animeFlag = false;
                                        if(callback) callback();
                                    });
                                })

                        });
                    });
                })
        });
    }

    _self.sence2step7 = function (callback) {
        // console.log("sence2step7");
        _self.animeFlag = true;
        var box = sence[1].box;

        sence2door[2].gifResume();
        // setTimeout(function () { peopleDir.ul.ele.gifResume() }, 500);
        people.transition({ x: "3.9rem", delay: 0, y: "-3.75rem", opacity: 0 }, 0, function () {
            peopleDir.ul.ele.hide();
            peopleDir.ul.ele.gifPause();
            peopleDir.r.ele.show();
            box.transition({ y: "16rem" }, trfTime, function () {
                people.css({ x: "4.8rem", y: "-0.45rem" })
                    .transition({ opacity: 1 },0, function () {
                        peopleDir.r.ele.gifResume();
                        people.transition({ x: "6rem", y: "-0.45rem" }, 0, "linear", function () {
                            peopleDir.r.ele.hide();
                            peopleDir.r.ele.gifPause();
                            peopleDir.u.ele.show();
                            _self.animeFlag = false;
                            if(callback) callback();
                        });
                    })
            });
        })
    }

    _self.sence2step8 = function (callback) {
        // console.log("sence2step8");
        _self.animeFlag = true;
        var box1 = sence[1].box;
        var box2 = sence[2].box;
        var box3 = roadBox.find(".sence3sp");

        box1.css({ "z-index": 3 })
        stair.css({ y: "-0.5rem", opacity: 0, "z-index": 2 })
            .transition({ opacity: 1 },0, function () {
                if(peopleMove) peopleDir.u.ele.gifResume();
                bgArr[2].transition({ y: "100%" }, 0, "linear");
                bgArr[3].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear", function () {
                    bgArr[3].transition({ y: "100%" }, 0, "linear");
                    bgArr[4].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear");
                });
                box1.transition({ y: "24.35rem" }, 0, "linear");
                stair.transition({ y: "7.85rem" }, 0, "linear");
                box2.show().css({ y: "-8.35rem" });
                _sence3doorInit();
                box2.transition({ y: "0" }, 0, "linear", function () {
                    box3.show().css({ opacity: 0 }).transition({ opacity: 1 },0);
                    box1.hide();
                    bgArr[2].hide();
                    bgArr[3].hide();
                    _self.animeFlag = false;
                    if(peopleMove) peopleDir.u.ele.gifPause();
                    if(callback) callback();
                });
            });
    }

    _self.sence3step1 = function (callback) {
        // console.log("sence3step1");
        _self.animeFlag = true;
        // _sence3doorInit();
        peopleDir.u.ele.hide();
        peopleDir.l.ele.show();
        peopleDir.l.ele.gifResume();
        people.css({ x: "6rem", y: "-0.45rem" })
            .transition({ x: "3.8rem", y: "-0.45rem" }, 0, "linear", function () {
                peopleDir.l.ele.gifPause();
                sence3door[0].gifResume();
                // setTimeout(function () { peopleDir.l.ele.gifResume() }, 500)
                people.transition({ x: "3.7rem", delay: 0, y: "-0.45rem", opacity: 0 },0, function () {
                    peopleDir.l.ele.hide();
                    peopleDir.l.ele.gifPause();
                    peopleDir.ur.ele.show();
                    people.css({ x: "4.2rem", y: "-2.1rem" })
                        .transition({ opacity: 1 },0, function () {
                            _self.animeFlag = false;
                            if(callback) callback();
                        });
                });
            })

    }

    _self.sence3step2 = function (callback) {
        // console.log("sence3step2");
        _self.animeFlag = true;
        var box = sence[2].box;
        var box2 = roadBox.find(".sence3sp");

        peopleDir.ur.ele.gifResume();
        people.transition({ x: "5.05rem", y: "-2.6rem" }, 0, "linear", function () {
            peopleDir.ur.ele.gifPause();
            sence3door[1].gifResume();
            // setTimeout(function () { peopleDir.ur.ele.gifResume() }, 500);
            people.transition({ x: "5.1rem", delay: 0, y: "-2.65rem", opacity: 0 },0, function () {
                peopleDir.ur.ele.hide();
                peopleDir.ur.ele.gifPause();
                peopleDir.ul.ele.show();
                people.css({ x: "4.7rem", y: "-4.1rem" })
                    .transition({ opacity: 1 },0, function () {
                        peopleDir.ul.ele.gifResume();
                        people.transition({ x: "2.7rem", y: "-5.4rem" }, 0, "linear", function () {
                            peopleDir.ul.ele.gifPause();
                            box.transition({ y: "5rem" }, trfTime, "linear");
                            box2.transition({ y: "5rem" }, trfTime, "linear");
                            people.transition({ x: "2.7rem", y: "-0.4rem" }, trfTime, "linear", function () {
                                peopleDir.ul.ele.hide();
                                peopleDir.ur.ele.show();
                                _self.animeFlag = false;
                                if(callback) callback();
                            });
                        });
                    })
            });
        })

    }

    _self.sence3step3 = function (callback) {
        // console.log("sence3step3");
        _self.animeFlag = true;
        var s = sence[2].children.eq(4);

        s.transition({ y: "-0.7rem", opacity: 0 },0, function () {
            peopleDir.ur.ele.gifResume();
            people.transition({ x: "3.4rem", y: "-0.9rem" }, 0, "linear", function () {
                peopleDir.ur.ele.hide();
                peopleDir.ur.ele.gifPause();
                peopleDir.r.ele.show();
                peopleDir.r.ele.gifResume();
                people.transition({ x: "5.05rem", y: "-0.9rem" }, 0, "linear", function () {
                    peopleDir.r.ele.hide();
                    peopleDir.r.ele.gifPause();
                    peopleDir.u.ele.show();
                    _self.animeFlag = false;
                    if(callback) callback();
                });
            });
        })
    }

    _self.sence3step4 = function (callback) {
        // console.log("sence3step4");
        _self.animeFlag = true;
        var box = sence[2].box;
        var box2 = roadBox.find(".sence3sp");
        var wheelBox = box.find(".wheelBox");
        var wheel = box.find(".wheel");

        peopleDir.u.ele.gifResume();
        people.transition({ x: "5.05rem", y: "-1rem", opacity: 0 },0, function () {
            peopleDir.u.ele.hide();
            peopleDir.u.ele.gifPause();
            peopleDir.l.ele.show();
            wheelBox.removeClass("zindex2").css({ "z-index": 2 })
                .transition({ rotate: "-180deg" }, 0, "linear", function () {
                    peopleDir.l.ele.gifResume();
                    people.css({ x: "4.5rem", y: "-4rem" })
                        .transition({ x: "4.2rem", y: "-4rem", opacity: 1 },0, function () {
                            peopleDir.l.ele.gifPause();
                            box.transition({ y: "8.5rem" }, trfTime, "linear");
                            box2.transition({ y: "8.5rem" }, trfTime, "linear");
                            people.transition({ x: "4.2rem", y: "-0.5rem" }, trfTime, "linear", function () {
                                _self.animeFlag = false;
                                if(callback) callback();
                                box2.hide();
                            });
                        });
                });
            wheel.transition({ rotate: "180deg" }, 0, "linear");
        });
    }

    _self.sence3step5 = function (callback) {
        // console.log("sence3step5");
        _self.animeFlag = true;

        sence3door[2].gifResume();
        // setTimeout(function () { peopleDir.l.ele.gifResume() }, 500);
        people.transition({ x: "4.1rem", delay: 0, y: "-0.5rem", opacity: 0 },0, function () {
            peopleDir.l.ele.hide();
            peopleDir.l.ele.gifPause();
            peopleDir.r.ele.show();
            people.css({ x: "2.8rem", y: "-2.3rem" })
                .transition({ opacity: 1 },0, function () {
                    peopleDir.r.ele.gifResume();
                    people.transition({ x: "4.2rem", y: "-2.3rem" }, 0, "linear", function () {
                        peopleDir.r.ele.gifPause();
                        _self.animeFlag = false;
                        if(callback) callback();
                    })
                })
        });
    }

    _self.sence3step6 = function (callback) {
        // console.log("sence3step6");
        _self.animeFlag = true;
        var box1 = sence[2].box;
        var box2 = sence[3].box;
        sence3door[3].gifResume();
        // setTimeout(function () { peopleDir.r.ele.gifResume() }, 500);
        people.transition({ x: "4.3rem", delay: 0, y: "-2.3rem", opacity: 0 },0, function () {
            peopleDir.r.ele.gifPause();
            box1.css({ "z-index": 3 })
            stair.css({ y: "-4rem", "z-index": 2, opacity: 0 }).transition({ opacity: 1 },0, function () {
                stair.transition({ y: 0 }, trfTime, "linear");
                box1.transition({ y: "12.5rem" }, trfTime, "linear", function () {
                    peopleDir.r.ele.hide();
                    peopleDir.u.ele.show();
                    people.css({ x: "5.9rem", y: "-0.7rem" })
                        .transition({ opacity: 1 },0,function(){
                            if(peopleMove) peopleDir.u.ele.gifResume();
                        });
                    bgArr[4].transition({ y: "100%" }, 0, "linear");
                    bgArr[5].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear", function () {
                        bgArr[5].transition({ y: "100%" }, 0, "linear");
                        bgArr[6].show().css({ y: "-100%" }).transition({ y: 0 }, 0, "linear");
                    });
                    box1.transition({ y: "20.04rem" }, 0, "linear");
                    stair.transition({ y: "7.54rem" }, 0, "linear");
                    box2.show().css({ y: "-7.54rem" }).transition({ y: "0" }, 0, "linear", function () {
                        box1.hide();
                        bgArr[4].hide();
                        bgArr[5].hide();
                        stair.transition({ opacity: 0 },0);
                        _self.animeFlag = false;
                        if(peopleMove) peopleDir.u.ele.gifPause();
                        if (callback) callback();
                    });
                });
            });

        })
    }

    _self.sence4step1 = function (callback) {
        // console.log("sence4step1");
        _self.animeFlag = true;
        _self.animeFlag = true;
        var box = sence[3].box;
        var m1 = sence[3].children.eq(7);
        var m2 = sence[3].children.eq(6);
        var m3 = sence[3].children.eq(5);

        peopleDir.u.ele.hide();
        peopleDir.l.ele.show();
        peopleDir.l.ele.gifResume();
        people.css({ x: "5.9rem", y: "-0.7rem" })
            .transition({ x: "3.1rem", y: "-0.7rem" }, 0, "linear", function () {
                peopleDir.l.ele.hide();
                peopleDir.l.ele.gifPause();
                peopleDir.u.ele.show();
                peopleDir.u.ele.gifResume();
                people.transition({ x: "3.1rem", y: "-1.4rem" }, 0, "linear", function () {
                    peopleDir.u.ele.hide();
                    peopleDir.u.ele.gifPause();
                    peopleDir.ur.ele.show();
                    peopleDir.ur.ele.gifResume();
                    people.transition({ x: "4.8rem", y: "-3.3rem" }, 0, "linear", function () {
                        peopleDir.ur.ele.gifPause();
                        box.transition({ y: "3rem" }, trfTime, "linear");
                        people.transition({ x: "4.8rem", y: "-0.3rem" }, trfTime, "linear", function () {
                            m1.transition({ opacity: 1 },0);
                            m2.transition({ opacity: 1 },0);
                            m3.transition({ opacity: 1 },0);
                            _self.animeFlag = false;
                            if (callback) callback();
                        });
                    });
                });
            })
    }

    _self.sence4step2 = function (callback) {
        // console.log("sence4step2");
        _self.animeFlag = true;
        var box = sence[3].box;
        var d1 = sence[3].children.eq(4);
        var d2 = sence[3].children.eq(3);
        var d3 = sence[3].children.eq(2);
        var m1 = sence[3].children.eq(7);
        var m2 = sence[3].children.eq(6);
        var m3 = sence[3].children.eq(5);

        m1.hide();
        m2.hide();
        m3.hide();
        d1.transition({ y: "-1rem", opacity: 0 }, 0);
        d2.transition({ y: "-1rem", opacity: 0, delay: 0 }, 0);
        d3.transition({ y: "-1rem", opacity: 0, delay: 0 }, 0, function () {
            peopleDir.ur.ele.gifResume();
            people.transition({ x: "5.3rem", y: "-1rem" }, 0, "linear", function () {
                peopleDir.ur.ele.hide();
                peopleDir.ur.ele.gifPause();
                peopleDir.ul.ele.show();
                peopleDir.ul.ele.gifResume();
                people.transition({ x: "3rem", y: "-2.5rem" }, 0, "linear", function () {
                    peopleDir.ul.ele.hide();
                    peopleDir.ul.ele.gifPause();
                    peopleDir.ur.ele.show();
                    peopleDir.ur.ele.gifResume();
                    people.transition({ x: "5.6rem", y: "-4rem" }, 0, "linear", function () {
                        peopleDir.ur.ele.hide();
                        peopleDir.ur.ele.gifPause();
                        peopleDir.u.ele.show();
                        box.transition({ y: "6rem" }, trfTime, "linear");
                        people.transition({ x: "5.6rem", y: "-1rem" }, trfTime, "linear", function () {
                            peopleDir.u.ele.gifResume();
                            people.transition({ x: "5.6rem", y: "-1.2rem", opacity: 0 },0, function () {
                                peopleDir.u.ele.gifPause();
                                _self.animeFlag = false;
                                _self.sence4step3(function () {
                                    if (callback) callback();
                                })
                            });
                        })

                    });
                });
            })
        });
    }

    _self.sence4step3 = function (callback) {
        // console.log("sence4step3");
        _self.animeFlag = true;
        var box = sence[3].box;
        var rocket = sence[3].children.eq(1);
        _rocketAnimeInit();
        people.hide();
        box.transition({ y: "9rem" }, 600, "linear");
        rocket.transition({ y: "-9rem" }, 600 * 3, "linear", function () {
            _self.animeFlag = false;
            if (callback) callback();
        });
    }

    /**
     * 初始化
     */
    function _init() {
        _uiInit();
    }
    _init();

    /**
     * ui初始化
     */
    function _uiInit() {
        for (var i = 1; i <= 8; i++) {
            bgArr.push(roadBox.find(".bg" + i));
        }

        for (var i = 1; i <= 4; i++) {
            var s = roadBox.find(".sence" + i);
            var item = {
                box: s,
                children: s.children()
            }
            sence.push(item);
        }

        _peopleUiInit();

        if(peopleMove) stair.find(".stair").removeClass("stairing");
    }

    /**
     * 场景二门初始化
     */
    function _sence2doorInit() {
        for (var i = 1; i <= 3; i++) {
            var ele = sence[1].box.find(".door" + i);
            ele.gifOn({
                path: "images/road_sence/2/door" + i + "/",
                num: 5,
                repeat: 0,
                pause: true
            });
            sence2door.push(ele);
        }
    }

    /**
     * 场景三门初始化
     */
    function _sence3doorInit() {
        for (var i = 1; i <= 4; i++) {
            var ele = sence[2].box.find(".door" + i);
            ele.gifOn({
                path: "images/road_sence/3/door" + i + "/",
                num: 5,
                repeat: 0,
                pause: true
            });
            sence3door.push(ele);
        }
    }

    /**
     * 火箭动画初始化
     */
    function _rocketAnimeInit() {
        rocketAni = sence[3].box.find(".rocket");
        rocketAni.empty();
        rocketAni.gifOn({
            path: "images/road_sence/4/rocket/",
            num: 8
        });
    }

    /**
     * 小人Ui初始化
     */
    function _peopleUiInit() {
        var dir = ['l', 'r', 'u', 'ul', 'ur'];
        for (var i = 0; i < dir.length; i++) {
            var item = dir[i];
            var ele = people.find("." + item);
            ele.gifOn({
                path: "images/people/" + item + "/",
                num: 6,
                pause: true
            });
            peopleDir[item] = {
                ele: ele
            }
            if (item != "u") ele.hide();
        }
    }
}