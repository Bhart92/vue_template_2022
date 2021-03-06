import { createStore } from "vuex";

export default createStore({
	state: {
		//-----SCREEN DIMENSIONS-----
		trueVW: 0,
		trueVH: 0,
		designWidthMobile: 375,
		designHeightMobile: 667,
		designWidthDesktop: 1280,
		designHeightDesktop: 800,
		isDesktop: false
	},
	getters: {
		//-----SCREEN DIMENSIONS-----
		getTrueVW: state =>
		{
			return state.trueVW;
		},
		getTrueVH: state =>
		{
			return state.trueVH;
		},
		getisDesktop: state =>
		{
			return state.isDesktop;
		},
	},
	mutations: {
		//-----SCREEN DIMENSIONS-----
		setTrueVW(state, target)
		{
			state.trueVW = target;
		},
		setTrueVH(state, target)
		{
			state.trueVH = target;
		},
		setisDesktop( state, target )
		{
			state.isDesktop = target
		},
	},
  actions: {},
  modules: {},
});
