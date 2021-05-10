import React from 'react';
import './App.css';
import CounterContainer from "./containers/CounterContainer";
import { Route } from 'react-router-dom';
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
function App() {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
//Git Test2
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

    </Swiper>
  );
  //
  //     <div>
  //       <CounterContainer/>
  //       <hr/>
  //       <Route path="/" component={PostListPage} exact/>
  //       <Route path="/:id" component={PostPage}/>
  //     </div>
  // );
}

export default App;
