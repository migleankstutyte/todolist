import { Request, Response } from 'express';
import * as postService from '../services/postService';

export const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await postService.get();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const postId = Number(req.params.id);
    const post = await postService.find(postId);
    if (!post) {
      res.status(404).json({ error: `Post with id ${postId} not found` });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await postService.insert(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = Number(req.params.id);
    const updatedPost = await postService.update(postId, req.body);
    if (updatedPost === null) {
      res.status(404).json({ error: `Post with id ${postId} not found` });
    } else {
      res.status(200).json(updatedPost);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = Number(req.params.id);
    await postService.drop(postId);
    res
      .status(200)
      .json({ message: `Post with id ${postId} has been deleted` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
