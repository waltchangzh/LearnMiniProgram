Page({
  data:{
    name:'codewhy',
    age:18,
    students:[
      {id: 100, name: 'cobe', age: 30 },
      {id: 101, name: 'weibo', age: 20 },
      {id: 102, name: 'cwcw', age: 33 },
      {id: 103, name: 'fwff', age: 34 }
    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})