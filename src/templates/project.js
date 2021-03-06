import React from 'react';
import { graphql } from 'gatsby';

// Components Import
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import Image from '../components/image';

// Project Styles SCSS Import
import projectStyle from './project.module.scss';

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				sortBio
				img {
					name
					ext
				}
			}
			html
		}
	}
`;

const Project = (props) => {
	const { img } = props.data.markdownRemark.frontmatter;
	const fileImgName = img.name.concat(img.ext);
	const html = props.data.markdownRemark.html;

	return (
		<Layout>
			<SEO title="Project" />
			<div className={projectStyle.container}>
				<div className={projectStyle.projectBio} dangerouslySetInnerHTML={{ __html: html }}></div>
				<div className={projectStyle.projectImg}>
					<Image fileName={fileImgName} className={`${projectStyle.img} rounded`} style={{ width: '500px' }} />
				</div>
			</div>
		</Layout>
	);
};

export default Project;
