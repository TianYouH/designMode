import $ from 'jquery';
import ShoppingCart from './shopping-cart/shoppingCart'
import List from './list'

export default class App {
  constructor(id){
    this.$el = $('#' + id);
  }
  // 初始化购物车
  initShoppingCart(){
    let shoppingCart = new ShoppingCart(this)
    shoppingCart.init();
  }
  // 初始化列表
  initList(){
    let list = new List(this)
    list.init();
  }
  init() {
    this.initShoppingCart();
    this.initList();
  }

}