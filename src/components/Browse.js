import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayinMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";

function Browser() {
  useNowPlayingMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browser;
