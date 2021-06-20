import { CastItem } from "../../models/cast-item";
import "./index.css";

function CarouselView({ cast }: { cast: CastItem[] }) {
  return (
    <section className="relative top-0 left-0">
      <ol className="scrolling-touch overflow-y-hidden overflow-x-scroll -ml-2 -mt-2 pb-2 list-none list-inside m-0 p-0 flex relative top-0 left-0 max-ol">
        {cast?.map((castItem,index) => (
          <li key={`cast-${index}`} className="w-36 bg-white mt-2 mb-2 ml-2 mr-1 pb-2 overflow-hidden min-w-34 border border-grey-light rounded-lg card">
            <a href="/person/54693-emma-stone">
              <img
                loading="lazy"
                className="h-castImage w-castImage outline-none border-0"
                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${castItem.profile_path}`}
                srcSet={`https://image.tmdb.org/t/p/w138_and_h175_face/${castItem.profile_path} 1x, https://image.tmdb.org/t/p//w276_and_h350_face/${castItem.profile_path} 2x`}
                alt="Emma Stone"
              />
            </a>
            <span className=" m-0 overflow-hidden p-2 pb-0 overflow-ellipsis">
              <a href="/person/54693-emma-stone" className="font-bold">
                {castItem.name}
              </a>
              <p className="text-smaller-10">{castItem.character}</p>
            </span>
          </li>
        ))}
        <li className="flex items-center content-center m-0 p-0 ml-2 min-w-34 w-36 ">
            <p className="flex items-center content-center m-0 p-0 justify-center w-full font-bold">View more</p>
        </li>
      </ol>
    </section>
  );
}

export default CarouselView;
