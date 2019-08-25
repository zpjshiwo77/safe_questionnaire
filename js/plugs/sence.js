var roadSence = function () {
    var _self = this;

    _self.animeFlag = false;

    var roadBox = $("#roadBox");
    var bgArr = [];
    var sence = [];
    var stair = roadBox.find(".stairBox");
    var people = roadBox.find(".peopleBox");
    var peopleDir = {};
    var trfTime = 1;

    _self.sence1step1 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;

        people.transition({ x: "3.9rem", y: "-2.7rem", opacity: 0 }, function () {
            box.transition({ y: "2.5rem" }, trfTime, function () {
                peopleDir.u.ele.hide();
                peopleDir.ur.ele.show();
                people.css({ x: "2.7rem", y: "-2.8rem" })
                    .transition({ opacity: 1 }, function () {
                        _self.animeFlag = false;
                    });
            });
        });
    }

    _self.sence1step2 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(5);

        people.transition({ x: "4.3rem", y: "-3.4rem" }, 1000, "linear")
            .transition({ x: "4.4rem", y: "-3.5rem", opacity: 0 });
        s.transition({ opacity: 1, delay: 1500 });
        box.transition({ y: "4.5rem", delay: 1500 }, trfTime, function () {
            peopleDir.ur.ele.hide();
            peopleDir.ul.ele.show();
            people.css({ x: "3.9rem", y: "-3.2rem" })
                .transition({ opacity: 1 })
                .transition({ x: "3.3rem", y: "-3.5rem" }, 800, "linear")
                .transition({ x: "3.2rem", y: "-3.55rem", opacity: 0 }, function () {
                    peopleDir.ul.ele.hide();
                    peopleDir.dr.ele.show();
                    people.css({ x: "3.5rem", y: "-4.7rem" })
                        .transition({ opacity: 1 })
                        .transition({ x: "5rem", y: "-3.8rem" }, 1000, "linear", function () {
                            peopleDir.dr.ele.hide();
                            peopleDir.ur.ele.show();
                            _self.animeFlag = false;
                        });
                });
        });
    }

    _self.sence1step3 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(4);
        var s2 = sence[0].children.eq(3);

        s.transition({ opacity: 1 });
        people.transition({ x: "6.6rem", y: "-4.8rem" }, 1000, "linear", function () {
            peopleDir.ur.ele.hide();
            peopleDir.ul.ele.show();
            box.transition({ y: "8rem" }, trfTime);
            people.transition({ y: "-1.3rem" }, trfTime, function () {
                _self.animeFlag = false;
            });
            s2.transition({ opacity: 1 });
        })
    }

    _self.sence1step4 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(2);
        var s2 = sence[0].children.eq(1);

        people.transition({ x: "5.8rem", y: "-1.8rem" }, 700, "linear")
            .transition({ x: "5.65rem", y: "-1.85rem", opacity: 0 }, function () {
                people.css({ x: "4.5rem", y: "-1.8rem" })
                    .transition({ opacity: 1 })
                    .transition({ x: "3.6rem", y: "-2.3rem" }, 1000, "linear")
                    .transition({ x: "3.5rem", y: "-2.4rem", opacity: 0 }, function () {
                        peopleDir.ul.ele.hide();
                        peopleDir.ur.ele.show();
                        people.css({ x: "3.9rem", y: "-3.5rem" })
                            .transition({ opacity: 1 })
                            .transition({ x: "4.8rem", y: "-4.7rem" }, 1000, "linear", function () {
                                s.transition({ opacity: 1 });
                                s2.transition({ opacity: 1 });
                                box.transition({ y: "11rem" }, trfTime);
                                people.transition({ y: "-1.7rem" }, trfTime, function () {
                                    _self.animeFlag = false;
                                });
                            })
                    })
            })
    }

    _self.sence1step5 = function () {
        _self.animeFlag = true;
        var s = sence[0].children.eq(2);

        s.transition({ y: "-0.47rem" });
        people.transition({ x: "5.4rem", y: "-2.1rem", delay: 500 }, "linear", function () {
            s.transition({ y: "0.33rem" }, 800);
            people.transition({ x: "5.4rem", y: "-1.3rem" }, 800)
                .transition({ x: "6.1rem", y: "-1.7rem" }, 700, "linear", function () {
                    _self.animeFlag = false;
                    peopleDir.ur.ele.hide();
                    peopleDir.u.ele.show();
                })
        })
    }

    _self.sence1step6 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;
        var s = sence[0].children.eq(0);

        people.transition({ x: "6.1rem", y: "-2.7rem" }, 1000, "linear", function () {
            peopleDir.u.ele.hide();
            peopleDir.l.ele.show();
            people.transition({ x: "4.5rem", y: "-2.8rem" }, 1100, "linear")
                .transition({ x: "4.45rem", y: "-2.8rem", opacity: 0 }, function () {
                    peopleDir.l.ele.hide();
                    peopleDir.ur.ele.show();
                    s.transition({ opacity: 1 });
                    box.transition({ y: "12.5rem" }, trfTime, function () {
                        _self.animeFlag = false;
                    });
                })
        })
    }

    _self.sence1step7 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;

        people.css({ x: "4.8rem", y: "-2.5rem" })
            .transition({ opacity: 1 })
            .transition({ x: "6.1rem", y: "-3.4rem" }, 1100, "linear", function () {
                peopleDir.ur.ele.hide();
                peopleDir.ul.ele.show();
                people.transition({ x: "6.05rem", y: "-3.45rem", opacity: 0 }, function () {
                    box.transition({ y: "15rem" }, trfTime, function () {
                        _self.animeFlag = false;
                    });
                })
            })
    }

    _self.sence1step7 = function () {
        _self.animeFlag = true;
        people.css({ x: "4.8rem", y: "-2.5rem" })
            .transition({ opacity: 1 })
            .transition({ x: "6.1rem", y: "-3.4rem" }, 1100, "linear", function () {
                peopleDir.ur.ele.hide();
                peopleDir.ul.ele.show();
                _self.animeFlag = false;
            });
    }

    _self.sence1step8 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;

        people.transition({ x: "6.05rem", y: "-3.45rem", opacity: 0 }, function () {
            box.transition({ y: "15rem" }, trfTime, function () {
                people.css({ x: "3.6rem", y: "-2.6rem" })
                    .transition({ opacity: 1 })
                    .transition({ x: "3rem", y: "-3rem" }, 800, "linear", function () {
                        peopleDir.ul.ele.hide();
                        peopleDir.ur.ele.show();
                        _self.animeFlag = false;
                    });
            });
        })
    }

    _self.sence1step9 = function () {
        _self.animeFlag = true;
        var box = sence[0].box;

        box.transition({ y: "17rem" }, trfTime);
        people.transition({ x: "3rem", y: "-1rem" }, trfTime)
            .transition({ x: "4.9rem", y: "-2.2rem" }, 1100, "linear", function () {
                _self.animeFlag = false;
            });
    }

    _self.sence1step10 = function () {
        _self.animeFlag = true;
        var box1 = sence[0].box;
        var box2 = sence[1].box;

        stair.css({ y: "-2.2rem" })
            .transition({ opacity: 1 });
        people.transition({ x: "4.9rem", y: "-2.2rem", opacity: 0 }, function () {
            peopleDir.ur.ele.hide();
            peopleDir.u.ele.show();
            bgArr[0].transition({ y: "100%" }, 2000, "linear");
            bgArr[1].show().css({ y: "-100%" }).transition({ y: 0 }, 2000, "linear");
            box1.css({ "z-index": 3 }).transition({ y: "20.5rem" }, 2000, "linear");
            stair.transition({ y: "1.3rem" }, 2000, "linear", function () {
                people.css({ x: "5.9rem", y: "-1rem" })
                    .transition({ opacity: 1 });
                bgArr[1].transition({ y: "100%" }, 3000, "linear");
                bgArr[2].show().css({ y: "-100%" }).transition({ y: 0 }, 3000, "linear");
                box1.transition({ y: "26.1rem" }, 3000, "linear");
                stair.css({ "z-index": 2 }).transition({ y: "6.9rem" }, 3000, "linear");
                box2.show().css({ y: "-5.6rem" }).transition({ y: "0" }, 3000, "linear", function () {
                    box1.hide();
                    bgArr[0].hide();
                    bgArr[1].hide();
                    _self.animeFlag = false;
                });
            });
        });
    }

    _self.sence2step1 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;

        peopleDir.u.ele.hide();
        peopleDir.ul.ele.show();
        people.css({ x: "5.9rem", y: "-1rem" })
            .transition({ x: "3.9rem", y: "-2.2rem" }, 1100, "linear")
            .transition({ x: "3.85rem", y: "-2.25rem", opacity: 0 }, function () {
                peopleDir.ul.ele.hide();
                peopleDir.ur.ele.show();
                stair.transition({ y: "8.9rem" }, trfTime);
                box.transition({ y: "2rem" }, trfTime, function () {
                    people.css({ x: "4.5rem", y: "-1.45rem" })
                        .transition({ opacity: 1 });
                    _self.animeFlag = false;
                });
            });
    }

    _self.sence2step2 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;

        people.transition({ x: "5.2rem", y: "-1.8rem" }, 700, "linear")
            .transition({ x: "5.25rem", y: "-1.85rem", opacity: 0 }, function () {
                peopleDir.ur.ele.hide();
                peopleDir.ul.ele.show();
                box.transition({ y: "4rem" }, trfTime, function () {
                    people.css({ x: "4.6rem", y: "-1rem" })
                        .transition({ opacity: 1 });
                    _self.animeFlag = false;
                });
            });
    }

    _self.sence2step3 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;

        people.transition({ x: "3.9rem", y: "-2rem" }, 700, "linear")
            .transition({ x: "3.85rem", y: "-2.05rem", opacity: 0 }, function () {
                peopleDir.ul.ele.hide();
                peopleDir.ur.ele.show();
                box.transition({ y: "6rem" }, trfTime, function () {
                    people.css({ x: "4.7rem", y: "-0.5rem" })
                        .transition({ opacity: 1 })
                        .transition({ x: "5.6rem", y: "-1rem" }, 700, "linear", function () {
                            _self.animeFlag = false;
                        });
                });
            });
    }

    _self.sence2step4 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;
        var s = sence[1].children.eq(5);

        people.transition({ x: "5.9rem", y: "-1.3rem" }, function () {
            peopleDir.ur.ele.hide();
            peopleDir.ul.ele.show();
            s.transition({ x: "-1.9rem", y: "-1.4rem" }, 1000);
            people.transition({ x: "4rem", y: "-2.7rem" }, 1000, function () {
                peopleDir.ul.ele.hide();
                peopleDir.ur.ele.show();
                people.transition({ x: "5.5rem", y: "-3.45rem" }, 1000, "linear", function () {
                    people.transition({ x: "5.5rem", y: "-0.45rem" }, trfTime);
                    box.transition({ y: "9rem" }, trfTime, function () {
                        _self.animeFlag = false;
                    });
                });
            });
        });
    }

    _self.sence2step5 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;
        var s = sence[1].children.eq(3);

        people.transition({ x: "5.8rem", y: "-0.8rem" }, function () {
            peopleDir.ur.ele.hide();
            peopleDir.ul.ele.show();
            s.transition({ y: "-1.5rem" }, 1000);
            people.transition({ x: "5.8rem", y: "-2.3rem" }, 1000, function () {
                peopleDir.ul.ele.hide();
                peopleDir.l.ele.show();
                people.transition({ x: "4.2rem", y: "-2.5rem" }, 1000, "linear", function () {
                    people.transition({ x: "4.2rem", y: "-0.5rem" }, trfTime);
                    box.transition({ y: "11rem" }, trfTime, function () {
                        _self.animeFlag = false;
                    });
                });
            });
        });
    }

    _self.sence2step6 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;
        var s = sence[1].children.eq(1);

        people.transition({ x: "4.1rem", y: "-0.5rem", opacity: 0 }, function () {
            peopleDir.l.ele.hide();
            peopleDir.ur.ele.show();
            people.css({ x: "4.5rem", y: "-1.75rem" })
                .transition({ opacity: 1 })
                .transition({ x: "5.2rem", y: "-2.2rem" }, 700, "linear", function () {
                    s.transition({ opacity: 0 })
                    people.transition({ x: "5.25rem", y: "-2.25rem", delay: 500, opacity: 0 }, function () {
                        peopleDir.ur.ele.hide();
                        peopleDir.ul.ele.show();
                        people.css({ x: "4.8rem", y: "-3.2rem" })
                            .transition({ opacity: 1 })
                            .transition({ x: "4rem", y: "-3.7rem" }, 700, "linear", function () {
                                _self.animeFlag = false;
                            });
                    });
                });
        });
    }

    _self.sence2step7 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;

        people.transition({ x: "3.9rem", y: "-3.75rem", opacity: 0 }, 500, function () {
            peopleDir.ul.ele.hide();
            peopleDir.r.ele.show();
            box.transition({ y: "16rem" }, trfTime, function () {
                people.css({ x: "4.8rem", y: "-0.45rem" })
                    .transition({ opacity: 1 })
                    .transition({ x: "6rem", y: "-0.45rem" }, 1000, "linear", function () {
                        peopleDir.r.ele.hide();
                        peopleDir.u.ele.show();
                        _self.animeFlag = false;
                    });
            });
        })
    }

    _self.sence2step8 = function () {
        _self.animeFlag = true;
        var box1 = sence[1].box;
        var box2 = sence[2].box;
        var box3 = roadBox.find(".sence3sp");

        stair.css({ y: "-0.5rem", opacity: 0 })
            .transition({ opacity: 1 }, function () {
                bgArr[2].transition({ y: "100%" }, 2000, "linear");
                bgArr[3].show().css({ y: "-100%" }).transition({ y: 0 }, 2000, "linear", function () {
                    bgArr[3].transition({ y: "100%" }, 2000, "linear");
                    bgArr[4].show().css({ y: "-100%" }).transition({ y: 0 }, 2000, "linear");
                });
                box1.css({ "z-index": 3 }).transition({ y: "24.35rem" }, 4000, "linear");
                stair.css({ "z-index": 2 }).transition({ y: "7.85rem" }, 4000, "linear");
                box2.show().css({ y: "-8.35rem" }).transition({ y: "0" }, 4000, "linear", function () {
                    box3.show().css({ opacity: 0 }).transition({ opacity: 1 });
                    box1.hide();
                    bgArr[2].hide();
                    bgArr[3].hide();
                    _self.animeFlag = false;
                });
            });
    }

    _self.sence3step1 = function () {
        _self.animeFlag = true;
        var box = sence[1].box;

        peopleDir.u.ele.hide();
        peopleDir.l.ele.show();
        people.css({ x: "6rem", y: "-0.45rem" })
            .transition({ x: "3.8rem", y: "-0.45rem" }, 1200, "linear")
            .transition({ x: "3.85rem", y: "-0.45rem", opacity: 0 }, function () {
                peopleDir.l.ele.hide();
                peopleDir.ur.ele.show();
                people.css({ x: "4.2rem", y: "-2.1rem" })
                    .transition({ opacity: 1 }, function () {
                        _self.animeFlag = false;
                    });
            });
    }

    _self.sence3step2 = function () {
        _self.animeFlag = true;
        var box = sence[2].box;
        var box2 = roadBox.find(".sence3sp");

        people.transition({ x: "5.05rem", y: "-2.6rem" }, 1000, "linear")
            .transition({ x: "5.1rem", y: "-2.65rem", opacity: 0 }, function () {
                peopleDir.ur.ele.hide();
                peopleDir.ul.ele.show();
                people.css({ x: "4.7rem", y: "-4.1rem" })
                    .transition({ opacity: 1 })
                    .transition({ x: "2.7rem", y: "-5.4rem" }, 1400, "linear", function () {
                        box.transition({ y: "5rem" }, trfTime, "linear");
                        box2.transition({ y: "5rem" }, trfTime, "linear");
                        people.transition({ x: "2.7rem", y: "-0.4rem" }, trfTime, "linear", function () {
                            peopleDir.ul.ele.hide();
                            peopleDir.ur.ele.show();
                            _self.animeFlag = false;
                        });
                    });
            });
    }

    _self.sence3step3 = function () {
        _self.animeFlag = true;
        var s = sence[2].children.eq(4);

        s.transition({ y: "-0.7rem", opacity: 0 }, function () {
            people.transition({ x: "3.4rem", y: "-0.9rem" }, 700, "linear", function () {
                peopleDir.ur.ele.hide();
                peopleDir.r.ele.show();
                people.transition({ x: "5.05rem", y: "-0.9rem" }, 1100, "linear", function () {
                    peopleDir.r.ele.hide();
                    peopleDir.u.ele.show();
                    _self.animeFlag = false;
                });
            });
        })
    }

    _self.sence3step4 = function () {
        _self.animeFlag = true;
        var box = sence[2].box;
        var box2 = roadBox.find(".sence3sp");
        var wheelBox = box.find(".wheelBox");
        var wheel = box.find(".wheel");

        people.transition({ x: "5.05rem", y: "-1rem", opacity: 0 }, function () {
            peopleDir.u.ele.hide();
            peopleDir.l.ele.show();
            wheelBox.transition({ rotate: "-180deg" }, 2000, "linear", function () {
                people.css({ x: "4.5rem", y: "-4rem" })
                    .transition({ x: "4.2rem", y: "-4rem", opacity: 1 }, function () {
                        box.transition({ y: "8.5rem" }, trfTime, "linear");
                        box2.transition({ y: "8.5rem" }, trfTime, "linear");
                        people.transition({ x: "4.2rem", y: "-0.5rem" }, trfTime, "linear", function () {
                            _self.animeFlag = false;
                            box2.hide();
                        });
                    });
            });
            wheel.transition({ rotate: "180deg" }, 2000, "linear");
        });
    }

    _self.sence3step5 = function () {
        _self.animeFlag = true;
        var box = sence[2].box;

        people.transition({ x: "4.1rem", y: "-0.5rem", opacity: 0 }, function () {
            peopleDir.l.ele.hide();
            peopleDir.r.ele.show();
            people.css({ x: "2.8rem", y: "-2.3rem" })
                .transition({ opacity: 1 })
                .transition({x: "4.2rem", y: "-2.3rem" },1100,"linear",function(){
                    _self.animeFlag = false;
                })
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
        for (var i = 1; i <= 7; i++) {
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

        var dir = ['dr', 'l', 'r', 'u', 'ul', 'ur'];
        for (var i = 0; i < dir.length; i++) {
            var item = dir[i];
            peopleDir[item] = {
                ani: null,
                ele: people.find("." + item)
            }
        }

        peopleDir.u.ele.show();
    }
}