// target

const body = document.querySelector("body");


// child element of Aside
function mainContainerOfBody() {
  // div of body i named this Main Body div
  const divOfMainBody = document.createElement("div");
  divOfMainBody.setAttribute("class", "MainContainerOfBody");

  function creatingElementOfAside() {
    // Aside blog
    const Aside = document.createElement("aside");
    // Main Div of Aside
    const MainDivOfAside = document.createElement("div");
    MainDivOfAside.setAttribute("class", "MainContainerOfAside");
    // Child of Main Div
    function childsOfMainContainer() {
      // they are three Child div Of Main Div
      const Div1ofAside = document.createElement("div");
      const Div2ofAside = document.createElement("div");
      const Div3ofAside = document.createElement("div");

      Div1ofAside.setAttribute("class", "miniContainerOfAside_1");
      Div2ofAside.setAttribute("class", "miniContainerOfAside_2");
      Div3ofAside.setAttribute("class", "miniContainerOfAside_3");

      // calling function via hoisting
      childOfDiv1ofAside();
      childOfDiv2ofAside();
      childOfDiv3ofAside();
      // Logo of Aside
      function childOfDiv1ofAside() {
        const imageOfDiv1ofAside = document.createElement("img");
        imageOfDiv1ofAside.setAttribute(
          "src",
          "https://www.digitalinsightfoundation.org/_app/immutable/assets/dif_img.9be40b60.png"
        );
        //    appendChild
        return Div1ofAside.appendChild(imageOfDiv1ofAside);
      }
      // nav buttons of Aside
      function childOfDiv2ofAside() {
        const namesOfBtns = [
          `<i class="fa-solid fa-house"></i>Home`,
          `<i class="fa-solid fa-magnifying-glass"></i>Search`,
          `<i class="fa-regular fa-compass"></i>explore`,
          `<i class="fa-brands fa-youtube"></i>Reels`,
          `<i class="fa-regular fa-message"></i>Message`,
          `<i class="fa-regular fa-heart"></i>Notification`,
          `<i class="fa-regular fa-square-plus"></i>Create`,
          `<img src='https://picsum.photos/300?random=${parseInt(
            Math.random() * 2000
          )}'> Profile`,
        ];

        for (let i = 0; i < namesOfBtns.length; i++) {
          const btnsOfDiv2ofAside = document.createElement("button");
          btnsOfDiv2ofAside.setAttribute("class", "btnsOfDiv2ofAside");
          btnsOfDiv2ofAside.innerHTML = namesOfBtns[i];
          // append btns of Aside
          return Div2ofAside.appendChild(btnsOfDiv2ofAside);
        }
      }
      //  MORE button of Aside
      function childOfDiv3ofAside() {
        const btnOfDiv3ofAside = document.createElement("button");
        btnOfDiv3ofAside.textContent = "More";
        return Div3ofAside.appendChild(btnOfDiv3ofAside);
      }
      // append Of aside child
      // Child append to main div
      MainDivOfAside.appendChild(Div1ofAside);
      MainDivOfAside.appendChild(Div2ofAside);
      MainDivOfAside.appendChild(Div3ofAside);
      // main div append to Aside blog
      return Aside.appendChild(MainDivOfAside);
    }
    childsOfMainContainer();

    // append aside to Body
    divOfMainBody.appendChild(Aside);
  }

  function creatingElementOfMain() {
    // Main blog
    const Main = document.createElement("main");
    // main div of main blog
    const mainDivOfMain = document.createElement("div");
    mainDivOfMain.setAttribute("class", "mainContainer");

    childsOfMainContainerMain();
    // in the main div of Main blog i created two child 1 for story and second for post
    function childsOfMainContainerMain() {
      // calling function of childe head=Story and body=Post via Hoisting

      headOfMainContainerMain();
      bodyOfMainContainerMain();
      // function of Story blog Of Main Blog
      function headOfMainContainerMain() {
        // this is a div of story Blog that will contain all small items
        const headOfMainContainerMain = document.createElement("div");
        headOfMainContainerMain.setAttribute(
          "class",
          "headOfMainContainerMain"
        );
        // i used for loop to make 100 fake image of story
        for (let i = 1; i <= 100; i++) {
          // 100 div
          const storyDiv = document.createElement("div");
          // 100 image assigned to 100 div
          const storyImg = document.createElement("img");
          storyImg.src = `https://picsum.photos/300?random=${parseInt(
            Math.random() * 2000
          )}`;
          // names of div like profile name
          const namesOfStory = document.createElement("h3");
          namesOfStory.textContent = `Person ${i}`;
          // apend image and name to 100 div
          storyDiv.appendChild(storyImg);
          storyDiv.appendChild(namesOfStory);
          // append header of main i mean story blog to main div
          headOfMainContainerMain.appendChild(storyDiv);
        }
        // append main div Of Story blog to main div of Main Blog
        return mainDivOfMain.appendChild(headOfMainContainerMain);
      }
      // function of Post blog Of Main Blog
      function bodyOfMainContainerMain() {
        // i maked a main container that will containe big div of post
        const bodyOfMainContainerMain = document.createElement("div");
        bodyOfMainContainerMain.setAttribute(
          "class",
          "bodyOfMainContainerMain"
        );
        // i user for loof to make 100 fake post
        for (let i = 1; i <= 100; i++) {
          // the div that will conaine all small items of post like profile name , post , like comment shear button
          const bigDivOfBodyMain = document.createElement("div");
          bigDivOfBodyMain.setAttribute("class", "bigDivOfBodyMain");
          // i maked three child of big div
          // 1 for profile , name , and nav button
          // 1 for post
          // 1 for like comment shear button

          // these are function call of three child of big div via hoisting
          firstElemenetOfBigDiv();
          secondElemenetOfBigDiv();
          thirdElemenetOfBigDiv();
          // function of fist child of big div
          function firstElemenetOfBigDiv() {
            //  i created main div of first child of big div
            const firstElemenetOfBigDiv = document.createElement("div");
            firstElemenetOfBigDiv.setAttribute(
              "class",
              "firstElemenetOfBigDiv"
            );
            // i created 2 grand child of big div its mean this is a child of first child of big div
            // 1 for profile and name
            // 1 for nav button

            // 1st grand child of big div and child of first element
            const miniEleOffirstElemenetOfBigDiv_1 =
              document.createElement("div");
            //  child ele of 1st min element
            const smallDivOfminiEleOffirstElemenetOfBigDiv_1 =
              document.createElement("div");
            smallDivOfminiEleOffirstElemenetOfBigDiv_1.setAttribute(
              "class",
              "smallDivOfminiEleOffirstElemenetOfBigDiv_1"
            );

            // this is for profile pic
            const profileOfminiEleOffirstElemenetOfBigDiv_1 =
              document.createElement("img");
            profileOfminiEleOffirstElemenetOfBigDiv_1.src = `https://picsum.photos/300?random=${parseInt(
              Math.random() * 2000
            )}`;

            // this is for name of profile
            const namesOfProfile = document.createElement("h3");
            namesOfProfile.textContent = `Person ${i}`;
            // append profile to grand child of big div and child of first element
            smallDivOfminiEleOffirstElemenetOfBigDiv_1.appendChild(
              profileOfminiEleOffirstElemenetOfBigDiv_1
            );
            // append Profile name to grand child of big div and child of first element
            smallDivOfminiEleOffirstElemenetOfBigDiv_1.appendChild(
              namesOfProfile
            );
            // append grand child of big div to child of big div first element
            miniEleOffirstElemenetOfBigDiv_1.appendChild(
              smallDivOfminiEleOffirstElemenetOfBigDiv_1
            );

            // this is also a grand child of big div and child of First element this is for nave btn
            const miniEleOffirstElemenetOfBigDiv_2 =
              document.createElement("div");
            miniEleOffirstElemenetOfBigDiv_2.setAttribute(
              "class",
              "miniEleOffirstElemenetOfBigDiv_2"
            );
            // this is btn for uper div of grand child big div
            const NavBtnOfminiEleOffirstElemenetOfBigDiv_2 =
              document.createElement("button");
            NavBtnOfminiEleOffirstElemenetOfBigDiv_2.textContent = "|||";
            //  btn append to grand child of big div
            miniEleOffirstElemenetOfBigDiv_2.appendChild(
              NavBtnOfminiEleOffirstElemenetOfBigDiv_2
            );
            // append the grand child of big div to child of big div First Elemet
            firstElemenetOfBigDiv.appendChild(miniEleOffirstElemenetOfBigDiv_1);
            firstElemenetOfBigDiv.appendChild(miniEleOffirstElemenetOfBigDiv_2);
            // now append child of Big Div to Big div
            return bigDivOfBodyMain.appendChild(firstElemenetOfBigDiv);
          }
          // function of Second child of big div
          function secondElemenetOfBigDiv() {
            // second child of Big div i mean this is post
            const secondElemenetOfBigDiv = document.createElement("div");
            secondElemenetOfBigDiv.setAttribute(
              "class",
              "secondElemenetOfBigDiv"
            );
            // image element maked for second child of big div
            const imgOfsecondElemenetOfBigDiv = document.createElement("img");
            imgOfsecondElemenetOfBigDiv.setAttribute(
              "src",
              `https://picsum.photos/300?random=${parseInt(
                Math.random() * 2000
              )}`
            );
            // append image to second child of big div
            secondElemenetOfBigDiv.appendChild(imgOfsecondElemenetOfBigDiv);
            // append second child of bog div to big div
            bigDivOfBodyMain.appendChild(secondElemenetOfBigDiv);
          }
          // function of third child of big div
          function thirdElemenetOfBigDiv() {
            // third child of big div
            const thirdElemenetOfBigDiv = document.createElement("div");
            thirdElemenetOfBigDiv.setAttribute(
              "class",
              "thirdElemenetOfBigDiv"
            );
            // first div of third child of big div
            const firstElemenetOfThirdElemenetOfBigDiv =
              document.createElement("div");
            firstElemenetOfThirdElemenetOfBigDiv.setAttribute(
              "class",
              "firstElemenetOfThirdElemenetOfBigDiv"
            );
            // btns of like comment and shear
            const btn1offirstElemenetOfThirdElemenetOfBigDiv =
              document.createElement("button");
            btn1offirstElemenetOfThirdElemenetOfBigDiv.innerHTML =
              "<i class='fa-regular fa-heart'></i>";
            const btn2offirstElemenetOfThirdElemenetOfBigDiv =
              document.createElement("button");
            btn2offirstElemenetOfThirdElemenetOfBigDiv.innerHTML =
              '<i class="fa-regular fa-comment"></i>';
            const btn3offirstElemenetOfThirdElemenetOfBigDiv =
              document.createElement("button");
            btn3offirstElemenetOfThirdElemenetOfBigDiv.innerHTML =
              '<i class="fa-solid fa-share"></i>';
              // append all buttons to first div of Third child of big div
            firstElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn1offirstElemenetOfThirdElemenetOfBigDiv
            );
            firstElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn2offirstElemenetOfThirdElemenetOfBigDiv
            );
            firstElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn3offirstElemenetOfThirdElemenetOfBigDiv
            );

            // second div of third child of Big div
            const SecondElemenetOfThirdElemenetOfBigDiv =
              document.createElement("div");
            SecondElemenetOfThirdElemenetOfBigDiv.setAttribute(
              "class",
              "SecondElemenetOfThirdElemenetOfBigDiv"
            );
            // save button of third child of big div
            const btn1ofSecondElemenetOfThirdElemenetOfBigDiv =
              document.createElement("button");
            btn1ofSecondElemenetOfThirdElemenetOfBigDiv.innerHTML =
              "<i class='fa-regular fa-bookmark'></i>";
              // append btn to second div of third child of big div
            SecondElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn1ofSecondElemenetOfThirdElemenetOfBigDiv
            );
            // append first div to third child of big div
            thirdElemenetOfBigDiv.appendChild(
              firstElemenetOfThirdElemenetOfBigDiv
            );
            // append second div to third child of big div
            thirdElemenetOfBigDiv.appendChild(
              SecondElemenetOfThirdElemenetOfBigDiv
            );
            // append third child to big div to big div
           return bigDivOfBodyMain.appendChild(thirdElemenetOfBigDiv);
          }
          // append big div to Post Blog
          bodyOfMainContainerMain.appendChild(bigDivOfBodyMain);
        }
        // append post blog to main div of Main blog
        return mainDivOfMain.appendChild(bodyOfMainContainerMain);
      }
    }
    // apend main div of Main blog to Main blog
    Main.appendChild(mainDivOfMain);
    // append Main Blog to Main container of Body
    return divOfMainBody.appendChild(Main);
  }
  // these are the function call of Aside and Main
  creatingElementOfAside();
  creatingElementOfMain();
  // append Main Blog to Body of Html
  return body.appendChild(divOfMainBody);
}
// calling Parent function of all function
mainContainerOfBody();
