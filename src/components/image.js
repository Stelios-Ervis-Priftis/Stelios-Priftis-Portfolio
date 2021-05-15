import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import Img from 'gatsby-background-image';

const Image = ({ fileName, className, style, alt }) => {
	const { allImageSharp } = useStaticQuery(graphql`
		query {
			allImageSharp {
				nodes {
					fluid {
						originalName
						...GatsbyImageSharpFluid
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
		}
	`);

	const fluidImg = allImageSharp.nodes.find((img) => img.fluid.originalName === fileName).fluid;

	return <Img fluid={fluidImg} className={className} style={style} alt={alt} />;
};

export default Image;

// WORKING CODE

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "hero.jpeg" }) {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid
//             ...GatsbyImageSharpFluidLimitPresentationSize
//           }
//         }
//       }
// imageNotFound: file(relativePath: { eq: "image-not-found.png" }) {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//       ...GatsbyImageSharpFluidLimitPresentationSize
//     }
//   }
// }
//     }
//   `)

//   if (!data?.placeholderImage?.childImageSharp?.fluid) {
//     return (
//       <div>
//         <Img
//           fluid={data.imageNotFound.childImageSharp.fluid}
//           alt="Image not found"
//         />
//         <p style={{ textAlign: "center", fontWeight: "bold" }}>
//           Image Not Found
//         </p>
//       </div>
//     )
//   }

//   return (
//     <Img
//       fluid={data.placeholderImage.childImageSharp.fluid}
//       className="rounded-circle"
// alt="Hero of the pic"
//     />
//   )
// }

// export default Image
