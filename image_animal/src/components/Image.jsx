import { useEffect } from "react";
import { slide } from "../constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Image = () => {
//CHANGE TIME IN CSS AND TIME RUNNING TIME & AUTO NEXT

  const { img1, img2, img3, img4 } = slide;
  useEffect(() => {
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    let timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 2000;
    let timeAutoNext = 6000;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <div className="carousel">
      {/* list item  */}
      <div className="list">
        <div className="item">
          <img src={img1.img} />
          <div className="content">
            <div className="author">{img1.author}</div>
            <div className="title">{img1.title}</div>
            <div className="topic">{img1.topic}</div>
            <div className="des">{img1.des}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img2.img} />
          <div className="content">
            <div className="author">{img2.author}</div>
            <div className="title">{img2.title}</div>
            <div className="topic">{img2.topic}</div>
            <div className="des">{img2.des}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img3.img} />
          <div className="content">
            <div className="author">{img3.author}</div>
            <div className="title">{img3.title}</div>
            <div className="topic">{img3.topic}</div>
            <div className="des">{img3.des}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img4.img} />
          <div className="content">
            <div className="author">{img4.author}</div>
            <div className="title">{img4.title}</div>
            <div className="topic">{img4.topic}</div>
            <div className="des">{img4.des}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item">
          <img src={img1.img} />
          <div className="content">
            <div className="title">{img1.thumbnail_title}</div>
            <div className="description">{img1.thumbnail_des}</div>
          </div>
        </div>
        <div className="item">
          <img src={img2.img} />
          <div className="content">
            <div className="title">{img2.thumbnail_title}</div>
            <div className="description">{img2.thumbnail_des}</div>
          </div>
        </div>
        <div className="item">
          <img src={img3.img} />
          <div className="content">
            <div className="title">{img3.thumbnail_title}</div>
            <div className="description">{img3.thumbnail_des}</div>
          </div>
        </div>
        <div className="item">
          <img src={img4.img} />
          <div className="content">
            <div className="title">{img4.thumbnail_title}</div>
            <div className="description">{img4.thumbnail_des}</div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button  id="prev" className="flex justify-center items-center"><IoIosArrowBack size={20}/></button>
        <button id="next" className="flex justify-center items-center"><IoIosArrowForward size={20}/></button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Image;
