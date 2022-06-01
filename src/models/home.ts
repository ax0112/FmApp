import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

//轮播图API地址
const CAROUSEL_URL = '/mock/11/bear/carousel';
//猜你喜欢API地址
const GUESS_URL = '/mock/11/bear/guess';
//首页列表
const CHANNEL_URL = '/mock/11/bear/channel';

export interface ICarousel {
  id: string;
  image: [string];
  colors: [string, string];
}
export interface IGuess {
  id: string;
  title: string;
  image: string;
}
export interface IChannel {
  id: string;
  title: string;
  image: string;
  remark: string;
  played: number;
  playing: number;
}
export interface HomeState {
  carousel: ICarousel[];
  guess: IGuess[];
  channels: IChannel[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuess: Effect;
    fetchChannel: Effect;
  };
}

const initialState: HomeState = {
  carousel: [],
  guess: [],
  channels: [],
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousels(_, {call, put}) {
      const {
        data: {data},
      } = yield call(axios.get, CAROUSEL_URL);
      console.log('轮播图', data);
      yield put({
        type: 'setState',
        payload: {
          carousel: data,
        },
      });
    },
    *fetchGuess(_, {call, put}) {
      const {
        data: {data},
      } = yield call(axios.get, GUESS_URL);
      console.log('猜你喜欢', data);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
    *fetchChannel(_, {call, put}) {
      const {
        data: {data},
      } = yield call(axios.get, CHANNEL_URL);
      yield put({
        type: 'setState',
        payload: {
          channels: data.results,
        },
      });
    },
  },
};
export default homeModel;
