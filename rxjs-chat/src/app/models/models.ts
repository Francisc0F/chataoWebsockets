export class Message {

  type?: string;
  text: string;
  reply?: boolean;
  user?: User;
  date?: Date;
  files?: any;
  quote?:string;
  latitude?: number;
  longitude?: number;
  avatar?: string;
}
export class User{
    name: string;
    avatar: string;
}
