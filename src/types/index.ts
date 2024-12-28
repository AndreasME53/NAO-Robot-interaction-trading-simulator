export enum Style {
  owner = 'owner',
  member = 'member'
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IUser {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  name: string;
  cached_avatar: string;
  agent: string;
  style: Style;
  stats: {
    invited_users_count: number;
    published_campaigns_count: number | null;
  };
}

export interface IUserReducer {
  users: IUser[];
  isLoading: boolean;
  order: string;
  orderBy: string;
  searchText: string;
}

export interface IState {
  user: IUserReducer;
}
