/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query getPages($first: Int) {\n      pages (first: $first) {\n        id\n        title\n        slug\n        body {\n          html\n        }\n      }\n    }\n": typeof types.GetPagesDocument,
    "\n    query getPageBySlug($slug: String) {\n    page(where: {slug: $slug}) {\n      id\n      title\n      slug\n      body {\n        html\n      }\n    }\n  }\n": typeof types.GetPageBySlugDocument,
    "\n  query getAuthors {\n    authors {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n": typeof types.GetAuthorsDocument,
    "\n  query getAuthorBySlug($slug: String) {\n    author(where: {slug: $slug}) {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n": typeof types.GetAuthorBySlugDocument,
    "\n    query getPosts($first: Int) {\n      posts (first: $first) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n": typeof types.GetPostsDocument,
    "\n    query getPostBySlug($slug: String) {\n      post(where: {slug: $slug}) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n": typeof types.GetPostBySlugDocument,
    "\n  query getPostsByAuthor($authorSlug: String, $first: Int) {\n    posts (\n      where: { author: { slug: $authorSlug } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n": typeof types.GetPostsByAuthorDocument,
    "\n  query getSubCategories {\n    subCategories {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n  }\n": typeof types.GetSubCategoriesDocument,
    "\n  query getSubCategoryBySlug($slug: String) {\n    subCategory(where: {slug: $slug}) {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n}\n": typeof types.GetSubCategoryBySlugDocument,
    "\n  query getCategories {\n    categories {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n": typeof types.GetCategoriesDocument,
    "\n  query getsubCategoriesByCategory($category: String!, $first: Int) {\n    subCategories (\n      where: { category: { slug: $category } }\n      first: $first\n    ) {\n      name\n      slug\n    }\n  }\n": typeof types.GetsubCategoriesByCategoryDocument,
    "\n  query getCategoryBySlug($slug: String) {\n    category(where: {slug: $slug}) {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n": typeof types.GetCategoryBySlugDocument,
    "\n  query getPostsBySubCategory($subCategory: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { slug: $subCategory } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n": typeof types.GetPostsBySubCategoryDocument,
    "\n  query getPostsByCategory($category: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { category: { slug: $category } } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n": typeof types.GetPostsByCategoryDocument,
};
const documents: Documents = {
    "\n    query getPages($first: Int) {\n      pages (first: $first) {\n        id\n        title\n        slug\n        body {\n          html\n        }\n      }\n    }\n": types.GetPagesDocument,
    "\n    query getPageBySlug($slug: String) {\n    page(where: {slug: $slug}) {\n      id\n      title\n      slug\n      body {\n        html\n      }\n    }\n  }\n": types.GetPageBySlugDocument,
    "\n  query getAuthors {\n    authors {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n": types.GetAuthorsDocument,
    "\n  query getAuthorBySlug($slug: String) {\n    author(where: {slug: $slug}) {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n": types.GetAuthorBySlugDocument,
    "\n    query getPosts($first: Int) {\n      posts (first: $first) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n": types.GetPostsDocument,
    "\n    query getPostBySlug($slug: String) {\n      post(where: {slug: $slug}) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n": types.GetPostBySlugDocument,
    "\n  query getPostsByAuthor($authorSlug: String, $first: Int) {\n    posts (\n      where: { author: { slug: $authorSlug } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n": types.GetPostsByAuthorDocument,
    "\n  query getSubCategories {\n    subCategories {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n  }\n": types.GetSubCategoriesDocument,
    "\n  query getSubCategoryBySlug($slug: String) {\n    subCategory(where: {slug: $slug}) {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n}\n": types.GetSubCategoryBySlugDocument,
    "\n  query getCategories {\n    categories {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  query getsubCategoriesByCategory($category: String!, $first: Int) {\n    subCategories (\n      where: { category: { slug: $category } }\n      first: $first\n    ) {\n      name\n      slug\n    }\n  }\n": types.GetsubCategoriesByCategoryDocument,
    "\n  query getCategoryBySlug($slug: String) {\n    category(where: {slug: $slug}) {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n": types.GetCategoryBySlugDocument,
    "\n  query getPostsBySubCategory($subCategory: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { slug: $subCategory } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n": types.GetPostsBySubCategoryDocument,
    "\n  query getPostsByCategory($category: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { category: { slug: $category } } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n": types.GetPostsByCategoryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPages($first: Int) {\n      pages (first: $first) {\n        id\n        title\n        slug\n        body {\n          html\n        }\n      }\n    }\n"): (typeof documents)["\n    query getPages($first: Int) {\n      pages (first: $first) {\n        id\n        title\n        slug\n        body {\n          html\n        }\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPageBySlug($slug: String) {\n    page(where: {slug: $slug}) {\n      id\n      title\n      slug\n      body {\n        html\n      }\n    }\n  }\n"): (typeof documents)["\n    query getPageBySlug($slug: String) {\n    page(where: {slug: $slug}) {\n      id\n      title\n      slug\n      body {\n        html\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAuthors {\n    authors {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAuthors {\n    authors {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAuthorBySlug($slug: String) {\n    author(where: {slug: $slug}) {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAuthorBySlug($slug: String) {\n    author(where: {slug: $slug}) {\n      fullName\n      slug\n      posts {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPosts($first: Int) {\n      posts (first: $first) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n"): (typeof documents)["\n    query getPosts($first: Int) {\n      posts (first: $first) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPostBySlug($slug: String) {\n      post(where: {slug: $slug}) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n"): (typeof documents)["\n    query getPostBySlug($slug: String) {\n      post(where: {slug: $slug}) {\n        id\n        slug\n        title\n        description\n        coverImage {\n          url\n        }\n        date\n        subCategories {\n          name\n          slug\n          category {\n            name\n            slug\n          }\n        }\n        author {\n          fullName\n          slug\n        }\n        body {\n          html\n        }\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostsByAuthor($authorSlug: String, $first: Int) {\n    posts (\n      where: { author: { slug: $authorSlug } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostsByAuthor($authorSlug: String, $first: Int) {\n    posts (\n      where: { author: { slug: $authorSlug } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSubCategories {\n    subCategories {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSubCategories {\n    subCategories {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSubCategoryBySlug($slug: String) {\n    subCategory(where: {slug: $slug}) {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n}\n"): (typeof documents)["\n  query getSubCategoryBySlug($slug: String) {\n    subCategory(where: {slug: $slug}) {\n      name\n      slug\n      category {\n        name\n        slug\n      }\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCategories {\n    categories {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCategories {\n    categories {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getsubCategoriesByCategory($category: String!, $first: Int) {\n    subCategories (\n      where: { category: { slug: $category } }\n      first: $first\n    ) {\n      name\n      slug\n    }\n  }\n"): (typeof documents)["\n  query getsubCategoriesByCategory($category: String!, $first: Int) {\n    subCategories (\n      where: { category: { slug: $category } }\n      first: $first\n    ) {\n      name\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCategoryBySlug($slug: String) {\n    category(where: {slug: $slug}) {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCategoryBySlug($slug: String) {\n    category(where: {slug: $slug}) {\n      name\n      slug\n      subCategories {\n        name\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostsBySubCategory($subCategory: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { slug: $subCategory } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostsBySubCategory($subCategory: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { slug: $subCategory } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostsByCategory($category: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { category: { slug: $category } } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostsByCategory($category: String!, $first: Int) {\n    posts (\n      where: { subCategories_some: { category: { slug: $category } } }\n      first: $first\n    ) {\n      id\n      slug\n      title\n      description\n      coverImage {\n        url\n      }\n      date\n      subCategories {\n        name\n        slug\n        category {\n          name\n          slug\n        }\n      }\n      author {\n        fullName\n        slug\n      }\n      body {\n        html\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;