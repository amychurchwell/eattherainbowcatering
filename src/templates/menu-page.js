import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import List from '../components/List'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const MenuPageTemplate = ({
  image,
  title,
  heading,
  description,
  menu,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          boxShadow:
            '#000000 0.5rem 0px 0px, #000000 -0.5rem 0px 0px',
          backgroundColor: '#000000',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section">
      <div className="container has-text-centered">
        <h3 className="has-text-weight-semibold is-size-3">
          {heading}
        </h3>
        <List listItems={menu.items} />
      </div>
    </section>
  </div>
)

MenuPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  menu: PropTypes.shape({
    items: PropTypes.array,
  }),
}

const MenuPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MenuPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        menu={frontmatter.menu}
      />
    </Layout>
  )
}

MenuPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MenuPage

export const MenuPageQuery = graphql`
  query MenuPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        menu {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
          }
        }
      }
    }
  }
`
