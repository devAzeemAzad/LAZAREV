// function openNav() {
//     const tl = gsap.timeline();
//     tl.to("nav .nav-bottom", {
//       height: "24vh",
//     });
//     tl.to("nav .nav-elem h5", {
//       autoAlpha: 1,
//       delay: 0.1,
//     });
//     tl.to("nav .nav-elem h5 span", {
//       y: 0,
//       delay: 0.2,
//       stagger: {
//         amount: 0.2,
//       },
//     });
//   }
  
//   function closeNav() {
//     const tl = gsap.timeline();
//     tl.to("nav .nav-elem h5 span", {
//       y: 25,
//       delay: 0,
//       stagger: {
//         amount: 0.1,
//       },
//     });
//     tl.to("nav .nav-elem h5", {
//       autoAlpha: 0,
//       duration: 0.3,
//       delay: 0.1,
//     });
//     tl.to("nav .nav-bottom", {
//       height: "0vh",
//       duration: 0.4,
//       delay: 0.5,
//     });
//   }
  
function page2animtion() {
  var rightelem = document.querySelectorAll(".right-elem");
  var rightelemimg = document.querySelectorAll(".right-elem img");
  rightelem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: "1",
        scale: "1",
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: "0",
        scale: "0",
      });
    });
    elem.addEventListener("mousemove", function (delt) {
      gsap.to(elem.childNodes[3], {
        x: delt.x - elem.getBoundingClientRect().x - 50,
        y: delt.y - elem.getBoundingClientRect().y - 60,
        zIndex: "1",
      });
    });
  });
}
page2animtion();
function page3Videoanimtion() {
  var page3center = document.querySelector(".page-3-center .icon");
  var video = document.querySelector(".page3 video");

  page3center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: "1",
      borderRadius: "0px",
      zIndex: "9999",
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0.2)",
      opacity: "0",
      borderRadius: "30px",
      zIndex: "-1",
    });
  });
}
page3Videoanimtion();

function page7text() {
  var page7left = document.querySelector(".page7-left");
  var page7texth1 = document.querySelector(".page7-text h1");
  var page7text1h1 = document.querySelector(".page7-text-1 h1");
  var page7left1 = document.querySelector(".page7-left-1");

  page7left.addEventListener("mouseenter", function () {
    gsap.to(page7texth1, {
      borderTop: "1.5px solid #000",
      duration: 0.2,
    });
  });
  page7left.addEventListener("mouseleave", function () {
    gsap.to(page7texth1, {
      borderTop: "1px solid #5e5a5a48",
      duration: 0.2,
    });
  });
  page7left1.addEventListener("mouseenter", function () {
    gsap.to(page7text1h1, {
      borderTop: "1.5px solid #000",
      duration: 0.2,
    });
  });
  page7left1.addEventListener("mouseleave", function () {
    gsap.to(page7text1h1, {
      borderTop: "1px solid #5e5a5a48",
      duration: 0.2,
    });
  });
}
page7text();

function page7movinganimation() {
  var page7movinganimation = document.querySelector(".page7-moving-animation");
  var page7rightvideo = document.querySelector(".page7-right video");
  page7rightvideo.addEventListener("mouseenter", function () {
    page7rightvideo.play();
    gsap.to(page7rightvideo, {
      opacity: "1",
    });
    gsap.to(page7movinganimation, {
      opacity: "1",
      scale: "1",
    });
  });

  page7rightvideo.addEventListener("mouseleave", function () {
    page7rightvideo.pause();
    gsap.to(page7rightvideo, {
      currentTime: 0,
    });
    gsap.to(page7rightvideo, {
      opacity: "0",
    });
    gsap.to(page7movinganimation, {
      opacity: "0",
      scale: "0",
    });
  });
  page7rightvideo.addEventListener("mousemove", function (delt) {
    gsap.to(page7movinganimation, {
      x: delt.x - page7rightvideo.getBoundingClientRect().x - 80,
      y: delt.y - page7rightvideo.getBoundingClientRect().y - 80,
    });
  });
}

page7movinganimation();

function page7movinganimation1() {
  var page7movinganimation1 = document.querySelector(
    ".page7-moving-animation1"
  );
  var page7rightvideo1 = document.querySelector(".page7-right-1 video");

  page7rightvideo1.addEventListener("mouseenter", function () {
    page7rightvideo1.play();
    gsap.to(page7rightvideo1, {
      opacity: "1",
    });
    gsap.to(page7movinganimation1, {
      opacity: "1",
      scale: "1",
    });
  });

  page7rightvideo1.addEventListener("mouseleave", function () {
    page7rightvideo1.pause();
    gsap.to(page7rightvideo1, {
      currentTime: 0,
    });
    gsap.to(page7rightvideo1, {
      opacity: "0",
    });
    gsap.to(page7movinganimation1, {
      opacity: "0",
      scale: "0",
    });
  });
  page7rightvideo1.addEventListener("mousemove", function (delt) {
    gsap.to(page7movinganimation1, {
      x: delt.x - page7rightvideo1.getBoundingClientRect().x - 80,
      y: delt.y - page7rightvideo1.getBoundingClientRect().y - 80,
    });
  });
}
page7movinganimation1();

