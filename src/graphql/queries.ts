import { gql } from "graphql-request";

export const GET_PAGES = gql`
    query getPages($first: Int) {
      pages (first: $first) {
        id
        title
        slug
        body {
          html
        }
      }
    }
`;

export const GET_PAGE_BY_SLUG = gql`
    query getPageBySlug($slug: String) {
    page(where: {slug: $slug}) {
      id
      title
      slug
      body {
        html
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      name
      slug
      posts {
        id
        slug
        title
        description
        coverImage {
          url
        }
        createdAt
        subCategories {
          name
          slug
          category {
            name
            slug
          }
        }
        author {
          name
          slug
        }
        body {
          html
        }
        postDisabled
        ad
      }
    }
  }
`;

export const GET_AUTHOR_BY_SLUG = gql`
  query getAuthorBySlug($slug: String) {
    author(where: {slug: $slug}) {
      name
      slug
      bio {
        html
      }
      interests
      socialNetworks {
        media
        link
      }
      experiences
      academicBackgrounds
      coverImage {
        url
      }
      posts {
        id
        slug
        title
        description
        coverImage {
          url
        }
        createdAt
        subCategories {
          name
          slug
          category {
            name
            slug
          }
        }
        author {
          name
          slug
        }
        body {
          html
        }
        postDisabled
        ad
      }
    }
  }
`;

export const GET_POSTS = gql`
    query getPosts($first: Int) {
      posts (first: $first) {
        id
        slug
        title
        description
        coverImage {
          url
        }
        createdAt
        subCategories {
          name
          slug
          category {
            name
            slug
          }
        }
        author {
          name
          slug
        }
        body {
          html
        }
        postDisabled
        ad
      }
    }
`;

export const GET_POST_BY_SLUG = gql`
    query getPostBySlug($slug: String) {
      post(where: {slug: $slug}) {
        id
        slug
        title
        description
        coverImage {
          url
        }
        createdAt
        subCategories {
          name
          slug
          category {
            name
            slug
          }
        }
        author {
          name
          slug
        }
        body {
          html
        }
        postDisabled
        ad
      }
    }
`;

export const GET_POSTS_BY_AUTHOR = gql`
  query getPostsByAuthor($authorSlug: String, $first: Int) {
    posts (
      where: { author: { slug: $authorSlug } }
      first: $first
    ) {
      id
      slug
      title
      description
      coverImage {
        url
      }
      createdAt
      subCategories {
        name
        slug
        category {
          name
          slug
        }
      }
      author {
        name
        slug
      }
      body {
        html
      }
      postDisabled
      ad
    }
  }
`;

export const GET_SUB_CATEGORIES = gql`
  query getSubCategories {
    subCategories {
      name
      slug
      category {
        name
        slug
      }
    }
  }
`;

export const GET_SUB_CATEGORY_BY_SLUG = gql`
  query getSubCategoryBySlug($slug: String) {
    subCategory(where: {slug: $slug}) {
      name
      slug
      category {
        name
        slug
      }
    }
}
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      name
      slug
      subCategories {
        name
        slug
      }
    }
  }
`;

export const GET_SUB_CATEGORIES_BY_CATEGORY = gql`
  query getsubCategoriesByCategory($category: String!, $first: Int) {
    subCategories (
      where: { category: { slug: $category } }
      first: $first
    ) {
      name
      slug
    }
  }
`;

export const GET_CATEGORY_BY_SLUG = gql`
  query getCategoryBySlug($slug: String) {
    category(where: {slug: $slug}) {
      name
      slug
      subCategories {
        name
        slug
      }
    }
  }
`;

export const GET_POSTS_BY_SUB_CATEGORY = gql`
  query getPostsBySubCategory($subCategory: String!, $first: Int) {
    posts (
      where: { subCategories_some: { slug: $subCategory } }
      first: $first
    ) {
      id
      slug
      title
      description
      coverImage {
        url
      }
      createdAt
      subCategories {
        name
        slug
        category {
          name
          slug
        }
      }
      author {
        name
        slug
      }
      body {
        html
      }
      postDisabled
      ad
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query getPostsByCategory($category: String!, $first: Int) {
    posts (
      where: { subCategories_some: { category: { slug: $category } } }
      first: $first
    ) {
      id
      slug
      title
      description
      coverImage {
        url
      }
      createdAt
      subCategories {
        name
        slug
        category {
          name
          slug
        }
      }
      author {
        name
        slug
      }
      body {
        html
      }
      postDisabled
      ad
    }
  }
`;