// const url = "http://localhost:4232/courseList";
// const getCourseInfo = () =>
//   fetch(url).then((response) =>
//     response.json().then((res) => {
//       console.log(res);
//     })
//   );
// getCourseInfo();
const API = (() => {
  const url = "http://localhost:4232/courseList";
  const getCourseInfo = () => fetch(url).then((response) => response.json());
  return { getCourseInfo };
})();

const VIEW = (() => {
  const selectors = {
    leftSelector: ".left_section",
    rightSelector: ".right_section",
    li: ".li",
  };
  const showLeftContent = (arr) => {
    let temp = "";
    for (let c of arr) {
      if (c.required === true) {
        c.required = "Compulsory";
      } else {
        c.required = "Elective";
      }
    }
    arr.map((course) => {
      temp += `
        <li class=${course.courseId})">
            <span>${course.courseName}</span>
            <span>Course Type: ${course.required}</span>
            <span>Course Credit: ${course.credit}</span>           
        </li>`;
    });
    return temp;
  };

  const showRightContent = (arr) => {
    let temp = "";
    for (let c of arr) {
      if (c.required === true) {
        c.required = "Compulsory";
      } else {
        c.required = "Elective";
      }
    }
    arr.map((course) => {
      temp += `
        <li class=${course.courseId})">
            <span>${course.courseName}</span>
            <span>Course Type: ${course.required}</span>
            <span>Course Credit: ${course.credit}</span>           
        </li>`;
    });
    return temp;
  };
  const renderContent = (ele, temp) => {
    ele.innerHTML = temp;
    return ele.innerHTML;
  };
  const renderColor = (ele) => {
    ele.style.color = "blue";
  };
  return {
    selector: selectors,
    left: showLeftContent,
    right: showRightContent,
    renderContent,
    renderColor,
  };
})();

const MODEL = ((API, VIEW) => {
  const { getCourseInfo } = API;
  class leftState {
    leftcourseArr = [];
    get courseList() {
      return this.leftcourseArr;
    }
    set courseList(updatedCourseArr) {
      this.leftcourseArr = updatedCourseArr;
      const leftSelector = document.querySelector(VIEW.selector.leftSelector);
      const leftContent = VIEW.left(this.leftcourseArr);
      VIEW.renderContent(leftSelector, leftContent);
    }
  }
  class rightState {
    rightcourseArr = [];
    get courseList() {
      return this.rightcourseArr;
    }
    set courseList(updatedCourseArr) {
      this.rightcourseArr = updatedCourseArr;
      const rightSelector = document.querySelector(VIEW.selector.rightSelector);

      const rightContent = VIEW.left(this.rightcourseArr);
      VIEW.renderContent(rightSelector, rightContent);
    }
  }
  return { getCourseInfo, leftState, rightState };
})(API, VIEW);

const controller = ((MODEL, VIEW) => {
  const leftState = new MODEL.leftState();

  const init = () => {
    MODEL.getCourseInfo().then((content) => {
      leftState.courseList = content;
    });
  };

  async function selectCourse() {
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000);
    });

    let selectedCourse = document.querySelector(".left_section");
    let li = selectedCourse.getElementsByTagName("li");
    let sum = 0;

    let isChooseBoolean = [];
    let chooseList = [];
    for (let i = 0; i < li.length; i++) {
      li[i].onclick = function () {
        const courseCredit = parseInt(
          li[i].innerText.split("\n")[2].split(":")[1]
        );

        if (isChooseBoolean[i] === undefined || isChooseBoolean[i] === true) {
          chooseList.push(li[i].innerText);
          document.querySelector(".credit").innerText = "Total Credit : " + sum;
          li[i].style.backgroundColor = "aqua";
          isChooseBoolean[i] = false;
          sum += courseCredit;

          if (sum > 18) {
            alert("You can only choose up to 18 credits in one semester");
          }
        } else {
          delete chooseList[i];
          document.querySelector(".credit").innerText = "Total Credit : " + sum;
          li[i].style.backgroundColor = "white";
          isChooseBoolean[i] = true;
          sum -= courseCredit;
        }
      };
    }
  }

  function checkCourse() {
    const total_credit = document.querySelector(".credit").innerText;
    if (total_credit === "") {
      alert("You didn't choose any course, please select again!");
    } else {
      let tmp = "";
      let selectedCourse = document.querySelector(".left_section");
      let li = selectedCourse.getElementsByTagName("li");
      for (let i = 0; i < li.length; i++) {
        if (li[i].style.backgroundColor === "aqua") {
          const cousename = li[i].innerText.split("\n")[0];
          const courserequire = li[i].innerText.split("\n")[1];
          const coursecredit = li[i].innerText.split("\n")[2];
          tmp += `
          <li>
          <span>${cousename}</span>
          <span>Course Type: ${courserequire}</span>
          <span>Course Credit: ${coursecredit}</span>           
        </li>
          `;
        }
        console.log(tmp);
      }
      let rightCourse = document.querySelector(".right_section");
      rightCourse.innerHTML = tmp;
    }
  }

  function reset() {
    document.querySelector(".credit").innerText = "Total Credit:  0";
    let selectedCourse = document.querySelector(".left_section");
    let rightCourse = document.querySelector(".right_section");
    rightCourse.innerHTML = "";
    let li = selectedCourse.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      if (li[i].style.backgroundColor === "aqua") {
        li[i].style.backgroundColor = "white";
      }
    }
  }

  const select_btn = document.querySelector(".select-btn");
  const reset_btn = document.querySelector(".reset-btn");
  select_btn.addEventListener("click", checkCourse);
  reset_btn.addEventListener("click", reset);

  const bootstrap = () => {
    init();
    selectCourse();
    checkCourse();
    reset();
  };
  return { bootstrap };
})(MODEL, VIEW);

controller.bootstrap();
