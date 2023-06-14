import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8rem;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
  text-align: center;
  color: ${(props) => props.theme.textDark};
`
export const Content = styled.div`
  display: flex;

  h3 {
    color: ${(props) => props.theme.secondaryColor};
  }

  img {
    max-width: 200px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    background: ${(props) => props.theme.backgroundLight};

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    text-align: center;
    line-height: 20px;
    font-size: 1px;
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #007aff;
    background: #ff8c8c;
  }
`
