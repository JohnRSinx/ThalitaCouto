import { Swiper, SwiperSlide } from 'swiper/react'
import { Container, Content } from './styles'
import 'swiper/css'
import 'swiper/css/pagination'
import design from '../../assets/design.jpg'
import design2 from '../../assets/design2.jpg'
import designhenna from '../../assets/designhenna.jpg'
import henna from '../../assets/henna.jpg'
import micro1 from '../../assets/micro1.jpg'
import micro2 from '../../assets/micro2.jpg'

export function Products() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    },
  }

  return (
    <Container>
      <h1>Serviços</h1>
      <Content>
        <Swiper pagination={pagination} className="mySwiper">
          <SwiperSlide>
            <h3>Design</h3>
            <img src={design} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3>Design</h3>
            <img src={design2} alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper pagination={pagination} className="mySwiper">
          <SwiperSlide>
            <h3>Design com Henna</h3>
            <img src={designhenna} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3>Design com Henna</h3>
            <img src={henna} alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper pagination={pagination} className="mySwiper">
          <SwiperSlide>
            <h3>Micropigmentação</h3>
            <img src={micro1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3>Micropigmentação</h3>
            <img src={micro2} alt="" />
          </SwiperSlide>
        </Swiper>
      </Content>
    </Container>
  )
}
