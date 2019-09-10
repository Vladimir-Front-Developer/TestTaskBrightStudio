import { Injectable } from '@angular/core';
import mockPosts from './mocks/mockPosts';

export interface PostInterface {
        id: string,
        title: string,
        text: string,
        linkImg: string,
    }

@Injectable({ providedIn: 'root' })
export class PostsService {
    data: Array<PostInterface>
    constructor(){
        this.data = mockPosts.posts
        this.setLocalStorage(mockPosts.posts)
    }
    setLocalStorage(posts: Array<PostInterface>) {
        for(let post of posts) {
            localStorage.setItem(post.id, JSON.stringify(post))
        }
    }
    getAll() {
        try {
            return this.data
        } catch (err) {
            console.error('Error getting posts', err);
            return null;
        }
    }
    getById(id: string) {
        try {
            return JSON.parse(localStorage.getItem(id))
        } catch (err) {
            console.error('Error getting by id post', err);
            return null;
        }
    }
    send(id: string, post: PostInterface){
        try {
            localStorage.setItem(id, JSON.stringify(post))
        } catch (err) {
            console.error('Error send data', err);
            throw new Error('failed to send!');
        }
    }
}