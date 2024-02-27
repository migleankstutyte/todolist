import { prisma } from '../prismaClient';

interface Post {
  title: string;
  content: string;
  priority: string;
}

export const get = async () => {
  try {
    return await prisma.post.findMany({});
  } catch (error) {
    console.error(`An error occurred while retrieving all posts:`, error);
    return Promise.reject(error);
  }
};

export const find = async (postId: number) => {
  try {
    return await prisma.post.findUnique({
      where: { id: postId },
    });
  } catch (error) {
    console.error(
      `An error occurred while retrieving the post with id ${postId}:`,
      error,
    );
    return Promise.reject(error);
  }
};

export const insert = async (payload: Post) => {
  try {
    const { title, content, priority } = payload;

    return await prisma.post.create({
      data: {
        title,
        content,
        priority,
      },
    });
  } catch (error) {
    console.error(`An error occurred while inserting the post: `, error);
    return Promise.reject(error);
  }
};

export const update = async (postId: number, data: Post) => {
  try {
    return await prisma.post.update({
      where: {
        id: postId,
      },
      data,
    });
  } catch (error) {
    console.error('An error occurred while updating the post:', error);
    return Promise.reject(error);
  }
};

export const drop = async (postId: number) => {
  try {
    return await prisma.post.delete({
      where: { id: postId },
    });
  } catch (error) {
    console.error('An error occurred while deleting the post:', error);
    return Promise.reject(error);
  }
};
