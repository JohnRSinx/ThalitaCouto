import { GraduationCap } from 'phosphor-react'

import { Circle, ContentTimeLine, MyJourneyContainer, TimeLine } from './styles'

export function Myjourney() {
  return (
    <MyJourneyContainer>
      <h2>
        Minha Jornada Academica {'  '}
        <GraduationCap size={24} />
      </h2>

      <TimeLine>
        <div>
          <ContentTimeLine>
            <Circle></Circle>
            <h3>Unit</h3>
            <p>Estetica</p>
            <span>2015-2018</span>
          </ContentTimeLine>
          <ContentTimeLine>
            <Circle></Circle>
            <h3>Unit</h3>
            <p>Estetica</p>
            <span>2015-2018</span>
          </ContentTimeLine>
          <ContentTimeLine>
            <Circle></Circle>
            <h3>Unit</h3>
            <p>Estetica</p>
            <span>2015-2018</span>
          </ContentTimeLine>
        </div>

        <div>
          <ContentTimeLine>
            <Circle></Circle>
            <h3>Unit</h3>
            <p>Estetica</p>
            <span>2015-2018</span>
          </ContentTimeLine>
          <ContentTimeLine>
            <Circle></Circle>
            <h3>Unit</h3>
            <p>Estetica</p>
            <span>2015-2018</span>
          </ContentTimeLine>
          <ContentTimeLine>
            <Circle></Circle>
            <h3>Unit</h3>
            <p>Estetica</p>
            <span>2015-2018</span>
          </ContentTimeLine>
        </div>
      </TimeLine>
    </MyJourneyContainer>
  )
}
