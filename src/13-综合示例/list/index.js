import $ from 'jquery';
import { GET_LIST } from '../config/index';
import createItem from './createItem'


export default class List {
  constructor(app){
    this.app = app;
    this.$el = $('<div>');
  }
  // 获取数据
  loadData(){
    return fetch(GET_LIST).then(result => {
      return result.json();
    })
  }
  // 生成列表
  initItemList(data){
    data.forEach(itemData => {
      let item = createItem(this, itemData);
      item.init();
    })
  }
  // 渲染
  render(){
    this.app.$el.append(this.$el);
  }
  init(){
    this.loadData().then(data => {
      console.log("获取的数据：", data);
      this.initItemList(data);
    }).then(() => {
      // 渲染
      this.render();
    })
  }
}