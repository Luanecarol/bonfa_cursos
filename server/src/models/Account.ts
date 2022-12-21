import { ObjectId } from 'mongodb';
import { Course } from './Course';

export interface Account {
  _id: ObjectId;
  username: string;
  password: string;
  courses: Course[];
}
