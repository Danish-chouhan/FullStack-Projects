// target

const body = document.querySelector("body");

// created element


// child element of Aside
function mainContainerOfBody() {
  const divOfMainBody = document.createElement("div");
  divOfMainBody.setAttribute("class", "MainContainerOfBody");

  function creatingElementOfAside() {
    const Aside = document.createElement("aside");

    const MainDivOfAside = document.createElement("div");
    MainDivOfAside.setAttribute("class", "MainContainerOfAside");

    function childsOfMainContainer() {
      const Div1ofAside = document.createElement("div");
      const Div2ofAside = document.createElement("div");
      const Div3ofAside = document.createElement("div");

      Div1ofAside.setAttribute("class", "miniContainerOfAside_1");
      Div2ofAside.setAttribute("class", "miniContainerOfAside_2");
      Div3ofAside.setAttribute("class", "miniContainerOfAside_3");

      // calling function via hoisting
      // this is lexical scope , functional scope , and clouser also

      childOfDiv1ofAside();
      childOfDiv2ofAside();
      childOfDiv3ofAside();

      function childOfDiv1ofAside() {
        const imageOfDiv1ofAside = document.createElement("img");
        imageOfDiv1ofAside.setAttribute(
          "src",
          "https://www.digitalinsightfoundation.org/_app/immutable/assets/dif_img.9be40b60.png"
        );
        //    appendChild
        Div1ofAside.appendChild(imageOfDiv1ofAside);
      }

      function childOfDiv2ofAside() {
        const namesOfBtns = [
          `<i class="fa-solid fa-house"></i>Home`,
          `<i class="fa-solid fa-magnifying-glass"></i>Search`,
          `<i class="fa-regular fa-compass"></i>explore`,
          `<i class="fa-brands fa-youtube"></i>Reels`,
          `<i class="fa-regular fa-message"></i>Message`,
          `<i class="fa-regular fa-heart"></i>Notification`,
          `<i class="fa-regular fa-square-plus"></i>Create`,
          `<img src='https://picsum.photos/300?random=${parseInt(Math.random() * 2000)}'> Profile`,
        ];
        
        for (let i = 0; i < namesOfBtns.length; i++) {
          const btnsOfDiv2ofAside = document.createElement("button");
          btnsOfDiv2ofAside.setAttribute("class","btnsOfDiv2ofAside")
          btnsOfDiv2ofAside.innerHTML = namesOfBtns[i];
          // append btns of Aside
          Div2ofAside.appendChild(btnsOfDiv2ofAside);
        }
      }

      function childOfDiv3ofAside() {
        const btnOfDiv3ofAside = document.createElement("button");
        btnOfDiv3ofAside.textContent = "More";
        Div3ofAside.appendChild(btnOfDiv3ofAside);
      }
      // append Of aside child
      MainDivOfAside.appendChild(Div1ofAside);
      MainDivOfAside.appendChild(Div2ofAside);
      MainDivOfAside.appendChild(Div3ofAside);
      Aside.appendChild(MainDivOfAside);
    }
    childsOfMainContainer();

    // append

    divOfMainBody.appendChild(Aside);
  }

  function creatingElementOfMain() {
    const Main = document.createElement("main");
    const mainDivOfMain = document.createElement("div");
    mainDivOfMain.setAttribute("class", "mainContainer");

    childsOfMainContainerMain();
    function childsOfMainContainerMain() {
      headOfMainContainerMain();
      bodyOfMainContainerMain();

      function headOfMainContainerMain() {
        const headOfMainContainerMain = document.createElement("div");
        headOfMainContainerMain.setAttribute(
          "class",
          "headOfMainContainerMain"
        );

        for (let i = 1; i <= 100; i++) {
          const storyDiv = document.createElement("div");
          const storyImg = document.createElement("img");
          const namesOfStory = document.createElement("h3");
          namesOfStory.textContent = `Person ${i}`;
          storyImg.src = `https://picsum.photos/300?random=${parseInt(
            Math.random() * 2000
          )}`;
          storyDiv.appendChild(storyImg);
          storyDiv.appendChild(namesOfStory);
          headOfMainContainerMain.appendChild(storyDiv);
        }

        mainDivOfMain.appendChild(headOfMainContainerMain);
      }
      function bodyOfMainContainerMain() {
        const bodyOfMainContainerMain = document.createElement("div");
        bodyOfMainContainerMain.setAttribute(
          "class",
          "bodyOfMainContainerMain"
        );
        for (let i = 1; i <= 100; i++) {
          const bigDivOfBodyMain = document.createElement("div");
          bigDivOfBodyMain.setAttribute("class", "bigDivOfBodyMain");
          bodyOfMainContainerMain.appendChild(bigDivOfBodyMain);

          firstElemenetOfBigDiv();
          secondElemenetOfBigDiv();
          thirdElemenetOfBigDiv();

          function firstElemenetOfBigDiv() {
            const firstElemenetOfBigDiv = document.createElement("div");
            firstElemenetOfBigDiv.setAttribute(
              "class",
              "firstElemenetOfBigDiv"
            );
            //  1s mini element

            const miniEleOffirstElemenetOfBigDiv_1 =
              document.createElement("div");
            //  child ele of 1st min element
            const smallDivOfminiEleOffirstElemenetOfBigDiv_1 =
              document.createElement("div");
            smallDivOfminiEleOffirstElemenetOfBigDiv_1.setAttribute(
              "class",
              "smallDivOfminiEleOffirstElemenetOfBigDiv_1"
            );

            // part 1 of child ele of 1st min element

            const profileOfminiEleOffirstElemenetOfBigDiv_1 =
              document.createElement("img");
            profileOfminiEleOffirstElemenetOfBigDiv_1.src = `https://picsum.photos/300?random=${parseInt(
              Math.random() * 2000
            )}`;

            // part 2 of child ele of 1st min element

            const namesOfProfile = document.createElement("h3");
            namesOfProfile.textContent = `Person ${i}`;

            smallDivOfminiEleOffirstElemenetOfBigDiv_1.appendChild(
              profileOfminiEleOffirstElemenetOfBigDiv_1
            );
            smallDivOfminiEleOffirstElemenetOfBigDiv_1.appendChild(
              namesOfProfile
            );
            miniEleOffirstElemenetOfBigDiv_1.appendChild(
              smallDivOfminiEleOffirstElemenetOfBigDiv_1
            );

            // 2nd mini element

            const miniEleOffirstElemenetOfBigDiv_2 =
              document.createElement("div");
            miniEleOffirstElemenetOfBigDiv_2.setAttribute(
              "class",
              "miniEleOffirstElemenetOfBigDiv_2"
            );
            const NavBtnOfminiEleOffirstElemenetOfBigDiv_2 =
              document.createElement("button");
            NavBtnOfminiEleOffirstElemenetOfBigDiv_2.textContent = "|||";

            miniEleOffirstElemenetOfBigDiv_2.appendChild(
              NavBtnOfminiEleOffirstElemenetOfBigDiv_2
            );

            firstElemenetOfBigDiv.appendChild(miniEleOffirstElemenetOfBigDiv_1);
            firstElemenetOfBigDiv.appendChild(miniEleOffirstElemenetOfBigDiv_2);
            bigDivOfBodyMain.appendChild(firstElemenetOfBigDiv);
          }

          function secondElemenetOfBigDiv() {
            const secondElemenetOfBigDiv = document.createElement("div");
            secondElemenetOfBigDiv.setAttribute(
              "class",
              "secondElemenetOfBigDiv"
            );
            const imgOfsecondElemenetOfBigDiv = document.createElement("img");
            imgOfsecondElemenetOfBigDiv.setAttribute(
              "src",
              `https://picsum.photos/300?random=${parseInt(
                Math.random() * 2000
              )}`
            );
            secondElemenetOfBigDiv.appendChild(imgOfsecondElemenetOfBigDiv);
            bigDivOfBodyMain.appendChild(secondElemenetOfBigDiv);
          }
          function thirdElemenetOfBigDiv() {
            const thirdElemenetOfBigDiv = document.createElement("div");
            thirdElemenetOfBigDiv.setAttribute(
              "class",
              "thirdElemenetOfBigDiv"
            );
            const firstElemenetOfThirdElemenetOfBigDiv =
              document.createElement("div");
            firstElemenetOfThirdElemenetOfBigDiv.setAttribute(
              "class",
              "firstElemenetOfThirdElemenetOfBigDiv"
            );

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
            firstElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn1offirstElemenetOfThirdElemenetOfBigDiv
            );
            firstElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn2offirstElemenetOfThirdElemenetOfBigDiv
            );
            firstElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn3offirstElemenetOfThirdElemenetOfBigDiv
            );

            const SecondElemenetOfThirdElemenetOfBigDiv =
              document.createElement("div");
            SecondElemenetOfThirdElemenetOfBigDiv.setAttribute(
              "class",
              "SecondElemenetOfThirdElemenetOfBigDiv"
            );

            const btn1ofSecondElemenetOfThirdElemenetOfBigDiv =
              document.createElement("button");
            btn1ofSecondElemenetOfThirdElemenetOfBigDiv.innerHTML =
              "<i class='fa-regular fa-bookmark'></i>";
            SecondElemenetOfThirdElemenetOfBigDiv.appendChild(
              btn1ofSecondElemenetOfThirdElemenetOfBigDiv
            );

            thirdElemenetOfBigDiv.appendChild(
              firstElemenetOfThirdElemenetOfBigDiv
            );
            thirdElemenetOfBigDiv.appendChild(
              SecondElemenetOfThirdElemenetOfBigDiv
            );

            bigDivOfBodyMain.appendChild(thirdElemenetOfBigDiv);
          }
        }

        mainDivOfMain.appendChild(bodyOfMainContainerMain);
      }
    }
    Main.appendChild(mainDivOfMain);
    divOfMainBody.appendChild(Main);
  }

  creatingElementOfAside();
  creatingElementOfMain();

  body.appendChild(divOfMainBody);
}
mainContainerOfBody();
