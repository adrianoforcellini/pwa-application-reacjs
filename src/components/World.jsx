import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { useHistory } from "react-router-dom"

const createMarkup = (html) => ({ __html: html })

function World({ values }) {
  const history = useHistory()

  const renderImg = ({ image, description }) => (
    <div>
      <img src={image.url} alt={description} width="100%" />
    </div>
  )

  const openPost = (id) => {
    history.push(`/world/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    const isFirst = index === 0
    const spanValue = isFirst ? 24 : 12

    return (
      <Col span={spanValue} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
          <div>
            <p>
              <strong dangerouslySetInnerHTML={createMarkup(title)} />
            </p>
            <p dangerouslySetInnerHTML={createMarkup(description)} />
            {isFirst && renderImg({ image, description })}
          </div>
        </article>
      </Col>
    )
  }

  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  )
}

World.defaultProps = {
  values: []
}

World.propTypes = {
  values: PropTypes.array.isRequired
}

export default memo(World)