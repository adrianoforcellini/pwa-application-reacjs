import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'

const createMarkup = (html) => ({ __html: html })

function Economy({ values }) {
  const history = useHistory()

  const renderImg = ({ image, description }) => <img src={image.url} alt={description} width="100%" />

  const renderDescription = (description) => <p dangerouslySetInnerHTML={createMarkup(description)} />
// injeçãqo via Inner HTML -> Não recomendada no React; Causa perda de performance.
// Porem, se necessario setar algum valor,
// considerando que este HTML está vindo d eoutro lugar, será necessario setar neste formato.
const openPost = (id) => {
  history.push(`/economy/${id}`)
}

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col span={24} md={12} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
         {image?.url ? renderImg({ image, description }) : renderDescription(description)}
        </article>
      </Col>
    )
  }
  // span determina a contagem de counas. span 24 representa um unica coluna.(100% da tela) 
  // https://ant.design/components/grid/#components-grid-demo-playground
  // md é para telas >= 576px
  // https://ant.design/components/grid/#API


  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  )
}
// gutter={[16, 16]} => horizontal gutter x vertical gutter 16x16 px 
// https://ant.design/components/grid/#components-grid-demo-playground
// gutter é a propriedade de espaçamento de grade.( recomendado 16 + 8n);
// Você pode defini-lo como um objeto { xs: 8, sm: 16, md: 24, lg: 32 }para design responsivo.
// https://ant.design/components/grid/#components-grid-demo-gutter
// o map não é resolvido dentro do return pois o arquivo fica muito grande ,
// dificultando a legibilidade e
// a rerenderização de tal causaria perda de performance.

Economy.defaultProps = {
  values: []
}
// propriedades padrão para evitar a quebra da renderização. (nunca será undefined ou null)

Economy.propTypes = {
  values: PropTypes.array.isRequired
}

export default memo(Economy)

// React.memo é uma função que pode otimizar a renderização 
// de componentes funcionais ou hooks. Introduzido no React v16.6.
// https://felixgerschau.com/react-performance-react-memo/