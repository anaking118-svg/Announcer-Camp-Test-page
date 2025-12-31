
import { AppState, BlogPost, PortfolioItem } from './types';
import { INITIAL_POSTS, INITIAL_PORTFOLIO } from './constants';

const STORAGE_KEY = 'announcer_academy_data';

export const getAppState = (): AppState => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const initialState: AppState = {
      posts: INITIAL_POSTS,
      portfolio: INITIAL_PORTFOLIO,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState));
    return initialState;
  }
  return JSON.parse(stored);
};

export const saveAppState = (state: AppState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const addPost = (post: BlogPost) => {
  const state = getAppState();
  state.posts.unshift(post);
  saveAppState(state);
};

export const deletePost = (id: string) => {
  const state = getAppState();
  state.posts = state.posts.filter(p => p.id !== id);
  saveAppState(state);
};

export const addPortfolio = (item: PortfolioItem) => {
  const state = getAppState();
  state.portfolio.unshift(item);
  saveAppState(state);
};

export const deletePortfolio = (id: string) => {
  const state = getAppState();
  state.portfolio = state.portfolio.filter(p => p.id !== id);
  saveAppState(state);
};
