import articleImage1 from '../../public/article/1.svg';
import articleImage2 from '../../public/article/2.svg';
import articleImage3 from '../../public/article/3.svg';

const articles = [
  {
    imgSrc: articleImage1,
    author: 'Jake Will.',
    date: '04 June 2023',
    title: '5 Exercises Cricket Players Should Be Using To Develop Strength',
    description: 'This article was written by Jake Willhoite from Healthlisted.com. Strength in cricket isn’t all about a massive body mass or ripped muscles.',
  },
  {
    imgSrc: articleImage2,
    author: 'Foxi.Zacon',
    date: '03 June 2023',
    title: 'Golden Knights out to fulfill owner’s quest to win Stanley Cup',
    description: 'The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.',
  },
  {
    imgSrc: articleImage3,
    author: 'Bong Lozada',
    date: '01 June 2023',
    title: 'T10 Gets Support From Local Federation',
    description: 'The ICC is developing more T10 matches and the country’s governing body, Philippine Cricket Association.',
  },
];

const SportsArticles = () => {
  return (
    <div className="relative flex flex-col items-start">
      <h1 className="font-jost font-semibold text-2xl md:text-3xl text-[#262626] mt-10">
        Sports Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => {
          const avatarSrc = `https://i.pravatar.cc/50?img=${index + 1}`;

          return (
            <div key={index} className="bg-white rounded-lg mt-4 relative text-left">
              <img
                src={article.imgSrc}
                alt={`Image for ${article.title}`}
                className="w-full h-[200px] md:h-[273.44px] rounded-md mb-4 object-cover"
              />
              <div className="flex items-center mb-2">
                <img
                  src={avatarSrc}
                  alt={`Avatar of ${article.author}`}
                  className="w-12 h-12 rounded-full mr-2"
                />
                <div>
                  <p className="font-dm font-medium text-sm md:text-base text-[#3E3232]">
                    {article.author}
                  </p>
                  <p className="font-dm font-medium text-sm md:text-base text-[rgba(38,38,38,0.6)]">
                    {article.date}
                  </p>
                </div>
              </div>
              <h2 className="font-josefin font-bold text-lg md:text-xl italic text-[#262626] mb-2">
                {article.title}
              </h2>
              <p className="font-dm font-normal text-base leading-6 text-[#696868] pt-2">
                {article.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex w-full mt-8">
        <button className="bg-[#262626] w-10 mr-6 rounded-md p-2  text-white">
          ←
        </button>
        <button className="bg-[#262626] w-10 rounded-md p-2 text-white">
          →
        </button>
      </div>
    </div>
  );
};

export default SportsArticles;