function con1() {
  var con1 = document.querySelector(".con-1");
  var con1video = document.querySelector(".con-1 video");
  var con1h1 = document.querySelector(".con-1 h1");

  con1.addEventListener("mouseenter", function () {
    con1video.currentTime = 0;
    con1video.play();
    gsap.to(con1h1, {
      borderTop: "2px solid black",
    });
    gsap.to(con1video, {
      height: "65vh",
      zIndex: "1",
    });
  });
  con1.addEventListener("mouseleave", function () {
    gsap.to(con1video, {
      height: "40vh",
      zIndex: "1",
    });
    gsap.to(con1h1, {
      borderTop: "1px solid #5e5a5a48",
    });
    gsap.to(con1video, {
      currentTime: 0,
      pause: true,
    });
  });
}
con1();

function con2() {
  var con2 = document.querySelector(".con-2");
  var con2video = document.querySelector(".con-2 video");
  var con2h1 = document.querySelector(".con-2 h1");

  con2.addEventListener("mouseenter", function () {
    con2video.currentTime = 0;
    con2video.play();
    gsap.to(con2h1, {
      borderTop: "2px solid black",
    });
    gsap.to(con2video, {
      height: "65vh",
      zIndex: "1",
    });
  });
  con2.addEventListener("mouseleave", function () {
    gsap.to(con2video, {
      height: "40vh",
      zIndex: "1",
    });
    gsap.to(con2h1, {
      borderTop: "1px solid #5e5a5a48",
    });
    gsap.to(con2video, {
      currentTime: 0,
      pause: true,
    });
  });
}
con2();

function page9categary() {
  var page9categaryhead = document.querySelector(".page9-categary-head");
  var page9categaryheadsvg = document.querySelector(
    ".page9-categary-head h1 svg"
  );
  var page9categaryheadh1 = document.querySelector(".page9-categary-head h1");
  var page9categary = document.querySelector(".page9-categary");
  var elem1 = document.querySelector(".elem1");

  var clickCount = 1;
  page9categaryhead.addEventListener("click", function () {
    clickCount++;
    if (clickCount % 2 === 0) {
      gsap.to(page9categaryheadsvg, {
        rotate: "180deg",
        duration: 0.4,
      });
      gsap.to(page9categary, {
        height: "0",
        opacity: 0,
        duration: 0.1,
        display: "none",
      });
      gsap.to(page9categaryheadh1, {
        borderTop: "1px solid rgba(129, 127, 127, 0.336)",
      });
    } else {
      gsap.to(page9categaryheadsvg, {
        rotate: "0deg",
        duration: 0.4,
      });
      gsap.to(page9categary, {
        height: "100%",
        opacity: 1,
        duration: 0.1,
        display: "block",
      });
      gsap.to(page9categaryheadh1, {
        borderTop: "1px solid rgb(255, 255, 255)",
      });
    }
  });
}
page9categary();

function page9categary1() {
  var page9categaryhead1 = document.querySelector(".page9-categary-head-1");
  var page9categaryheadsvg1 = document.querySelector(
    ".page9-categary-head-1 h1 svg"
  );
  var page9categaryhead1h1 = document.querySelector(
    ".page9-categary-head-1 h1"
  );
  var page9categary1 = document.querySelector(".page9-categary-1");
  var elem2 = document.querySelector(".elem2");

  var clickCount1 = 0;
  page9categaryhead1.addEventListener("click", function () {
    clickCount1++;
    if (clickCount1 % 2 === 0) {
      gsap.to(page9categaryheadsvg1, {
        rotate: "0deg",
        duration: 0.4,
      });
      gsap.to(page9categary1, {
        height: "0",
        opacity: 0,
        duration: 0.1,
        display: "none",
      });
      gsap.to(page9categaryhead1h1, {
        borderTop: "1px solid rgba(129, 127, 127, 0.336)",
      });
    } else {
      gsap.to(page9categaryheadsvg1, {
        rotate: "180deg",
        duration: 0.4,
      });
      gsap.to(page9categary1, {
        height: "100%",
        opacity: 1,
        duration: 0.1,
        display: "block",
      });
      gsap.to(page9categaryhead1h1, {
        borderTop: "1px solid rgb(255, 255, 255)",
      });
    }
  });
}
page9categary1();

var elem1 = document.querySelectorAll(".elem1");
var elem1h2 = document.querySelectorAll(".elem1 h2");
var elem1p = document.querySelectorAll(".elem1p");
elem1.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    gsap.to(item, {
      paddingRight: "0.9vw",
      borderTop: "1px solid white",
      paddingLeft: "0.9vw",
    });
  });
  item.addEventListener("mouseleave", function () {
    gsap.to(item, {
      paddingRight: "0vw",
      paddingLeft: "0vw",
      borderTop: "1px solid rgba(128, 128, 128, 0.418)",
    });
  });
});
var elem2 = document.querySelectorAll(".elem2");
var elem2h2 = document.querySelectorAll(".elem2 h2");
var elem2p = document.querySelectorAll(".elem2p");
elem2.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    gsap.to(item, {
      paddingRight: "0.9vw",
      borderTop: "1px solid white",
      paddingLeft: "0.9vw",
    });
  });
  item.addEventListener("mouseleave", function () {
    gsap.to(item, {
      paddingRight: "0vw",
      paddingLeft: "0vw",
      borderTop: "1px solid rgba(128, 128, 128, 0.418)",
    });
  });
});
