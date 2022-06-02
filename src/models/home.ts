import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import {RootState} from '@/models/index';

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

export interface IPagination {
  current: number;
  total: number;
  hasMore: boolean;
}
export interface HomeState {
  carousel: ICarousel[];
  guess: IGuess[];
  channels: IChannel[];
  pagination: IPagination;
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
    fetchChannels: Effect;
  };
}

const initialState: HomeState = {
  carousel: [],
  guess: [],
  channels: [],
  pagination: {
    current: 1,
    total: 0,
    hasMore: true,
  },
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
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
    *fetchChannels({callback, payload}, {call, put, select}) {
      const {channels, pagination} = yield select(
        (state: RootState) => state.home,
      );

      let page = 1;
      if (payload && payload.loadMore) {
        page = pagination.current + 1;
      }
      const {
        data: {data},
      } = yield call(axios.get, CHANNEL_URL, {
        params: {
          page,
        },
      });

      let newChannel = data.results;
      if (payload && payload.loadMore) {
        newChannel = channels.concat(newChannel);
      }

      yield put({
        type: 'setState',
        payload: {
          channels: newChannel,
          pagination: {
            current: data.pagination.current,
            hasMore: newChannel.length < data.pagination.total,
            total: data.pagination.total,
          },
        },
      });
      if (typeof callback === 'function') {
        callback();
      }
    },
  },
};
export default homeModel;
