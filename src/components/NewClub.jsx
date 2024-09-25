import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img5 from "../../public/svg/img5.svg";

const clubRankings = [
  {
    rank: 1,
    imgSrc: img5,
    name: "Chennai Super Kings",
    stats: { gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73 },
  },
  {
    rank: 2,
    imgSrc: "../public/svg/img6.svg",
    name: "Rajasthan Royals",
    stats: { gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68 },
  },
  {
    rank: 3,
    imgSrc: "../public/svg/img7.svg",
    name: "Mumbai Indians",
    stats: { gp: 38, w: 21, d: 11, l: 6, f: 76, a: 26, gd: 50 },
  },
  {
    rank: 4,
    imgSrc: "../public/svg/img8.svg",
    name: "RCB",
    stats: { gp: 38, w: 21, d: 11, l: 6, f: 76, a: 26, gd: 50 },
  },
  {
    rank: 5,
    imgSrc: "../public/svg/img9.svg",
    name: "Delhi Capitals",
    stats: { gp: 38, w: 21, d: 11, l: 6, f: 76, a: 26, gd: 50 },
  },
  {
    rank: 6,
    imgSrc: "../public/svg/img10.svg",
    name: "Rising Pune Supergiants",
    stats: { gp: 38, w: 21, d: 11, l: 6, f: 76, a: 26, gd: 50 },
  },
];
const NewClub = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once when scrolled into view
    });
  }, []);
  return (
    <div>
      <div className="flex justify-center px-6 items-center gap-9 relative w-full h-auto top-[300px]">
        <div className="pt-32">
          <h1
            data-aos="fade-up"
            className="w-[200px] font-jost font-semibold text-[30px] leading-[42px] text-[#262626]"
          >
            Recent News
          </h1>
          <div className="flex gap-8 mt-5">
            <div
              data-aos="fade-right"
              className="w-[297.69px] h-[325.93px] bg-[url('../public/svg/new1.svg')] rounded-[6.61539px]"
            ></div>
            <div
              data-aos="fade-left"
              className="p-3 flex flex-col gap-3 w-[297.69px] h-[325.93px] left-[420px] bg-[#EBEEF3] rounded-[6.61539px]"
            >
              <div
                className=" flex gap-4 justify-center items-center "
                data-aos="zoom-in"
              >
                <div className="w-[77.18px] h-[76.05px] bg-[url('../public/svg/img2.svg')] rounded-[3.30769px]"></div>
                <div className="w-[184.13px] h-[39.41px] font-jost font-semibold text-[16px] leading-[20px] text-[#262626]">
                  CSK 2023 IPL Champions
                </div>
              </div>
              <div
                className="flex gap-4 justify-center items-center"
                data-aos="zoom-in"
              >
                <div className="w-[77.18px] h-[76.05px] bg-[url('../public/svg/img3.svg')] rounded-[3.30769px]"></div>
                <div className="w-[184.13px] h-[39.41px] font-jost font-semibold text-[16px] leading-[20px] text-[#262626]">
                  Rajasthan Royals Lorem Ipsum
                </div>
              </div>
              <div
                className="flex gap-4 justify-center items-center"
                data-aos="zoom-in"
              >
                <div className="w-[77.18px] h-[76.05px] bg-[url('../public/svg/img4.svg')] rounded-[3.30769px]"></div>
                <div className="w-[184.13px] h-[39.41px] font-jost font-semibold text-[16px] leading-[20px] text-[#262626]">
                  Ireland Tour of England Test 2023
                </div>
              </div>

              <div className="w-full flex justify-center" data-aos="fade-up">
                <div className="w-[88.21px] h-[30.42px] cursor-pointer flex flex-row items-center justify-center p-[6.61539px_13.2308px_6.61539px_7.71795px] gap-[4.41px] bg-[#B8C2CE] rounded-[3.30769px]">
                  {/* <!-- More Section --> */}
                  <button className="w-[51.82px] h-[17.64px] flex items-center text-center text-[#FFFFFF] text-[15.4359px] leading-[46px] font-normal tracking-[0.01em]">
                    {/* <!-- Your text here --> */}
                    More
                  </button>
                  {/* <!-- Arrow Section --> */}
                  <div className="flex-none order-1 flex-grow-0 box-border w-[11.03px] h-0 border-[1.10256px] border-[#FFFFFF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-32">
          <h1
            data-aos="fade-up"
            className=" w-[400px] font-jost font-semibold text-[30px] leading-[42px] text-[#262626]"
          >
            Clubs Ranking
          </h1>

          <div
            data-aos="zoom-in"
            className="mt-5  w-[628.46px] h-[325.93px] bg-[#EBEEF3] rounded-[6.61539px]"
          >
            <div className=" w-[628.46px] h-[292.25px] py-6 px-3">
              <div className="flex justify-between">
                <div className="pl-4 w-[48.51px] h-[22.66px] text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                  Club
                </div>
                <div className="w-[310.92px] h-[22.66px] flex gap-8 justify-center items-center ">
                  <div className="w-[26.46px] h-[22.66px] items-center text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                    GP
                  </div>
                  <div className="w-[16.25px] h-[22.66px] items-center text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                    w
                  </div>
                  <div className="w-[9.75px] h-[22.66px] items-center text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                    d
                  </div>
                  <div className="w-[9.75px] h-[22.66px] items-center text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                    l
                  </div>
                  <div className="w-[9.75px] h-[22.66px] items-center text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                    F
                  </div>
                  <div className="w-[11.92px] h-[22.66px] items-center text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                    A
                  </div>
                  <div className="w-[27.56px] h-[22.66px] items-center  text-[#262626] text-[16px] leading-[23px] font-normal capitalize">
                    GD
                  </div>
                </div>
              </div>

              <div className="flex mt-6 flex-col gap-5">
                {clubRankings.map((club, index) => (
                  <div key={index}>
                    <div
                      className="relative flex justify-between"
                      data-aos="fade-up"
                    >
                      <div className="flex pl-4 gap-3">
                        <div className="w-[8.67px] h-[22.66px] text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.rank}
                        </div>
                        <div
                          className={`w-[26px] h-[21.14px] bg-[url(${club.imgSrc})] bg-center bg-cover`}
                          style={{ backgroundImage: `url(${club.imgSrc})` }}
                          aria-label={club.name}
                        ></div>
                        <div className="w-[160px] h-[22.66px] left-[825.85px] text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.name}
                        </div>
                      </div>
                      <div className="w-[310.92px] h-[22.66px] flex gap-8 justify-center items-center ">
                        <div className="w-[26.46px] h-[22.66px] items-center text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.stats.gp}
                        </div>
                        <div className="w-[16.25px] h-[22.66px] items-center text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.stats.w}
                        </div>
                        <div className="w-[9.75px] h-[22.66px] items-center text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.stats.d}
                        </div>
                        <div className="w-[9.75px] h-[22.66px] items-center text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.stats.l}
                        </div>
                        <div className="w-[9.75px] h-[22.66px] items-center text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.stats.f}
                        </div>
                        <div className="w-[11.92px] h-[22.66px] items-center text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.stats.a}
                        </div>
                        <div className="w-[27.56px] h-[22.66px] items-center  text-[#262626] text-[14px] leading-[23px] font-normal capitalize">
                          {club.stats.gd}
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-slate-400 h-[1px] opacity-20"
                      data-aos="fade"
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClub;
